"use server";

import { headers } from "next/headers";
import type { SupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";
import {
  sendContactNotificationEmail,
  type ContactLeadNotificationPayload,
  type ContactRequestContext,
} from "@/lib/contact-notifications";
import { getSupabasePublicClient } from "@/lib/supabase";
import { getSupabaseServiceRoleClient } from "@/lib/supabase-server";

const MIN_FORM_AGE_MS = 1500;
const DUPLICATE_WINDOW_MINUTES = 5;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(120, "Name is too long"),
  phone: z.string().trim().max(30).optional(),
  email: z
    .string()
    .trim()
    .max(320, "Email is too long")
    .email("Please enter a valid email address")
    .transform((value) => value.toLowerCase()),
  preferred_town: z.string().trim().max(120).optional(),
  date_requested: z
    .string()
    .trim()
    .max(10, "Invalid date format")
    .optional()
    .refine((value) => !value || /^\d{4}-\d{2}-\d{2}$/.test(value), {
      message: "Invalid date format",
    }),
  message: z.string().trim().max(3000).optional(),
  source_page: z.string().trim().max(120).optional(),
  website: z.string().trim().max(120).optional(),
  submitted_at: z.string().trim().max(40).optional(),
});

export type ContactFormState = {
  success?: boolean;
  error?: string;
} | null;

function getStringValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value : undefined;
}

function normalizeOptional(value?: string) {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
}

function getIpAddress(headerStore: Headers) {
  const forwardedFor = headerStore.get("x-forwarded-for");
  if (forwardedFor) {
    const [firstIp] = forwardedFor.split(",");
    if (firstIp?.trim()) {
      return firstIp.trim();
    }
  }

  const realIp = headerStore.get("x-real-ip");
  return realIp?.trim() || undefined;
}

function buildContactPayload(
  data: z.infer<typeof contactSchema>
): ContactLeadNotificationPayload {
  return {
    name: data.name,
    phone: normalizeOptional(data.phone),
    email: data.email,
    preferred_town: normalizeOptional(data.preferred_town),
    date_requested: normalizeOptional(data.date_requested),
    message: normalizeOptional(data.message),
    source_page: normalizeOptional(data.source_page),
  };
}

function toLegacyLeadInsert(payload: ContactLeadNotificationPayload) {
  return {
    name: payload.name,
    phone: payload.phone ?? null,
    email: payload.email,
    preferred_town: payload.preferred_town ?? null,
    date_requested: payload.date_requested ?? null,
    message: payload.message ?? null,
    source_page: payload.source_page ?? null,
  };
}

function isSchemaMismatchError(error: { code?: string; message?: string }) {
  const text = `${error.code || ""} ${error.message || ""}`.toLowerCase();

  return (
    text.includes("schema cache") ||
    text.includes("could not find") ||
    text.includes("column")
  );
}

async function saveLead({
  supabase,
  payload,
  requestContext,
}: {
  supabase: SupabaseClient;
  payload: ContactLeadNotificationPayload;
  requestContext: ContactRequestContext;
}) {
  const legacyPayload = toLegacyLeadInsert(payload);
  const advancedPayload = {
    ...legacyPayload,
    status: "new",
    metadata: {
      ipAddress: requestContext.ipAddress,
      userAgent: requestContext.userAgent,
      referer: requestContext.referer,
      submittedAt: requestContext.submittedAt,
    },
  };

  const advancedInsert = await supabase.from("leads").insert([advancedPayload]);
  if (!advancedInsert.error) {
    return { saved: true as const, usedLegacySchema: false };
  }

  if (!isSchemaMismatchError(advancedInsert.error)) {
    return {
      saved: false as const,
      error: advancedInsert.error.message,
    };
  }

  const legacyInsert = await supabase.from("leads").insert([legacyPayload]);
  if (legacyInsert.error) {
    return {
      saved: false as const,
      error: legacyInsert.error.message,
    };
  }

  return { saved: true as const, usedLegacySchema: true };
}

async function hasRecentDuplicateLead(
  supabase: SupabaseClient,
  email: string
) {
  const minCreatedAt = new Date(
    Date.now() - DUPLICATE_WINDOW_MINUTES * 60_000
  ).toISOString();

  const { data, error } = await supabase
    .from("leads")
    .select("created_at")
    .eq("email", email)
    .gte("created_at", minCreatedAt)
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) {
    console.error("Duplicate lead check failed:", error);
    return false;
  }

  return (data?.length || 0) > 0;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: getStringValue(formData.get("name")),
    phone: getStringValue(formData.get("phone")),
    email: getStringValue(formData.get("email")),
    preferred_town: getStringValue(formData.get("preferred_town")),
    date_requested: getStringValue(formData.get("date_requested")),
    message: getStringValue(formData.get("message")),
    source_page: getStringValue(formData.get("source_page")),
    website: getStringValue(formData.get("website")),
    submitted_at: getStringValue(formData.get("submitted_at")),
  };

  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    return { error: result.error.errors[0].message };
  }

  // Honeypot field should stay empty; silently accept to avoid confirming bot detection.
  if (normalizeOptional(result.data.website)) {
    return { success: true };
  }

  const submittedAtValue = normalizeOptional(result.data.submitted_at);
  const submittedAtMs = submittedAtValue
    ? Date.parse(submittedAtValue)
    : NaN;
  if (!Number.isNaN(submittedAtMs) && Date.now() - submittedAtMs < MIN_FORM_AGE_MS) {
    return { success: true };
  }

  const requestHeaders = await headers();
  const requestContext: ContactRequestContext = {
    ipAddress: getIpAddress(requestHeaders),
    userAgent: requestHeaders.get("user-agent") || undefined,
    referer: requestHeaders.get("referer") || undefined,
    submittedAt: new Date().toISOString(),
  };
  const payload = buildContactPayload(result.data);

  const serviceRoleSupabase = getSupabaseServiceRoleClient();
  if (serviceRoleSupabase) {
    const hasDuplicate = await hasRecentDuplicateLead(
      serviceRoleSupabase,
      payload.email
    );
    if (hasDuplicate) {
      return {
        error:
          "We already received your message. Please wait a few minutes before sending another.",
      };
    }
  }

  const insertClient = serviceRoleSupabase || getSupabasePublicClient();
  let leadSaved = false;

  if (insertClient) {
    const saveResult = await saveLead({
      supabase: insertClient,
      payload,
      requestContext,
    });

    if (saveResult.saved) {
      leadSaved = true;
      if (saveResult.usedLegacySchema) {
        console.log(
          "Lead saved using legacy schema. Add `status` and `metadata` columns to leads for full features."
        );
      }
    } else {
      console.error("Supabase lead insert error:", saveResult.error);
    }
  } else {
    console.log("Lead captured (Supabase not configured):", payload);
  }

  const emailResult = await sendContactNotificationEmail({
    lead: payload,
    requestContext,
  });

  if (!emailResult.sent) {
    if (emailResult.error) {
      console.error("Contact notification email error:", emailResult.error);
    } else if (emailResult.skippedReason) {
      console.log(
        `Contact notification email skipped: ${emailResult.skippedReason}`
      );
    }
  }

  if (!leadSaved && !emailResult.sent) {
    return {
      error:
        "Something went wrong while sending your message. Please call or email us directly.",
    };
  }

  return { success: true };
}

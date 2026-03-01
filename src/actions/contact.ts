"use server";

import { z } from "zod";
import { getSupabaseClient } from "@/lib/supabase";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  preferred_town: z.string().optional(),
  date_requested: z.string().optional(),
  message: z.string().optional(),
  source_page: z.string().optional(),
});

export type ContactFormState = {
  success?: boolean;
  error?: string;
} | null;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    phone: formData.get("phone") || undefined,
    email: formData.get("email"),
    preferred_town: formData.get("preferred_town") || undefined,
    date_requested: formData.get("date_requested") || undefined,
    message: formData.get("message") || undefined,
    source_page: formData.get("source_page") || undefined,
  };

  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    return { error: result.error.errors[0].message };
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    // Supabase not configured — log and return success so the form still works during dev
    console.log("Lead captured (Supabase not configured):", result.data);
    return { success: true };
  }

  const { error } = await supabase.from("leads").insert([result.data]);

  if (error) {
    console.error("Supabase insert error:", error);
    return { error: "Something went wrong. Please try again or call us directly." };
  }

  return { success: true };
}

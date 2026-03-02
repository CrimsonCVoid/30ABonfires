import "server-only";

import { siteConfig } from "@/lib/config";

export type ContactLeadNotificationPayload = {
  name: string;
  phone?: string;
  email: string;
  preferred_town?: string;
  date_requested?: string;
  message?: string;
  source_page?: string;
};

export type ContactRequestContext = {
  ipAddress?: string;
  userAgent?: string;
  referer?: string;
  submittedAt: string;
};

type SendContactNotificationInput = {
  lead: ContactLeadNotificationPayload;
  leadId?: string;
  requestContext: ContactRequestContext;
};

export type SendContactNotificationResult = {
  sent: boolean;
  skippedReason?: string;
  error?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatLine(label: string, value?: string) {
  if (!value) {
    return "";
  }

  return `<p style="margin:0 0 10px"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
}

function formatLeadEmailHtml({
  lead,
  leadId,
  requestContext,
}: SendContactNotificationInput) {
  const message = lead.message?.trim()
    ? `<p style="margin:0 0 10px"><strong>Message:</strong><br />${escapeHtml(lead.message).replace(/\n/g, "<br />")}</p>`
    : "";

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827">
      <h2 style="margin:0 0 14px">New 30A Bonfire Contact Lead</h2>
      ${formatLine("Lead ID", leadId)}
      ${formatLine("Name", lead.name)}
      ${formatLine("Email", lead.email)}
      ${formatLine("Phone", lead.phone)}
      ${formatLine("Preferred Town", lead.preferred_town)}
      ${formatLine("Preferred Date", lead.date_requested)}
      ${formatLine("Source Page", lead.source_page)}
      ${message}
      <hr style="margin:18px 0;border:none;border-top:1px solid #e5e7eb" />
      ${formatLine("Submitted At (UTC)", requestContext.submittedAt)}
      ${formatLine("IP", requestContext.ipAddress)}
      ${formatLine("Referrer", requestContext.referer)}
      ${formatLine("User Agent", requestContext.userAgent)}
    </div>
  `.trim();
}

function formatLeadEmailText({
  lead,
  leadId,
  requestContext,
}: SendContactNotificationInput) {
  return [
    "New 30A Bonfire Contact Lead",
    "",
    leadId ? `Lead ID: ${leadId}` : "",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.phone ? `Phone: ${lead.phone}` : "",
    lead.preferred_town ? `Preferred Town: ${lead.preferred_town}` : "",
    lead.date_requested ? `Preferred Date: ${lead.date_requested}` : "",
    lead.source_page ? `Source Page: ${lead.source_page}` : "",
    lead.message ? `Message: ${lead.message}` : "",
    "",
    `Submitted At (UTC): ${requestContext.submittedAt}`,
    requestContext.ipAddress ? `IP: ${requestContext.ipAddress}` : "",
    requestContext.referer ? `Referrer: ${requestContext.referer}` : "",
    requestContext.userAgent ? `User Agent: ${requestContext.userAgent}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export async function sendContactNotificationEmail(
  input: SendContactNotificationInput
): Promise<SendContactNotificationResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_NOTIFICATION_FROM_EMAIL;
  const to = process.env.CONTACT_NOTIFICATION_TO_EMAIL || siteConfig.email;

  if (!apiKey) {
    return { sent: false, skippedReason: "RESEND_API_KEY is not configured." };
  }

  if (!from) {
    return {
      sent: false,
      skippedReason: "CONTACT_NOTIFICATION_FROM_EMAIL is not configured.",
    };
  }

  const subject = `New contact lead: ${input.lead.name}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: input.lead.email,
      subject,
      html: formatLeadEmailHtml(input),
      text: formatLeadEmailText(input),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    return {
      sent: false,
      error: `Resend request failed (${response.status}): ${body}`,
    };
  }

  return { sent: true };
}

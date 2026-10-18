"use server";

import { Resend } from "resend";
import { site } from "@/content/site";
import { quoteSchema, quoteWhatsAppMessage, type QuoteFieldErrors, type QuoteInput, type QuoteState } from "../schema";

// Real people take longer than this to fill in the form; faster submissions are almost always bots.
const MIN_FILL_TIME_MS = 3000;

const fieldLabels: Record<keyof QuoteInput, string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone",
  service: "Service",
  quantity: "Estimated quantity",
  message: "Message",
  consent: "Consent to contact",
};

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  // Spam checks: hidden honeypot field and minimum time on the form. Bots get a quiet "success".
  // startedAt is empty if JavaScript didn't run, so only the honeypot applies then.
  const honeypot = formData.get("website");
  const startedAt = Number(formData.get("startedAt"));
  if (honeypot || (startedAt && Date.now() - startedAt < MIN_FILL_TIME_MS)) {
    return { status: "success", whatsappMessage: "" };
  }

  const raw = Object.fromEntries(
    (Object.keys(fieldLabels) as (keyof QuoteInput)[]).map((key) => [key, formData.get(key) ?? undefined]),
  );
  const parsed = quoteSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: QuoteFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof QuoteInput;
      fieldErrors[key] ??= issue.message;
    }
    const values = Object.fromEntries(
      Object.entries(raw).map(([k, v]) => [k, typeof v === "string" ? v : ""]),
    ) as Partial<Record<keyof QuoteInput, string>>;
    return { status: "error", message: "Please fix the highlighted fields.", fieldErrors, values };
  }

  const quote = parsed.data;
  const whatsappMessage = quoteWhatsAppMessage(quote);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Quote email not sent: RESEND_API_KEY or QUOTE_TO_EMAIL is not set.");
    return { status: "email-failed", whatsappMessage };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.QUOTE_FROM_EMAIL ?? `${site.shortName} Website <onboarding@resend.dev>`,
    to: to.split(",").map((s) => s.trim()),
    replyTo: quote.email,
    subject: `New quote request: ${quote.service} — ${quote.name}${quote.company ? ` (${quote.company})` : ""}`,
    text: emailText(quote),
    html: emailHtml(quote),
  });

  if (error) {
    console.error("Quote email failed:", error);
    return { status: "email-failed", whatsappMessage };
  }

  return { status: "success", whatsappMessage };
}

function emailRows(quote: QuoteInput) {
  return (Object.keys(fieldLabels) as (keyof QuoteInput)[])
    .filter((key) => key !== "consent" && quote[key])
    .map((key) => [fieldLabels[key], String(quote[key])] as const);
}

function emailText(quote: QuoteInput) {
  return [
    "New quote request from the website",
    "",
    ...emailRows(quote).map(([label, value]) => `${label}: ${value}`),
    "",
    "Reply to this email to respond to the customer directly.",
  ].join("\n");
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function emailHtml(quote: QuoteInput) {
  const rows = emailRows(quote)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:8px 12px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  return `<div style="font-family:Arial,sans-serif;color:#1f2933">
<h2 style="color:#0a3d6b">New quote request</h2>
<table style="border-collapse:collapse;border:1px solid #d6e4f1">${rows}</table>
<p style="color:#52606d">Reply to this email to respond to the customer directly.</p>
</div>`;
}

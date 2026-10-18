"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { submitQuote } from "../actions/submit-quote";
import type { QuoteInput, QuoteState } from "../schema";

const initialState: QuoteState = { status: "idle" };

// Long enough to read the confirmation before WhatsApp opens.
const REDIRECT_DELAY_MS = 2500;

type Props = {
  serviceOptions: string[];
  defaultService?: string;
};

const inputClass =
  "mt-1 block w-full rounded-lg border border-navy-100 bg-white px-4 py-3 text-ink shadow-sm focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/30 focus:outline-none aria-[invalid=true]:border-red-500";

export function QuoteFormContent({ serviceOptions, defaultService }: Props) {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);
  // Recorded when the visitor first interacts, so the server can reject instant (bot) submissions.
  const [startedAt, setStartedAt] = useState("");
  const markStarted = () => {
    if (!startedAt) setStartedAt(String(Date.now()));
  };

  useEffect(() => {
    if (state.status !== "success" && state.status !== "email-failed") return;
    track("quote_submit", { emailSent: state.status === "success" });
    if (!state.whatsappMessage) return;
    // Take the visitor to WhatsApp with their quote details pre-filled. A redirect (not window.open)
    // isn't blocked as a popup; the button below stays as a fallback.
    const timer = setTimeout(() => window.location.assign(buildWhatsAppLink(state.whatsappMessage)), REDIRECT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [state]);

  if (state.status === "success" || state.status === "email-failed") {
    const sent = state.status === "success";
    return (
      <div role="status" className="rounded-2xl border border-navy-100 bg-white p-8 text-center shadow-sm">
        <h3 className="text-2xl font-extrabold text-navy-800">
          {sent ? "Thanks — we've received your request!" : "We couldn't send your request by email"}
        </h3>
        <p className="mt-3 text-muted">
          {sent
            ? "Our team will reply within 1 business day. We're opening WhatsApp so you can chat with us right away."
            : "We're opening WhatsApp so you can send your details to us there — your message is ready to go."}
        </p>
        {state.whatsappMessage && (
          <p className="mt-2 text-sm text-muted">If WhatsApp doesn&apos;t open, tap the button below.</p>
        )}
        {state.whatsappMessage && (
          <WhatsAppButton
            message={state.whatsappMessage}
            label="Continue on WhatsApp"
            source="quote-form"
            className="mt-6"
          />
        )}
      </div>
    );
  }

  const errors = state.status === "error" ? state.fieldErrors : {};
  const values = state.status === "error" ? state.values : {};
  const value = (key: keyof QuoteInput) => values[key] ?? "";

  const fieldProps = (key: keyof QuoteInput) => ({
    id: `quote-${key}`,
    name: key,
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `quote-${key}-error` : undefined,
  });

  const errorText = (key: keyof QuoteInput) =>
    errors[key] ? (
      <p id={`quote-${key}-error`} className="mt-1 text-sm font-semibold text-red-600">
        {errors[key]}
      </p>
    ) : null;

  return (
    <form action={formAction} onFocus={markStarted} noValidate className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
      {state.status === "error" && (
        <p role="alert" className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {state.message}
        </p>
      )}

      {/* Spam traps: hidden from people, filled in by bots. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="quote-name" className="font-semibold text-navy-800">
            Name <span className="text-red-600">*</span>
          </label>
          <input {...fieldProps("name")} type="text" autoComplete="name" required defaultValue={value("name")} className={inputClass} />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor="quote-company" className="font-semibold text-navy-800">Company</label>
          <input {...fieldProps("company")} type="text" autoComplete="organization" defaultValue={value("company")} className={inputClass} />
        </div>
        <div>
          <label htmlFor="quote-email" className="font-semibold text-navy-800">
            Email <span className="text-red-600">*</span>
          </label>
          <input {...fieldProps("email")} type="email" autoComplete="email" required defaultValue={value("email")} className={inputClass} />
          {errorText("email")}
        </div>
        <div>
          <label htmlFor="quote-phone" className="font-semibold text-navy-800">
            Phone <span className="text-red-600">*</span>
          </label>
          <input {...fieldProps("phone")} type="tel" autoComplete="tel" required defaultValue={value("phone")} className={inputClass} />
          {errorText("phone")}
        </div>
        <div>
          <label htmlFor="quote-service" className="font-semibold text-navy-800">
            Service needed <span className="text-red-600">*</span>
          </label>
          <select {...fieldProps("service")} required defaultValue={value("service") || defaultService || ""} className={inputClass}>
            <option value="" disabled>
              Choose a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errorText("service")}
        </div>
        <div>
          <label htmlFor="quote-quantity" className="font-semibold text-navy-800">Estimated quantity</label>
          <input {...fieldProps("quantity")} type="text" placeholder="e.g. 5,000 units" defaultValue={value("quantity")} className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="quote-message" className="font-semibold text-navy-800">
            Tell us about your project <span className="text-red-600">*</span>
          </label>
          <textarea
            {...fieldProps("message")}
            rows={5}
            required
            placeholder="Your product, packaging materials, labels, timeline and where finished goods need to go."
            defaultValue={value("message")}
            className={inputClass}
          />
          {errorText("message")}
        </div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm text-muted">
            <input
              {...fieldProps("consent")}
              type="checkbox"
              required
              defaultChecked={value("consent") === "on"}
              className="mt-0.5 size-5 shrink-0 rounded border-navy-100 accent-brand-orange"
            />
            <span>
              I agree to be contacted by Sohi Packaging Solutions Inc. about my quote. See our{" "}
              <Link href="/privacy-policy" className="font-semibold text-navy-800 underline">
                privacy policy
              </Link>
              . <span className="text-red-600">*</span>
            </span>
          </label>
          {errorText("consent")}
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full rounded-full bg-brand-orange px-8 py-4 text-lg font-bold text-white shadow-sm transition hover:bg-brand-orange-dark disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Sending…" : "Request My Quote"}
      </button>
    </form>
  );
}

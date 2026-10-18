"use client";

import { track } from "@vercel/analytics";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./whatsapp-icon";

type Props = {
  message?: string;
  label?: string;
  /** Where the click came from, recorded with the analytics event. */
  source: string;
  className?: string;
};

export function WhatsAppButton({ message, label = "Chat on WhatsApp", source, className = "" }: Props) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { source })}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-white shadow-sm transition hover:bg-whatsapp-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp-dark ${className}`}
    >
      <WhatsAppIcon className="size-5" />
      {label}
    </a>
  );
}

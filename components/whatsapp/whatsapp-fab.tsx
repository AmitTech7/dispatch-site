"use client";

import { track } from "@vercel/analytics";
import { site } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./whatsapp-icon";

export function WhatsAppFab() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.shortName} on WhatsApp`}
      onClick={() => track("whatsapp_click", { source: "fab" })}
      className="fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg ring-4 ring-white/70 transition hover:scale-105 hover:bg-whatsapp-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp-dark sm:right-6 sm:bottom-6 sm:size-16"
    >
      <WhatsAppIcon className="size-8 sm:size-9" />
    </a>
  );
}

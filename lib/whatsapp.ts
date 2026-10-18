import { site } from "@/content/site";

export const defaultWhatsAppMessage = `Hi ${site.shortName}, I'd like to know more about your co-packing services.`;

/** wa.me link to the business number with an optional pre-filled message. */
export function buildWhatsAppLink(message: string = defaultWhatsAppMessage): string {
  const number = site.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

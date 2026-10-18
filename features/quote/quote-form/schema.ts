import { z } from "zod";
import { services } from "@/content/services";

export const serviceOptions = [...services.map((s) => s.name), "Other"] as const;

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  company: z.string().trim().max(120).optional().default(""),
  email: z.email("Please enter a valid email address.").trim().max(200),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30)
    .regex(/^[+\d\s().-]+$/, "Please enter a valid phone number."),
  service: z.enum(serviceOptions, { error: "Please choose a service." }),
  quantity: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(10, "Please tell us a little about your project.").max(3000),
  consent: z.literal("on", { error: "Please agree so we can contact you about your quote." }),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

export type QuoteFieldErrors = Partial<Record<keyof QuoteInput, string>>;

export type QuoteState =
  | { status: "idle" }
  | { status: "error"; message: string; fieldErrors: QuoteFieldErrors; values: Partial<Record<keyof QuoteInput, string>> }
  | { status: "success"; whatsappMessage: string }
  | { status: "email-failed"; whatsappMessage: string };

export function quoteWhatsAppMessage(q: Pick<QuoteInput, "name" | "service" | "quantity" | "company">): string {
  const parts = [`Hi Sohi Packaging, I just requested a quote for ${q.service}`];
  if (q.quantity) parts.push(`estimated quantity: ${q.quantity}`);
  let text = parts.join(", ") + ".";
  text += ` Name: ${q.name}`;
  if (q.company) text += ` (${q.company})`;
  return text + ".";
}

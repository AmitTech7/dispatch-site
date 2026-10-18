import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import { JsonLd, localBusinessSchema } from "@/components/seo/json-ld";
import { WhatsAppFab } from "@/components/whatsapp/whatsapp-fab";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Co-Packing & Contract Packaging in Brampton, ON | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: false },
  // Vercel preview deployments must never be indexed.
  ...(process.env.VERCEL_ENV &&
    process.env.VERCEL_ENV !== "production" && { robots: { index: false, follow: false } }),
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a3d6b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={`${nunito.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        {children}
        <WhatsAppFab />
        <JsonLd data={localBusinessSchema()} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

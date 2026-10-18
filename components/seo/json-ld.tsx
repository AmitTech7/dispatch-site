import { site, fullAddress } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const businessId = `${site.url}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    name: site.name,
    description: site.description,
    url: site.url,
    logo: absoluteUrl(site.logo),
    image: absoluteUrl("/images/gallery/kitting-jars-and-boxes-in-bubble-wrap.jpeg"),
    ...(site.phone && { telephone: site.phone }),
    ...(site.email && { email: site.email }),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

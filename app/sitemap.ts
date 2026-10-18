import type { MetadataRoute } from "next";
import { gallery } from "@/content/gallery";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/seo";

// Bump when page content changes meaningfully.
const lastModified = "2026-10-17";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: gallery.slice(0, 8).map((g) => absoluteUrl(g.src)),
    },
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteUrl(s.image.src)],
    })),
    {
      url: absoluteUrl("/gallery"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
      images: gallery.map((g) => absoluteUrl(g.src)),
    },
    {
      url: absoluteUrl("/privacy-policy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}

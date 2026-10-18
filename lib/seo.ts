import type { Metadata } from "next";
import { site } from "@/content/site";

type PageSeo = {
  /** A string uses the root title template; `{ absolute }` replaces it. */
  title: string | { absolute: string };
  description: string;
  path: string;
  image?: string;
};

/** Per-page metadata with canonical URL, Open Graph and Twitter cards. */
// The generated app/opengraph-image.tsx. Page-level openGraph replaces the file-based image, so set it explicitly.
const defaultImage = { url: "/opengraph-image", width: 1200, height: 630 };

export function buildMetadata({ title: pageTitle, description, path, image }: PageSeo): Metadata {
  const title = typeof pageTitle === "string" ? pageTitle : pageTitle.absolute;
  const images = [image ? { url: image, alt: title } : { ...defaultImage, alt: title }];
  return {
    title: pageTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url: path,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [images[0].url],
    },
  };
}

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

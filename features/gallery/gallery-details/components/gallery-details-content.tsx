import Link from "next/link";
import type { GalleryImage } from "@/content/gallery";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import { GalleryLightbox } from "./gallery-lightbox";

export function GalleryDetailsContent({ images }: { images: GalleryImage[] }) {
  return (
    <>
      <section className="bg-navy-50" aria-labelledby="gallery-title">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <p className="text-sm font-bold tracking-widest text-brand-orange uppercase">Gallery</p>
          <h1 id="gallery-title" className="mt-2 text-4xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">
            Our packaging work
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Examples of the kitting, filling, labelling, bundling and repacking we do for brands and businesses across
            the GTA. Tap any photo to see it larger.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16" aria-label="Photo gallery">
        <div className="mx-auto max-w-6xl px-4">
          <GalleryLightbox images={images} />
        </div>
      </section>

      <section className="bg-navy-800 py-14 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Like what you see?</h2>
            <p className="mt-2 text-navy-100">Tell us about your product and we&apos;ll plan the packaging for you.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center rounded-full bg-brand-orange px-7 py-3 font-bold hover:bg-brand-orange-dark"
            >
              Get a Quote
            </Link>
            <WhatsAppButton source="gallery" />
          </div>
        </div>
      </section>
    </>
  );
}

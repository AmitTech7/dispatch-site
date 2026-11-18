import Image from "next/image";
import Link from "next/link";
import { galleryImage } from "@/content/gallery";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";

const heroImage = galleryImage("kitting-jars-and-boxes-in-bubble-wrap");

const highlights = ["Filling", "Assembly & Kitting", "Labelling", "Bundling", "Repacking"];

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-navy-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-orange shadow-sm">
            Brampton, Ontario · Serving the GTA
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-4xl leading-tight font-extrabold tracking-tight text-navy-800 sm:text-5xl"
          >
            Co-Packing &amp; Contract Packaging in Ontario
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Sohi Packaging Solutions handles your product packaging from start to finish — planning, filling,
            assembly, labelling, quality control, storage and shipping — so you can focus on growing your brand.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Our services">
            {highlights.map((h) => (
              <li key={h} className="rounded-full border border-navy-100 bg-white px-3 py-1 text-sm font-semibold text-navy-800">
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center rounded-full bg-brand-orange px-7 py-3 font-bold text-white shadow-sm transition hover:bg-brand-orange-dark"
            >
              Get a Free Quote
            </Link>
            <WhatsAppButton source="hero" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -right-4 hidden size-24 rounded-2xl bg-brand-teal/80 sm:block" aria-hidden="true" />
          <div className="absolute -bottom-4 -left-4 hidden size-20 rounded-2xl bg-brand-orange/80 sm:block" aria-hidden="true" />
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={1920}
            height={1280}
            preload
            sizes="(min-width: 1024px) 560px, 100vw"
            className="relative aspect-[3/2] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

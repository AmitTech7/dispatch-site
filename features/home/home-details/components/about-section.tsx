import Image from "next/image";
import Link from "next/link";
import type { GalleryImage } from "@/content/gallery";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    title: "Quality-checked at every step",
    text: "Incoming goods, packaging and labels are inspected, and finished units are checked before they ship.",
  },
  {
    title: "Flexible batch sizes",
    text: "From short promotional runs to ongoing production, we scale the work to your order.",
  },
  {
    title: "Based in Brampton, serving the GTA",
    text: "Located in Brampton, within easy reach of Mississauga, Toronto, Vaughan and the rest of the GTA.",
  },
  {
    title: "Storage and shipping handled",
    text: "Finished goods can be stored with us and shipped to retailers, warehouses or your customers.",
  },
];

export function AboutSection({ galleryPreview }: { galleryPreview: GalleryImage[] }) {
  return (
    <section id="about" aria-labelledby="about-title" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading id="about-title" eyebrow="About Sohi Packaging" title="Your packaging partner in Brampton" align="left" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Sohi Packaging Solutions Inc. is a co-packing company in Brampton, Ontario. We help brand owners,
                importers and e-commerce sellers get products packed, labelled and out the door — without the cost
                of running their own packaging line.
              </p>
              <p>
                You send us your products and packaging materials; we plan the job with you, do the packing work,
                check the quality and ship the finished goods wherever they need to go.
              </p>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r.title} className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
                <span className="block h-1 w-10 rounded-full bg-brand-orange" aria-hidden="true" />
                <h3 className="mt-3 font-extrabold text-navy-800">{r.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-navy-800">Our packaging work</h3>
              <p className="mt-1 text-muted">Examples of the packing, labelling and kitting we do for our clients.</p>
            </div>
            <Link href="/gallery" className="font-bold text-brand-orange hover:underline">
              View all photos →
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {galleryPreview.map((img) => (
              <li key={img.src}>
                <Link href="/gallery" className="block overflow-hidden rounded-xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1920}
                    height={1280}
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="aspect-square w-full object-cover transition duration-300 hover:scale-105"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

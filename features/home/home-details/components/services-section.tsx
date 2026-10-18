import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section id="services" aria-labelledby="services-title" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          id="services-title"
          eyebrow="Our Services"
          title="Co-packing services built around your product"
          intro="From a single SKU to multi-item kits, we take care of the hands-on packaging work at our Brampton facility."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={1920}
                  height={1280}
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-extrabold text-navy-800">{service.name}</h3>
                  <p className="mt-2 flex-1 text-muted">{service.summary}</p>
                  <span className="mt-4 font-bold text-brand-orange group-hover:underline">
                    Learn more<span className="sr-only"> about {service.name}</span> →
                  </span>
                </div>
              </Link>
            </li>
          ))}
          <li className="flex flex-col justify-center rounded-2xl bg-navy-800 p-8 text-white">
            <h3 className="text-xl font-extrabold">Need something else?</h3>
            <p className="mt-2 text-navy-100">
              Tell us about your product and we&apos;ll plan a packaging process that fits — quantities, materials,
              labels and cost.
            </p>
            <Link
              href="/#quote"
              className="mt-6 inline-flex self-start rounded-full bg-brand-orange px-6 py-3 font-bold text-white hover:bg-brand-orange-dark"
            >
              Request a Quote
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

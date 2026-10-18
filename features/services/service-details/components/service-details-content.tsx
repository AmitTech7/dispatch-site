import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";
import { site } from "@/content/site";
import { businessId, JsonLd } from "@/components/seo/json-ld";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import { QuoteFormBoundary } from "@/features/quote/quote-form/components/quote-form-boundary";
import { absoluteUrl } from "@/lib/seo";

type Props = {
  service: Service;
  otherServices: Service[];
};

export function ServiceDetailsContent({ service, otherServices }: Props) {
  const path = `/services/${service.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${service.name} services`,
          serviceType: service.name,
          description: service.seoDescription,
          url: absoluteUrl(path),
          image: absoluteUrl(service.image.src),
          provider: { "@id": businessId },
          areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/#services") },
            { "@type": "ListItem", position: 3, name: service.name, item: absoluteUrl(path) },
          ],
        }}
      />

      <section className="bg-navy-50" aria-labelledby="service-title">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-navy-800">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/#services" className="hover:text-navy-800">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-navy-800">{service.name}</li>
            </ol>
          </nav>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 id="service-title" className="text-4xl leading-tight font-extrabold tracking-tight text-navy-800 sm:text-5xl">
                {service.heading}
              </h1>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
                {service.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#quote"
                  className="inline-flex items-center justify-center rounded-full bg-brand-orange px-7 py-3 font-bold text-white hover:bg-brand-orange-dark"
                >
                  Get a Quote
                </Link>
                <WhatsAppButton
                  source={`service-${service.slug}`}
                  message={`Hi ${site.shortName}, I'm interested in your ${service.name.toLowerCase()} services.`}
                />
              </div>
            </div>
            <Image
              src={service.image.src}
              alt={service.image.alt}
              width={1920}
              height={1280}
              preload
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[3/2] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="included-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 id="included-title" className="text-2xl font-extrabold text-navy-800 sm:text-3xl">
              What&apos;s included
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-navy-100 p-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-white" aria-hidden="true">
                    ✓
                  </span>
                  <span className="font-semibold text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-extrabold text-navy-800">Where it fits in our process</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              {service.name} is part of step 4, <strong className="text-navy-800">Co-Packing Operations</strong>, in our{" "}
              <Link href="/#how-it-works" className="font-semibold text-navy-800 underline">
                7-step process
              </Link>
              . Before we start, we plan quantities, materials, labels and cost with you and inspect everything that
              arrives. Afterwards, every order goes through quality control, then storage or shipping to retailers,
              warehouses or your customers.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-navy-50 p-6">
              <h2 className="text-lg font-extrabold text-navy-800">Ideal for</h2>
              <ul className="mt-3 space-y-2 text-muted">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-orange" aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-navy-100 p-6">
              <h2 className="text-lg font-extrabold text-navy-800">Other services</h2>
              <ul className="mt-3 space-y-2">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="font-semibold text-navy-700 hover:text-brand-orange">
                      {s.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section id="quote" className="bg-navy-50 py-16" aria-labelledby="service-quote-title">
        <div className="mx-auto max-w-3xl px-4">
          <h2 id="service-quote-title" className="text-center text-2xl font-extrabold text-navy-800 sm:text-3xl">
            Get a quote for {service.name.toLowerCase()}
          </h2>
          <p className="mt-3 text-center text-muted">Tell us about your product and we&apos;ll reply within 1 business day.</p>
          <div className="mt-8">
            <QuoteFormBoundary defaultService={service.name} />
          </div>
        </div>
      </section>
    </>
  );
}

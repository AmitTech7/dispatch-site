import { fullAddress, mapEmbedUrl, mapLinkUrl, site } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import { QuoteFormBoundary } from "@/features/quote/quote-form/components/quote-form-boundary";

export function QuoteSection() {
  return (
    <section id="quote" aria-labelledby="quote-title" className="bg-navy-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          id="quote-title"
          eyebrow="Get a Quote"
          title="Tell us about your packaging project"
          intro="Send us your requirements and we'll get back to you with a plan and pricing. Prefer to chat? Message us on WhatsApp."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_22rem]">
          <QuoteFormBoundary />

          <aside className="space-y-6">
            <div className="rounded-2xl bg-navy-800 p-6 text-white">
              <h3 className="text-lg font-extrabold">Contact us</h3>
              <address className="mt-4 space-y-3 not-italic text-navy-100">
                <p className="font-semibold text-white">{site.name}</p>
                <p>
                  <a href={mapLinkUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {fullAddress}
                    <br />
                    {site.address.countryName}
                  </a>
                </p>
                {site.phone && (
                  <p>
                    <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="hover:text-white">
                      {site.phone}
                    </a>
                  </p>
                )}
                {site.email && (
                  <p>
                    <a href={`mailto:${site.email}`} className="hover:text-white">
                      {site.email}
                    </a>
                  </p>
                )}
              </address>
              <WhatsAppButton source="contact" label="Message us on WhatsApp" className="mt-6 w-full" />
            </div>

            <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
              <iframe
                title={`Map showing ${site.name} at ${fullAddress}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border-0"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

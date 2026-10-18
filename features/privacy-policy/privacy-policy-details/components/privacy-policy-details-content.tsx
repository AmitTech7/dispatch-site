import { fullAddress, site } from "@/content/site";

// Plain-language privacy notice for the quote form. The client should review it before launch.
export function PrivacyPolicyDetailsContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="text-4xl font-extrabold tracking-tight text-navy-800">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: October 2026</p>

      <div className="mt-8 space-y-8 leading-relaxed text-ink [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-navy-800 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
        <section>
          <h2>Who we are</h2>
          <p>
            {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a co-packing company located at {fullAddress},{" "}
            {site.address.countryName}. This policy explains how we handle personal information collected through this
            website.
          </p>
        </section>

        <section>
          <h2>What we collect</h2>
          <p>When you request a quote, we collect the information you enter:</p>
          <ul>
            <li>Your name, company, email address and phone number</li>
            <li>The service you&apos;re interested in, estimated quantity and project details</li>
          </ul>
          <p>
            If you contact us on WhatsApp, we receive your WhatsApp name, phone number and the messages you send.
          </p>
        </section>

        <section>
          <h2>How we use it</h2>
          <p>
            We use your information only to respond to your enquiry, prepare quotes and provide the services you ask
            for. We do not sell your personal information or use it for unrelated marketing without your consent.
          </p>
        </section>

        <section>
          <h2>Service providers</h2>
          <p>
            Quote requests are delivered to our inbox by an email service provider, and this website is hosted by
            Vercel. These providers may process data outside Canada, including in the United States. We use privacy-friendly
            website analytics that do not use cookies or identify individual visitors.
          </p>
        </section>

        <section>
          <h2>How long we keep it</h2>
          <p>
            We keep enquiry information for as long as needed to respond and to maintain business records, and then
            delete it.
          </p>
        </section>

        <section>
          <h2>Your choices</h2>
          <p>
            You can ask to see, correct or delete the personal information we hold about you, or withdraw your consent
            to be contacted, by getting in touch with us
            {site.email ? (
              <>
                {" "}at <a href={`mailto:${site.email}`} className="font-semibold underline">{site.email}</a>
              </>
            ) : null}
            .
          </p>
        </section>
      </div>
    </article>
  );
}

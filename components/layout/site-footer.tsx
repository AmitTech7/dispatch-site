import Image from "next/image";
import Link from "next/link";
import { fullAddress, mapLinkUrl, site } from "@/content/site";
import { services } from "@/content/services";

// Module scope, so it's evaluated once at build time rather than during render.
const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="inline-block rounded-xl bg-white p-3">
            <Image src={site.logo} alt={site.name} width={640} height={421} className="h-16 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed">{site.tagline}.</p>
        </div>

        <div>
          <h2 className="font-bold text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-white">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/#how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link href="/#about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/#quote" className="hover:text-white">Get a Quote</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-white">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p className="font-semibold text-white">{site.name}</p>
            <p>
              <a href={mapLinkUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {fullAddress}, {site.address.countryName}
              </a>
            </p>
            {site.phone && (
              <p>
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="hover:text-white">{site.phone}</a>
              </p>
            )}
            {site.email && (
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </p>
            )}
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-navy-100/80">
          © {year} {site.name} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

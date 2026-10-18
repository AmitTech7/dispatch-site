import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/content/site";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-18">
        <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} — home`}>
          <Image src="/images/logo-mark.png" alt="" width={40} height={40} className="size-10" />
          <span className="leading-none">
            <span className="block text-lg font-extrabold tracking-tight text-navy-800">SOHI</span>
            <span className="block text-[0.65rem] font-bold tracking-[0.12em] text-brand-orange">
              PACKAGING SOLUTIONS
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-semibold text-navy-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#quote"
            className="hidden rounded-full bg-brand-orange px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-orange-dark sm:inline-flex"
          >
            Get a Quote
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

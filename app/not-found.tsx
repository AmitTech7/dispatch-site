import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 items-center">
        <div className="mx-auto max-w-xl px-4 py-24 text-center">
          <p className="text-sm font-bold tracking-widest text-brand-orange uppercase">404</p>
          <h1 className="mt-2 text-4xl font-extrabold text-navy-800">Page not found</h1>
          <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-brand-orange px-7 py-3 font-bold text-white hover:bg-brand-orange-dark"
          >
            Back to home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

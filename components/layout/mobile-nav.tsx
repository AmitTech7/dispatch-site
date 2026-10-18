"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex size-11 items-center justify-center rounded-lg text-navy-800 hover:bg-navy-50"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-navy-100 bg-white shadow-lg"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block border-b border-navy-50 py-3 font-semibold text-navy-800 last:border-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link
                href="/#quote"
                onClick={close}
                className="block rounded-full bg-brand-orange py-3 text-center font-bold text-white"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

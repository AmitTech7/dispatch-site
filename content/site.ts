// Business details used across the site (header, footer, contact, JSON-LD).
// Keep NAP (name, address, phone) identical everywhere — Google Business Profile matches on it.

export const site = {
  name: "Sohi Packaging Solutions Inc.",
  shortName: "Sohi Packaging",
  tagline: "Co-packing & contract packaging in Brampton, Ontario",
  description:
    "Sohi Packaging Solutions Inc. is a Brampton, Ontario co-packer offering filling, assembly and kitting, labelling, bundling and repacking — with quality control, storage and shipping across the GTA.",
  // Falls back to Vercel's production domain, then localhost for development.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  locale: "en_CA",
  logo: "/images/logo.png",
  address: {
    street: "6 River Heights Dr",
    city: "Brampton",
    region: "ON",
    postalCode: "L6P 2M9",
    country: "CA",
    countryName: "Canada",
  },
  // Optional until the client confirms them — anything left empty is hidden on the site.
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  // WhatsApp Business: +1 (647) 802-0251. Digits only (country code + number) for wa.me links.
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "16478020251",
  areaServed: ["Brampton", "Mississauga", "Toronto", "Vaughan", "Greater Toronto Area", "Ontario"],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${fullAddress}, ${site.address.countryName}`,
)}&output=embed`;

export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name}, ${fullAddress}`,
)}`;

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#quote", label: "Contact" },
] as const;

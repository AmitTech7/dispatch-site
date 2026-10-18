# Sohi Packaging Solutions Inc. — website

Marketing site for a co-packing business in Brampton, Ontario. Built with Next.js 16 (App Router, Cache Components), Tailwind CSS 4 and TypeScript, deployed on Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev                  # http://localhost:3000
```

`npm run build` must show every route as static (○). The `(core)` layout sets `ensureStatic = "navigation"`, so the build fails if a page can't be fully prerendered.

## Structure

Routes stay thin; UI lives in `features/`:

```
app/(core)/<route>/page.tsx            # metadata + generateStaticParams, renders a boundary
features/<domain>/<feature>/components/
  <feature>-boundary.tsx               # Server Component: loads data, wraps content in <Suspense>
  <feature>-content.tsx                # presentational markup
components/                            # shared UI (header, footer, WhatsApp, JSON-LD)
content/                               # all site copy and data — edit here to change text
lib/                                   # WhatsApp link + SEO metadata helpers
```

| URL | Source |
|---|---|
| `/` | `features/home/home-details` (Hero, Services, How It Works, About + gallery preview, Quote) |
| `/services/[slug]` | `features/services/service-details`, data in `content/services.ts` |
| `/gallery` | `features/gallery/gallery-details`, photos in `content/gallery.ts` |
| `/privacy-policy` | `features/privacy-policy/privacy-policy-details` |

## Editing content

- **Business details, nav:** `content/site.ts`
- **Services (copy, SEO titles, photos):** `content/services.ts`
- **7-step workflow:** `content/workflow.ts`
- **Gallery photos:** add the file to `public/images/gallery/` with a descriptive kebab-case name, then add an entry with `alt` and `caption` to `content/gallery.ts`.

## Images & performance

Source photos in `public/images/gallery/` are 1920×1280 JPEGs (≈100–300 KB). **Visitors never download these originals.** Every photo is rendered with `next/image`, which on Vercel:

- resizes it to the width it's displayed at (`sizes` prop + `srcset`), so a phone gets a ~400–800 px version, not 1920 px;
- converts it to **AVIF** (or WebP / JPEG for older browsers) — set in `next.config.ts` → `images.formats`;
- caches the optimized copy on Vercel's CDN for 31 days (`images.minimumCacheTTL`);
- lazy-loads everything below the fold; only the hero image is preloaded (`preload` prop);
- always sets `width`/`height`, so the layout doesn't jump while images load (good Core Web Vitals).

Measured on the largest photo (`packing-product-jars-into-shipping-carton.jpeg`, 297 KB original):

| Displayed width | JPEG | WebP | AVIF (served to most browsers) |
|---|---|---|---|
| 384 px (phone thumbnail) | 17 KB | 16 KB | **8 KB** |
| 640 px (phone hero / cards) | 42 KB | 38 KB | **21 KB** |
| 1080 px (desktop hero) | 97 KB | 80 KB | **48 KB** |
| 1920 px (lightbox, large screens) | 232 KB | 158 KB | **106 KB** |

### Adding a new photo (SEO checklist)

1. Use a JPEG around 1920 px wide and under ~400 KB (no need to compress further — Next.js does it).
2. Give it a **descriptive kebab-case file name** with real keywords, e.g. `labelling-cosmetic-jars-brampton.jpeg` — not `IMG_1234.jpeg`.
3. Add it to `content/gallery.ts` with:
   - `alt` — what's in the photo, in a plain sentence (screen readers + Google Images);
   - `caption` — short visible label;
   - `tags` — which services it relates to.
4. It's then automatically included in the gallery page and in `sitemap.xml` (image sitemap), which helps it show up in Google Images.

Always render photos with `next/image` (`<Image />`), never a plain `<img>`, or the optimizations above are lost.

## Quote form

`features/quote/quote-form` — a Server Action validates with zod and emails the request via Resend (`replyTo` = customer). On success, or if email fails, the visitor gets a "Continue on WhatsApp" button with their details pre-filled. A honeypot field and a minimum fill time filter bots.

## Deploying to Vercel

1. Push to GitHub and import the repo in Vercel (framework preset: Next.js).
2. Add the environment variables from `.env.example`.
3. Add the custom domain. In Resend, verify the domain (SPF/DKIM DNS records) and set `QUOTE_FROM_EMAIL`.
4. After launch: submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools, and claim the Google Business Profile with the exact same name, address and phone as the site.

Preview deployments are automatically `noindex` and disallowed in `robots.txt`.

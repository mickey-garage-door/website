# Mickey's Garage Door — Website

Production-ready local lead-generation website for **Mickey's Garage Door**, a San Diego, CA home services company. Built for high conversion rates, strong local SEO, and fast performance.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) — App Router, TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Email | [Resend](https://resend.com) via Server Actions |
| Font | [Geist](https://vercel.com/font) — `next/font/google` |
| Analytics | Google Analytics 4 via `next/script` |
| Hosting | [Vercel](https://vercel.com) (recommended) |
| Output | Static + Standalone — all pages pre-rendered at build time |

---

## Features

- **26 statically pre-rendered pages** — homepage, 7 service pages, 8 city/location pages, contact, about, reviews, sitemap, robots
- **Contact form** with Server Action, server-side validation, and Resend email delivery — no database required
- **Schema.org structured data** — `LocalBusiness`, `Service`, `FAQPage`, `Review`, `BreadcrumbList`
- **Google Analytics 4** integration via environment variable — zero-config enable/disable
- **Mobile-first responsive layout** with sticky tap-to-call header
- **Security headers** — `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
- **Auto-generated sitemap.xml and robots.txt**
- **No CMS, no database, no authentication** — clean and maintainable

---

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout — Header, Footer, GA4, Schema
│   ├── page.tsx                  # Homepage
│   ├── not-found.tsx             # 404 page
│   ├── sitemap.ts                # Auto-generated sitemap.xml
│   ├── robots.ts                 # Auto-generated robots.txt
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── reviews/page.tsx
│   ├── services/
│   │   ├── page.tsx              # Services hub
│   │   └── [slug]/page.tsx      # Individual service pages (7)
│   └── locations/
│       ├── page.tsx              # Locations hub
│       └── [slug]/page.tsx      # City pages (8)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky nav, mobile menu, trust bar
│   │   └── Footer.tsx            # 4-column footer with links and badges
│   ├── sections/
│   │   └── CTABanner.tsx         # Reusable CTA section
│   ├── forms/
│   │   └── ContactForm.tsx       # Contact form (client component)
│   ├── ui/
│   │   ├── FAQAccordion.tsx      # Accessible accordion
│   │   ├── ReviewCard.tsx        # Review display card
│   │   └── StarRating.tsx        # Star rating display
│   └── seo/
│       ├── GoogleAnalytics.tsx   # GA4 script injection
│       └── LocalBusinessSchema.tsx  # JSON-LD structured data
│
├── data/                         # Static content — edit here to update the site
│   ├── company.ts                # Company info, phone, hours, address
│   ├── services.ts               # All 7 services with full content
│   ├── locations.ts              # All 8 city pages with content
│   └── reviews.ts                # Customer reviews
│
├── lib/
│   ├── actions.ts                # Server Action — form validation + submission
│   └── sendEmail.ts              # Resend email template and delivery
│
└── types/
    └── index.ts                  # Shared TypeScript types
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.local` and fill in real values:

```bash
cp .env.local .env.local
```

```env
# App
NEXT_PUBLIC_BASE_URL=https://mickeysgaragedoor.com

# Google Analytics 4 Measurement ID (e.g. G-XXXXXXXXXX)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Resend API key — https://resend.com/api-keys
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXX

# Email address where contact form submissions are delivered
CONTACT_EMAIL=info@mickeysgaragedoor.com

# Verified sending domain in Resend dashboard
FROM_EMAIL=no-reply@mickeysgaragedoor.com
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm run start
```

---

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | Yes | Full URL of the live site (no trailing slash) |
| `NEXT_PUBLIC_GA_ID` | No | GA4 Measurement ID — GA is disabled if omitted |
| `RESEND_API_KEY` | Yes | Resend API key for contact form emails |
| `CONTACT_EMAIL` | Yes | Inbox that receives form submission emails |
| `FROM_EMAIL` | Yes | Verified sender address in your Resend domain |

---

## Content Updates

All site content lives in `src/data/`. No CMS or code changes required for content edits.

### Update company info (phone, hours, address, etc.)
```
src/data/company.ts
```

### Add or edit a service page
```
src/data/services.ts
```
Each service object includes: `slug`, `title`, `metaTitle`, `metaDescription`, `headline`, `description`, `signs`, `process`, `faqs`, `brands`, `priceRange`, `warranty`, and `relatedSlugs`.

After adding a new service, it automatically appears in:
- The homepage services grid
- The header dropdown menu
- The services hub page (`/services`)
- The footer services column
- The contact form service selector
- The sitemap

### Add a new city/location page
```
src/data/locations.ts
```
Each location includes: `slug`, `city`, `zip`, `metaTitle`, `metaDescription`, `headline`, `description`, `neighborhoods`, `localNote`, `faqs`.

After adding a new city, it automatically appears in:
- The homepage service area grid
- The locations hub page (`/locations`)
- The footer locations column
- The sitemap

### Add or edit reviews
```
src/data/reviews.ts
```

---

## Pages & Routes

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage |
| `/services` | Static | Services hub |
| `/services/garage-door-repair` | SSG | Service page |
| `/services/spring-replacement` | SSG | Service page |
| `/services/opener-repair-installation` | SSG | Service page |
| `/services/cable-drum-repair` | SSG | Service page |
| `/services/panel-replacement` | SSG | Service page |
| `/services/new-garage-door-installation` | SSG | Service page |
| `/services/emergency-garage-door-repair` | SSG | Service page |
| `/locations` | Static | Locations hub |
| `/locations/chula-vista` | SSG | City page |
| `/locations/el-cajon` | SSG | City page |
| `/locations/la-mesa` | SSG | City page |
| `/locations/santee` | SSG | City page |
| `/locations/escondido` | SSG | City page |
| `/locations/encinitas` | SSG | City page |
| `/locations/national-city` | SSG | City page |
| `/locations/lemon-grove` | SSG | City page |
| `/about` | Static | About page |
| `/contact` | Static | Contact + quote form |
| `/reviews` | Static | All reviews |
| `/sitemap.xml` | Generated | XML sitemap |
| `/robots.txt` | Generated | Robots file |

---

## SEO Implementation

### Metadata
Every page exports a `generateMetadata` function (or static `metadata` object) with:
- `title` — keyword-optimized, unique per page
- `description` — 150–160 characters with CTA
- `alternates.canonical` — canonical URL
- `openGraph` and `twitter` cards via root layout

### Structured Data (Schema.org)
| Schema Type | Applied On |
|---|---|
| `LocalBusiness` / `HomeAndConstructionBusiness` | All pages (root layout) |
| `Service` | Each service page |
| `FAQPage` | Service pages, location pages, homepage |
| `Review` + `AggregateRating` | Reviews page |
| `LocalBusiness` (city-scoped) | Each location page |

### Sitemap
Auto-generated at `/sitemap.xml` with correct `changeFrequency` and `priority` values for all routes.

---

## Deployment — Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Set all environment variables in the Vercel dashboard under **Settings → Environment Variables**
4. Deploy

Vercel automatically handles:
- HTTPS
- Global CDN
- Image optimization (WebP/AVIF)
- Incremental builds
- Preview deployments per branch

### Alternative: Self-hosted

The `standalone` output mode in `next.config.ts` produces a minimal Node.js server:

```bash
npm run build
node .next/standalone/server.js
```

---

## Expanding to Additional Cities

To add a new service area:

1. Open `src/data/locations.ts`
2. Add a new `Location` object following the existing pattern
3. Run `npm run build` — the new city page is generated automatically

No routing changes, no component changes, no CMS needed.

---

## Adding a Blog

When ready to add a resource/blog section:

1. Create `src/data/posts.ts` with post metadata and content
2. Add `src/app/blog/page.tsx` (blog index) and `src/app/blog/[slug]/page.tsx` (post template)
3. Add `Article` schema to post pages
4. Add blog links to Header and Footer

For a content-heavy blog, this is when introducing a headless CMS (e.g., Sanity) makes sense.

---

## Before Going Live Checklist

- [ ] Replace placeholder phone number `(619) 555-0100` in `src/data/company.ts`
- [ ] Replace placeholder address in `src/data/company.ts`
- [ ] Replace placeholder Google Maps and Yelp URLs in `src/data/company.ts`
- [ ] Replace placeholder social media URLs in `src/data/company.ts`
- [ ] Replace placeholder CA license number in `src/data/company.ts`
- [ ] Update `founded` year and `yearsInBusiness` in `src/data/company.ts`
- [ ] Add real `RESEND_API_KEY` to environment variables
- [ ] Add real `NEXT_PUBLIC_GA_ID` to environment variables
- [ ] Verify sending domain in [Resend dashboard](https://resend.com/domains)
- [ ] Add real photography to `public/images/` (hero, services, OG image)
- [ ] Add `public/images/og-image.jpg` (1200×630px) for social sharing
- [ ] Add `public/favicon.ico` and `public/apple-touch-icon.png`
- [ ] Submit `sitemap.xml` to [Google Search Console](https://search.google.com/search-console)
- [ ] Verify and optimize [Google Business Profile](https://business.google.com)
- [ ] Test contact form end-to-end in production
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev) on the live URL
- [ ] Test on mobile (iOS Safari + Android Chrome)

---

## License

Private — all rights reserved. Not for redistribution.

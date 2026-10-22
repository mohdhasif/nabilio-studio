# Nabilio Studio — Website

Marketing website for **Nabilio Studio**, an independent, Malaysia-based web design & development studio for small and
medium-sized businesses.

_Crafting Digital Excellence._

## Overview

| Page      | Path         | Purpose                                                                               |
| --------- | ------------ | ------------------------------------------------------------------------------------- |
| Home      | `/`          | Hero, studio intro, services with starting prices, concept work, process, why us, CTA |
| About     | `/about`     | Studio introduction, focus areas, founder background                                  |
| Services  | `/services`  | Four services with ideal customer, features, benefits, starting package               |
| Portfolio | `/portfolio` | Filterable **concept projects** (demonstration only, not client work)                 |
| Contact   | `/contact`   | WhatsApp and email options, and an enquiry form                                       |

Portfolio demo:

| Demo                                      | Path                 | Notes                                                                                            |
| ----------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------ |
| Torquevale Motorworks (automotive)        | `/demos/torquevale`  | Fictional workshop: home, services, workshop, appointment pages                                  |
| CoolNest Aircond Services (home services) | `/demos/coolnest`    | Fictional aircond company: services, how it works, coverage, gallery, WhatsApp quotation enquiry |
| Maison Brew (food & beverage)             | `/demos/maison-brew` | Fictional café: home, menu (filterable, sample MYR prices), our story, visit us                  |

Also included: per-page metadata and Open Graph images, `sitemap.xml`, `robots.txt`, web manifest, schema.org structured
data, a custom 404 page, an error page and basic security headers.

Every page is prerendered as static HTML. There is no database, no paid service and no server-side form backend.

## Technology

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components) with TypeScript
- [Tailwind CSS v4](https://tailwindcss.com). Design tokens live in `src/app/globals.css`.
- [Lucide](https://lucide.dev) icons and [Motion](https://motion.dev) for subtle scroll animations. Visitors who prefer
  reduced motion get a fade only, with no movement.
- Fonts: Manrope (headings) and Inter (body), self-hosted through `next/font`

## Requirements

- Node.js **20.9 or newer** (developed on Node 22)
- npm

## Local development

```bash
git clone https://github.com/mohdhasif/nabilio-studio.git
cd nabilio-studio
npm install
cp .env.example .env.local   # optional, see "Configuration"
npm run dev                  # http://localhost:3000
```

| Command             | What it does                                      |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Start the development server                      |
| `npm run build`     | Create a production build                         |
| `npm start`         | Serve the production build (run `build` first)    |
| `npm run lint`      | Run ESLint                                        |
| `npm run typecheck` | Generate route types and run the TypeScript check |
| `npm run check`     | Type-check, lint and build in one go              |

## Configuration

Environment variables are optional. Set them in `.env.local` for local development, or in **Vercel → Project → Settings →
Environment Variables** for deployments.

| Variable                      | Default                                                | Purpose                                               |
| ----------------------------- | ------------------------------------------------------ | ----------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`        | Vercel production domain, else `http://localhost:3000` | Canonical URLs, Open Graph, sitemap, robots           |
| `NEXT_PUBLIC_CONTACT_EMAIL`   | `nabiliostudio@gmail.com`                              | Email address used across the site                    |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `601110709875`                                         | WhatsApp number, digits only, in international format |

The default contact details live in `src/config/site.ts`. If a value is set to an empty string there, the site shows a
clearly marked **[Placeholder]** instead of a link.

`NEXT_PUBLIC_*` values are baked in at build time, so **redeploy after changing them**.

### Contact form

The enquiry form has no backend. It validates the input, then opens **WhatsApp** (or the visitor's **email app**) with
the message already written, and the visitor presses send there. The page says this plainly, so no visitor is told their
message was sent when it wasn't. To deliver submissions directly later, connect a form service such as Formspree or
Web3Forms in `src/components/contact/EnquiryForm.tsx`.

## Editing content

| What                                    | Where                                  |
| --------------------------------------- | -------------------------------------- |
| Site name, tagline, navigation, contact | `src/config/site.ts`                   |
| Services, starting prices, inclusions   | `src/content/services.ts`              |
| Concept projects and demo links         | `src/content/portfolio.ts` (`demoUrl`) |
| Process steps                           | `src/content/process.ts`               |
| Enquiry form service and budget options | `src/content/enquiry.ts`               |
| Brand colours, type scale, motion       | `src/app/globals.css`                  |

**Portfolio rule:** concept projects must keep the "Concept Project — Demonstration Only" label. Don't add client names,
testimonials, logos or results unless they are real and approved.

## Portfolio demos

Demos are full websites for **fictional** businesses. They live in the same app, so there's one repository and one
deployment:

- Routes: `src/app/demos/<name>/` with its own `layout.tsx` (own header, footer, fonts and colours)
- Content and components: `src/demos/<name>/`
- The corporate pages sit in the `src/app/(site)/` route group, which adds the Nabilio header and footer. Demos are
  outside that group, so they don't get them. URLs are unaffected by the group.
- Each demo shows a permanent "Demo website" notice, is set to `noindex`, and is left out of the sitemap, so it is never
  mistaken for a real business.
- Link a demo from the portfolio by setting `demoUrl` in `src/content/portfolio.ts`. Internal paths open in the same
  tab; full URLs open in a new tab.

All demos use only invented details: non-working phone numbers (`03-0000 0000`, `012-000 0000`), reserved
`.example` email addresses, and either a placeholder address or no address at all. Their forms validate input, then
state that nothing was sent or stored; Maison Brew has no ordering or reservation system at all. Do not add real
reviews, awards, certifications, testimonials, customer names or achievements.

CoolNest's quotation form validates the enquiry and opens WhatsApp with a formatted message but **no recipient**
(`ENQUIRY_WHATSAPP_NUMBER = null` in `src/demos/coolnest/content.ts`), so nothing can reach a real business. Its
gallery uses Pexels photos captioned as illustrative; sources are in `src/demos/coolnest/images/CREDITS.md`.

Maison Brew uses Unsplash photography (Unsplash License), optimised and stored in `src/demos/maison-brew/images/`
and served through `next/image` with blur placeholders. Sources are listed in `src/demos/maison-brew/images/CREDITS.md`.

## Brand assets

The official logo kit (Concept C, the geometric N) is in `public/brand/`. `public/brand/README.md` explains each file. The
favicon is in `src/app/icon.svg` and `src/app/apple-icon.png`.

To replace a logo, keep the same file names, or update the paths in `src/config/site.ts` → `brand`. The header and
footer use the `-trimmed.png` horizontal logos. The Open Graph images use
`public/brand/nabilio-logo-horizontal-dark-trimmed.png` and the fonts in `src/assets/og-fonts/` (SIL Open Font License;
licence files included).

Brand colours: Navy `#14243B`, Champagne Gold `#C6A76A`, Soft White `#F7F8FA`, Dark Text `#172334`, Muted Text `#64748B`.
On Soft White backgrounds, muted text uses `#617187`, a near-identical shade, because `#64748B` falls just short of WCAG AA
contrast there.

## Deployment (Vercel free tier)

1. Push the repository to GitHub.
2. In [Vercel](https://vercel.com/new), choose **Import Git Repository** and select `nabilio-studio`.
3. Vercel detects Next.js automatically. Keep the default build settings (`npm run build`).
4. Optionally add the environment variables above. Without a custom domain, `NEXT_PUBLIC_SITE_URL` can stay unset,
   because the `*.vercel.app` production domain is used automatically.
5. Click **Deploy**. Each push to the production branch redeploys. Preview deployments are kept out of search engines.

**Adding a custom domain later:** add it under Vercel → Project → Settings → Domains, set `NEXT_PUBLIC_SITE_URL` to
`https://yourdomain.com`, then redeploy. After that, submit `https://yourdomain.com/sitemap.xml` in
[Google Search Console](https://search.google.com/search-console).

## Project structure

```
src/
  app/                    root layout, metadata files (sitemap, robots, icons), global styles
    (site)/               Nabilio Studio pages (adds header and footer)
    demos/torquevale/     automotive demo routes
    demos/coolnest/       aircond demo routes
    demos/maison-brew/    café demo routes
  assets/og-fonts/        fonts for the generated Open Graph images
  components/
    brand/                Logo, GeometricMark
    contact/              EnquiryForm
    home/                 homepage sections and the shared CallToAction
    layout/               Header, Footer, PageHero
    motion/               Reveal (scroll), FadeIn (CSS, above the fold), MotionProvider
    portfolio/            concept project cards, browser mock-up, filter grid
    seo/                  JsonLd
    ui/                   Button, Card, Container, Section, SectionHeading, Eyebrow
  config/site.ts          site settings
  content/                editable content
  demos/<name>/           demo content and components (torquevale, coolnest, maison-brew)
  lib/                    metadata, structured data, OG image and class helpers
public/brand/             official logo kit
```

## Quality checks

Last verified locally on a production build:

- `npm run check` passes (types, lint, build) with no warnings.
- axe-core reports **0 WCAG 2.1 AA violations** on all pages at 390 px and 1440 px.
- Lighthouse (mobile): Performance 94–96, Accessibility 100, Best Practices 100, SEO 100.
- No horizontal overflow at 390, 768, 1024 and 1440 px. Every internal link returns 200.
- `npm audit --omit=dev` reports 0 vulnerabilities. The remaining advisories are in the ESLint toolchain, which is
  development-only and is not deployed.

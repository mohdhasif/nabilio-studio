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
| `NEXT_PUBLIC_CONTACT_EMAIL`   | `mohdhasif24181@gmail.com`                             | Email address used across the site                    |
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
  app/                    routes, layout, metadata files (sitemap, robots, OG images), global styles
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

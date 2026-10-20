# Nabilio Studio — Website

Marketing website for **Nabilio Studio**, a Malaysia-based web design & development studio serving SMEs.
_Crafting Digital Excellence._

> Status: Stage 2 (foundation and design system). The full README with deployment steps is completed in Stage 6.

## Tech stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Lucide React icons, Motion for subtle animations
- Fonts: Manrope (headings), Inter (body) via `next/font`

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — fill in URL / contact details
npm run dev                  # http://localhost:3000
```

| Command             | Purpose                      |
| ------------------- | ---------------------------- |
| `npm run dev`       | Development server           |
| `npm run lint`      | ESLint                       |
| `npm run typecheck` | Generate route types + `tsc` |
| `npm run build`     | Production build             |
| `npm start`         | Serve the production build   |

## Configuration

Set these in `.env.local` locally or in Vercel → Project → Settings → Environment Variables:

- `NEXT_PUBLIC_SITE_URL`: the public URL used for canonical, Open Graph and sitemap. On Vercel it falls back to the production `*.vercel.app` domain.
- `NEXT_PUBLIC_CONTACT_EMAIL`: the enquiry email. If it is empty, the site shows a clearly marked placeholder.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: digits only, international format (e.g. `60123456789`).

## Brand assets

Put the approved logo files in `public/brand/`, then set their paths in `src/config/site.ts` → `brand`.
`public/brand/README.md` lists the files. Until then, the site shows a text wordmark.

## Structure

```
src/
  app/                 routes, root layout, global styles/tokens
  components/
    brand/             Logo
    motion/            Reveal (reduced-motion aware)
    ui/                Button, Card, Container, Section, SectionHeading, Eyebrow
  config/site.ts       site name, URL, navigation, contact config
  lib/                 seo helpers, utilities
```

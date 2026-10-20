/**
 * Central site configuration.
 * Contact details and the public URL come from environment variables so they
 * can be changed on Vercel without code edits. See `.env.example`.
 */

const FALLBACK_URL = "http://localhost:3000";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  // Vercel exposes the production domain (e.g. nabilio-studio.vercel.app) at build time.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return FALLBACK_URL;
}

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "";
/** International format, digits only, e.g. 60123456789 */
const whatsapp = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");

export const siteConfig = {
  name: "Nabilio Studio",
  shortName: "Nabilio",
  descriptor: "Web Design & Development",
  tagline: "Crafting Digital Excellence.",
  description:
    "Nabilio Studio is a Malaysia-based web design and development studio creating professional, responsive websites that help SMEs build credibility and connect with more customers.",
  url: resolveSiteUrl(),
  locale: "en_MY",
  location: "Malaysia",

  contact: {
    email,
    whatsapp,
    /** True when the value is not yet configured — UI must show a clear placeholder. */
    emailIsPlaceholder: email === "",
    whatsappIsPlaceholder: whatsapp === "",
    whatsappMessage:
      "Hello Nabilio Studio, I would like to enquire about a website for my business.",
  },

  /**
   * Official logo files (Concept C — geometric N). Place them in /public/brand
   * and set the paths here. While `null`, a text wordmark is used instead.
   */
  brand: {
    logoHorizontal: null as string | null, // e.g. "/brand/nabilio-logo-horizontal.png" (for light backgrounds)
    logoHorizontalDark: null as string | null, // e.g. "/brand/nabilio-logo-horizontal-dark.png" (for navy backgrounds)
    icon: null as string | null, // e.g. "/brand/nabilio-icon-transparent.png"
  },
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export function whatsappLink(message: string = siteConfig.contact.whatsappMessage): string | null {
  if (siteConfig.contact.whatsappIsPlaceholder) return null;
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function emailLink(subject = "Website enquiry"): string | null {
  if (siteConfig.contact.emailIsPlaceholder) return null;
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}`;
}

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

/** Defaults supplied by the owner; environment variables override them. */
const DEFAULT_EMAIL = "mohdhasif24181@gmail.com";
const DEFAULT_WHATSAPP = "601110709875"; // 011-1070 9875

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || DEFAULT_EMAIL;
/** International format, digits only, e.g. 60123456789 */
const whatsapp = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP).replace(/\D/g, "");

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
    whatsappMessage: "Hello Nabilio Studio, I would like to enquire about a website for my business.",
  },

  /**
   * Official logo files (Concept C — geometric N) in /public/brand.
   * The "-trimmed" variants are the originals with transparent margins cropped.
   * Set a path to `null` to fall back to the text wordmark.
   */
  brand: {
    logoHorizontal: "/brand/nabilio-logo-horizontal-trimmed.png" as string | null, // light backgrounds
    logoHorizontalDark: "/brand/nabilio-logo-horizontal-dark-trimmed.png" as string | null, // navy backgrounds
    logoSize: { width: 639, height: 158 },
    icon: "/brand/nabilio-icon-transparent.png" as string | null,
    mainLogo: "/brand/nabilio-logo-main.png" as string | null,
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

/** Human-readable WhatsApp number, e.g. "+60 11-1070 9875". */
export function whatsappDisplay(): string {
  const digits = siteConfig.contact.whatsapp;
  const local = digits.startsWith("60") ? digits.slice(2) : digits;
  const m = local.match(/^(\d{2})(\d{3,4})(\d{4})$/);
  return m ? `+60 ${m[1]}-${m[2]} ${m[3]}` : `+${digits}`;
}

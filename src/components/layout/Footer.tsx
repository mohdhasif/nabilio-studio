import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { emailLink, mainNav, siteConfig, whatsappDisplay, whatsappLink } from "@/config/site";
import { services } from "@/content/services";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  const wa = whatsappLink();
  const mail = emailLink();

  return (
    <footer className="bg-navy-deep text-on-navy-muted">
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo onDark />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            {siteConfig.descriptor} for Malaysian businesses. {siteConfig.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold text-soft-white">Studio</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold text-soft-white">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="transition-colors hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-soft-white">Get in touch</h2>
          <ul className="mt-5 space-y-4 text-sm">
            {wa && (
              <li>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <MessageCircle className="size-4 shrink-0 text-gold" aria-hidden />
                  WhatsApp {whatsappDisplay()}
                </a>
              </li>
            )}
            {mail && (
              <li>
                <a href={mail} className="inline-flex items-center gap-3 break-all transition-colors hover:text-gold">
                  <Mail className="size-4 shrink-0 text-gold" aria-hidden />
                  {siteConfig.contact.email}
                </a>
              </li>
            )}
            <li className="inline-flex items-center gap-3">
              <MapPin className="size-4 shrink-0 text-gold" aria-hidden />
              Based in {siteConfig.location}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-navy-line/60">
        <Container className="flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
          <p>Designed &amp; developed in Malaysia.</p>
        </Container>
      </div>
    </footer>
  );
}

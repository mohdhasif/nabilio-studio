import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BASE, brand, nav } from "../content";
import { TvLogo } from "./TvLogo";

export function TvFooter() {
  return (
    <footer className="border-t border-tv-line bg-tv-panel text-sm text-tv-muted">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1.2fr]">
        <div>
          <TvLogo />
          <p className="mt-5 max-w-xs leading-relaxed">{brand.tagline}</p>
        </div>
        <nav aria-label="Torquevale footer">
          <h2 className="font-tv-display text-base font-semibold tracking-wider text-tv-text uppercase">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {[...nav, { label: "Book Appointment", href: `${BASE}/appointment` }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-tv-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-tv-display text-base font-semibold tracking-wider text-tv-text uppercase">
            Contact <span className="text-xs font-medium tracking-normal text-tv-muted normal-case">(fictional)</span>
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-tv-accent" aria-hidden />
              <span>
                {brand.address[0]}
                <br />
                {brand.address[1]}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-tv-accent" aria-hidden />
              {brand.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-tv-accent" aria-hidden />
              {brand.email}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-tv-display text-base font-semibold tracking-wider text-tv-text uppercase">
            Opening hours
          </h2>
          <ul className="mt-4 space-y-2.5">
            {brand.hours.map((h) => (
              <li key={h.days} className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-tv-accent" aria-hidden />
                <span>
                  <span className="block text-tv-text">{h.days}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-tv-line">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-5 py-5 text-xs sm:flex-row sm:justify-between sm:px-8">
          <p>Fictional business for demonstration purposes only. Not a real workshop.</p>
          <p>
            Demo website designed &amp; built by{" "}
            <Link
              href="/"
              className="font-semibold text-tv-text underline-offset-4 hover:text-tv-accent hover:underline"
            >
              Nabilio Studio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

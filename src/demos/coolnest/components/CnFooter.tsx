import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BASE, brand, nav } from "../content";
import { CnLogo } from "./CnLogo";

export function CnFooter() {
  return (
    <footer className="bg-cn-ink text-sm text-cn-on-ink-muted">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr_1.2fr]">
        <div>
          <CnLogo onDark />
          <p className="mt-5 max-w-xs leading-relaxed">{brand.tagline}</p>
        </div>
        <nav aria-label="CoolNest footer">
          <h2 className="font-cn-display text-base font-semibold text-white">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {[...nav, { label: "Book a Service", href: `${BASE}/book` }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-cn-display text-base font-semibold text-white">
            Contact <span className="text-xs font-normal text-cn-on-ink-muted">(fictional)</span>
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-cn-mint" aria-hidden />
              {brand.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-cn-mint" aria-hidden />
              {brand.email}
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-cn-mint" aria-hidden />
              {brand.serviceArea}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-cn-display text-base font-semibold text-white">Operating hours</h2>
          <ul className="mt-4 space-y-2.5">
            {brand.hours.map((h) => (
              <li key={h.days} className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-cn-mint" aria-hidden />
                <span>
                  <span className="block text-white">{h.days}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-5 py-5 text-xs sm:flex-row sm:justify-between sm:px-8">
          <p>Fictional business for portfolio demonstration only. Not a real aircond service company.</p>
          <p>
            Demo website designed &amp; built by{" "}
            <Link href="/" className="font-semibold text-white underline-offset-4 hover:underline">
              Nabilio Studio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

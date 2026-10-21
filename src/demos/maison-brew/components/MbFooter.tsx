import Link from "next/link";
import { brand, nav } from "../content";
import { MbLogo } from "./MbLogo";

export function MbFooter() {
  return (
    <footer className="bg-mb-espresso text-sm text-mb-latte">
      <div className="mx-auto grid max-w-site gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        <div>
          <MbLogo onDark />
          <p className="mt-6 max-w-xs font-mb-serif text-xl leading-snug text-mb-cream italic">{brand.tagline}</p>
        </div>
        <nav aria-label="Maison Brew footer">
          <h2 className="text-xs font-medium tracking-[0.2em] text-mb-on-espresso-accent uppercase">Explore</h2>
          <ul className="mt-5 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-mb-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-xs font-medium tracking-[0.2em] text-mb-on-espresso-accent uppercase">
            Find us <span className="tracking-normal normal-case">(fictional)</span>
          </h2>
          <address className="mt-5 space-y-1 not-italic">
            <p>{brand.address[0]}</p>
            <p>{brand.address[1]}</p>
            <p className="pt-3">{brand.phone}</p>
            <p>{brand.email}</p>
          </address>
        </div>
        <div>
          <h2 className="text-xs font-medium tracking-[0.2em] text-mb-on-espresso-accent uppercase">Hours</h2>
          <dl className="mt-5 space-y-2.5">
            {brand.hours.map((h) => (
              <div key={h.days}>
                <dt className="text-mb-cream">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-mb-cream/10">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-5 py-6 text-xs sm:flex-row sm:justify-between sm:px-8">
          <p>Fictional café for portfolio demonstration only. Menu, prices and contact details are not real.</p>
          <p>
            Demo website designed &amp; built by{" "}
            <Link href="/" className="font-semibold text-mb-cream underline-offset-4 hover:underline">
              Nabilio Studio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

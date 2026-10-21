import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal } from "@/components/motion/Reveal";
import { MbButtonLink } from "@/demos/maison-brew/components/MbButton";
import { MbPageIntro } from "@/demos/maison-brew/components/MbPageIntro";
import { MbPhoto } from "@/demos/maison-brew/components/MbPhoto";
import { BASE, brand, photos } from "@/demos/maison-brew/content";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Location, opening hours and contact details for Maison Brew — all fictional, for a portfolio demonstration.",
  alternates: { canonical: `${BASE}/visit` },
};

export default function MaisonBrewVisit() {
  return (
    <>
      <MbPageIntro
        kicker="Visit us"
        title={
          <>
            Come in, <em>stay a while.</em>
          </>
        }
        description="Walk-ins only — order at the counter and find a seat. Everything on this page is fictional demo information."
      />

      <section aria-label="Café information" className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <FadeIn delay={0.1} className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-mb-cream p-8 sm:col-span-2">
              <h2 className="flex items-center gap-3 text-3xl">
                <MapPin className="size-6 text-mb-caramel" strokeWidth={1.5} aria-hidden />
                Location
              </h2>
              <address className="mt-5 text-lg leading-relaxed not-italic">
                {brand.address[0]}
                <br />
                {brand.address[1]}
              </address>
              <p className="mt-4 text-sm text-mb-muted">
                Fictional address. A real café website would include a map and directions here.
              </p>
            </div>
            <div className="rounded-3xl border border-mb-espresso/10 p-8">
              <h2 className="flex items-center gap-3 text-2xl">
                <Clock className="size-5 text-mb-caramel" strokeWidth={1.5} aria-hidden />
                Opening hours
              </h2>
              <dl className="mt-5 space-y-3">
                {brand.hours.map((h) => (
                  <div key={h.days} className="border-b border-mb-espresso/10 pb-3 last:border-0 last:pb-0">
                    <dt className="text-sm text-mb-muted">{h.days}</dt>
                    <dd className="font-mb-serif text-lg">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-3xl border border-mb-espresso/10 p-8">
              <h2 className="text-2xl">
                Contact <span className="font-sans text-sm text-mb-muted">(fictional)</span>
              </h2>
              <ul className="mt-5 space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-mb-caramel" aria-hidden />
                  {brand.phone}
                </li>
                <li className="flex items-center gap-3 break-all">
                  <Mail className="size-4 shrink-0 text-mb-caramel" aria-hidden />
                  {brand.email}
                </li>
              </ul>
              <p className="mt-5 text-sm text-mb-muted">
                These details are invented for the demo and do not connect to anyone.
              </p>
            </div>
          </FadeIn>
          <Reveal delay={0.1}>
            <MbPhoto
              photo={photos.counter}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/5] h-full rounded-3xl lg:aspect-auto"
            />
          </Reveal>
        </div>

        <Reveal className="mt-16 rounded-3xl border border-dashed border-mb-espresso/25 p-8 text-center sm:p-12">
          <h2 className="text-3xl">
            Good to <em>know</em>
          </h2>
          <ul className="mx-auto mt-6 grid max-w-3xl gap-4 text-mb-muted sm:grid-cols-3">
            <li>Walk-ins only — no reservations</li>
            <li>Plant-based milk available</li>
            <li>Free Wi-Fi for customers</li>
          </ul>
          <MbButtonLink href={`${BASE}/menu`} className="mt-10">
            Explore the Menu
          </MbButtonLink>
        </Reveal>
      </section>
    </>
  );
}

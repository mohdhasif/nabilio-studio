import type { Metadata } from "next";
import { Clock, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { AppointmentCta } from "@/demos/torquevale/components/AppointmentCta";
import { PageIntro } from "@/demos/torquevale/components/PageIntro";
import { SectionTitle } from "@/demos/torquevale/components/SectionTitle";
import { BASE, approach, brand, facilities } from "@/demos/torquevale/content";

export const metadata: Metadata = {
  title: "The Workshop",
  description: "About Torquevale Motorworks, a fictional independent workshop created as a demonstration.",
  alternates: { canonical: `${BASE}/workshop` },
};

export default function TorquevaleWorkshop() {
  return (
    <>
      <PageIntro
        kicker="The workshop"
        title="An independent workshop for everyday cars"
        description="Torquevale focuses on doing routine work carefully and explaining it clearly, so owners understand their car and feel confident about every repair."
      />

      <section aria-labelledby="tv-approach" className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionTitle
              id="tv-approach"
              kicker="Our approach"
              title="A clear, step-by-step process"
              description="Every car follows the same four steps, from the first inspection to handing back the keys."
            />
          </Reveal>
          <ol className="space-y-px border border-tv-line bg-tv-line">
            {approach.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.06} className="flex gap-6 bg-tv-panel p-6 sm:p-7">
                <span className="font-tv-display text-4xl leading-none font-bold text-tv-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-wide uppercase">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-tv-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="tv-facilities" className="border-y border-tv-line bg-tv-panel">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <SectionTitle id="tv-facilities" kicker="Facilities" title="Equipped for the job" />
            <ul className="mt-8 space-y-3">
              {facilities.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span aria-hidden className="size-1.5 bg-tv-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06} className="border border-tv-line bg-tv-black p-7">
            <h3 className="flex items-center gap-2.5 text-xl font-bold tracking-wide uppercase">
              <Clock className="size-5 text-tv-accent" aria-hidden />
              Opening hours
            </h3>
            <dl className="mt-5 space-y-3 text-sm">
              {brand.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 border-b border-tv-line pb-3 last:border-0">
                  <dt className="text-tv-muted">{h.days}</dt>
                  <dd className="text-right text-tv-text">{h.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12} className="border border-tv-line bg-tv-black p-7">
            <h3 className="flex items-center gap-2.5 text-xl font-bold tracking-wide uppercase">
              <MapPin className="size-5 text-tv-accent" aria-hidden />
              Location
            </h3>
            <address className="mt-5 text-sm leading-relaxed text-tv-text not-italic">
              {brand.address[0]}
              <br />
              {brand.address[1]}
            </address>
            <p className="mt-4 border-l-2 border-tv-accent pl-3 text-xs text-tv-muted">
              Fictional address for demonstration. A real site would embed a Google Map here.
            </p>
          </Reveal>
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}

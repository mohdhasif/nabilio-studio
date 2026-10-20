import type { Metadata } from "next";
import { Check, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { AppointmentCta } from "@/demos/torquevale/components/AppointmentCta";
import { PageIntro } from "@/demos/torquevale/components/PageIntro";
import { TvButtonLink } from "@/demos/torquevale/components/TvButton";
import { BASE, autoServices } from "@/demos/torquevale/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Servicing, diagnostics, brakes, tyres, air-conditioning and more at Torquevale Motorworks (fictional demo).",
  alternates: { canonical: `${BASE}/services` },
};

export default function TorquevaleServices() {
  return (
    <>
      <PageIntro
        kicker="Services"
        title="Everything your car needs, done properly"
        description="Each service starts with an inspection and a written quotation. Final pricing depends on your car's make, model and condition."
      />

      <section aria-label="Service list" className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
        <ul className="grid gap-6 md:grid-cols-2">
          {autoServices.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 2) * 0.06}>
              <article
                id={s.slug}
                aria-labelledby={`${s.slug}-title`}
                className="flex h-full scroll-mt-28 flex-col border border-tv-line bg-tv-panel p-7 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <s.icon className="size-9 text-tv-accent" strokeWidth={1.5} aria-hidden />
                  <span className="inline-flex items-center gap-1.5 border border-tv-line px-3 py-1 text-xs text-tv-muted">
                    <Clock className="size-3.5" aria-hidden />
                    {s.duration}
                  </span>
                </div>
                <h2 id={`${s.slug}-title`} className="mt-6 text-3xl font-bold tracking-wide uppercase">
                  {s.title}
                </h2>
                <p className="mt-3 leading-relaxed text-tv-muted">{s.summary}</p>
                <ul className="mt-6 grid flex-1 gap-2.5 sm:grid-cols-2" aria-label={`${s.title} includes`}>
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-tv-text">
                      <Check className="mt-0.5 size-4 shrink-0 text-tv-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <TvButtonLink
                  href={`${BASE}/appointment?service=${s.slug}`}
                  variant="outline"
                  className="mt-8 self-start"
                >
                  Book this service
                </TvButtonLink>
              </article>
            </Reveal>
          ))}
        </ul>
        <p className="mt-10 text-sm text-tv-muted">
          Durations are typical estimates for this demonstration. No prices are shown because this is a fictional
          business.
        </p>
      </section>

      <AppointmentCta />
    </>
  );
}

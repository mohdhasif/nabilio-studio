import type { Metadata } from "next";
import { CheckCircle2, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { BookCta } from "@/demos/coolnest/components/BookCta";
import { CnButtonLink } from "@/demos/coolnest/components/CnButton";
import { CnPageIntro } from "@/demos/coolnest/components/CnPageIntro";
import { BASE, services } from "@/demos/coolnest/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Aircond cleaning, chemical wash, repair & troubleshooting and installation — services of CoolNest, a fictional demo company.",
  alternates: { canonical: `${BASE}/services` },
};

export default function CoolNestServices() {
  return (
    <>
      <CnPageIntro
        kicker="Services"
        title="Aircond services for homes and small offices"
        description="Choose the service that fits your unit. Not sure which one you need? Pick “Repair & Troubleshooting” and a technician will advise."
      />

      <section aria-label="Service details" className="mx-auto max-w-site space-y-6 px-5 pb-16 sm:px-8 sm:pb-24">
        {services.map((s) => (
          <Reveal key={s.slug}>
            <article
              id={s.slug}
              aria-labelledby={`${s.slug}-title`}
              className="grid scroll-mt-28 gap-8 rounded-[2rem] border border-cn-line bg-white p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-cn-sky text-cn-primary">
                    <s.icon className="size-7" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cn-ice px-3 py-1.5 text-xs font-medium text-cn-muted">
                    <Clock className="size-3.5" aria-hidden />
                    {s.duration}
                  </span>
                </div>
                <h2 id={`${s.slug}-title`} className="mt-6 text-3xl font-bold tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-cn-muted">{s.description}</p>
                <div className="mt-6 rounded-2xl bg-cn-ice p-5">
                  <h3 className="text-sm font-semibold text-cn-ink">Consider this service if you notice:</h3>
                  <ul className="mt-3 space-y-1.5 text-[0.9375rem] text-cn-muted">
                    {s.signs.map((sign) => (
                      <li key={sign} className="flex gap-2.5">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cn-mint" />
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>
                <CnButtonLink href={`${BASE}/book?service=${s.slug}`} className="mt-8">
                  Book {s.title}
                </CnButtonLink>
              </div>
              <div className="self-start rounded-3xl bg-linear-to-br from-cn-sky to-cn-ice p-7">
                <h3 className="text-sm font-semibold tracking-wide text-cn-primary uppercase">What&apos;s included</h3>
                <ul className="mt-5 space-y-3.5" aria-label={`${s.title} includes`}>
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] text-cn-ink">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cn-mint-text" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
        <p className="pt-4 text-sm text-cn-muted">
          Durations are typical estimates for this demonstration. No prices are shown because CoolNest is a fictional
          business.
        </p>
      </section>

      <BookCta title="Ready to book your aircond service?" />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal } from "@/components/motion/Reveal";
import { AirconIllustration } from "@/demos/coolnest/components/AirconIllustration";
import { BookCta } from "@/demos/coolnest/components/BookCta";
import { HowItWorks } from "@/demos/coolnest/components/HowItWorks";
import { IllustrativeNote } from "@/demos/coolnest/components/IllustrativeNote";
import { ServiceCoverage } from "@/demos/coolnest/components/ServiceCoverage";
import { WorkGallery } from "@/demos/coolnest/components/WorkGallery";
import { CnButtonLink } from "@/demos/coolnest/components/CnButton";
import { CnSectionTitle } from "@/demos/coolnest/components/CnSectionTitle";
import { BASE, QUOTE_CTA, services, values } from "@/demos/coolnest/content";

export const metadata: Metadata = {
  title: { absolute: "CoolNest Aircond Services (Demo) — Aircond Cleaning, Repair & Installation" },
  description:
    "Aircond cleaning, chemical wash, repair and installation for homes — a fictional company website built by Nabilio Studio as a portfolio demonstration.",
  alternates: { canonical: BASE },
};

const assurances = [
  { icon: Sparkles, label: "Tidy work, area cleaned after" },
  { icon: ShieldCheck, label: "Quotation before any repair" },
  { icon: Timer, label: "Visit time confirmed in advance" },
];

export default function CoolNestHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-linear-to-b from-cn-sky via-cn-ice to-white">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 -z-10 size-[30rem] rounded-full bg-cn-mint/15 blur-3xl"
        />
        <div className="mx-auto grid max-w-site items-center gap-12 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <FadeIn>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold tracking-wide text-cn-primary uppercase shadow-sm">
                <span aria-hidden className="size-1.5 rounded-full bg-cn-mint" />
                Home aircond specialists
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Cleaner air. <span className="text-cn-primary">Cooler homes.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cn-muted">
                General servicing, chemical cleaning, troubleshooting and installation. Describe the problem once and
                get a quotation over WhatsApp — no endless back-and-forth.
              </p>
            </FadeIn>
            <FadeIn delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CnButtonLink href={`${BASE}/book`}>
                <CalendarDays className="size-5 max-[359px]:hidden" aria-hidden />
                {QUOTE_CTA}
              </CnButtonLink>
              <CnButtonLink href={`${BASE}/services`} variant="outline">
                View Services
              </CnButtonLink>
            </FadeIn>
            <FadeIn delay={0.28}>
              <p className="mt-3 text-xs text-cn-muted">
                Demo call to action — CoolNest is fictional and does not offer real quotations.
              </p>
            </FadeIn>
            <FadeIn delay={0.32}>
              <ul className="mt-10 flex flex-col gap-3 text-sm text-cn-ink sm:flex-row sm:flex-wrap sm:gap-x-6">
                {assurances.map((a) => (
                  <li key={a.label} className="flex items-center gap-2.5">
                    <span className="flex size-8 items-center justify-center rounded-full bg-white text-cn-mint-text shadow-sm">
                      <a.icon className="size-4" aria-hidden />
                    </span>
                    {a.label}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-[2rem] border border-cn-line bg-white/70 p-4 shadow-[0_30px_60px_-30px_rgba(12,43,60,0.35)] backdrop-blur sm:p-6">
              <AirconIllustration className="w-full" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="cn-services" className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <CnSectionTitle
            id="cn-services"
            align="center"
            kicker="Services"
            title="Everything your aircond needs"
            description="Four core services for homes and small offices, from routine servicing to new installations."
          />
          <div className="mt-6 text-center">
            <IllustrativeNote>
              Illustrative services for a fictional demo — not verified offerings of any real business.
            </IllustrativeNote>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.slug}
              delay={i * 0.06}
              className="group relative flex flex-col rounded-3xl border border-cn-line bg-white p-7 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-cn-primary/40 hover:shadow-[0_20px_40px_-24px_rgba(12,43,60,0.35)]"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-cn-sky text-cn-primary">
                <s.icon className="size-6" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-cn-muted">{s.summary}</p>
              <Link
                href={`${BASE}/services#${s.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cn-primary after:absolute after:inset-0 after:rounded-3xl"
              >
                Learn more<span className="sr-only"> about {s.title}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <HowItWorks />

      <WorkGallery />

      <ServiceCoverage />

      {/* Why CoolNest */}
      <section aria-labelledby="cn-why" className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <CnSectionTitle
              id="cn-why"
              kicker="Why CoolNest"
              title="Service you can feel good about"
              description="CoolNest is built around a few simple promises about how work is done in your home."
            />
            <CnButtonLink href={`${BASE}/about`} variant="outline" className="mt-8">
              About CoolNest
            </CnButtonLink>
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.06} className="rounded-3xl border border-cn-line p-7">
                <span aria-hidden className="block h-1 w-10 rounded-full bg-cn-mint" />
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-cn-muted">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <BookCta />
    </>
  );
}

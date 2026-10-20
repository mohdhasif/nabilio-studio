import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, ClipboardCheck, ShieldCheck, Timer } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal } from "@/components/motion/Reveal";
import { BASE, approach, autoServices, facilities } from "@/demos/torquevale/content";
import { AppointmentCta } from "@/demos/torquevale/components/AppointmentCta";
import { RimGraphic } from "@/demos/torquevale/components/RimGraphic";
import { SectionTitle } from "@/demos/torquevale/components/SectionTitle";
import { TvButtonLink } from "@/demos/torquevale/components/TvButton";

export const metadata: Metadata = {
  title: { absolute: "Torquevale Motorworks (Demo) — Automotive Service Centre" },
  alternates: { canonical: BASE },
};

const highlights = [
  { icon: ClipboardCheck, label: "Inspection before every repair" },
  { icon: ShieldCheck, label: "Written quotation, approved by you" },
  { icon: Timer, label: "Progress updates while you wait" },
];

export default function TorquevaleHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-tv-line">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.05]"
          style={{
            backgroundImage: "repeating-linear-gradient(115deg, #EEF0F2 0 1px, transparent 1px 22px)",
          }}
        />
        <RimGraphic className="absolute top-1/2 -right-48 -z-10 size-[34rem] -translate-y-1/2 text-tv-muted opacity-25 sm:-right-24 lg:right-0 lg:size-[40rem] lg:opacity-100" />
        <div aria-hidden className="absolute bottom-0 left-0 -z-10 h-1 w-1/3 bg-tv-accent" />

        <div className="mx-auto max-w-site px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-36">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="font-tv-display text-sm font-semibold tracking-[0.3em] text-tv-accent uppercase">
                Automotive service centre · Kuala Lumpur
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-5 text-6xl leading-[0.9] font-bold tracking-tight uppercase sm:text-7xl lg:text-8xl">
                Precision servicing.
                <span className="block text-tv-accent">Straight answers.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-tv-muted">
                Servicing, diagnostics and repairs for everyday cars — with a proper inspection first, a clear quotation
                before any work, and updates until your car is ready.
              </p>
            </FadeIn>
            <FadeIn delay={0.24} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <TvButtonLink href={`${BASE}/appointment`}>
                <CalendarCheck className="size-5" aria-hidden />
                Book Appointment
              </TvButtonLink>
              <TvButtonLink href={`${BASE}/services`} variant="outline">
                View Services
              </TvButtonLink>
            </FadeIn>
          </div>

          <FadeIn delay={0.32}>
            <ul className="mt-16 grid max-w-3xl gap-px border border-tv-line bg-tv-line sm:grid-cols-3">
              {highlights.map((h) => (
                <li key={h.label} className="flex items-center gap-3 bg-tv-black/90 px-5 py-4 text-sm text-tv-text">
                  <h.icon className="size-5 shrink-0 text-tv-accent" aria-hidden />
                  {h.label}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Services preview */}
      <section aria-labelledby="tv-services" className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionTitle
              id="tv-services"
              kicker="What we do"
              title="Workshop services"
              description="From routine servicing to fault-finding, every job follows the same careful process."
            />
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <TvButtonLink href={`${BASE}/services`} variant="outline">
              All services
            </TvButtonLink>
          </Reveal>
        </div>
        <ul className="mt-14 grid gap-px border border-tv-line bg-tv-line sm:grid-cols-2 lg:grid-cols-4">
          {autoServices.slice(0, 4).map((s, i) => (
            <Reveal
              as="li"
              key={s.slug}
              delay={i * 0.06}
              className="group relative bg-tv-black p-7 transition-colors hover:bg-tv-panel"
            >
              <s.icon className="size-8 text-tv-accent" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-6 text-2xl font-bold tracking-wide uppercase">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-tv-muted">{s.summary}</p>
              <Link
                href={`${BASE}/services#${s.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 font-tv-display text-sm font-semibold tracking-wider text-tv-text uppercase after:absolute after:inset-0 group-hover:text-tv-accent"
              >
                Details<span className="sr-only"> about {s.title}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Workshop intro */}
      <section aria-labelledby="tv-workshop" className="border-y border-tv-line bg-tv-panel">
        <div className="mx-auto grid max-w-site gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionTitle
              id="tv-workshop"
              kicker="The workshop"
              title="Built around honest, careful work"
              description="Torquevale is an independent workshop for everyday cars. The approach is simple: find the real problem, explain it clearly, and only do the work you approve."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {facilities.map((f) => (
                <li key={f} className="flex items-center gap-3 text-tv-text">
                  <span aria-hidden className="size-1.5 bg-tv-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <TvButtonLink href={`${BASE}/workshop`} variant="outline" className="mt-10">
              About the workshop
            </TvButtonLink>
          </Reveal>

          <ol className="grid gap-px self-start border border-tv-line bg-tv-line sm:grid-cols-2">
            {approach.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.06} className="bg-tv-black p-7">
                <span className="font-tv-display text-4xl font-bold text-tv-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-wide uppercase">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tv-muted">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}

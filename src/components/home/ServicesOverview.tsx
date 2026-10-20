import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

export function ServicesOverview() {
  return (
    <Section aria-labelledby="services-heading">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            id="services-heading"
            title="Websites built around your business needs."
            description="From a focused landing page to ongoing support, with clear starting prices for businesses just getting started online."
          />
        </Reveal>
        <Reveal delay={0.1} className="shrink-0">
          <ButtonLink href="/services" variant="outlineDark">
            Explore all services
          </ButtonLink>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal as="li" key={s.slug} delay={i * 0.06}>
            <Card interactive className="group relative flex h-full flex-col">
              <span className="flex size-12 items-center justify-center rounded-xl border border-gold/40 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-gold">
                <s.icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">{s.summary}</p>
              <p className="mt-5 border-t border-line pt-4 font-display text-sm text-muted">
                From <span className="text-base font-bold text-navy">{s.pricing.from}</span>
                {s.pricing.unit && ` ${s.pricing.unit}`}
              </p>
              <Link
                href={`/services#${s.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-navy after:absolute after:inset-0 after:rounded-card"
              >
                Learn more
                <span className="sr-only"> about {s.title}</span>
                <ArrowRight
                  className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

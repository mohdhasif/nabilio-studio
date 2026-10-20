import Link from "next/link";
import { ArrowRight, Check, Target } from "lucide-react";
import { CallToAction } from "@/components/home/CallToAction";
import { Process } from "@/components/home/Process";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PRICING_NOTE, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website Development Services",
  description:
    "Business landing pages, company profile websites, website redesign and maintenance for Malaysian SMEs. Professional website development tailored to your business.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Website development services for growing businesses."
        description="Four focused services covering everything from your first business website to ongoing support. Clear starting prices, with every project scoped to your needs and confirmed in a quotation before work begins."
      >
        <nav aria-label="Services on this page" className="mt-10">
          <ul className="flex flex-wrap gap-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex items-center rounded-full border border-navy-line bg-navy-raised/50 px-4 py-2 text-sm text-on-navy-muted transition-colors hover:border-gold hover:text-soft-white"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="bg-soft-white py-12 sm:py-20">
        <Container className="space-y-8 sm:space-y-10">
          {services.map((s, i) => (
            <Reveal key={s.slug} className="overflow-hidden rounded-card border border-line bg-white">
              <article
                id={s.slug}
                aria-labelledby={`${s.slug}-title`}
                className="grid scroll-mt-28 lg:grid-cols-[1.05fr_1fr]"
              >
                <div className="p-7 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-gold">
                      <s.icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="font-display text-sm font-semibold text-muted">
                      {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 id={`${s.slug}-title`} className="mt-7 text-h2 font-bold text-navy">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-lead text-muted">{s.description}</p>

                  <div className="mt-8 rounded-xl border border-line bg-soft-white p-5 sm:p-6">
                    <h3 className="flex items-center gap-2.5 font-display text-sm font-semibold text-navy">
                      <Target className="size-4 text-gold" aria-hidden />
                      Ideal for
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink">{s.idealFor}</p>
                  </div>

                  <div className="mt-5 rounded-xl border border-gold/50 p-5 sm:p-6">
                    <p className="font-display text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                      Starting from
                    </p>
                    <p className="mt-1 font-display text-navy">
                      <span className="text-3xl font-bold tracking-tight">{s.pricing.from}</span>
                      {s.pricing.unit && <span className="ml-1 text-sm font-medium text-muted">{s.pricing.unit}</span>}
                    </p>
                    <ul
                      className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink"
                      aria-label="Starting package includes"
                    >
                      {s.pricing.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check className="size-3.5 shrink-0 text-gold" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ButtonLink href={`/contact?service=${s.slug}`} variant="navy" size="lg" className="mt-9">
                    Enquire now<span className="sr-only"> about {s.title}</span>
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </ButtonLink>
                </div>

                <div className="grid gap-10 bg-navy p-7 text-soft-white sm:p-10 lg:p-12">
                  <div>
                    <h3 className="font-display text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                      Main features
                    </h3>
                    <ul className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-3 text-[0.9375rem] text-on-navy-muted">
                          <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-navy-line pt-8">
                    <h3 className="font-display text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                      Benefits
                    </h3>
                    <ul className="mt-5 space-y-3.5">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex gap-3 text-[0.9375rem] text-soft-white">
                          <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal className="rounded-card border border-dashed border-navy/20 p-7 text-center sm:p-10">
            <h2 className="font-display text-xl font-semibold text-navy">About pricing</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">{PRICING_NOTE}</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
            >
              Request a quotation
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </div>

      <Process />

      <CallToAction
        title="Not sure which service fits?"
        description="Tell us a little about your business and goals. We will recommend the most suitable option — honestly, even if that means starting small."
      />
    </>
  );
}

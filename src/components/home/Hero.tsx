import { ArrowRight, Check } from "lucide-react";
import { GeometricMark } from "@/components/brand/GeometricMark";
import { Reveal } from "@/components/motion/Reveal";
import { SiteMockup } from "@/components/portfolio/SiteMockup";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const assurances = ["Mobile-first & responsive", "SEO-ready foundations", "Clear, direct communication"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-soft-white">
      {/* Fine grid, faded towards the edges */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] mask-[radial-gradient(ellipse_70%_60%_at_70%_40%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F7F8FA 1px, transparent 1px), linear-gradient(to bottom, #F7F8FA 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <GeometricMark className="absolute -top-24 -right-40 -z-10 size-160 text-gold/15 lg:-right-24" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent"
      />

      <Container className="grid items-center gap-16 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-24 lg:pb-32">
        <div>
          <Reveal>
            <Eyebrow onDark>Web Design &amp; Development · Malaysia</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-display font-bold">
              Professional Websites. <span className="text-gold">Lasting Impressions.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lead text-on-navy-muted">
              We design and develop modern, responsive websites that help Malaysian businesses build credibility,
              showcase their services, and connect with more customers.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ButtonLink href="/services" size="lg">
              Explore Our Services
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </ButtonLink>
            <ButtonLink href="/portfolio" size="lg" variant="outlineLight">
              View Our Work
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.32}>
            <ul className="mt-12 flex flex-col gap-3 text-sm text-on-navy-muted sm:flex-row sm:flex-wrap sm:gap-x-8">
              {assurances.map((a) => (
                <li key={a} className="flex items-center gap-2.5">
                  <Check className="size-4 text-gold" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-3xl border border-gold/15" />
          <SiteMockup address="yourbusiness.com.my" />
          {/* Phone frame overlapping the browser */}
          <div
            aria-hidden
            className="absolute -bottom-8 -left-4 hidden w-32 rounded-[1.4rem] border border-navy-line bg-navy-deep p-2 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.7)] sm:block lg:-left-10"
          >
            <div className="space-y-2 rounded-2xl bg-navy-raised p-3">
              <span className="mx-auto block h-1 w-8 rounded-full bg-soft-white/20" />
              <span className="block h-1.5 w-8 rounded-full bg-gold/80" />
              <span className="block h-2 w-full rounded-full bg-soft-white/70" />
              <span className="block h-2 w-3/4 rounded-full bg-soft-white/70" />
              <span className="block h-1 w-full rounded-full bg-soft-white/20" />
              <span className="block h-1 w-5/6 rounded-full bg-soft-white/20" />
              <span className="block h-4 w-14 rounded-full bg-gold" />
              <span className="block aspect-square w-full rounded-lg border border-navy-line bg-navy-deep/60" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { BASE, QUOTE_CTA, steps } from "../content";
import { SectionTitle } from "./SectionTitle";
import { TvButtonLink } from "./TvButton";

export function HowItWorks() {
  return (
    <section aria-labelledby="tv-steps" className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionTitle
          id="tv-steps"
          kicker="How it works"
          title="One complete enquiry, no back-and-forth"
          description="Instead of a short “Hi, how much for service?” message, the workshop receives everything it needs to quote in one WhatsApp message."
        />
      </Reveal>
      <ol className="mt-14 grid gap-px border border-tv-line bg-tv-line sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 0.06} className="bg-tv-black p-7">
            <span className="font-tv-display text-4xl font-bold text-tv-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl font-bold tracking-wide uppercase">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-tv-muted">{step.text}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-10">
        <TvButtonLink href={`${BASE}/appointment`}>
          {QUOTE_CTA}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </TvButtonLink>
      </Reveal>
    </section>
  );
}

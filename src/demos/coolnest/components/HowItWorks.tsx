import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { BASE, QUOTE_CTA, steps } from "../content";
import { CnButtonLink } from "./CnButton";
import { CnSectionTitle } from "./CnSectionTitle";

export function HowItWorks() {
  return (
    <section aria-labelledby="cn-steps" className="bg-cn-ice">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <CnSectionTitle
            id="cn-steps"
            kicker="How it works"
            title="One complete enquiry, no back-and-forth"
            description="Instead of a short “Hi, can quote?” message, the business receives everything it needs to quote in one WhatsApp message."
          />
        </Reveal>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.06} className="rounded-3xl bg-white p-7 shadow-sm">
              <span className="flex size-10 items-center justify-center rounded-full bg-cn-primary font-cn-display text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-cn-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10">
          <CnButtonLink href={`${BASE}/book`}>
            {QUOTE_CTA}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </CnButtonLink>
        </Reveal>
      </div>
    </section>
  );
}

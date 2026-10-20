import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <Section tone="white" aria-labelledby="process-heading">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="How we work"
          id="process-heading"
          title="A clear process from first conversation to launch."
          description="Every project follows the same structured steps, so you always know what is happening and what comes next."
        />
      </Reveal>

      <ol className="relative mx-auto mt-16 grid max-w-2xl gap-10 lg:max-w-none lg:grid-cols-5 lg:gap-6">
        <span aria-hidden className="absolute top-6 right-[10%] left-[10%] hidden h-px bg-line lg:block" />
        {processSteps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 0.07} className="relative flex gap-5 lg:block lg:text-center">
            <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-white font-display text-sm font-bold text-navy lg:mx-auto">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-navy lg:mt-6">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

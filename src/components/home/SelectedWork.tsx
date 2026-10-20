import { Info } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ConceptProjectCard } from "@/components/portfolio/ConceptProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { conceptProjects } from "@/content/portfolio";

export function SelectedWork() {
  return (
    <Section tone="navy" aria-labelledby="work-heading">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionHeading
            onDark
            eyebrow="Selected work"
            id="work-heading"
            title="Concept projects across industries."
            description="Demonstration websites created to show how Nabilio Studio approaches design and structure for different types of businesses."
          />
        </Reveal>
        <Reveal delay={0.1} className="shrink-0">
          <ButtonLink href="/portfolio" variant="outlineLight">
            View full portfolio
          </ButtonLink>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {conceptProjects.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={i * 0.08}>
            <ConceptProjectCard project={p} onDark />
          </Reveal>
        ))}
      </ul>

      <p className="mt-10 flex items-start gap-3 text-sm text-on-navy-muted">
        <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
        These are demonstration projects, not completed client work. They do not represent real businesses.
      </p>
    </Section>
  );
}

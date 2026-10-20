import { Info } from "lucide-react";
import { CallToAction } from "@/components/home/CallToAction";
import { PageHero } from "@/components/layout/PageHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Section } from "@/components/ui/Section";
import { CONCEPT_LABEL } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Concept website projects by Nabilio Studio for automotive, home services and food & beverage businesses — demonstrating responsive design and development for Malaysian SMEs.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Concept projects that show what's possible."
        description="A selection of demonstration websites designed for common types of Malaysian businesses. Each concept explores how a clear structure and professional design can help customers find what they need."
      />

      <Section aria-label="Concept projects">
        <div
          role="note"
          className="mb-12 flex items-start gap-4 rounded-card border border-gold/50 bg-white p-5 sm:items-center sm:p-6"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
            <Info className="size-5" aria-hidden />
          </span>
          <p className="text-[0.9375rem] leading-relaxed text-ink">
            <strong className="font-semibold text-navy">{CONCEPT_LABEL}.</strong> These projects were created to
            demonstrate design and development capabilities. They are not completed client projects and do not represent
            real businesses.
          </p>
        </div>

        <PortfolioGrid />
      </Section>

      <CallToAction
        title="Imagine your business here."
        description="Each concept can be adapted to your brand, services and customers. Let's discuss what your website should include."
      />
    </>
  );
}

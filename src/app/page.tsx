import { Logo } from "@/components/brand/Logo";
import { Reveal } from "@/components/motion/Reveal";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/*
 * TEMPORARY — Stage 2 design-system preview.
 * Replaced by the real homepage in Stage 3.
 */

const swatches = [
  { name: "Primary Navy", hex: "#14243B", className: "bg-navy" },
  { name: "Champagne Gold", hex: "#C6A76A", className: "bg-gold" },
  { name: "Soft White", hex: "#F7F8FA", className: "bg-soft-white border border-line" },
  { name: "Dark Text", hex: "#172334", className: "bg-ink" },
  { name: "Muted Text", hex: "#64748B", className: "bg-muted" },
];

export default function DesignSystemPreview() {
  return (
    <main id="main" className="flex-1">
      <Section tone="navy">
        <Logo onDark />
        <Reveal className="mt-14">
          <SectionHeading
            as="h1"
            onDark
            eyebrow="Design system preview"
            title="Crafting Digital Excellence."
            description="Stage 2 foundation: tokens, typography, buttons and cards. This page is replaced by the homepage in Stage 3."
          />
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="lg">Primary action</Button>
          <Button size="lg" variant="outlineLight">
            Secondary action
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Colour" title="Brand palette" />
        <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {swatches.map((s) => (
            <li key={s.hex}>
              <div className={`h-24 rounded-card ${s.className}`} />
              <p className="mt-3 font-display text-sm font-semibold text-navy">{s.name}</p>
              <p className="text-sm text-muted">{s.hex}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Typography" title="Manrope headings, Inter body" />
        <div className="mt-10 space-y-6">
          <p className="font-display text-display font-bold text-navy">Display</p>
          <p className="font-display text-h1 font-bold text-navy">Heading 1</p>
          <p className="font-display text-h2 font-bold text-navy">Heading 2</p>
          <p className="font-display text-h3 font-semibold text-navy">Heading 3</p>
          <p className="max-w-2xl text-lead text-muted">
            Lead text — professional websites designed to help Malaysian businesses establish a credible digital
            presence.
          </p>
          <p className="max-w-2xl text-ink">Body text in Inter at the default size for comfortable reading.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href="/" variant="navy">
            Navy button
          </ButtonLink>
          <ButtonLink href="/" variant="outlineDark">
            Outline button
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card interactive>
            <h3 className="text-h3 font-semibold text-navy">Card on light</h3>
            <p className="mt-2 text-muted">Hover for the gentle lift and gold border.</p>
          </Card>
          <div className="rounded-card bg-navy p-6">
            <Card onDark interactive>
              <h3 className="text-h3 font-semibold text-soft-white">Card on navy</h3>
              <p className="mt-2 text-on-navy-muted">Used in dark sections.</p>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}

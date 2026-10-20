import { FileCheck2, Gauge, LifeBuoy, MessageSquareText, Search, Smartphone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: MessageSquareText,
    title: "Clear communication",
    text: "Plain-language updates and straightforward answers at every stage of the project.",
  },
  {
    icon: FileCheck2,
    title: "Transparent scope",
    text: "You know what is included before work begins. No hidden extras or vague promises.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first design",
    text: "Most customers will find you on their phone, so every layout is designed for mobile first.",
  },
  {
    icon: Gauge,
    title: "Fast and reliable",
    text: "Modern, optimised builds that load quickly and work consistently across devices.",
  },
  {
    icon: Search,
    title: "SEO-ready foundations",
    text: "Proper structure, metadata and page speed to give your website a solid start on Google.",
  },
  {
    icon: LifeBuoy,
    title: "Support after launch",
    text: "Help with updates, changes and troubleshooting whenever your website needs attention.",
  },
];

export function WhyUs() {
  return (
    <Section aria-labelledby="why-heading">
      <Reveal>
        <SectionHeading
          eyebrow="Why Nabilio Studio"
          id="why-heading"
          title="Professional work, without the agency overhead."
          description="A focused, personal approach that puts quality, clarity and long-term value first."
        />
      </Reveal>
      <ul className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <Reveal
            as="li"
            key={r.title}
            delay={(i % 3) * 0.06}
            className="bg-white p-8 transition-colors duration-300 hover:bg-soft-white"
          >
            <r.icon className="size-6 text-gold" strokeWidth={1.75} aria-hidden />
            <h3 className="mt-5 font-display text-lg font-semibold text-navy">{r.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{r.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

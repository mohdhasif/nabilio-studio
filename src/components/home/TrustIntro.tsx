import { Code2, MapPin, MessagesSquare, Wrench } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: MapPin,
    title: "Malaysia-based",
    text: "An independent studio that understands how local businesses and customers work.",
  },
  {
    icon: Code2,
    title: "Solid technical background",
    text: "Around four years of IT experience across PHP, Laravel, MySQL and web applications.",
  },
  {
    icon: MessagesSquare,
    title: "Work directly with the developer",
    text: "No middle layers. You speak with the person designing and building your website.",
  },
  {
    icon: Wrench,
    title: "Built to be maintained",
    text: "Clean, organised code that stays reliable and easy to update as your business grows.",
  },
];

export function TrustIntro() {
  return (
    <Section tone="white" aria-labelledby="intro-heading">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="About the studio"
            id="intro-heading"
            title="A boutique studio with solid technical foundations."
            description="Nabilio Studio helps small and medium-sized businesses present themselves professionally online — with websites that are thoughtfully designed, properly built and easy for customers to use."
          />
        </Reveal>
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.06}>
              <span className="flex size-11 items-center justify-center rounded-xl bg-navy text-gold">
                <p.icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

import { Bug, Code2, Database, Layers, LayoutTemplate, MessagesSquare, Palette, Puzzle, Sprout } from "lucide-react";
import { CallToAction } from "@/components/home/CallToAction";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Nabilio Studio is an independent, Malaysia-based web development studio focused on quality development, professional design and clear communication for SMEs.",
  path: "/about",
});

const focusAreas = [
  {
    icon: Code2,
    title: "Quality development",
    text: "Websites built with modern, well-structured code that performs reliably across devices and browsers.",
  },
  {
    icon: Palette,
    title: "Professional design",
    text: "Clean, considered layouts that present your business with credibility and make information easy to find.",
  },
  {
    icon: Puzzle,
    title: "Practical business solutions",
    text: "Features chosen for what helps your customers and your business, not for the sake of complexity.",
  },
  {
    icon: MessagesSquare,
    title: "Clear communication",
    text: "Straightforward explanations, realistic timelines and regular updates throughout the project.",
  },
  {
    icon: Sprout,
    title: "Long-term maintainability",
    text: "Organised, documented work that is easy to update, extend and support as your business grows.",
  },
];

const skills = [
  { icon: Code2, label: "PHP" },
  { icon: Layers, label: "Laravel" },
  { icon: Database, label: "MySQL" },
  { icon: LayoutTemplate, label: "Web applications" },
  { icon: Bug, label: "Technical troubleshooting" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nabilio Studio"
        title="An independent web studio, based in Malaysia."
        description="Nabilio Studio designs and develops professional websites for small and medium-sized businesses — combining careful design with dependable, maintainable development."
      />

      <Section tone="white" aria-labelledby="story-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              id="story-heading"
              eyebrow="Who we are"
              title="Helping Malaysian businesses look as professional online as they are in person."
            />
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lead text-muted">
            <p>
              Many good businesses are overlooked online simply because their website is outdated, difficult to use on a
              phone, or missing entirely. Nabilio Studio exists to close that gap.
            </p>
            <p>
              As an independent studio, we keep things personal and focused. You work directly with the person designing
              and building your website, so decisions are quick, communication is clear and nothing gets lost in
              handovers.
            </p>
            <p>
              The aim is simple: a credible, well-built website that makes it easy for customers to understand what you
              offer and get in touch.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section aria-labelledby="focus-heading">
        <Reveal>
          <SectionHeading
            id="focus-heading"
            eyebrow="Our focus"
            title="What guides every project."
            description="Five principles that shape how websites are planned, designed and built at Nabilio Studio."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((f, i) => (
            <Reveal
              as="li"
              key={f.title}
              delay={(i % 3) * 0.06}
              className="rounded-card border border-line bg-white p-7 sm:p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-navy text-gold">
                <f.icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{f.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="navy" aria-labelledby="founder-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              id="founder-heading"
              onDark
              eyebrow="The founder"
              title="Grounded in hands-on IT experience."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lead text-on-navy-muted">
              <p>
                Nabilio Studio was founded by a developer with approximately four years of experience in IT, working
                with PHP, Laravel and MySQL, building web applications and handling technical troubleshooting.
              </p>
              <p>
                That background brings a practical, problem-solving approach to every website: understanding how things
                work behind the scenes, building them properly, and fixing issues quickly when they arise.
              </p>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3" aria-label="Technical experience">
              {skills.map((s) => (
                <li
                  key={s.label}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-line bg-navy-raised/60 px-4 py-2 text-sm text-soft-white"
                >
                  <s.icon className="size-4 text-gold" strokeWidth={1.75} aria-hidden />
                  {s.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <CallToAction
        title="Let's talk about your website."
        description="Share a little about your business and what you have in mind. You will receive a clear, honest response on how Nabilio Studio can help."
      />
    </>
  );
}

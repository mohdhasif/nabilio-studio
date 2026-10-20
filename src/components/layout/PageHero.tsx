import { GeometricMark } from "@/components/brand/GeometricMark";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  children?: React.ReactNode;
};

/** Navy introduction band used at the top of inner pages. */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-soft-white">
      <GeometricMark className="absolute -top-20 -right-48 -z-10 size-140 text-gold/12 sm:-right-24" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent"
      />
      <Container className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow onDark>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-h1 font-bold">{title}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lead text-on-navy-muted">{description}</p>
          </Reveal>
          {children && <Reveal delay={0.24}>{children}</Reveal>}
        </div>
      </Container>
    </section>
  );
}

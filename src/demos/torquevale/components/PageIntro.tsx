import { FadeIn } from "@/components/motion/FadeIn";
import { SectionTitle } from "./SectionTitle";

export function PageIntro({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-tv-line">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{ backgroundImage: "repeating-linear-gradient(115deg, #EEF0F2 0 1px, transparent 1px 22px)" }}
      />
      <div aria-hidden className="absolute bottom-0 left-0 -z-10 h-1 w-1/4 bg-tv-accent" />
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
        <FadeIn>
          <SectionTitle as="h1" kicker={kicker} title={title} description={description} />
        </FadeIn>
      </div>
    </section>
  );
}

import { FadeIn } from "@/components/motion/FadeIn";
import { CnSectionTitle } from "./CnSectionTitle";

export function CnPageIntro({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-cn-sky to-white">
      <div aria-hidden className="absolute -top-32 -right-32 -z-10 size-96 rounded-full bg-cn-mint/15 blur-3xl" />
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-20">
        <FadeIn>
          <CnSectionTitle as="h1" kicker={kicker} title={title} description={description} />
        </FadeIn>
      </div>
    </section>
  );
}

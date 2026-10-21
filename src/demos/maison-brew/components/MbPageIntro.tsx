import { FadeIn } from "@/components/motion/FadeIn";
import { MbSectionTitle } from "./MbSectionTitle";

export function MbPageIntro({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="border-b border-mb-espresso/10 bg-mb-cream">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
        <FadeIn>
          <MbSectionTitle as="h1" kicker={kicker} title={title} description={description} />
        </FadeIn>
      </div>
    </section>
  );
}

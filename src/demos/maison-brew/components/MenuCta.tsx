import { Reveal } from "@/components/motion/Reveal";
import { BASE } from "../content";
import { MbButtonLink } from "./MbButton";

export function MenuCta({
  title = "Pull up a chair.",
  text = "Browse the full menu of coffee, teas, pastries and desserts — then come say hello.",
  showMenuLink = true,
}: {
  title?: string;
  text?: string;
  /** Hide on the Menu page itself. */
  showMenuLink?: boolean;
}) {
  return (
    <section aria-labelledby="mb-cta" className="bg-mb-espresso">
      <Reveal className="mx-auto max-w-site px-5 py-20 text-center sm:px-8 sm:py-28">
        <h2 id="mb-cta" className="mx-auto max-w-2xl text-4xl leading-tight text-mb-cream italic sm:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-mb-latte">{text}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          {showMenuLink && (
            <MbButtonLink href={`${BASE}/menu`} variant="light">
              Explore the Menu
            </MbButtonLink>
          )}
          <MbButtonLink href={`${BASE}/visit`} variant={showMenuLink ? "outlineLight" : "light"}>
            Visit Us
          </MbButtonLink>
        </div>
      </Reveal>
    </section>
  );
}

import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { MbPageIntro } from "@/demos/maison-brew/components/MbPageIntro";
import { MbPhoto } from "@/demos/maison-brew/components/MbPhoto";
import { MbSectionTitle } from "@/demos/maison-brew/components/MbSectionTitle";
import { MenuCta } from "@/demos/maison-brew/components/MenuCta";
import { BASE, photos } from "@/demos/maison-brew/content";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The fictional story behind Maison Brew, written as demonstration content for a Nabilio Studio portfolio project.",
  alternates: { canonical: `${BASE}/our-story` },
};

const principles = [
  { title: "Seasonal beans", text: "A rotating selection of coffees, chosen for flavour and freshness." },
  { title: "Baked in-house", text: "Pastries are made each morning in small batches, so they rarely last past lunch." },
  { title: "Time to slow down", text: "Unhurried service, comfortable seats and no pressure to rush your cup." },
];

export default function MaisonBrewStory() {
  return (
    <>
      <MbPageIntro
        kicker="Our story"
        title={
          <>
            Built around the <em>morning ritual.</em>
          </>
        }
        description="How a love of quiet mornings became a small neighbourhood café."
      />

      <div className="mx-auto max-w-site px-5 pt-12 sm:px-8">
        <p
          role="note"
          className="flex items-start gap-3 rounded-2xl border border-mb-caramel/40 bg-mb-cream p-5 text-[0.9375rem] text-mb-roast"
        >
          <Info className="mt-0.5 size-5 shrink-0 text-mb-caramel" aria-hidden />
          <span>
            <strong className="font-semibold text-mb-espresso">Demonstration content.</strong> Maison Brew and the story
            below are fictional, written by Nabilio Studio to show how a café could tell its story online. The people
            and events described are not real.
          </span>
        </p>
      </div>

      <section aria-labelledby="mb-story" className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <MbPhoto photo={photos.beans} className="aspect-[4/5] rounded-t-[10rem] rounded-b-3xl" />
          </Reveal>
          <Reveal delay={0.1} className="self-center">
            <MbSectionTitle
              id="mb-story"
              kicker="Where it began"
              title={
                <>
                  From a home kitchen to a <em>corner café.</em>
                </>
              }
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-mb-muted">
              <p>
                Maison Brew began as a weekend habit: friends gathering around a kitchen counter, trading notes on beans
                and testing pastry recipes until they were just right.
              </p>
              <p>
                The idea was simple — a calm, welcoming room where the coffee is taken seriously but nothing else needs
                to be. A short menu, made well, served without a rush.
              </p>
              <p>
                Today the café keeps the same spirit: seasonal coffee, a pastry case that changes with the week, and
                plenty of corners to settle into.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="mb-principles" className="bg-mb-cream">
        <div className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <MbSectionTitle
              id="mb-principles"
              align="center"
              kicker="What we care about"
              title={
                <>
                  Three small <em>promises</em>
                </>
              }
            />
          </Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-mb-espresso/10 bg-mb-espresso/10 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.08} className="bg-mb-paper p-8 sm:p-10">
                <span className="font-mb-serif text-5xl text-mb-caramel italic">0{i + 1}</span>
                <h3 className="mt-6 text-2xl">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-mb-muted">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <MenuCta />
    </>
  );
}

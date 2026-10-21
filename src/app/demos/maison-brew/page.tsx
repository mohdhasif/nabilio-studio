import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal } from "@/components/motion/Reveal";
import { MbButtonLink } from "@/demos/maison-brew/components/MbButton";
import { MbPhoto } from "@/demos/maison-brew/components/MbPhoto";
import { MbSectionTitle } from "@/demos/maison-brew/components/MbSectionTitle";
import { MenuCta } from "@/demos/maison-brew/components/MenuCta";
import { BASE, featured, formatPrice, menu, photos } from "@/demos/maison-brew/content";

export const metadata: Metadata = {
  title: { absolute: "Maison Brew (Demo) — Specialty Coffee & Café" },
  description:
    "Specialty coffee, house-baked pastries and a calm corner of the city — a fictional café website built by Nabilio Studio as a portfolio demonstration.",
  alternates: { canonical: BASE },
};

export default function MaisonBrewHome() {
  const featuredItems = featured.map((f) => ({ ...f, menuItem: menu.find((m) => m.name === f.item)! }));

  return (
    <>
      {/* Hero */}
      <section className="bg-mb-cream">
        <div className="mx-auto grid max-w-site items-center gap-12 px-5 pt-12 pb-16 sm:px-8 sm:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:pt-20 lg:pb-24">
          <div>
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.28em] text-mb-caramel uppercase">
                Specialty coffee · Pastries · Kuala Lumpur
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-6 text-6xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
                Slow coffee, <em className="text-mb-caramel">made with care.</em>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-mb-muted">
                A neighbourhood café for carefully brewed coffee, house-baked pastries and unhurried afternoons.
              </p>
            </FadeIn>
            <FadeIn delay={0.24} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <MbButtonLink href={`${BASE}/menu`}>
                Explore the Menu
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </MbButtonLink>
              <MbButtonLink href={`${BASE}/visit`} variant="outline">
                Visit Us
              </MbButtonLink>
            </FadeIn>
          </div>
          {/* Not animated: the hero photo is the largest element on load. */}
          <div className="relative">
            <MbPhoto photo={photos.hero} priority className="aspect-[4/5] rounded-t-[12rem] rounded-b-3xl" />
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-mb-paper px-5 py-4 shadow-[0_20px_40px_-24px_rgba(42,28,19,0.45)] sm:block">
              <p className="text-[0.6875rem] tracking-[0.2em] text-mb-muted uppercase">Open Tuesday – Sunday</p>
              <p className="mt-1 font-mb-serif text-lg">From 8:00 am</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured drinks */}
      <section aria-labelledby="mb-featured" className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <MbSectionTitle
              id="mb-featured"
              kicker="Featured"
              title={
                <>
                  House <em>favourites</em>
                </>
              }
              description="A few things we’re proud of, from our palm-sugar latte to croissants laminated over three days."
            />
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <Link
              href={`${BASE}/menu`}
              className="inline-flex items-center gap-2 border-b border-mb-espresso pb-1 text-sm tracking-[0.08em] uppercase hover:text-mb-caramel"
            >
              See full menu <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map(({ photo, menuItem }, i) => (
            <Reveal as="li" key={menuItem.name} delay={i * 0.07}>
              <MbPhoto
                photo={photo}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[3/4] rounded-2xl"
              />
              <div className="mt-5 flex items-baseline justify-between gap-3">
                <h3 className="text-2xl leading-snug">{menuItem.name}</h3>
                <p className="shrink-0 font-mb-serif text-lg text-mb-caramel">{formatPrice(menuItem.price)}</p>
              </div>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-mb-muted">{menuItem.description}</p>
            </Reveal>
          ))}
        </ul>
        <p className="mt-10 text-sm text-mb-muted">Sample prices in MYR for this fictional demo.</p>
      </section>

      {/* Introduction */}
      <section aria-labelledby="mb-intro" className="bg-mb-cream">
        <div className="mx-auto grid max-w-site items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal className="grid grid-cols-2 gap-4">
            <MbPhoto
              photo={photos.interior}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="aspect-[3/4] rounded-2xl"
            />
            <MbPhoto
              photo={photos.pastries}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="mt-12 aspect-[3/4] rounded-2xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <MbSectionTitle
              id="mb-intro"
              kicker="The café"
              title={
                <>
                  A small room for <em>good coffee</em> and good company.
                </>
              }
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-mb-muted">
              <p>
                Maison Brew pairs a short, considered coffee menu with pastries baked in-house every morning. Beans are
                rotated with the seasons, and every cup is made to order.
              </p>
              <p>Come for a quick flat white, or stay for the afternoon with a book and a slice of cake.</p>
            </div>
            <MbButtonLink href={`${BASE}/our-story`} variant="outline" className="mt-10">
              Read our story
            </MbButtonLink>
          </Reveal>
        </div>
      </section>

      <MenuCta />
    </>
  );
}

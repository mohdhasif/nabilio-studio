import type { Metadata } from "next";
import { MbPageIntro } from "@/demos/maison-brew/components/MbPageIntro";
import { MenuBoard } from "@/demos/maison-brew/components/MenuBoard";
import { MenuCta } from "@/demos/maison-brew/components/MenuCta";
import { BASE } from "@/demos/maison-brew/content";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Coffee, non-coffee drinks, pastries and desserts at Maison Brew — a fictional café menu with sample prices in MYR.",
  alternates: { canonical: `${BASE}/menu` },
};

export default function MaisonBrewMenu() {
  return (
    <>
      <MbPageIntro
        kicker="Menu"
        title={
          <>
            Coffee, tea <em>&amp;</em> things baked this morning
          </>
        }
        description="Filter by category to find your next favourite. Plant-based milk is available for any drink."
      />
      <section aria-label="Menu items" className="mx-auto max-w-site px-5 py-12 sm:px-8 sm:py-16">
        <MenuBoard />
        <p className="mt-14 border-t border-mb-espresso/10 pt-6 text-sm text-mb-muted">
          Prices shown are fictional sample prices in Malaysian Ringgit (MYR) for this portfolio demonstration. Maison
          Brew does not take orders or reservations.
        </p>
      </section>
      <MenuCta
        title="See you at the counter."
        text="No reservations needed — walk in, order at the counter and find a seat."
        showMenuLink={false}
      />
    </>
  );
}

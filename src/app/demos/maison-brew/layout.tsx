import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { MbDemoBanner } from "@/demos/maison-brew/components/MbDemoBanner";
import { MbFooter } from "@/demos/maison-brew/components/MbFooter";
import { MbHeader } from "@/demos/maison-brew/components/MbHeader";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maison Brew (Demo) — Specialty Coffee & Café",
    template: "%s | Maison Brew (Demo)",
  },
  description:
    "Portfolio demonstration website for a fictional specialty coffee café, designed and developed by Nabilio Studio.",
  // Fictional business: keep it out of search results so it is never mistaken for a real café.
  robots: { index: false, follow: true },
  openGraph: { siteName: "Nabilio Studio — Demo project" },
};

export default function MaisonBrewLayout({ children }: LayoutProps<"/demos/maison-brew">) {
  return (
    <div className={`${fraunces.variable} mb-theme flex flex-1 flex-col bg-mb-paper text-mb-espresso`}>
      <MbDemoBanner />
      <MbHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <MbFooter />
    </div>
  );
}

import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import { DemoBanner } from "@/demos/torquevale/components/DemoBanner";
import { TvFooter } from "@/demos/torquevale/components/TvFooter";
import { TvHeader } from "@/demos/torquevale/components/TvHeader";

const barlow = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Torquevale Motorworks (Demo) — Automotive Service Centre",
    template: "%s | Torquevale Motorworks (Demo)",
  },
  description:
    "Demonstration website for a fictional automotive service centre, designed and developed by Nabilio Studio.",
  // Fictional business: keep it out of search results so it is never mistaken for a real workshop.
  robots: { index: false, follow: true },
  openGraph: { siteName: "Nabilio Studio — Demo project" },
};

export default function TorquevaleLayout({ children }: LayoutProps<"/demos/torquevale">) {
  return (
    <div className={`${barlow.variable} tv-theme flex flex-1 flex-col bg-tv-black text-tv-text`}>
      <DemoBanner />
      <TvHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <TvFooter />
    </div>
  );
}

import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { CnDemoBanner } from "@/demos/coolnest/components/CnDemoBanner";
import { CnFooter } from "@/demos/coolnest/components/CnFooter";
import { CnHeader } from "@/demos/coolnest/components/CnHeader";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CoolNest Aircond Services (Demo) — Aircond Cleaning, Repair & Installation",
    template: "%s | CoolNest Aircond Services (Demo)",
  },
  description:
    "Portfolio demonstration website for a fictional Malaysian air-conditioning service company, designed and developed by Nabilio Studio.",
  // Fictional business: keep it out of search results so it is never mistaken for a real company.
  robots: { index: false, follow: true },
  openGraph: { siteName: "Nabilio Studio — Demo project" },
};

export default function CoolNestLayout({ children }: LayoutProps<"/demos/coolnest">) {
  return (
    <div className={`${sora.variable} cn-theme flex flex-1 flex-col bg-white text-cn-ink`}>
      <CnDemoBanner />
      <CnHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <CnFooter />
    </div>
  );
}

import type { Metadata } from "next";
import { CallToAction } from "@/components/home/CallToAction";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TrustIntro } from "@/components/home/TrustIntro";
import { WhyUs } from "@/components/home/WhyUs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} — Web Design & Development in Malaysia` },
  description:
    "Professional, responsive websites for Malaysian SMEs. Nabilio Studio designs and develops business landing pages, company profile websites, redesigns and ongoing website support.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIntro />
      <ServicesOverview />
      <SelectedWork />
      <Process />
      <WhyUs />
      <CallToAction />
    </>
  );
}

import type { Metadata } from "next";
import { CallToAction } from "@/components/home/CallToAction";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TrustIntro } from "@/components/home/TrustIntro";
import { WhyUs } from "@/components/home/WhyUs";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { businessSchema, websiteSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} — Web Design & Development in Malaysia` },
  description:
    "Nabilio Studio is a Malaysia-based web developer creating professional, mobile-friendly business websites for SMEs — landing pages, company profile websites, redesigns and ongoing website support.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={businessSchema()} />
      <JsonLd data={websiteSchema()} />
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

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Route path beginning with "/", used for the canonical URL. */
  path: string;
};

/** Build consistent per-page metadata (title, canonical, Open Graph, Twitter). */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

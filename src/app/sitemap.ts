import type { MetadataRoute } from "next";
import { mainNav, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return mainNav.map((item) => ({
    url: `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}

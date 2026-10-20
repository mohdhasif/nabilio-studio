import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.descriptor}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#F7F8FA",
    theme_color: "#14243B",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "200x200", type: "image/png" },
    ],
  };
}

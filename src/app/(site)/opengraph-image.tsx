import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Nabilio Studio — Professional websites for Malaysian businesses";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Malaysia-based web studio", title: "Professional Websites. Lasting Impressions." });
}

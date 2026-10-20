import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Nabilio Studio concept portfolio";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Portfolio", title: "Concept projects that show what's possible." });
}

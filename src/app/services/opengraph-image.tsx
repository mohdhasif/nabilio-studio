import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Nabilio Studio website development services";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Services", title: "Website development services for growing businesses." });
}

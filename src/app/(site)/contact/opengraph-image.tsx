import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Contact Nabilio Studio";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Contact", title: "Let's discuss your website." });
}

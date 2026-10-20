import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "About Nabilio Studio";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "About the studio", title: "An independent web studio, based in Malaysia." });
}

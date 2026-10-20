import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Fonts and logo as base64. Cached so the images can be prerendered at build
 * time (uncached file reads would make the routes dynamic). Paths are literal
 * so file tracing only includes these files.
 */
async function loadAssets() {
  "use cache";
  cacheLife("max");
  const files = await Promise.all([
    readFile(join(process.cwd(), "src/assets/og-fonts/manrope-latin-700-normal.woff")),
    readFile(join(process.cwd(), "src/assets/og-fonts/manrope-latin-800-normal.woff")),
    readFile(join(process.cwd(), "src/assets/og-fonts/inter-latin-500-normal.woff")),
    readFile(join(process.cwd(), "public/brand/nabilio-logo-horizontal-dark-trimmed.png")),
  ]);
  return files.map((f) => f.toString("base64"));
}

/** Branded 1200×630 social preview used by each route's opengraph-image. */
export async function renderOgImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  const [manrope700, manrope800, inter500, logo] = await loadAssets();
  const font = (b64: string) => Buffer.from(b64, "base64");
  const logoSrc = `data:image/png;base64,${logo}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#14243B",
        padding: "72px 80px",
        position: "relative",
        fontFamily: "Inter",
      }}
    >
      {/* Faint outline of the geometric N */}
      <svg
        width="640"
        height="640"
        viewBox="0 0 100 100"
        style={{ position: "absolute", right: -120, top: -40, opacity: 0.18 }}
      >
        <g fill="none" stroke="#C6A76A" strokeWidth="0.35">
          <path d="M18 29 L40 12 L82 45 L82 68 L40 35 L40 91 L18 74 Z" />
          <path d="M48 49 L67 64 L82 76 L82 91 L48 65 Z" />
          <path d="M68 12 L82 23 L82 42 L68 31 Z" />
        </g>
      </svg>

      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse requires a plain img */}
      <img
        src={logoSrc}
        width={siteConfig.brand.logoSize.width / 2.4}
        height={siteConfig.brand.logoSize.height / 2.4}
        alt=""
      />

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
        <div
          style={{ display: "flex", alignItems: "center", gap: 18, color: "#C6A76A", fontSize: 22, letterSpacing: 4 }}
        >
          <div style={{ width: 48, height: 2, background: "#C6A76A" }} />
          {eyebrow.toUpperCase()}
        </div>
        <div
          style={{
            marginTop: 28,
            fontFamily: "Manrope",
            fontWeight: 800,
            fontSize: 68,
            lineHeight: 1.08,
            letterSpacing: -1.5,
            color: "#F7F8FA",
          }}
        >
          {title}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", color: "#B4BFCF", fontSize: 24 }}>
        <span>{siteConfig.descriptor} · Malaysia</span>
        <span style={{ color: "#C6A76A", fontFamily: "Manrope", fontWeight: 700 }}>{siteConfig.tagline}</span>
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        { name: "Manrope", data: font(manrope700), weight: 700, style: "normal" },
        { name: "Manrope", data: font(manrope800), weight: 800, style: "normal" },
        { name: "Inter", data: font(inter500), weight: 500, style: "normal" },
      ],
    },
  );
}

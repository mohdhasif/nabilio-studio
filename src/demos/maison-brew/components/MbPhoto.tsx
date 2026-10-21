import Image from "next/image";
import { cn } from "@/lib/utils";
import type { PhotoSlot } from "../content";

/* Line-art motifs drawn on a 200×200 grid. */
const motifs: Record<PhotoSlot["motif"], React.ReactNode> = {
  cup: (
    <>
      <ellipse cx="100" cy="140" rx="62" ry="14" />
      <path d="M58 92h84l-8 38a14 14 0 0 1-14 11H80a14 14 0 0 1-14-11z" />
      <path d="M142 100c16 0 18 22 2 24" />
      <ellipse cx="100" cy="92" rx="42" ry="9" />
      <path d="M100 86c-6-7-15-2-10 4l10 8 10-8c5-6-4-11-10-4z" />
      <path d="M86 70c-4-8 4-12 0-20M100 66c-4-8 4-12 0-20M114 70c-4-8 4-12 0-20" opacity="0.6" />
    </>
  ),
  latte: (
    <>
      <path d="M72 50h56l-6 108a8 8 0 0 1-8 8H86a8 8 0 0 1-8-8z" />
      <path d="M75 92h50M76 118h48" opacity="0.7" />
      <path d="M90 74c6-6 14-6 20 0" opacity="0.7" />
      <path d="M60 166h80" />
    </>
  ),
  pour: (
    <>
      <path d="M68 46h64l-22 40H90z" />
      <path d="M100 86v18" strokeDasharray="3 5" />
      <path d="M76 108h48l6 50a10 10 0 0 1-10 11H80a10 10 0 0 1-10-11z" />
      <path d="M72 128h56" opacity="0.6" />
      <path d="M140 40c14 0 22 8 22 18" opacity="0.6" />
    </>
  ),
  iced: (
    <>
      <path d="M70 52h60l-8 112a8 8 0 0 1-8 7H86a8 8 0 0 1-8-7z" />
      <rect x="84" y="90" width="18" height="18" rx="3" transform="rotate(-12 93 99)" />
      <rect x="100" y="112" width="18" height="18" rx="3" transform="rotate(10 109 121)" />
      <path d="M112 28l-6 90" />
      <circle cx="130" cy="58" r="16" />
      <path d="M130 42v32M114 58h32" opacity="0.6" />
    </>
  ),
  cake: (
    <>
      <path d="M48 132l100-46v62H48z" />
      <path d="M48 132l100-46" />
      <path d="M48 146h100M48 118l100-12" opacity="0.6" />
      <ellipse cx="100" cy="158" rx="70" ry="10" />
    </>
  ),
  croissant: (
    <>
      <path d="M40 120c10-40 50-62 60-62s50 22 60 62c-14-6-24-8-32-6-10-16-18-22-28-22s-18 6-28 22c-8-2-18 0-32 6z" />
      <path d="M72 114c8-18 18-26 28-26s20 8 28 26" opacity="0.6" />
      <path d="M100 58v30M78 70l10 24M122 70l-10 24" opacity="0.6" />
    </>
  ),
  beans: (
    <>
      <ellipse cx="78" cy="88" rx="22" ry="30" transform="rotate(-25 78 88)" />
      <path d="M68 66c14 12 6 34 20 46" />
      <ellipse cx="124" cy="106" rx="22" ry="30" transform="rotate(20 124 106)" />
      <path d="M118 80c-10 14 4 32-6 50" />
      <ellipse cx="94" cy="148" rx="18" ry="24" transform="rotate(70 94 148)" opacity="0.7" />
    </>
  ),
  interior: (
    <>
      <path d="M40 160V70a30 30 0 0 1 60 0v90M110 160V70a30 30 0 0 1 60 0v90" />
      <path d="M70 40v88M140 40v88" opacity="0.5" />
      <path d="M30 160h150" />
      <path d="M60 140h50M85 140v20" />
      <path d="M150 20v20M140 52a10 10 0 0 1 20 0z" />
    </>
  ),
};

type Props = {
  photo: PhotoSlot;
  className?: string;
  /** next/image sizes hint for real photos. */
  sizes?: string;
  priority?: boolean;
};

/**
 * Shows a licensed photo when `photo.src` is set; otherwise an illustrated placeholder
 * that is clearly labelled as such (no stock photography is bundled with this demo).
 */
export function MbPhoto({ photo, className, sizes = "(min-width: 1024px) 50vw, 100vw", priority = false }: Props) {
  if (photo.src) {
    return (
      <div className={cn("relative overflow-hidden bg-mb-beige", className)}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${photo.alt}`}
      className={cn("relative isolate overflow-hidden bg-mb-beige", className)}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,#f5eee3_0%,transparent_55%),radial-gradient(circle_at_80%_90%,#d9c3a5_0%,transparent_60%)]"
      />
      <svg
        viewBox="0 0 200 200"
        aria-hidden
        className="absolute inset-0 m-auto h-3/5 w-3/5 text-mb-roast"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {motifs[photo.motif]}
      </svg>
      <span
        aria-hidden
        className="absolute bottom-3 left-3 rounded-full bg-mb-paper/90 px-2.5 py-1 text-[0.625rem] font-medium tracking-[0.14em] text-mb-muted uppercase"
      >
        Photo placeholder
      </span>
    </div>
  );
}

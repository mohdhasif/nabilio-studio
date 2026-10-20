import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Set when the logo sits on a navy background. */
  onDark?: boolean;
  /** Preload the image — set only for the above-the-fold header logo. */
  priority?: boolean;
  className?: string;
};

/**
 * Brand logo linking home. Uses the official horizontal logo when configured in
 * `siteConfig.brand`; otherwise falls back to a temporary text wordmark.
 */
export function Logo({ onDark = false, priority = false, className }: LogoProps) {
  const src = onDark ? siteConfig.brand.logoHorizontalDark : siteConfig.brand.logoHorizontal;

  return (
    <Link href="/" aria-label={`${siteConfig.name} — home`} className={cn("inline-flex items-center", className)}>
      {src ? (
        <Image
          src={src}
          alt={siteConfig.name}
          width={siteConfig.brand.logoSize.width}
          height={siteConfig.brand.logoSize.height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="h-9 w-auto sm:h-10"
        />
      ) : (
        <span className="inline-flex items-baseline gap-1.5 font-display leading-none" data-placeholder-logo>
          <span className={cn("text-lg font-extrabold tracking-tight", onDark ? "text-soft-white" : "text-navy")}>
            Nabilio
          </span>
          <span className="text-lg font-medium tracking-tight text-gold">Studio</span>
        </span>
      )}
    </Link>
  );
}

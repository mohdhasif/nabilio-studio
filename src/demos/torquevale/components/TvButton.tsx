import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const variants = {
  // Angled corner on the solid button only; on the outline it would cut the border.
  primary:
    "bg-tv-accent text-tv-black hover:bg-tv-accent-hover [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]",
  outline: "border border-tv-line text-tv-text hover:border-tv-accent hover:text-tv-accent",
} as const;

export function tvButtonClasses(variant: keyof typeof variants = "primary", className?: string) {
  return cn(
    "group inline-flex h-12 items-center justify-center gap-2 px-6 font-tv-display text-base font-semibold tracking-wider uppercase",
    "transition-colors duration-200",
    variants[variant],
    className,
  );
}

type Props = ComponentPropsWithoutRef<typeof Link> & { variant?: keyof typeof variants };

export function TvButtonLink({ variant, className, ...props }: Props) {
  return <Link className={tvButtonClasses(variant, className)} {...props} />;
}

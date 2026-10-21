import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-mb-espresso text-mb-cream hover:bg-mb-roast",
  outline:
    "border border-mb-espresso/25 text-mb-espresso hover:border-mb-espresso hover:bg-mb-espresso hover:text-mb-cream",
  light: "bg-mb-cream text-mb-espresso hover:bg-mb-beige",
  outlineLight:
    "border border-mb-cream/30 text-mb-cream hover:border-mb-cream hover:bg-mb-cream hover:text-mb-espresso",
} as const;

export function mbButtonClasses(variant: keyof typeof variants = "primary", className?: string) {
  return cn(
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium tracking-[0.08em] uppercase",
    "transition-colors duration-300",
    variants[variant],
    className,
  );
}

type Props = ComponentPropsWithoutRef<typeof Link> & { variant?: keyof typeof variants };

export function MbButtonLink({ variant, className, ...props }: Props) {
  return <Link className={mbButtonClasses(variant, className)} {...props} />;
}

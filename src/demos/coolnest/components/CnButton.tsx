import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-cn-primary text-white shadow-[0_10px_24px_-12px_rgba(10,110,148,0.8)] hover:bg-cn-primary-hover",
  outline: "border border-cn-line bg-white text-cn-ink hover:border-cn-primary hover:text-cn-primary",
  light: "bg-white text-cn-ink hover:bg-cn-sky",
} as const;

export function cnButtonClasses(variant: keyof typeof variants = "primary", className?: string) {
  return cn(
    "group inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 font-cn-display text-[0.9375rem] font-semibold",
    "transition-[background-color,color,border-color] duration-200",
    variants[variant],
    className,
  );
}

type Props = ComponentPropsWithoutRef<typeof Link> & { variant?: keyof typeof variants };

export function CnButtonLink({ variant, className, ...props }: Props) {
  return <Link className={cnButtonClasses(variant, className)} {...props} />;
}

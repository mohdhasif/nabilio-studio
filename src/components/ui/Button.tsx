import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-display text-sm font-semibold tracking-wide " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-out-soft " +
  "disabled:pointer-events-none disabled:opacity-50 active:translate-y-px";

const variants = {
  /** Gold fill with navy text — main call to action on any surface. */
  primary: "bg-gold text-navy hover:bg-[#d2b783] hover:shadow-[0_8px_24px_-10px_rgba(198,167,106,0.7)]",
  /** Navy fill — strong action on light surfaces. */
  navy: "bg-navy text-soft-white hover:bg-navy-raised",
  /** Outline for secondary actions on navy surfaces. */
  outlineLight: "border border-soft-white/30 text-soft-white hover:border-gold hover:text-gold",
  /** Outline for secondary actions on light surfaces. */
  outlineDark: "border border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-soft-white",
} as const;

const sizes = {
  md: "h-11 px-6",
  lg: "h-13 px-7 text-[0.9375rem]",
} as const;

type StyleProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function buttonClasses({ variant = "primary", size = "md" }: StyleProps = {}, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & StyleProps;

/** Internal or external link styled as a button. External links open in a new tab. */
export function ButtonLink({ variant, size, className, href, ...props }: ButtonLinkProps) {
  const isExternal = typeof href === "string" && /^(https?:|mailto:|tel:)/.test(href);
  if (isExternal) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={buttonClasses({ variant, size }, className)}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(props as ComponentPropsWithoutRef<"a">)}
      />
    );
  }
  return <Link href={href} className={buttonClasses({ variant, size }, className)} {...props} />;
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & StyleProps;

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses({ variant, size }, className)} {...props} />;
}

import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  /** Gold text only has sufficient contrast on navy; light surfaces use navy text with a gold rule. */
  onDark?: boolean;
  className?: string;
};

export function Eyebrow({ children, onDark = false, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 font-display text-eyebrow font-semibold uppercase",
        onDark ? "text-gold" : "text-navy",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-gold" />
      {children}
    </p>
  );
}

import { CONCEPT_LABEL } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function ConceptBadge({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide",
        onDark ? "border-gold/40 text-gold" : "border-navy/15 bg-soft-white text-navy",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-gold" />
      {CONCEPT_LABEL}
    </span>
  );
}

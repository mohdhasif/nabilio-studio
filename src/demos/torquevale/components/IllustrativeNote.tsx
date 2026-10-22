import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small label marking content as illustrative demo material, not a real workshop's offering. */
export function IllustrativeNote({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-start gap-2 border border-tv-line bg-tv-panel px-3 py-2 text-xs leading-relaxed text-tv-muted",
        className,
      )}
    >
      <Info className="mt-px size-3.5 shrink-0 text-tv-accent" aria-hidden />
      <span>{children}</span>
    </p>
  );
}

import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small label marking content as illustrative demo material, not a real business's offering. */
export function IllustrativeNote({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-start gap-2 rounded-xl border border-cn-line bg-white/80 px-3 py-2 text-xs leading-relaxed text-cn-muted",
        className,
      )}
    >
      <Info className="mt-px size-3.5 shrink-0 text-cn-primary" aria-hidden />
      <span>{children}</span>
    </p>
  );
}

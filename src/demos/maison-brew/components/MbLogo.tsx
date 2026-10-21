import Link from "next/link";
import { BASE } from "../content";
import { cn } from "@/lib/utils";

/** Fictional wordmark for the demo brand (invented for this demonstration). */
export function MbLogo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <Link href={BASE} className={cn("inline-flex flex-col leading-none", className)}>
      <span className={cn("font-mb-serif text-2xl tracking-tight", onDark ? "text-mb-cream" : "text-mb-espresso")}>
        Maison <em className="font-normal">Brew</em>
      </span>{" "}
      <span
        className={cn(
          "mt-1 text-[0.625rem] font-medium tracking-[0.28em] uppercase",
          onDark ? "text-mb-latte" : "text-mb-muted",
        )}
      >
        Specialty Coffee &amp; Café
      </span>
      <span className="sr-only"> (demo) — home</span>
    </Link>
  );
}

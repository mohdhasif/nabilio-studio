import Link from "next/link";
import { BASE } from "../content";
import { cn } from "@/lib/utils";

/** Fictional wordmark for the demo brand (invented for this demonstration). */
export function TvLogo({ className }: { className?: string }) {
  return (
    <Link href={BASE} className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden>
        <path
          d="M16 2 28 9v14l-12 7-12-7V9z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="text-tv-line"
        />
        <path
          d="M9.5 11h13M16 11v12"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="square"
          className="text-tv-accent"
        />
      </svg>
      <span className="font-tv-display leading-none">
        <span className="block text-xl font-bold tracking-wide text-tv-text uppercase">Torquevale</span>{" "}
        <span className="block text-[0.65rem] font-semibold tracking-[0.32em] text-tv-muted uppercase">Motorworks</span>
        <span className="sr-only"> (demo) — home</span>
      </span>
    </Link>
  );
}

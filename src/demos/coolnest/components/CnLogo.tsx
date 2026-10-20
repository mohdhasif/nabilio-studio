import Link from "next/link";
import { BASE } from "../content";
import { cn } from "@/lib/utils";

/** Fictional logo for the demo brand (invented for this demonstration). */
export function CnLogo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <Link href={BASE} className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 36 36" className="size-9" aria-hidden>
        <rect width="36" height="36" rx="11" className="fill-cn-primary" />
        <path
          d="M9 15c3-2.5 6-2.5 9 0s6 2.5 9 0M9 21c3-2.5 6-2.5 9 0s6 2.5 9 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="text-white"
        />
        <circle cx="27" cy="27" r="3" className="fill-cn-mint" />
      </svg>
      <span className="font-cn-display leading-none">
        <span className={cn("block text-lg font-bold tracking-tight", onDark ? "text-white" : "text-cn-ink")}>
          CoolNest
        </span>{" "}
        <span
          className={cn(
            "block text-[0.7rem] font-medium tracking-wide",
            onDark ? "text-cn-on-ink-muted" : "text-cn-muted",
          )}
        >
          Aircond Services
        </span>
        <span className="sr-only"> (demo) — home</span>
      </span>
    </Link>
  );
}

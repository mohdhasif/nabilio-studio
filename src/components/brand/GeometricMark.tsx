import { cn } from "@/lib/utils";

/**
 * Outline of the official geometric N symbol (paths from the approved logo kit),
 * used only as a faint decorative motif.
 */
export function GeometricMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden className={cn("pointer-events-none", className)}>
      <g stroke="currentColor" strokeWidth="0.35" strokeLinejoin="round">
        <path d="M18 29 L40 12 L82 45 L82 68 L40 35 L40 91 L18 74 Z" />
        <path d="M48 49 L67 64 L82 76 L82 91 L48 65 Z" />
        <path d="M68 12 L82 23 L82 42 L68 31 Z" />
      </g>
    </svg>
  );
}

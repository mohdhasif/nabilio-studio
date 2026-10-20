import { cn } from "@/lib/utils";

/** Decorative alloy-wheel line drawing (no imagery needed). */
export function RimGraphic({ className }: { className?: string }) {
  const spokes = Array.from({ length: 10 }, (_, i) => i * 36);
  return (
    <svg viewBox="0 0 400 400" aria-hidden className={cn("pointer-events-none", className)}>
      <g fill="none" stroke="currentColor">
        <circle cx="200" cy="200" r="196" strokeWidth="1" opacity="0.35" />
        <circle cx="200" cy="200" r="172" strokeWidth="14" opacity="0.12" />
        <circle cx="200" cy="200" r="150" strokeWidth="1.5" opacity="0.5" />
        <circle cx="200" cy="200" r="44" strokeWidth="1.5" opacity="0.6" />
        <circle cx="200" cy="200" r="20" strokeWidth="1" opacity="0.5" />
        {spokes.map((deg) => (
          <g key={deg} transform={`rotate(${deg} 200 200)`} opacity="0.55">
            <path d="M190 158 L184 54 Q200 46 216 54 L210 158" strokeWidth="1.2" />
          </g>
        ))}
        {[0, 72, 144, 216, 288].map((deg) => (
          <circle
            key={deg}
            cx="200"
            cy="170"
            r="4"
            strokeWidth="1"
            opacity="0.6"
            transform={`rotate(${deg} 200 200)`}
          />
        ))}
      </g>
    </svg>
  );
}

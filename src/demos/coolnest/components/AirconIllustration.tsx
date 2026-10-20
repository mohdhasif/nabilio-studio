import { cn } from "@/lib/utils";

/** Decorative wall-mounted aircond with airflow lines (SVG, no imagery). */
export function AirconIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" aria-hidden className={cn("pointer-events-none", className)}>
      <defs>
        <linearGradient id="cn-unit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e8f6fb" />
        </linearGradient>
      </defs>
      <rect x="40" y="40" width="400" height="120" rx="28" fill="url(#cn-unit)" stroke="#d6e8ef" strokeWidth="2" />
      <rect x="70" y="128" width="340" height="10" rx="5" fill="#d6e8ef" />
      <rect x="70" y="140" width="340" height="6" rx="3" fill="#0a6e94" opacity="0.18" />
      <circle cx="400" cy="78" r="6" fill="#14b8a6" />
      <rect x="300" y="72" width="80" height="12" rx="6" fill="#0a6e94" opacity="0.12" />
      <g fill="none" stroke="#0a6e94" strokeWidth="3" strokeLinecap="round" opacity="0.55">
        <path d="M110 190c20 18 20 40 0 58s-20 40 0 58" />
        <path d="M190 190c20 18 20 40 0 58s-20 40 0 58" opacity="0.8" />
        <path d="M270 190c20 18 20 40 0 58s-20 40 0 58" opacity="0.6" />
        <path d="M350 190c20 18 20 40 0 58s-20 40 0 58" opacity="0.4" />
      </g>
      <g fill="#14b8a6">
        <circle cx="150" cy="230" r="4" opacity="0.7" />
        <circle cx="232" cy="280" r="3" opacity="0.6" />
        <circle cx="312" cy="226" r="4" opacity="0.5" />
        <circle cx="388" cy="292" r="3" opacity="0.4" />
      </g>
    </svg>
  );
}

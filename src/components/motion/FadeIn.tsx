import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  /** Delay in seconds. */
  delay?: number;
  className?: string;
};

/**
 * CSS-only entrance for above-the-fold content: it starts at first paint, so it
 * doesn't wait for JavaScript (unlike Reveal) and doesn't delay LCP.
 * Reduced motion is handled globally in globals.css.
 */
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <div className={cn("animate-fade-up", className)} style={delay ? { animationDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}

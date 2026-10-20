import Link from "next/link";
import { ArrowLeft, Info } from "lucide-react";

/** Always-visible notice that this is a fictional demonstration site. */
export function DemoBanner() {
  return (
    <aside aria-label="Demo notice" className="border-b border-tv-line bg-tv-panel text-xs text-tv-muted sm:text-sm">
      <div className="mx-auto flex max-w-site flex-col gap-2 px-5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="flex items-start gap-2 sm:items-center">
          <Info className="mt-px size-4 shrink-0 text-tv-accent sm:mt-0" aria-hidden />
          <span>
            <strong className="font-semibold text-tv-text">Demo website.</strong> Torquevale Motorworks is a fictional
            business created by Nabilio Studio. Details shown are not real.
          </span>
        </p>
        <Link
          href="/portfolio"
          className="inline-flex shrink-0 items-center gap-1.5 self-start font-semibold text-tv-text hover:text-tv-accent sm:self-auto"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Back to Nabilio Studio portfolio
        </Link>
      </div>
    </aside>
  );
}

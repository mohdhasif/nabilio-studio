import Link from "next/link";
import { ArrowLeft, Info } from "lucide-react";

/** Always-visible notice that this is a fictional demonstration site. */
export function CnDemoBanner() {
  return (
    <aside aria-label="Demo notice" className="bg-cn-ink text-xs text-cn-on-ink-muted sm:text-sm">
      <div className="mx-auto flex max-w-site flex-col gap-2 px-5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="flex items-start gap-2 sm:items-center">
          <Info className="mt-px size-4 shrink-0 text-cn-mint sm:mt-0" aria-hidden />
          <span>
            <strong className="font-semibold text-white">Portfolio demo.</strong> CoolNest Aircond Services is a
            fictional business created by Nabilio Studio. Details shown are not real.
          </span>
        </p>
        <Link
          href="/portfolio"
          className="inline-flex shrink-0 items-center gap-1.5 self-start font-semibold text-white hover:text-cn-mint sm:self-auto"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Back to Nabilio Studio portfolio
        </Link>
      </div>
    </aside>
  );
}

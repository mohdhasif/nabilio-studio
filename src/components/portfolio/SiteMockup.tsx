import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SiteMockupProps = {
  icon?: LucideIcon;
  /** Address shown in the browser bar. */
  address?: string;
  className?: string;
};

/**
 * Stylised browser-window wireframe used instead of stock imagery.
 * Purely decorative — hidden from assistive technology.
 */
export function SiteMockup({ icon: Icon, address = "yourbusiness.my", className }: SiteMockupProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "overflow-hidden rounded-xl border border-navy-line bg-navy-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.65)]",
        className,
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-navy-line/80 bg-navy-raised/70 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-soft-white/20" />
          <span className="size-2 rounded-full bg-soft-white/20" />
          <span className="size-2 rounded-full bg-soft-white/20" />
        </div>
        <div className="flex-1 truncate rounded-md bg-navy-deep/80 px-3 py-1 text-[10px] tracking-wide text-on-navy-muted/70">
          {address}
        </div>
      </div>

      {/* Page */}
      <div className="space-y-5 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-4 rounded-sm bg-gold/90" />
            <span className="h-2 w-14 rounded-full bg-soft-white/50" />
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="h-1.5 w-8 rounded-full bg-soft-white/20" />
            <span className="h-1.5 w-8 rounded-full bg-soft-white/20" />
            <span className="h-1.5 w-8 rounded-full bg-soft-white/20" />
          </div>
        </div>

        <div className="grid grid-cols-[1.3fr_1fr] items-center gap-4">
          <div className="space-y-2.5">
            <span className="block h-1.5 w-12 rounded-full bg-gold/80" />
            <span className="block h-3 w-full rounded-full bg-soft-white/80" />
            <span className="block h-3 w-4/5 rounded-full bg-soft-white/80" />
            <span className="block h-1.5 w-full rounded-full bg-soft-white/20" />
            <span className="block h-1.5 w-3/4 rounded-full bg-soft-white/20" />
            <div className="flex gap-2 pt-1.5">
              <span className="h-5 w-16 rounded-full bg-gold" />
              <span className="h-5 w-14 rounded-full border border-soft-white/25" />
            </div>
          </div>
          <div className="flex aspect-4/3 items-center justify-center rounded-lg border border-navy-line bg-navy-raised">
            {Icon ? (
              <Icon className="size-8 text-gold" strokeWidth={1.25} />
            ) : (
              <span className="size-8 rotate-45 border border-gold/70" />
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2 rounded-md border border-navy-line/80 bg-navy-raised/50 p-2.5">
              <span className="block size-3 rounded-sm bg-gold/60" />
              <span className="block h-1.5 w-4/5 rounded-full bg-soft-white/40" />
              <span className="block h-1 w-full rounded-full bg-soft-white/15" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

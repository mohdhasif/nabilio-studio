import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"div"> & { onDark?: boolean; interactive?: boolean };

export function Card({ onDark = false, interactive = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border p-7 sm:p-8",
        onDark ? "border-navy-line bg-navy-raised/60" : "border-line bg-white",
        interactive &&
          "transition-[border-color,box-shadow,transform] duration-300 ease-out-soft hover:-translate-y-1 " +
            (onDark
              ? "hover:border-gold/50"
              : "hover:border-gold/60 hover:shadow-[0_18px_40px_-24px_rgba(20,36,59,0.35)]"),
        className,
      )}
      {...props}
    />
  );
}

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

const tones = {
  light: "bg-soft-white text-ink",
  white: "bg-white text-ink",
  navy: "bg-navy text-soft-white",
} as const;

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: keyof typeof tones;
  containerClassName?: string;
};

export function Section({ tone = "light", className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-20 sm:py-28", tones[tone], className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

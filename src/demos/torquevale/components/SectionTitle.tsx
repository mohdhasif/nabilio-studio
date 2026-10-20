import { cn } from "@/lib/utils";

type Props = {
  kicker: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  id?: string;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionTitle({ kicker, title, description, id, as: Heading = "h2", className }: Props) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="flex items-center gap-3 font-tv-display text-sm font-semibold tracking-[0.25em] text-tv-accent uppercase">
        <span aria-hidden className="h-0.5 w-6 bg-tv-accent" />
        {kicker}
      </p>
      <Heading
        id={id}
        className={cn(
          "mt-4 font-bold tracking-tight text-tv-text uppercase",
          Heading === "h1" ? "text-5xl leading-[0.95] sm:text-6xl lg:text-7xl" : "text-4xl leading-none sm:text-5xl",
        )}
      >
        {title}
      </Heading>
      {description && <p className="mt-5 text-lg leading-relaxed text-tv-muted">{description}</p>}
    </div>
  );
}

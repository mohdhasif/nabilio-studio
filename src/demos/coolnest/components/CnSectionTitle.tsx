import { cn } from "@/lib/utils";

type Props = {
  kicker: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  id?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
};

export function CnSectionTitle({
  kicker,
  title,
  description,
  id,
  as: Heading = "h2",
  align = "left",
  className,
}: Props) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="inline-flex items-center gap-2 rounded-full bg-cn-sky px-3.5 py-1.5 text-xs font-semibold tracking-wide text-cn-primary uppercase">
        <span aria-hidden className="size-1.5 rounded-full bg-cn-mint" />
        {kicker}
      </p>
      <Heading
        id={id}
        className={cn(
          "mt-5 font-bold tracking-tight text-cn-ink",
          Heading === "h1" ? "text-4xl leading-[1.1] sm:text-5xl lg:text-6xl" : "text-3xl leading-tight sm:text-4xl",
        )}
      >
        {title}
      </Heading>
      {description && <p className="mt-5 text-lg leading-relaxed text-cn-muted">{description}</p>}
    </div>
  );
}

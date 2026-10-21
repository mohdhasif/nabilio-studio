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

export function MbSectionTitle({
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
      <p className="text-xs font-medium tracking-[0.28em] text-mb-caramel uppercase">{kicker}</p>
      <Heading
        id={id}
        className={cn(
          "mt-4 text-mb-espresso",
          Heading === "h1"
            ? "text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            : "text-4xl leading-[1.08] tracking-tight sm:text-5xl",
        )}
      >
        {title}
      </Heading>
      {description && <p className="mt-6 text-lg leading-relaxed text-mb-muted">{description}</p>}
    </div>
  );
}

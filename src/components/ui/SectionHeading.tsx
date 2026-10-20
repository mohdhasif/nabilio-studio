import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  /** Use "h1" for page intros; defaults to "h2" for in-page sections. */
  as?: "h1" | "h2";
  /** id for the heading, e.g. for aria-labelledby. */
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow onDark={onDark} className="mb-5">
          {eyebrow}
        </Eyebrow>
      )}
      <Heading
        id={id}
        className={cn("font-bold", Heading === "h1" ? "text-h1" : "text-h2", onDark ? "text-soft-white" : "text-navy")}
      >
        {title}
      </Heading>
      {description && (
        <p className={cn("mt-5 text-lead", onDark ? "text-on-navy-muted" : "text-muted")}>{description}</p>
      )}
    </div>
  );
}

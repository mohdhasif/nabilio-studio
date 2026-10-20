import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ConceptProject } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { ConceptBadge } from "./ConceptBadge";
import { SiteMockup } from "./SiteMockup";

type Props = {
  project: ConceptProject;
  onDark?: boolean;
  /** Show the highlights list (used on the portfolio page). */
  detailed?: boolean;
  headingLevel?: "h2" | "h3";
};

function DemoLink({ href, className, title }: { href: string; className: string; title: string }) {
  const content = (
    <>
      View Live Demo
      <span className="sr-only">: {title}</span>
      <ArrowUpRight className="size-4" aria-hidden />
    </>
  );
  // Internal demos (e.g. /demos/torquevale) stay in the same tab; external demos open a new one.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function ConceptProjectCard({ project, onDark = false, detailed = false, headingLevel: Heading = "h3" }: Props) {
  const demoLinkClass = cn(
    "inline-flex items-center gap-1.5 font-display text-sm font-semibold transition-colors",
    onDark ? "text-gold hover:text-soft-white" : "text-navy hover:text-gold",
  );

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card border transition-[border-color,transform,box-shadow] duration-300 ease-out-soft hover:-translate-y-1",
        onDark
          ? "border-navy-line bg-navy-raised/40 hover:border-gold/50"
          : "border-line bg-white hover:border-gold/60 hover:shadow-[0_18px_40px_-24px_rgba(20,36,59,0.35)]",
      )}
    >
      <div className={cn("p-5 sm:p-6", onDark ? "bg-navy-raised/40" : "bg-navy")}>
        <SiteMockup
          icon={project.icon}
          address={`concept-${project.slug}.demo`}
          className="transition-transform duration-500 ease-out-soft group-hover:scale-[1.015]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <ConceptBadge onDark={onDark} className="self-start" />
        <p
          className={cn("mt-5 text-xs font-semibold tracking-[0.14em] uppercase", onDark ? "text-gold" : "text-muted")}
        >
          {project.category}
        </p>
        <Heading className={cn("mt-2 text-h3 font-bold", onDark ? "text-soft-white" : "text-navy")}>
          {project.title}
        </Heading>
        <p className={cn("mt-3 text-sm leading-relaxed", onDark ? "text-on-navy-muted" : "text-muted")}>
          {project.description}
        </p>
        {detailed && (
          <ul className={cn("mt-5 space-y-2 text-sm", onDark ? "text-on-navy-muted" : "text-ink")}>
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-gold" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-6">
          {project.demoUrl ? (
            <DemoLink href={project.demoUrl} className={demoLinkClass} title={project.title} />
          ) : (
            <p className={cn("text-sm", onDark ? "text-on-navy-muted/80" : "text-muted")}>Live demo coming soon</p>
          )}
        </div>
      </div>
    </article>
  );
}

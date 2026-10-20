"use client";

import { useState } from "react";
import { conceptProjects, portfolioCategories, type PortfolioCategory } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { ConceptProjectCard } from "./ConceptProjectCard";

type Filter = "All" | PortfolioCategory;

export function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...portfolioCategories];
  const visible = filter === "All" ? conceptProjects : conceptProjects.filter((p) => p.category === filter);

  return (
    <div>
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2.5">
        {filters.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-5 py-2.5 font-display text-sm font-semibold transition-colors duration-200",
                active
                  ? "border-navy bg-navy text-soft-white"
                  : "border-navy/15 bg-white text-navy hover:border-navy/40",
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {filter !== "All" && ` in ${filter}`}.
      </p>

      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.slug}>
            <ConceptProjectCard project={p} detailed headingLevel="h2" />
          </li>
        ))}
      </ul>
    </div>
  );
}

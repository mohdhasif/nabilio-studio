"use client";

import { useState } from "react";
import { formatPrice, menu, menuCategories, type MenuCategory, type MenuItem } from "../content";
import { cn } from "@/lib/utils";

type Filter = "All" | MenuCategory;

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <li className="flex h-full flex-col rounded-2xl border border-mb-espresso/10 bg-mb-paper p-6 transition-colors duration-300 hover:border-mb-espresso/30">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xl leading-snug text-mb-espresso">{item.name}</h3>
        <p className="shrink-0 font-mb-serif text-lg text-mb-caramel">
          <span className="sr-only">Price: </span>
          {formatPrice(item.price)}
        </p>
      </div>
      <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-mb-muted">{item.description}</p>
      {item.tags && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Notes">
          {item.tags.map((t) => (
            <li
              key={t}
              className={cn(
                "rounded-full px-2.5 py-1 text-[0.6875rem] font-medium tracking-wide",
                t === "Signature" ? "bg-mb-espresso text-mb-cream" : "bg-mb-beige text-mb-roast",
              )}
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

/** Filterable menu. Shows every category in sections, or one category on its own. */
export function MenuBoard() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...menuCategories];
  const categories = filter === "All" ? menuCategories : [filter];
  const count = filter === "All" ? menu.length : menu.filter((m) => m.category === filter).length;

  return (
    <div>
      <div
        role="group"
        aria-label="Filter menu by category"
        className="sticky top-20 z-30 -mx-5 flex flex-wrap gap-2 border-b border-mb-espresso/10 bg-mb-paper/95 px-5 py-3 backdrop-blur sm:mx-0 sm:rounded-full sm:border sm:px-2 sm:py-2"
      >
        {filters.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-4 py-2.5 text-sm tracking-wide transition-colors sm:px-5",
                active ? "bg-mb-espresso text-mb-cream" : "text-mb-roast hover:bg-mb-beige",
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {count} items{filter !== "All" && ` in ${filter}`}.
      </p>

      <div className="mt-12 space-y-16">
        {categories.map((cat) => (
          <section key={cat} aria-labelledby={`menu-${cat}`}>
            <div className="flex items-baseline gap-4">
              <h2 id={`menu-${cat}`} className="text-3xl text-mb-espresso sm:text-4xl">
                {cat}
              </h2>
              <span aria-hidden className="h-px flex-1 bg-mb-espresso/15" />
            </div>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {menu
                .filter((m) => m.category === cat)
                .map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

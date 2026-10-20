"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { BASE, nav } from "../content";
import { cn } from "@/lib/utils";
import { TvButtonLink } from "./TvButton";
import { TvLogo } from "./TvLogo";

const isActive = (pathname: string, href: string) =>
  href === BASE ? pathname === BASE : pathname === href || pathname.startsWith(`${href}/`);

export function TvHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the mobile menu on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const toggle = toggleRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-tv-line bg-tv-black/90 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-site items-center justify-between gap-6 px-5 sm:px-8">
          <TvLogo />
          <nav aria-label="Torquevale" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative py-2 font-tv-display text-base font-semibold tracking-wider uppercase transition-colors",
                        "after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-tv-accent after:transition-transform",
                        active ? "text-tv-text after:scale-x-100" : "text-tv-muted after:scale-x-0 hover:text-tv-text",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <TvButtonLink href={`${BASE}/appointment`}>Book Appointment</TvButtonLink>
            </div>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex size-11 items-center justify-center border border-tv-line text-tv-text hover:border-tv-accent hover:text-tv-accent md:hidden"
              aria-expanded={open}
              aria-controls="tv-mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: its backdrop-filter would otherwise contain this fixed panel. */}
      <div
        id="tv-mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto border-t border-tv-line bg-tv-black md:hidden"
      >
        <nav aria-label="Torquevale mobile" className="px-5 py-6 sm:px-8">
          <ul className="divide-y divide-tv-line">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-4 font-tv-display text-2xl font-bold tracking-wide uppercase",
                      active ? "text-tv-accent" : "text-tv-text hover:text-tv-accent",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <TvButtonLink href={`${BASE}/appointment`} className="mt-8 w-full" onClick={() => setOpen(false)}>
            Book Appointment
          </TvButtonLink>
        </nav>
      </div>
    </>
  );
}

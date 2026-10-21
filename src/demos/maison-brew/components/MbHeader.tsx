"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { BASE, nav } from "../content";
import { cn } from "@/lib/utils";
import { MbLogo } from "./MbLogo";

const isActive = (pathname: string, href: string) =>
  href === BASE ? pathname === BASE : pathname === href || pathname.startsWith(`${href}/`);

export function MbHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  // The demo notice sits above the sticky header, so the panel starts at the header's current bottom edge.
  const [panelTop, setPanelTop] = useState(0);

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
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-mb-espresso/10 bg-mb-paper/90 backdrop-blur-md"
      >
        <div className="mx-auto flex h-20 max-w-site items-center justify-between gap-6 px-5 sm:px-8">
          <MbLogo />
          <nav aria-label="Maison Brew" className="hidden md:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative py-2 text-sm tracking-[0.08em] uppercase transition-colors",
                        "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-mb-espresso after:transition-transform after:duration-300",
                        active
                          ? "text-mb-espresso after:scale-x-100"
                          : "text-mb-muted after:scale-x-0 hover:text-mb-espresso",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-mb-espresso/20 text-mb-espresso hover:border-mb-espresso md:hidden"
            aria-expanded={open}
            aria-controls="mb-mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => {
              setPanelTop(headerRef.current?.getBoundingClientRect().bottom ?? 0);
              setOpen((v) => !v);
            }}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </header>

      {/* Outside <header>: its backdrop-filter would otherwise contain this fixed panel. */}
      <div
        id="mb-mobile-menu"
        ref={panelRef}
        hidden={!open}
        style={{ top: panelTop }}
        className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-mb-paper md:hidden"
      >
        <nav aria-label="Maison Brew mobile" className="px-5 py-10 sm:px-8">
          <ul className="space-y-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-baseline justify-between border-b border-mb-espresso/10 py-4 font-mb-serif text-3xl",
                      active ? "text-mb-caramel italic" : "text-mb-espresso hover:text-mb-caramel",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

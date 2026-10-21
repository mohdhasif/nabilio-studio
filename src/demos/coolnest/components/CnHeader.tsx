"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { BASE, nav } from "../content";
import { cn } from "@/lib/utils";
import { CnButtonLink } from "./CnButton";
import { CnLogo } from "./CnLogo";

const isActive = (pathname: string, href: string) =>
  href === BASE ? pathname === BASE : pathname === href || pathname.startsWith(`${href}/`);

export function CnHeader() {
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
      <header ref={headerRef} className="sticky top-0 z-50 border-b border-cn-line bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-site items-center justify-between gap-6 px-5 sm:px-8">
          <CnLogo />
          <nav aria-label="CoolNest" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-2xl bg-cn-ice p-1">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
                        active ? "bg-white text-cn-primary shadow-sm" : "text-cn-muted hover:text-cn-ink",
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
              <CnButtonLink href={`${BASE}/book`} className="h-11">
                Book a Service
              </CnButtonLink>
            </div>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-cn-line text-cn-ink hover:border-cn-primary hover:text-cn-primary md:hidden"
              aria-expanded={open}
              aria-controls="cn-mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => {
                setPanelTop(headerRef.current?.getBoundingClientRect().bottom ?? 0);
                setOpen((v) => !v);
              }}
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: its backdrop-filter would otherwise contain this fixed panel. */}
      <div
        id="cn-mobile-menu"
        ref={panelRef}
        hidden={!open}
        style={{ top: panelTop }}
        className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-cn-line bg-white md:hidden"
      >
        <nav aria-label="CoolNest mobile" className="px-5 py-6 sm:px-8">
          <ul className="space-y-2">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-2xl px-5 py-4 font-cn-display text-xl font-semibold",
                      active ? "bg-cn-sky text-cn-primary" : "text-cn-ink hover:bg-cn-ice",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <CnButtonLink href={`${BASE}/book`} className="mt-6 w-full" onClick={() => setOpen(false)}>
            Book a Service
          </CnButtonLink>
        </nav>
      </div>
    </>
  );
}

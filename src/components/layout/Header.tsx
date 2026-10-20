"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/config/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the mobile menu on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
          scrolled || open
            ? "border-navy-line/70 bg-navy/95 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md"
            : "border-transparent bg-navy",
        )}
      >
        <Container className="flex h-18 items-center justify-between gap-6 lg:h-20">
          <Logo onDark priority />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative rounded-full px-4 py-2 font-display text-sm font-medium transition-colors duration-200",
                        "after:absolute after:inset-x-4 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-300",
                        active
                          ? "text-soft-white after:scale-x-100"
                          : "text-on-navy-muted after:scale-x-0 hover:text-soft-white",
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
              <ButtonLink href="/contact">Start a Project</ButtonLink>
            </div>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-navy-line text-soft-white transition-colors hover:border-gold hover:text-gold lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </Container>
      </header>

      {/* Outside <header>: its backdrop-filter would otherwise contain this fixed panel. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto border-t border-navy-line bg-navy lg:hidden"
      >
        <Container className="py-8">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-navy-line">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-4 font-display text-xl font-semibold",
                        active ? "text-gold" : "text-soft-white hover:text-gold",
                      )}
                    >
                      {item.label}
                      {active && <span aria-hidden className="size-1.5 rounded-full bg-gold" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ButtonLink href="/contact" size="lg" className="mt-8 w-full" onClick={() => setOpen(false)}>
            Start a Project
          </ButtonLink>
        </Container>
      </div>
    </>
  );
}

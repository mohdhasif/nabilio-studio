import type { LucideIcon } from "lucide-react";
import { AirVent, Car, Coffee } from "lucide-react";

export type PortfolioCategory = "Automotive" | "Home Services" | "Food & Beverage";

export type ConceptProject = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  highlights: string[];
  /** Working demo URL (internal path such as "/demos/…" or a full URL); null shows "Live demo coming soon". */
  demoUrl: string | null;
  /** Icon shown in the generated preview mock-up (no stock imagery). */
  icon: LucideIcon;
};

export const CONCEPT_LABEL = "Concept Project — Demonstration Only";

export const portfolioCategories: PortfolioCategory[] = ["Automotive", "Home Services", "Food & Beverage"];

/**
 * Demonstration projects created to show design and development capability.
 * These are NOT client projects — keep the concept label visible wherever they appear.
 */
export const conceptProjects: ConceptProject[] = [
  {
    slug: "automotive-service-centre",
    title: "Automotive Service Centre",
    category: "Automotive",
    description:
      "Torquevale Motorworks, a fictional car service workshop. A multi-page website with a clear service menu and a structured WhatsApp quotation enquiry that captures the car, mileage and symptoms up front.",
    highlights: ["Service menu with clear descriptions", "WhatsApp quotation enquiry form", "Workshop hours and location"],
    demoUrl: "/demos/torquevale",
    icon: Car,
  },
  {
    slug: "aircond-services",
    title: "Aircond Service Company",
    category: "Home Services",
    description:
      "CoolNest Aircond Services, a fictional air-conditioning company. A mobile-first website covering cleaning, chemical wash, repair and installation, with a structured WhatsApp quotation enquiry.",
    highlights: ["Clear service breakdowns", "WhatsApp quotation enquiry form", "Trust-building company profile"],
    demoUrl: "/demos/coolnest",
    icon: AirVent,
  },
  {
    slug: "specialty-coffee-cafe",
    title: "Specialty Coffee Café",
    category: "Food & Beverage",
    description:
      "Maison Brew, a fictional specialty coffee café. An editorial-style website presenting the menu, story and location in a warm, easy-to-browse layout.",
    highlights: ["Filterable menu with sample prices", "Featured drinks and brand story", "Location and opening hours"],
    demoUrl: "/demos/maison-brew",
    icon: Coffee,
  },
];

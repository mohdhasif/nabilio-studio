import type { LucideIcon } from "lucide-react";
import { Car, Coffee, Wrench } from "lucide-react";

export type PortfolioCategory = "Automotive" | "Home Services" | "Food & Beverage";

export type ConceptProject = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  highlights: string[];
  /** Working demo URL — add when a live demo is available. */
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
      "A website concept for a car service and repair workshop, focused on listing services clearly and making appointment enquiries quick on mobile.",
    highlights: ["Service menu with clear descriptions", "WhatsApp booking enquiry", "Location and operating hours"],
    demoUrl: null,
    icon: Car,
  },
  {
    slug: "home-repair-maintenance",
    title: "Home Repair & Maintenance",
    category: "Home Services",
    description:
      "A website concept for a home services provider covering air-conditioning, plumbing and electrical work, structured around service areas and fast enquiries.",
    highlights: ["Service categories and coverage areas", "Simple quotation request", "Trust-building company profile"],
    demoUrl: null,
    icon: Wrench,
  },
  {
    slug: "cafe-bakery",
    title: "Café & Bakery",
    category: "Food & Beverage",
    description:
      "A website concept for a neighbourhood café and bakery, presenting the menu, ambience and location in a warm, easy-to-browse layout.",
    highlights: ["Menu highlights", "Location, hours and directions", "Order and reservation enquiries"],
    demoUrl: null,
    icon: Coffee,
  },
];

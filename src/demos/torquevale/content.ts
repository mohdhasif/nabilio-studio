import type { LucideIcon } from "lucide-react";
import { BatteryCharging, CircleDot, Cog, Disc3, Droplets, ScanSearch, Snowflake, Wrench } from "lucide-react";

/**
 * Torquevale Motorworks — a FICTIONAL automotive workshop created by Nabilio Studio
 * as a portfolio demonstration. Every name, number, address and detail here is invented.
 * Do not add real reviews, achievements, customer names or contact details.
 */

export const BASE = "/demos/torquevale";

export const brand = {
  name: "Torquevale Motorworks",
  shortName: "Torquevale",
  tagline: "Precision servicing. Straight answers.",
  // Deliberately non-working, clearly fictional contact details.
  phone: "03-0000 0000",
  email: "service@torquevale.example",
  address: ["No. 0, Jalan Contoh 1", "Taman Demo, 00000 Kuala Lumpur"],
  hours: [
    { days: "Monday – Friday", time: "8:30 am – 6:00 pm" },
    { days: "Saturday", time: "8:30 am – 1:00 pm" },
    { days: "Sunday & public holidays", time: "Closed" },
  ],
};

export const nav = [
  { label: "Home", href: BASE },
  { label: "Services", href: `${BASE}/services` },
  { label: "Workshop", href: `${BASE}/workshop` },
];

export type AutoService = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  includes: string[];
  /** Typical time in the workshop — illustrative only. */
  duration: string;
};

export const autoServices: AutoService[] = [
  {
    slug: "periodic-service",
    title: "Periodic Servicing",
    icon: Wrench,
    summary: "Scheduled maintenance following your manufacturer's service intervals.",
    includes: ["Engine oil and filter change", "Multi-point inspection", "Fluid top-ups", "Service record update"],
    duration: "About 1–2 hours",
  },
  {
    slug: "diagnostics",
    title: "Engine Diagnostics",
    icon: ScanSearch,
    summary: "Computer diagnostics to find the cause of warning lights and performance issues.",
    includes: [
      "OBD scan and fault code reading",
      "Live sensor data check",
      "Clear written findings",
      "Repair options explained",
    ],
    duration: "About 1 hour",
  },
  {
    slug: "brakes",
    title: "Brake Service",
    icon: Disc3,
    summary: "Inspection and replacement of pads, discs and brake fluid for safe stopping.",
    includes: ["Pad and disc measurement", "Brake fluid condition test", "Caliper check", "Road test after work"],
    duration: "About 1–3 hours",
  },
  {
    slug: "tyres-alignment",
    title: "Tyres & Alignment",
    icon: CircleDot,
    summary: "Tyre replacement, balancing and wheel alignment for even wear and steady handling.",
    includes: [
      "Tyre condition and tread check",
      "Wheel balancing",
      "Four-wheel alignment",
      "Tyre pressure set to spec",
    ],
    duration: "About 1 hour",
  },
  {
    slug: "aircon",
    title: "Air-Conditioning",
    icon: Snowflake,
    summary: "Keep the cabin cool with air-con performance checks, cleaning and regassing.",
    includes: ["Vent temperature test", "Leak inspection", "Cabin filter replacement", "Refrigerant regas if needed"],
    duration: "About 1–2 hours",
  },
  {
    slug: "battery-electrical",
    title: "Battery & Electrical",
    icon: BatteryCharging,
    summary: "Battery testing and replacement, plus checks on charging and starting systems.",
    includes: ["Battery health test", "Alternator output check", "Starter motor check", "Terminal cleaning"],
    duration: "About 30–60 minutes",
  },
  {
    slug: "transmission",
    title: "Transmission Service",
    icon: Cog,
    summary: "Gearbox fluid service and inspection for smoother, more reliable shifting.",
    includes: ["Transmission fluid change", "Leak inspection", "Shift quality check", "Mount inspection"],
    duration: "About 2–3 hours",
  },
  {
    slug: "fluids",
    title: "Coolant & Fluids",
    icon: Droplets,
    summary: "Coolant flush and fluid servicing to protect the engine from overheating.",
    includes: [
      "Coolant flush and refill",
      "Radiator and hose check",
      "Power steering fluid check",
      "Wiper fluid top-up",
    ],
    duration: "About 1 hour",
  },
];

/** How the (fictional) workshop works — a process, not claims or achievements. */
export const approach = [
  {
    title: "Inspect first",
    text: "Every car starts with a proper inspection, so recommendations are based on what we actually find.",
  },
  {
    title: "Quote before work",
    text: "You receive a clear quotation and approve it before any repair begins. No surprise charges.",
  },
  {
    title: "Show and explain",
    text: "Worn parts are kept for you to see, with a plain explanation of what was done and why.",
  },
  {
    title: "Keep you updated",
    text: "Progress updates by WhatsApp, and a call if anything changes along the way.",
  },
];

export const facilities = [
  "Covered service bays",
  "Computer diagnostic tools",
  "Wheel alignment equipment",
  "Air-conditioned waiting area",
];

import type { LucideIcon } from "lucide-react";
import { BatteryCharging, CircleDot, Cog, Disc3, Droplets, ScanSearch, Snowflake, Wrench } from "lucide-react";
import type { StaticImageData } from "next/image";
import engineBayInspection from "./images/engine-bay-inspection.jpg";
import tyrePressureCheck from "./images/tyre-pressure-check.jpg";
import underBonnetServicing from "./images/under-bonnet-servicing.jpg";

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

/**
 * WhatsApp recipient for enquiries. Deliberately null in this demo: WhatsApp opens with the
 * message prefilled but no recipient, so nothing can reach a real business by accident.
 * A real client site would set its own workshop number here (digits only, e.g. "60123456789").
 */
export const ENQUIRY_WHATSAPP_NUMBER: string | null = null;

/** Wording for the demo call to action — illustrative, not an offer by a real workshop. */
export const QUOTE_CTA = "Get a Free Quotation";

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
    text: "You receive a clear quotation and approve it before any repair begins. Extra work is only done with your OK.",
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

/** "How it works": from enquiry to a confirmed slot and estimate. A process, not claims or achievements. */
export const steps = [
  { title: "Choose a service", text: "Pick servicing, diagnostics, brakes, tyres or another job — or “not sure”." },
  {
    title: "Describe the car",
    text: "Make, model, year and mileage, plus any warning lights, noises or symptoms you have noticed.",
  },
  {
    title: "Send via WhatsApp",
    text: "Your enquiry opens in WhatsApp, fully written. Review it and press Send yourself.",
  },
  {
    title: "Workshop confirms",
    text: "The workshop replies with an estimate and an available slot — no back-and-forth questions.",
  },
];

/** Common symptoms customers can tick, so the workshop gets a complete picture up front. */
export const symptoms = [
  "Due for routine service",
  "Warning light on dashboard",
  "Strange noise or vibration",
  "Brakes squealing or soft pedal",
  "Car pulling to one side",
  "Aircond not cold",
  "Hard to start / battery issue",
  "Gear shifting feels rough",
  "Leak or overheating",
  "Other (describe in notes)",
];

export const timeSlots = ["Morning (8:30 am – 12:00 pm)", "Afternoon (2:00 pm – 5:00 pm)"];

export type GalleryItem = { src: StaticImageData; alt: string; title: string; text: string };

/**
 * Types of work, shown with licensed stock photography (Pexels License).
 * These are NOT Torquevale jobs, staff or premises. Sources: ./images/CREDITS.md
 */
export const gallery: GalleryItem[] = [
  {
    src: engineBayInspection,
    alt: "Mechanic in a beanie using a torch to inspect the engine bay of a car with its bonnet open",
    title: "Inspection & fault-finding",
    text: "A close look under the bonnet to trace warning lights, noises and leaks before anything is quoted.",
  },
  {
    src: underBonnetServicing,
    alt: "Mechanic working on an engine with a screwdriver, with shelves of fluids in the workshop behind",
    title: "Periodic servicing",
    text: "Routine servicing: oil and filter changes, fluid top-ups and a multi-point check.",
  },
  {
    src: tyrePressureCheck,
    alt: "Close-up of a mechanic checking a car's tyre pressure with an air-line gauge",
    title: "Tyres & wheels",
    text: "Tyre pressure, tread and wheel checks, plus alignment when the car pulls to one side.",
  },
];

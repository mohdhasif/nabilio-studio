import type { LucideIcon } from "lucide-react";
import { Droplets, FlaskConical, PackagePlus, Wrench } from "lucide-react";
import type { StaticImageData } from "next/image";
import leakDetectorCheck from "./images/leak-detector-check.jpg";
import outdoorCondensers from "./images/outdoor-condensers.jpg";
import outdoorUnitCheck from "./images/outdoor-unit-check.jpg";

/**
 * CoolNest Aircond Services — a FICTIONAL air-conditioning company created by Nabilio Studio
 * as a portfolio demonstration. Every name, number and detail here is invented.
 * Do not add real reviews, certifications, addresses or contact numbers.
 */

export const BASE = "/demos/coolnest";

export const brand = {
  name: "CoolNest Aircond Services",
  shortName: "CoolNest",
  tagline: "Cleaner air. Cooler homes.",
  // Deliberately non-working, clearly fictional contact details. No street address is shown.
  phone: "012-000 0000",
  email: "hello@coolnest.example",
  serviceArea: "Fictional service area for this demo",
  hours: [
    { days: "Monday – Saturday", time: "9:00 am – 6:00 pm" },
    { days: "Sunday & public holidays", time: "Closed" },
  ],
};

/**
 * WhatsApp recipient for enquiries. Deliberately null in this demo: WhatsApp opens with the
 * message prefilled but no recipient, so nothing can reach a real business by accident.
 * A real client site would set its own business number here (digits only, e.g. "60123456789").
 */
export const ENQUIRY_WHATSAPP_NUMBER: string | null = null;

/** Wording for the demo call to action — illustrative, not an offer by a real company. */
export const QUOTE_CTA = "Get a Free Quotation";

export const nav = [
  { label: "Home", href: BASE },
  { label: "Services", href: `${BASE}/services` },
  { label: "About", href: `${BASE}/about` },
];

export type AirconService = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  includes: string[];
  /** When customers usually need this service. */
  signs: string[];
  /** Typical time per unit — illustrative only. */
  duration: string;
};

export const services: AirconService[] = [
  {
    slug: "cleaning",
    title: "General Servicing",
    icon: Droplets,
    summary: "Routine cleaning and checks to keep your aircond cool, quiet and efficient.",
    description:
      "A standard service for wall-mounted units: filters, cover and accessible coil surfaces are cleaned, and the drainage is flushed so water drips where it should.",
    includes: [
      "Filter wash",
      "Front cover and louvre cleaning",
      "Evaporator coil surface clean",
      "Drainage flush",
      "Cooling test after service",
    ],
    signs: ["Weaker airflow than usual", "Dusty or musty smell", "Due for routine maintenance"],
    duration: "About 45–60 minutes per unit",
  },
  {
    slug: "chemical-wash",
    title: "Chemical Cleaning",
    icon: FlaskConical,
    summary: "A deep clean for units with heavy dirt build-up or poor cooling.",
    description:
      "The indoor unit is partly dismantled so the coil and blower can be washed with a coil-cleaning solution, removing grime that routine cleaning cannot reach.",
    includes: [
      "Indoor unit partial dismantle",
      "Coil chemical wash and rinse",
      "Blower wheel cleaning",
      "Drain pan cleaning",
      "Reassembly and cooling test",
    ],
    signs: [
      "Cooling still weak after normal cleaning",
      "Water leaking from the indoor unit",
      "Visible black dust on the blower",
    ],
    duration: "About 1.5–2 hours per unit",
  },
  {
    slug: "repair",
    title: "Repair & Troubleshooting",
    icon: Wrench,
    summary: "Diagnosis and repair when your aircond is not cooling or not working.",
    description:
      "A technician checks the indoor and outdoor units to find the cause, explains the findings, and quotes the repair before any work begins.",
    includes: [
      "Electrical and component checks",
      "Gas pressure check",
      "Leak inspection",
      "Clear explanation of findings",
      "Quotation before repair",
    ],
    signs: [
      "Unit not cooling",
      "Strange noises or vibration",
      "Error code or blinking lights",
      "Unit will not turn on",
    ],
    duration: "Inspection about 30–60 minutes",
  },
  {
    slug: "installation",
    title: "Installation",
    icon: PackagePlus,
    summary: "Neat, careful installation for new or relocated aircond units.",
    description:
      "A site check to plan the indoor and outdoor positions, then installation with tidy piping and a full cooling test before handover.",
    includes: [
      "Site check and placement advice",
      "Indoor and outdoor unit mounting",
      "Copper piping and insulation",
      "Drainage setup",
      "Test run and usage tips",
    ],
    signs: ["New home or renovation", "Replacing an old unit", "Moving a unit to another room"],
    duration: "About 2–4 hours per unit",
  },
];

/** "How it works": from enquiry to a confirmed quotation. A process, not claims or achievements. */
export const steps = [
  { title: "Select a service", text: "Choose general servicing, chemical cleaning, troubleshooting or installation." },
  { title: "Describe the problem", text: "Tick the symptoms, number of units, your location and a preferred time." },
  {
    title: "Send via WhatsApp",
    text: "Your enquiry opens in WhatsApp, fully written. Review it and press Send yourself.",
  },
  {
    title: "Business confirms",
    text: "The business replies with a quotation and available slots — no back-and-forth questions.",
  },
];

/** What happens on the day of a visit (About page). */
export const visitSteps = [
  { title: "Arrive as agreed", text: "The technician arrives within the agreed visit window." },
  { title: "Protect the area", text: "Floor and wall around the unit are covered before work starts." },
  { title: "Service and test", text: "Each unit is serviced and tested for cooling and drainage." },
  { title: "Explain findings", text: "Findings and any recommended repairs are explained before leaving." },
];

export const values = [
  { title: "Clean and tidy", text: "Floor and wall protection during work, and the area is cleaned up afterwards." },
  { title: "Quote before work", text: "Repairs are quoted and approved before any work starts." },
  { title: "Plain explanations", text: "Findings are explained simply, with photos of the unit before and after." },
  { title: "Agreed visit window", text: "A visit window is agreed in advance, with a message if anything changes." },
];

/** Common symptoms customers can tick, so the business gets a complete picture up front. */
export const symptoms = [
  "Not cold enough",
  "Water leaking or dripping",
  "Strange noise or vibration",
  "Bad smell",
  "Unit won't turn on",
  "Error code or blinking light",
  "No problem — routine service",
  "New installation or relocation",
  "Other (describe in notes)",
];

export const unitOptions = ["1 unit", "2 units", "3 units", "4 units", "5 or more units"];

export const timeSlots = ["Morning (9am – 12pm)", "Afternoon (12pm – 3pm)", "Late afternoon (3pm – 6pm)"];

/** Illustrative coverage for the demo — real place names, but not a real company's service area. */
export const coverageAreas = [
  "Kuala Lumpur",
  "Petaling Jaya",
  "Subang Jaya",
  "Shah Alam",
  "Klang",
  "Puchong",
  "Cheras",
  "Ampang",
  "Kajang",
  "Cyberjaya & Putrajaya",
  "Setia Alam",
  "Rawang",
];

export type GalleryItem = { src: StaticImageData; alt: string; title: string; text: string };

/**
 * Types of work, shown with licensed stock photography (Pexels License).
 * These are NOT CoolNest jobs or completed projects. Sources: ./images/CREDITS.md
 */
export const gallery: GalleryItem[] = [
  {
    src: outdoorUnitCheck,
    alt: "Technician checking the wiring inside an opened outdoor air-conditioning unit on a rooftop",
    title: "Troubleshooting",
    text: "Electrical and component checks on the outdoor unit to find the cause of a fault.",
  },
  {
    src: leakDetectorCheck,
    alt: "Close-up of a technician using a leak detector on an outdoor unit's copper coil",
    title: "Leak & gas checks",
    text: "Leak detection and pressure checks when cooling is weak or gas keeps running low.",
  },
  {
    src: outdoorCondensers,
    alt: "Two outdoor air-conditioning condenser units mounted on a steel bracket against a wall",
    title: "Installation & mounting",
    text: "Secure outdoor unit placement with tidy piping and drainage for new or relocated units.",
  },
];

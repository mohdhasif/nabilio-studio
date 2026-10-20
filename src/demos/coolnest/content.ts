import type { LucideIcon } from "lucide-react";
import { Droplets, FlaskConical, PackagePlus, Wrench } from "lucide-react";

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
    title: "Aircond Cleaning",
    icon: Droplets,
    summary: "Routine cleaning to keep your aircond cool, quiet and efficient.",
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
    title: "Chemical Wash",
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

/** How the (fictional) company works — a process, not claims or achievements. */
export const steps = [
  { title: "Send an enquiry", text: "Choose a service, your area and a preferred date." },
  { title: "Confirm the slot", text: "The team confirms the visit time and gives an estimate." },
  { title: "Service at home", text: "Technicians arrive with shoe covers and protect the area around the unit." },
  { title: "Test and explain", text: "Every unit is tested, and findings are explained before the team leaves." },
];

export const values = [
  { title: "Clean and tidy", text: "Floor and wall protection during work, and the area is cleaned up afterwards." },
  { title: "Clear pricing", text: "Repairs are quoted before work starts, so there are no surprise charges." },
  { title: "Plain explanations", text: "Findings are explained simply, with photos of the unit before and after." },
  { title: "On-time visits", text: "A visit window is agreed in advance, with a message if anything changes." },
];

import type { StaticImageData } from "next/image";
import cafeCounter from "./images/cafe-counter.jpg";
import coffeeBeans from "./images/coffee-beans.jpg";
import croissantTray from "./images/croissant-tray.jpg";
import croissantsSugar from "./images/croissants-sugar.jpg";
import heroGlassLatte from "./images/hero-glass-latte.jpg";
import lattePour from "./images/latte-pour.jpg";
import matchaLatte from "./images/matcha-latte.jpg";
import pourOver from "./images/pour-over.jpg";
import windowTable from "./images/window-table.jpg";

/**
 * Maison Brew — a FICTIONAL specialty café created by Nabilio Studio as a portfolio
 * demonstration. Every name, price, address and detail here is invented.
 * Do not add real reviews, awards, testimonials or contact details.
 */

export const BASE = "/demos/maison-brew";

export const brand = {
  name: "Maison Brew",
  descriptor: "Specialty Coffee & Café",
  tagline: "Slow coffee, made with care.",
  // Deliberately non-working, clearly fictional contact details.
  phone: "03-0000 0000",
  email: "hello@maisonbrew.example",
  address: ["No. 0, Jalan Contoh 3", "Taman Demo, 00000 Kuala Lumpur"],
  hours: [
    { days: "Tuesday – Friday", time: "8:00 am – 6:00 pm" },
    { days: "Saturday & Sunday", time: "8:00 am – 8:00 pm" },
    { days: "Monday", time: "Closed" },
  ],
};

export const nav = [
  { label: "Home", href: BASE },
  { label: "Menu", href: `${BASE}/menu` },
  { label: "Our Story", href: `${BASE}/our-story` },
  { label: "Visit Us", href: `${BASE}/visit` },
];

/**
 * Stock photography from Unsplash, used under the Unsplash License (https://unsplash.com/license).
 * Optimised copies live in ./images; sources are listed in ./images/CREDITS.md.
 */
export type PhotoSlot = {
  src: StaticImageData;
  alt: string;
};

export type MenuCategory = "Coffee" | "Non-Coffee" | "Pastries" | "Desserts";
export const menuCategories: MenuCategory[] = ["Coffee", "Non-Coffee", "Pastries", "Desserts"];

export type MenuItem = {
  name: string;
  category: MenuCategory;
  description: string;
  /** Fictional sample price in MYR. */
  price: number;
  tags?: ("Signature" | "Iced option" | "Contains nuts" | "Vegetarian")[];
};

export const menu: MenuItem[] = [
  // Coffee
  { name: "Espresso", category: "Coffee", description: "A short, syrupy shot of our house blend.", price: 8 },
  {
    name: "Long Black",
    category: "Coffee",
    description: "Double espresso over hot water.",
    price: 10,
    tags: ["Iced option"],
  },
  { name: "Flat White", category: "Coffee", description: "Velvety microfoam over a double ristretto.", price: 13 },
  { name: "Cappuccino", category: "Coffee", description: "Equal parts espresso, milk and soft foam.", price: 13 },
  {
    name: "Caffè Latte",
    category: "Coffee",
    description: "Silky steamed milk with a gentle espresso base.",
    price: 13,
    tags: ["Iced option"],
  },
  {
    name: "Maison Gula Melaka Latte",
    category: "Coffee",
    description: "Latte sweetened with palm sugar syrup and a hint of pandan.",
    price: 16,
    tags: ["Signature", "Iced option"],
  },
  {
    name: "Seasonal Pour-Over",
    category: "Coffee",
    description: "Single-origin filter coffee, brewed to order.",
    price: 18,
    tags: ["Signature"],
  },
  { name: "Cold Brew", category: "Coffee", description: "Steeped for 18 hours, smooth and chocolatey.", price: 14 },
  // Non-coffee
  {
    name: "Ceremonial Matcha Latte",
    category: "Non-Coffee",
    description: "Stone-ground matcha whisked with milk.",
    price: 16,
    tags: ["Iced option"],
  },
  {
    name: "Hojicha Latte",
    category: "Non-Coffee",
    description: "Roasted green tea with a toasty, nutty finish.",
    price: 15,
    tags: ["Iced option"],
  },
  {
    name: "Dark Chocolate",
    category: "Non-Coffee",
    description: "Rich drinking chocolate made with 70% cocoa.",
    price: 14,
  },
  {
    name: "Yuzu Sparkling Tea",
    category: "Non-Coffee",
    description: "Cold-brewed oolong, yuzu and soda.",
    price: 14,
    tags: ["Signature"],
  },
  {
    name: "Loose-Leaf Tea",
    category: "Non-Coffee",
    description: "A rotating selection of black, green and herbal teas.",
    price: 11,
  },
  // Pastries
  {
    name: "Butter Croissant",
    category: "Pastries",
    description: "Laminated over three days for flaky layers.",
    price: 9,
    tags: ["Vegetarian"],
  },
  {
    name: "Pain au Chocolat",
    category: "Pastries",
    description: "Croissant dough wrapped around dark chocolate.",
    price: 11,
    tags: ["Vegetarian"],
  },
  {
    name: "Almond Croissant",
    category: "Pastries",
    description: "Twice-baked with almond cream and toasted flakes.",
    price: 13,
    tags: ["Contains nuts", "Vegetarian"],
  },
  {
    name: "Kaya Danish",
    category: "Pastries",
    description: "Flaky danish filled with house-made kaya.",
    price: 11,
    tags: ["Signature", "Vegetarian"],
  },
  {
    name: "Cinnamon Bun",
    category: "Pastries",
    description: "Soft brioche swirl with brown-butter glaze.",
    price: 12,
    tags: ["Vegetarian"],
  },
  // Desserts
  {
    name: "Basque Burnt Cheesecake",
    category: "Desserts",
    description: "Caramelised top, creamy centre.",
    price: 17,
    tags: ["Signature", "Vegetarian"],
  },
  {
    name: "Pandan Chiffon Slice",
    category: "Desserts",
    description: "Light, airy sponge with fresh pandan.",
    price: 12,
    tags: ["Vegetarian"],
  },
  {
    name: "Tiramisu Cup",
    category: "Desserts",
    description: "Espresso-soaked sponge layered with mascarpone.",
    price: 16,
  },
  {
    name: "Dark Chocolate Tart",
    category: "Desserts",
    description: "Silky ganache in a cocoa shortcrust.",
    price: 15,
    tags: ["Vegetarian"],
  },
];

/** Featured items use menu items that the available photography genuinely shows. */
export const featured: { item: string; photo: PhotoSlot }[] = [
  {
    item: "Maison Gula Melaka Latte",
    photo: { src: lattePour, alt: "Barista pouring latte art into a glass of hot latte" },
  },
  {
    item: "Seasonal Pour-Over",
    photo: { src: pourOver, alt: "Barista pouring hot water from a gooseneck kettle into a pour-over coffee brewer" },
  },
  {
    item: "Ceremonial Matcha Latte",
    photo: { src: matchaLatte, alt: "Matcha latte with leaf-shaped latte art in a white cup" },
  },
  {
    item: "Butter Croissant",
    photo: { src: croissantsSugar, alt: "Two golden croissants being dusted with icing sugar on a dark slate" },
  },
];

export const photos = {
  hero: {
    src: heroGlassLatte,
    alt: "A small glass of milky coffee on a sunlit white table with soft leaf shadows",
  },
  interior: {
    src: windowTable,
    alt: "Round café table by a large window with a French press, cups and a potted plant",
  },
  pastries: { src: croissantTray, alt: "Tray of freshly baked croissants on a café counter" },
  beans: { src: coffeeBeans, alt: "Roasted coffee beans in a white ceramic bowl" },
  counter: {
    src: cafeCounter,
    alt: "Café counter with an espresso machine, grinders and warm pendant lights against a white brick wall",
  },
} satisfies Record<string, PhotoSlot>;

export const formatPrice = (price: number) => `RM ${price.toFixed(2)}`;

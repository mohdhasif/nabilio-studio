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
 * Photo slots. No photography is bundled: each slot renders a labelled illustrated
 * placeholder until `src` points to a properly licensed image in /public/demos/maison-brew.
 */
export type PhotoSlot = {
  src: string | null;
  alt: string;
  motif: "cup" | "latte" | "croissant" | "beans" | "cake" | "interior" | "iced" | "pour";
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

export const featured: { item: string; photo: PhotoSlot }[] = [
  {
    item: "Maison Gula Melaka Latte",
    photo: { src: null, alt: "Latte with palm sugar syrup in a ceramic cup", motif: "latte" },
  },
  {
    item: "Seasonal Pour-Over",
    photo: { src: null, alt: "Pour-over coffee being brewed through a paper filter", motif: "pour" },
  },
  {
    item: "Yuzu Sparkling Tea",
    photo: { src: null, alt: "Iced sparkling tea with a slice of yuzu", motif: "iced" },
  },
  {
    item: "Basque Burnt Cheesecake",
    photo: { src: null, alt: "Slice of Basque burnt cheesecake on a plate", motif: "cake" },
  },
];

export const photos = {
  hero: { src: null, alt: "Flat white with latte art on a marble counter", motif: "cup" } satisfies PhotoSlot,
  interior: { src: null, alt: "Sunlit café interior with wooden tables", motif: "interior" } satisfies PhotoSlot,
  pastries: { src: null, alt: "Freshly baked croissants on a tray", motif: "croissant" } satisfies PhotoSlot,
  beans: { src: null, alt: "Roasted coffee beans in a scoop", motif: "beans" } satisfies PhotoSlot,
};

export const formatPrice = (price: number) => `RM ${price.toFixed(2)}`;

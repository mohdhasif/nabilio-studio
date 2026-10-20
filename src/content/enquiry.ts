import { services } from "./services";

export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "not-sure", label: "Not sure yet — I'd like advice" },
];

export const budgetOptions = [
  "Below RM1,500",
  "RM1,500 – RM3,000",
  "RM3,000 – RM5,000",
  "Above RM5,000",
  "Not sure yet",
];

import { services } from "./services";

export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "not-sure", label: "Not sure yet — I'd like advice" },
];

export const budgetOptions = ["Below RM500", "RM500 – RM1,000", "RM1,000 – RM2,000", "Above RM2,000", "Not sure yet"];

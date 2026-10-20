"use client";

import { useSearchParams } from "next/navigation";
import { AppointmentForm } from "./AppointmentForm";

/** Pre-selects the service from `?service=<slug>` (linked from the Services page). */
export function AppointmentFormWithParams() {
  const service = useSearchParams().get("service") ?? "";
  return <AppointmentForm key={service} defaultService={service} />;
}

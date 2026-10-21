"use client";

import { useSearchParams } from "next/navigation";
import { ServiceBookingForm } from "./ServiceBookingForm";

/** Pre-selects the service from `?service=<slug>` (linked from the Services page). */
export function ServiceBookingFormWithParams() {
  const service = useSearchParams().get("service") ?? "";
  return <ServiceBookingForm key={service} defaultService={service} />;
}

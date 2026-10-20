"use client";

import { useSearchParams } from "next/navigation";
import { EnquiryForm } from "./EnquiryForm";

/** Pre-selects the service from `?service=<slug>` (linked from the Services page). */
export function EnquiryFormWithParams() {
  const service = useSearchParams().get("service") ?? "";
  return <EnquiryForm key={service} defaultService={service} />;
}

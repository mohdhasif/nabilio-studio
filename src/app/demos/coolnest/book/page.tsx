import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, Phone } from "lucide-react";
import { CnPageIntro } from "@/demos/coolnest/components/CnPageIntro";
import { ServiceBookingForm } from "@/demos/coolnest/components/ServiceBookingForm";
import { ServiceBookingFormWithParams } from "@/demos/coolnest/components/ServiceBookingFormWithParams";
import { BASE, brand, steps } from "@/demos/coolnest/content";

export const metadata: Metadata = {
  title: "Book a Service",
  description: "Aircond service booking form for CoolNest (fictional demo — no information is sent or stored).",
  alternates: { canonical: `${BASE}/book` },
};

export default function CoolNestBook() {
  return (
    <>
      <CnPageIntro
        kicker="Book a service"
        title="Book your aircond service"
        description="Fill in a few details and choose a preferred date. The team confirms the visit time before arriving."
      />

      <section aria-label="Service booking" className="mx-auto max-w-site px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <div className="rounded-[2rem] border border-cn-line bg-white p-6 shadow-[0_30px_60px_-40px_rgba(12,43,60,0.35)] sm:p-10">
            <h2 className="text-2xl font-bold">Service enquiry</h2>
            <p className="mt-2 mb-8 text-sm text-cn-muted">All fields are required unless marked optional.</p>
            <Suspense fallback={<ServiceBookingForm />}>
              <ServiceBookingFormWithParams />
            </Suspense>
          </div>

          <aside aria-label="Booking information" className="space-y-6 self-start">
            <div className="rounded-[2rem] bg-cn-ice p-7">
              <h2 className="text-lg font-semibold">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {steps.slice(1).map((step, i) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-cn-primary text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-[0.9375rem]">
                      <span className="block font-semibold">{step.title}</span>
                      <span className="text-cn-muted">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-[2rem] border border-cn-line p-7">
              <h2 className="text-lg font-semibold">
                Prefer to call? <span className="text-sm font-normal text-cn-muted">(fictional)</span>
              </h2>
              <ul className="mt-4 space-y-3 text-[0.9375rem]">
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-cn-primary" aria-hidden />
                  {brand.phone}
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-cn-primary" aria-hidden />
                  {brand.email}
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="size-4 text-cn-primary" aria-hidden />
                  {brand.hours[0].days}, {brand.hours[0].time}
                </li>
              </ul>
              <p className="mt-4 text-xs text-cn-muted">
                These details are invented for the demo and do not connect to anyone.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

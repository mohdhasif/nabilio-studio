import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, Phone } from "lucide-react";
import { AppointmentForm } from "@/demos/torquevale/components/AppointmentForm";
import { AppointmentFormWithParams } from "@/demos/torquevale/components/AppointmentFormWithParams";
import { PageIntro } from "@/demos/torquevale/components/PageIntro";
import { BASE, brand } from "@/demos/torquevale/content";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Appointment enquiry form for Torquevale Motorworks (fictional demo — no bookings are sent).",
  alternates: { canonical: `${BASE}/appointment` },
};

export default function TorquevaleAppointment() {
  return (
    <>
      <PageIntro
        kicker="Appointment"
        title="Book your car in"
        description="Tell us about your car and pick a preferred date. The workshop confirms the slot and gives an estimate before you arrive."
      />

      <section aria-label="Appointment enquiry" className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div className="border border-tv-line bg-tv-panel p-6 sm:p-10">
            <h2 className="text-3xl font-bold tracking-wide uppercase">Appointment enquiry</h2>
            <p className="mt-2 mb-8 text-sm text-tv-muted">Fields marked optional can be left blank.</p>
            <Suspense fallback={<AppointmentForm />}>
              <AppointmentFormWithParams />
            </Suspense>
          </div>

          <aside className="space-y-6 self-start" aria-label="Workshop contact details">
            <div className="border border-tv-line p-7">
              <h2 className="text-xl font-bold tracking-wide uppercase">
                Prefer to call?{" "}
                <span className="text-sm font-medium tracking-normal text-tv-muted normal-case">(fictional)</span>
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-tv-accent" aria-hidden />
                  {brand.phone}
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-tv-accent" aria-hidden />
                  {brand.email}
                </li>
              </ul>
              <p className="mt-5 text-xs text-tv-muted">
                These details are invented for the demo and do not connect to anyone.
              </p>
            </div>
            <div className="border border-tv-line p-7">
              <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-wide uppercase">
                <Clock className="size-5 text-tv-accent" aria-hidden />
                Opening hours
              </h2>
              <dl className="mt-5 space-y-2.5 text-sm">
                {brand.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-tv-muted">{h.days}</dt>
                    <dd className="text-right">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, Phone } from "lucide-react";
import { AppointmentForm } from "@/demos/torquevale/components/AppointmentForm";
import { AppointmentFormWithParams } from "@/demos/torquevale/components/AppointmentFormWithParams";
import { IllustrativeNote } from "@/demos/torquevale/components/IllustrativeNote";
import { PageIntro } from "@/demos/torquevale/components/PageIntro";
import { BASE, brand } from "@/demos/torquevale/content";

export const metadata: Metadata = {
  title: "Get a Free Quotation",
  description:
    "Car service quotation enquiry for Torquevale Motorworks (fictional demo): describe your car and the issue and open a ready-to-send WhatsApp message. No booking is created.",
  alternates: { canonical: `${BASE}/appointment` },
};

const afterSubmit = [
  { title: "WhatsApp opens", text: "Your enquiry is written for you, with every detail the workshop needs." },
  { title: "You press Send", text: "Nothing is sent automatically — you review the message and send it yourself." },
  { title: "Workshop replies", text: "The workshop confirms an estimate and an available slot." },
];

export default function TorquevaleAppointment() {
  return (
    <>
      <PageIntro
        kicker="Free quotation (demo)"
        title="Get a free quotation"
        description="Tell us about your car, the issue and when suits you. Your enquiry opens in WhatsApp, fully written and ready for you to send."
      />

      <section aria-label="Quotation enquiry" className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div className="border border-tv-line bg-tv-panel p-5 sm:p-10">
            <h2 className="text-3xl font-bold tracking-wide uppercase">Quotation enquiry</h2>
            <p className="mt-2 text-sm text-tv-muted">All fields are required unless marked optional.</p>
            <IllustrativeNote className="mt-4 mb-8 bg-tv-black">
              Demo call to action: Torquevale is fictional and does not offer real quotations or bookings.
            </IllustrativeNote>
            <Suspense fallback={<AppointmentForm />}>
              <AppointmentFormWithParams />
            </Suspense>
          </div>

          <aside className="space-y-6 self-start" aria-label="Enquiry information">
            <div className="border border-tv-line p-7">
              <h2 className="text-xl font-bold tracking-wide uppercase">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {afterSubmit.map((step, i) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center bg-tv-accent font-tv-display text-sm font-bold text-tv-black">
                      {i + 1}
                    </span>
                    <span className="text-sm">
                      <span className="block font-semibold text-tv-text">{step.title}</span>
                      <span className="text-tv-muted">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
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

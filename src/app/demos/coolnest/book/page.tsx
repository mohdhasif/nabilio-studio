import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, Phone } from "lucide-react";
import { IllustrativeNote } from "@/demos/coolnest/components/IllustrativeNote";
import { CnPageIntro } from "@/demos/coolnest/components/CnPageIntro";
import { ServiceBookingForm } from "@/demos/coolnest/components/ServiceBookingForm";
import { ServiceBookingFormWithParams } from "@/demos/coolnest/components/ServiceBookingFormWithParams";
import { BASE, brand } from "@/demos/coolnest/content";

export const metadata: Metadata = {
  title: "Get a Free Quotation",
  description:
    "Aircond quotation enquiry for CoolNest (fictional demo): describe the problem and open a ready-to-send WhatsApp message. No booking is created.",
  alternates: { canonical: `${BASE}/book` },
};

const afterSubmit = [
  { title: "WhatsApp opens", text: "Your enquiry is written for you, with every detail the business needs." },
  { title: "You press Send", text: "Nothing is sent automatically — you review the message and send it yourself." },
  { title: "Business replies", text: "The business confirms the quotation and an available time slot." },
];

export default function CoolNestBook() {
  return (
    <>
      <CnPageIntro
        kicker="Free quotation (demo)"
        title="Get a free quotation"
        description="Tell us the service, the problem and when suits you. Your enquiry opens in WhatsApp, fully written and ready for you to send."
      />

      <section aria-label="Service booking" className="mx-auto max-w-site px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <div className="rounded-[2rem] border border-cn-line bg-white p-5 shadow-[0_30px_60px_-40px_rgba(12,43,60,0.35)] sm:p-10">
            <h2 className="text-2xl font-bold">Quotation enquiry</h2>
            <p className="mt-2 text-sm text-cn-muted">All fields are required unless marked optional.</p>
            <IllustrativeNote className="mt-4 mb-8">
              Demo call to action: CoolNest is fictional and does not offer real quotations or bookings.
            </IllustrativeNote>
            <Suspense fallback={<ServiceBookingForm />}>
              <ServiceBookingFormWithParams />
            </Suspense>
          </div>

          <aside aria-label="Booking information" className="space-y-6 self-start">
            <div className="rounded-[2rem] bg-cn-ice p-7">
              <h2 className="text-lg font-semibold">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {afterSubmit.map((step, i) => (
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

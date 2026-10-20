import { CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { BASE, brand } from "../content";
import { TvButtonLink } from "./TvButton";

export function AppointmentCta() {
  return (
    <section aria-labelledby="tv-cta" className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="relative isolate overflow-hidden border border-tv-line bg-tv-panel px-6 py-14 sm:px-12 sm:py-16">
        <div aria-hidden className="absolute inset-y-0 left-0 -z-10 w-1.5 bg-tv-accent" />
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 id="tv-cta" className="text-4xl leading-none font-bold tracking-tight uppercase sm:text-5xl">
              Car due for a service?
            </h2>
            <p className="mt-4 text-lg text-tv-muted">
              Send an appointment enquiry and choose a preferred date. We confirm the slot before you come in.
            </p>
            <p className="mt-3 text-sm text-tv-muted">
              {brand.hours[0].days}: {brand.hours[0].time} · {brand.hours[1].days}: {brand.hours[1].time}
            </p>
          </div>
          <TvButtonLink href={`${BASE}/appointment`} className="shrink-0">
            <CalendarCheck className="size-5" aria-hidden />
            Book Appointment
          </TvButtonLink>
        </div>
      </Reveal>
    </section>
  );
}

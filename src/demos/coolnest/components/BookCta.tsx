import { CalendarDays } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { BASE, QUOTE_CTA } from "../content";
import { CnButtonLink } from "./CnButton";

export function BookCta({ title = "Aircond not as cool as it used to be?" }: { title?: string }) {
  return (
    <section aria-labelledby="cn-cta" className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-cn-primary px-5 py-14 text-center sm:px-12 sm:py-16">
        <div aria-hidden className="absolute -top-24 -left-24 -z-10 size-72 rounded-full bg-white/10" />
        <div aria-hidden className="absolute -right-16 -bottom-28 -z-10 size-80 rounded-full bg-cn-mint/30" />
        <h2 id="cn-cta" className="mx-auto max-w-2xl text-3xl leading-tight font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
          Describe the problem, your area and a preferred time — your enquiry opens in WhatsApp, ready to send.
        </p>
        <CnButtonLink href={`${BASE}/book`} variant="light" className="mt-8">
          <CalendarDays className="size-5 max-[359px]:hidden" aria-hidden />
          {QUOTE_CTA}
        </CnButtonLink>
        <p className="mt-4 text-xs text-white/85">Demo call to action for a fictional business.</p>
      </Reveal>
    </section>
  );
}

import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { BookCta } from "@/demos/coolnest/components/BookCta";
import { CnPageIntro } from "@/demos/coolnest/components/CnPageIntro";
import { CnSectionTitle } from "@/demos/coolnest/components/CnSectionTitle";
import { BASE, brand, steps, values } from "@/demos/coolnest/content";

export const metadata: Metadata = {
  title: "About",
  description: "About CoolNest Aircond Services, a fictional company created as a Nabilio Studio portfolio demo.",
  alternates: { canonical: `${BASE}/about` },
};

export default function CoolNestAbout() {
  return (
    <>
      <CnPageIntro
        kicker="About CoolNest"
        title="Friendly aircond care for everyday homes"
        description="CoolNest focuses on the essentials: keeping home aircond units clean, working well and installed properly — with tidy work and honest explanations."
      />

      <section aria-labelledby="cn-story" className="mx-auto max-w-site px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <CnSectionTitle id="cn-story" kicker="Our approach" title="Small details make a big difference" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-cn-muted">
              <p>
                An aircond service happens inside someone&apos;s home, so how the work is done matters as much as the
                result. CoolNest technicians protect the floor and walls, keep the area tidy and test every unit before
                leaving.
              </p>
              <p>
                When something needs repair, you get a clear explanation and a quotation first. Nothing is replaced
                without your approval.
              </p>
            </div>
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.06} className="rounded-3xl bg-cn-ice p-7">
                <span aria-hidden className="block h-1 w-10 rounded-full bg-cn-mint" />
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-cn-muted">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="cn-visit" className="bg-cn-ice">
        <div className="mx-auto grid max-w-site gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <CnSectionTitle id="cn-visit" kicker="What to expect" title="On the day of your service" />
            <ol className="mt-8 space-y-4">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-cn-primary font-cn-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-[0.9375rem] text-cn-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.08} className="self-start rounded-[2rem] bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold">
              Contact details <span className="text-sm font-normal text-cn-muted">(fictional)</span>
            </h2>
            <ul className="mt-5 space-y-3.5 text-[0.9375rem]">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-cn-primary" aria-hidden />
                {brand.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-cn-primary" aria-hidden />
                {brand.email}
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-cn-primary" aria-hidden />
                {brand.serviceArea}
              </li>
            </ul>
            <h3 className="mt-7 flex items-center gap-2 font-semibold">
              <Clock className="size-4 text-cn-primary" aria-hidden />
              Operating hours
            </h3>
            <dl className="mt-3 space-y-2 text-[0.9375rem]">
              {brand.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt className="text-cn-muted">{h.days}</dt>
                  <dd className="text-right">{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 rounded-2xl bg-cn-ice p-4 text-sm text-cn-muted">
              These details are invented for the demo and do not connect to anyone.
            </p>
          </Reveal>
        </div>
      </section>

      <BookCta />
    </>
  );
}

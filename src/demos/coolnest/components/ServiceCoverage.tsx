import { MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { coverageAreas } from "../content";
import { CnSectionTitle } from "./CnSectionTitle";
import { IllustrativeNote } from "./IllustrativeNote";

export function ServiceCoverage() {
  return (
    <section aria-labelledby="cn-coverage" className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <CnSectionTitle
            id="cn-coverage"
            kicker="Service coverage"
            title="Areas covered"
            description="Not on the list? Include your area or postcode in the enquiry and the business will confirm whether it can cover you."
          />
          <IllustrativeNote className="mt-6">
            Illustrative coverage for this fictional demo — not the service area of any real company.
          </IllustrativeNote>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3" aria-label="Areas covered">
            {coverageAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 rounded-2xl border border-cn-line bg-white px-3.5 py-3 text-sm text-cn-ink"
              >
                <MapPin className="size-4 shrink-0 text-cn-primary" aria-hidden />
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

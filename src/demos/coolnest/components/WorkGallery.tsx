import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { gallery } from "../content";
import { CnSectionTitle } from "./CnSectionTitle";
import { IllustrativeNote } from "./IllustrativeNote";

/** Types of work, shown with licensed stock photos — not CoolNest jobs or completed projects. */
export function WorkGallery() {
  return (
    <section aria-labelledby="cn-gallery" className="bg-cn-ice">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <CnSectionTitle
            id="cn-gallery"
            kicker="Types of work"
            title="What a service visit can involve"
            description="A few common jobs behind the services above, from fault-finding to mounting outdoor units."
          />
          <IllustrativeNote className="mt-6">
            Illustrative stock photos (Pexels License). They do not show CoolNest staff, customers or completed
            projects.
          </IllustrativeNote>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 0.06} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] bg-cn-sky">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-cn-muted">{g.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

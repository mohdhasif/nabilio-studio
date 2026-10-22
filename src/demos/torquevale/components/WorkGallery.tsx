import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { gallery } from "../content";
import { IllustrativeNote } from "./IllustrativeNote";
import { SectionTitle } from "./SectionTitle";

/** Types of work, shown with licensed stock photos — not Torquevale jobs, staff or premises. */
export function WorkGallery() {
  return (
    <section aria-labelledby="tv-gallery" className="border-y border-tv-line bg-tv-panel">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionTitle
            id="tv-gallery"
            kicker="Types of work"
            title="What a workshop visit can involve"
            description="A few common jobs behind the services above, from fault-finding to tyre checks."
          />
          <IllustrativeNote className="mt-6 bg-tv-black">
            Illustrative stock photos (Pexels License). They do not show Torquevale staff, customers or completed jobs.
          </IllustrativeNote>
        </Reveal>
        <ul className="mt-14 grid gap-px border border-tv-line bg-tv-line sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 0.06} className="bg-tv-black">
              <div className="relative aspect-[3/2] bg-tv-raised">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold tracking-wide uppercase">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tv-muted">{g.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

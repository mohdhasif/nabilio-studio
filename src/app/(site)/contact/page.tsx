import { Suspense } from "react";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { EnquiryFormWithParams } from "@/components/contact/EnquiryFormWithParams";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { emailLink, siteConfig, whatsappDisplay, whatsappLink } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Nabilio Studio about a new website, redesign or website support. Enquire via WhatsApp or email — a Malaysia-based web developer for SMEs.",
  path: "/contact",
});

export default function ContactPage() {
  const wa = whatsappLink();
  const mail = emailLink();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your website."
        description="Whether you need a new website, a redesign or help with an existing one, share a few details and you will receive a clear, no-obligation response."
      />

      <Section aria-label="Contact options and enquiry form">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.3fr] lg:gap-14">
          <Reveal as="div" className="space-y-5">
            <h2 className="font-display text-h3 font-bold text-navy">Reach out directly</h2>
            <p className="text-muted">
              The quickest way to get a response is WhatsApp. For detailed requirements or documents, email works best.
            </p>

            <div className="rounded-card bg-navy p-7 text-soft-white">
              <MessageCircle className="size-6 text-gold" strokeWidth={1.75} aria-hidden />
              <h3 className="mt-4 font-display text-lg font-semibold">WhatsApp</h3>
              {wa ? (
                <>
                  <p className="mt-1 text-sm text-on-navy-muted">{whatsappDisplay()}</p>
                  <ButtonLink href={wa} className="mt-6 w-full sm:w-auto">
                    Chat on WhatsApp
                    <span className="sr-only"> (opens in a new tab)</span>
                  </ButtonLink>
                </>
              ) : (
                <p className="mt-1 text-sm text-on-navy-muted">[Placeholder] WhatsApp number not configured yet.</p>
              )}
            </div>

            <div className="rounded-card border border-line bg-white p-7">
              <Mail className="size-6 text-gold" strokeWidth={1.75} aria-hidden />
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">Email</h3>
              {mail ? (
                <>
                  <p className="mt-1 text-sm break-all text-muted">{siteConfig.contact.email}</p>
                  <ButtonLink href={mail} variant="outlineDark" className="mt-6 w-full sm:w-auto">
                    Send an email
                  </ButtonLink>
                </>
              ) : (
                <p className="mt-1 text-sm text-muted">[Placeholder] Email address not configured yet.</p>
              )}
            </div>

            <ul className="space-y-4 px-1 pt-2 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                Based in {siteConfig.location}, working with businesses across the country.
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                Every enquiry is read personally and answered as soon as possible.
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="rounded-card border border-line bg-white p-6 sm:p-10">
            <h2 className="font-display text-h3 font-bold text-navy">Project enquiry</h2>
            <p className="mt-2 mb-8 text-muted">Fields marked optional can be left blank.</p>
            <Suspense fallback={<EnquiryForm />}>
              <EnquiryFormWithParams />
            </Suspense>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

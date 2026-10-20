import { ArrowRight, MessageCircle } from "lucide-react";
import { GeometricMark } from "@/components/brand/GeometricMark";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappLink } from "@/config/site";

type CallToActionProps = {
  title?: string;
  description?: string;
};

export function CallToAction({
  title = "Ready to give your business a professional online presence?",
  description = "Tell us about your business and what you need. We will get back to you with clear next steps — no obligation.",
}: CallToActionProps) {
  const wa = whatsappLink();

  return (
    <section className="bg-soft-white py-20 sm:py-28" aria-labelledby="cta-heading">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center sm:px-12 sm:py-20">
          <GeometricMark className="absolute -bottom-32 -left-28 -z-10 size-96 text-gold/20" />
          <GeometricMark className="absolute -top-28 -right-24 -z-10 size-80 rotate-180 text-gold/10" />
          <h2 id="cta-heading" className="mx-auto max-w-2xl text-h2 font-bold text-soft-white">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lead text-on-navy-muted">{description}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href="/contact" size="lg">
              Start a Project
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
            </ButtonLink>
            {wa && (
              <ButtonLink href={wa} size="lg" variant="outlineLight">
                <MessageCircle className="size-4" aria-hidden />
                Chat on WhatsApp
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

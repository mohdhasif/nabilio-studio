import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  // Root-level 404 sits outside the (site) group, so it adds the site chrome itself.
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <section className="bg-navy text-soft-white">
          <Container className="py-28 sm:py-36">
            <Eyebrow onDark>Error 404</Eyebrow>
            <h1 className="mt-6 max-w-2xl text-h1 font-bold">This page could not be found.</h1>
            <p className="mt-6 max-w-xl text-lead text-on-navy-muted">
              The link may be outdated or the address may contain a typo. Let&apos;s get you back on track.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="/" size="lg">
                <ArrowLeft className="size-4" aria-hidden />
                Back to home
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="outlineLight">
                Contact us
              </ButtonLink>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

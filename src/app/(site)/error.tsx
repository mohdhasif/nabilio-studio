"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-navy text-soft-white">
      <Container className="py-28 sm:py-36">
        <h1 className="max-w-2xl text-h1 font-bold">Something went wrong.</h1>
        <p className="mt-6 max-w-xl text-lead text-on-navy-muted">
          An unexpected error occurred while loading this page. Please try again.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button size="lg" onClick={() => retry()}>
            <RotateCcw className="size-4" aria-hidden />
            Try again
          </Button>
          <ButtonLink href="/" size="lg" variant="outlineLight">
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

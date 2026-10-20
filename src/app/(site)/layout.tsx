import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

/** Nabilio Studio corporate pages. Portfolio demos under /demos use their own layouts. */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}

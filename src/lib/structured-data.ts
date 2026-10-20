import { siteConfig } from "@/config/site";
import { services } from "@/content/services";

const priceNumber = (from: string) => Number(from.replace(/[^\d.]/g, ""));

/** Offer for each service's starting package. */
function serviceOffers() {
  return services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.summary,
      url: `${siteConfig.url}/services#${s.slug}`,
    },
    priceSpecification: {
      "@type": s.pricing.unit ? "UnitPriceSpecification" : "PriceSpecification",
      minPrice: priceNumber(s.pricing.from),
      priceCurrency: "MYR",
      ...(s.pricing.unit ? { unitText: "MONTH" } : {}),
    },
  }));
}

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.brand.mainLogo ?? "/icon.svg"}`,
    image: `${siteConfig.url}/opengraph-image`,
    ...(siteConfig.contact.emailIsPlaceholder ? {} : { email: siteConfig.contact.email }),
    ...(siteConfig.contact.whatsappIsPlaceholder ? {} : { telephone: `+${siteConfig.contact.whatsapp}` }),
    address: { "@type": "PostalAddress", addressCountry: "MY" },
    areaServed: { "@type": "Country", name: "Malaysia" },
    priceRange: "RM",
    knowsAbout: ["Web design", "Website development", "Responsive design", "SEO", "PHP", "Laravel", "MySQL"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website services",
      itemListElement: serviceOffers(),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-MY",
    publisher: { "@id": `${siteConfig.url}/#business` },
  };
}

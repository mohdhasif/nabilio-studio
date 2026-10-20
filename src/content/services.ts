import type { LucideIcon } from "lucide-react";
import { LayoutTemplate, Building2, RefreshCcw, ShieldCheck } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  /** One-line summary used on the homepage and in cards. */
  summary: string;
  description: string;
  idealFor: string;
  features: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "landing-pages",
    title: "Business Landing Pages",
    icon: LayoutTemplate,
    summary: "A focused, single-page website that presents your business clearly and makes enquiring effortless.",
    description:
      "A well-structured landing page that introduces your business, highlights what you offer and guides visitors towards one clear action: calling, messaging on WhatsApp or sending an enquiry.",
    idealFor:
      "New businesses, sole proprietors and SMEs that need a credible online presence quickly, or want a dedicated page for a specific service or campaign.",
    features: [
      "Single-page layout with clear sections",
      "Mobile-first, responsive design",
      "WhatsApp, call and email enquiry buttons",
      "Google Maps and business hours",
      "Basic on-page SEO setup",
      "Fast-loading, optimised build",
    ],
    benefits: [
      "Look professional when customers search for you",
      "Make it easy for customers to contact you",
      "A solid starting point you can expand later",
    ],
  },
  {
    slug: "company-profile",
    title: "Company Profile Websites",
    icon: Building2,
    summary: "A multi-page website that tells your company's story, showcases your services and builds trust.",
    description:
      "A complete company website with dedicated pages for your background, services, past work and contact details — structured so customers and partners can quickly understand who you are and what you do.",
    idealFor:
      "Established SMEs, service providers and contractors who need a fuller online profile for customers, partners or tender submissions.",
    features: [
      "Up to several pages (Home, About, Services, Gallery, Contact)",
      "Consistent design aligned with your brand",
      "Service and gallery sections",
      "Enquiry form and WhatsApp integration",
      "SEO-friendly structure and metadata",
      "Guidance on domain, hosting and launch",
    ],
    benefits: [
      "Present your business with credibility",
      "Answer common customer questions up front",
      "Support sales conversations and proposals",
    ],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    icon: RefreshCcw,
    summary: "Refresh an outdated website with a modern design, better structure and a smoother mobile experience.",
    description:
      "A thoughtful rebuild of your existing website. We review what works, improve the structure and content flow, and rebuild it with a modern, responsive design and a cleaner technical foundation.",
    idealFor:
      "Businesses whose current website looks dated, loads slowly, is difficult to use on mobile or no longer reflects how the business has grown.",
    features: [
      "Review of your current website",
      "Improved layout and content structure",
      "Modern, responsive redesign",
      "Performance and accessibility improvements",
      "Preserve important pages and links where possible",
      "Careful migration and launch",
    ],
    benefits: [
      "A website that reflects your business today",
      "Better experience for mobile visitors",
      "A cleaner base that is easier to maintain",
    ],
  },
  {
    slug: "maintenance-support",
    title: "Website Maintenance & Support",
    icon: ShieldCheck,
    summary: "Ongoing updates, fixes and technical support so your website stays reliable and up to date.",
    description:
      "Practical support after launch: content updates, small changes, troubleshooting and routine checks, so you can focus on running your business while your website keeps working as it should.",
    idealFor:
      "Business owners who would rather not manage technical details themselves, or who need a dependable person to call when something on their website needs attention.",
    features: [
      "Content and image updates",
      "Minor layout and feature changes",
      "Troubleshooting and bug fixes",
      "Routine checks and updates",
      "Backup guidance",
      "Clear, responsive communication",
    ],
    benefits: [
      "Keep information accurate and current",
      "Resolve issues without technical hassle",
      "Peace of mind after launch",
    ],
  },
];

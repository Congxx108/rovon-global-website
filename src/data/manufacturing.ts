import { siteConfig } from "@/data/site";

export type ManufacturingPage = {
  slug: string;
  title: string;
  description: string;
  points: string[];
};

export const manufacturingPages: ManufacturingPage[] = [
  {
    slug: "factory-overview",
    title: "Factory Overview",
    description:
      `${siteConfig.brandName} is positioned as a factory-backed supply partner for global bag buyers, with multi-category production and wholesale support.`,
    points: ["Multi-category bag production", "Sampling and bulk production", "Material and accessory sourcing", "Export packing support"],
  },
  {
    slug: "quality-control",
    title: "Quality Control",
    description:
      "Quality control focuses on material checks, workmanship, structure, logo application, packing confirmation, and final export readiness.",
    points: ["Incoming material review", "In-process checks", "Logo and hardware inspection", "Final packing confirmation"],
  },
  {
    slug: "packing-shipping",
    title: "Packing & Shipping",
    description:
      "Packing and shipping support can be adjusted for wholesale cartons, private label packing, regional distribution, and export documentation needs.",
    points: ["Carton packing", "Private label packing", "Export-ready labeling", "Regional shipping coordination"],
  },
];

export function getManufacturingPageBySlug(slug: string) {
  return manufacturingPages.find((page) => page.slug === slug);
}


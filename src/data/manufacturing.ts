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
      `${siteConfig.brandName} operates from Baigou with practical bag production capacity, core category support, and a workflow covering material preparation, cutting, stitching, assembly, inspection, and packing.`,
    points: [
      "Around 5,000 sqm warehouse and operating space",
      "150+ skilled workers and 10 production lines",
      "Around 2,000 bags shipped per day",
      "Core bag categories for wholesale and OEM/ODM buyers",
      "Material preparation, cutting, stitching, and assembly",
      "Inspection, packing, and export preparation",
    ],
  },
  {
    slug: "quality-control",
    title: "Quality Control",
    description:
      "Quality checks run from incoming materials to final packing, covering cutting, stitching, reinforcement, structure, hardware, logo placement, carton details, and shipment readiness.",
    points: [
      "Incoming material review",
      "Cutting and component preparation",
      "Stitching and reinforcement",
      "Structure and function check",
      "Hardware and logo placement",
      "Packing and final shipment inspection",
    ],
  },
  {
    slug: "packing-shipping",
    title: "Packing & Shipping",
    description:
      "Packing and export preparation covers polybags, cartons, private label packaging, hangtags, carton marks, quantity confirmation, volume coordination, and shipment document support.",
    points: [
      "Individual polybag and carton packing",
      "Private label packaging and hangtags",
      "Mixed cartons where applicable",
      "Carton marks and quantity confirmation",
      "Volume and destination requirement coordination",
      "Shipment documentation support",
    ],
  },
];

export function getManufacturingPageBySlug(slug: string) {
  return manufacturingPages.find((page) => page.slug === slug);
}


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
      `${siteConfig.brandName} provides factory-backed production support for global bag buyers who need structured communication across categories, materials, samples, production, packing, and OEM/ODM requirements.`,
    points: [
      "Category-based bag manufacturing support",
      "Material selection and accessory matching",
      "Pattern, structure, and sample communication",
      "Sewing and production coordination",
      "OEM/ODM customization workflow",
      "Packing and export support",
    ],
  },
  {
    slug: "quality-control",
    title: "Quality Control",
    description:
      "Quality control focuses on practical checks from materials to packing, including workmanship, structure, logo application, accessories, and final export readiness before shipment.",
    points: [
      "Material and accessory review",
      "Workmanship and sewing checks",
      "Structure and function confirmation",
      "Logo and hardware inspection",
      "Packing review before export",
      "Quality feedback communication",
    ],
  },
  {
    slug: "packing-shipping",
    title: "Packing & Shipping",
    description:
      "Packing and export support can be coordinated for wholesale cartons, private label packing, regional distribution, carton marks, and delivery plan communication.",
    points: [
      "Wholesale carton packing",
      "Private label packing discussion",
      "Carton marks and export-ready labeling",
      "Packing requirement confirmation",
      "Regional shipping coordination",
      "Delivery plan communication",
    ],
  },
];

export function getManufacturingPageBySlug(slug: string) {
  return manufacturingPages.find((page) => page.slug === slug);
}


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
      `${siteConfig.brandName} provides factory-backed production support for global bag buyers who need Factory Manufacturing, OEM/ODM, private label projects, Flexible Supply discussion, and structured communication across categories, materials, samples, production, packing, and export requirements.`,
    points: [
      "Around 5,000 sqm warehouse and operating space",
      "150+ skilled workers and 10 production lines",
      "Around 2,000 bags shipped per day",
      "Category-based bag manufacturing support",
      "Material selection and accessory matching",
      "Pattern, structure, and sample communication",
      "OEM/ODM and private label workflow",
      "Flexible Supply availability discussion",
    ],
  },
  {
    slug: "quality-control",
    title: "Quality Control",
    description:
      "Quality control focuses on practical checks from materials to packing, including workmanship, structure, logo application, accessories, VANTO KARO brand elements where used, and final export readiness before shipment.",
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
      "Packing and export support can be coordinated for wholesale cartons, private label packing, VANTO KARO labels or trims where suitable, regional distribution, carton marks, and delivery plan communication.",
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


import { contactMessage, siteConfig } from "@/data/site";

export type ProductLine = "manufacturing" | "wholesale" | "ready-stock" | "oem-odm";

export type ProductCategory = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  image: string;
  priority: number;
  ctaLabel: string;
  whatsappMessage: string;
  seoTitle: string;
  seoDescription: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  subCategory?: string;
  productLine: ProductLine;
  description: string;
  shortDescription: string;
  materials?: string[];
  size?: string;
  colors?: string[];
  features?: string[];
  targetMarkets?: string[];
  suitableBuyers?: string[];
  moqNote?: string;
  images: string[];
  isFeatured?: boolean;
  isReadyStock?: boolean;
  supportsOEM?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  whatsappMessage?: string;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "travel-bags",
    name: "Travel Bags",
    headline: "Travel bag manufacturing for wholesale and regional distribution",
    description:
      "Factory-backed duffel bags, travel organizers, luggage-style soft bags, and multi-function travel products for importers and distributors.",
    image: "/images/products/travel-bags/travel-bag-001-main.svg",
    priority: 1,
    ctaLabel: "Request Travel Bag Quote",
    whatsappMessage:
      contactMessage("I am interested in your travel bags. Please send me the latest catalog and wholesale price."),
    seoTitle: `Travel Bag Manufacturer in China | ${siteConfig.brandName}`,
    seoDescription:
      `Source travel bags from ${siteConfig.brandName}, a China-based bag manufacturer and wholesale supplier for global B2B buyers.`,
  },
  {
    slug: "mens-bags",
    name: "Men's Bags",
    headline: "Men's bag supply for wholesale buyers and private label projects",
    description:
      "Business, casual, crossbody, shoulder, and daily men's bag solutions with material, logo, structure, and packing support.",
    image: "/images/products/mens-bags/mens-bag-001-main.svg",
    priority: 2,
    ctaLabel: "Ask for Men's Bag Catalog",
    whatsappMessage:
      contactMessage("I am looking for men's bags for wholesale distribution. Please send your catalog and options."),
    seoTitle: `Men's Bag Manufacturer and Supplier | ${siteConfig.brandName}`,
    seoDescription:
      `${siteConfig.brandName} supplies men's bags for importers, distributors, trading companies, and OEM/ODM buyers worldwide.`,
  },
  {
    slug: "womens-backpacks",
    name: "Women's Backpacks",
    headline: "Women's backpack supplier for fashion, daily, and wholesale channels",
    description:
      "Women's backpacks in practical daily styles with flexible material, color, logo, and packing options for wholesale buyers.",
    image: "/images/products/womens-backpacks/women-backpack-001-main.svg",
    priority: 3,
    ctaLabel: "Request Backpack Catalog",
    whatsappMessage:
      contactMessage("I am interested in women's backpacks. Please send catalog, materials, and wholesale price options."),
    seoTitle: `Women's Backpack Supplier in China | ${siteConfig.brandName}`,
    seoDescription:
      `Find women's backpacks for wholesale supply, regional distribution, and OEM/ODM customization from ${siteConfig.brandName}.`,
  },
  {
    slug: "chest-bags",
    name: "Chest Bags",
    headline: "Chest bags for fast-moving wholesale and lifestyle markets",
    description:
      "Compact chest bags and sling styles for urban, sports, outdoor, and regional wholesale markets.",
    image: "/images/products/chest-bags/chest-bag-001-main.svg",
    priority: 4,
    ctaLabel: "Ask for Chest Bag Price",
    whatsappMessage:
      contactMessage("I want to source chest bags. Please send current designs, materials, MOQ, and wholesale prices."),
    seoTitle: `Chest Bag Manufacturer and Wholesale Supplier | ${siteConfig.brandName}`,
    seoDescription:
      `${siteConfig.brandName} manufactures and supplies chest bags for global importers, wholesalers, and private label buyers.`,
  },
  {
    slug: "waist-bags",
    name: "Waist Bags",
    headline: "Waist bag production for travel, daily, sports, and market supply",
    description:
      "Lightweight waist bags with custom materials, strap structures, logo methods, and market-ready packing options.",
    image: "/images/products/waist-bags/waist-bag-001-main.svg",
    priority: 5,
    ctaLabel: "Request Waist Bag Quote",
    whatsappMessage:
      contactMessage("I am interested in waist bags. Please send your available designs and wholesale quotation."),
    seoTitle: `Waist Bag Manufacturer in China | ${siteConfig.brandName}`,
    seoDescription:
      "Source waist bags from a China-based manufacturer supporting wholesale supply and OEM/ODM customization.",
  },
  {
    slug: "crossbody-bags",
    name: "Crossbody Bags",
    headline: "Crossbody bag solutions for global wholesale buyers",
    description:
      "Crossbody bags across men's, casual, travel, and daily-use segments with factory support for bulk orders.",
    image: "/images/products/crossbody-bags/crossbody-bag-001-main.svg",
    priority: 6,
    ctaLabel: "Request Crossbody Bag Quote",
    whatsappMessage:
      contactMessage("I need crossbody bags for wholesale supply. Please share your catalog and quotation."),
    seoTitle: `Crossbody Bag Manufacturer and Supplier | ${siteConfig.brandName}`,
    seoDescription:
      `${siteConfig.brandName} supports crossbody bag manufacturing, wholesale supply, and OEM/ODM custom projects for global buyers.`,
  },
  {
    slug: "oem-odm-custom-bags",
    name: "OEM / ODM Custom Bags",
    headline: "Custom bag development from sampling to bulk production",
    description:
      "OEM/ODM support for material selection, logo application, structure adjustment, sample development, production, QC, and export packing.",
    image: "/images/products/oem-odm/oem-odm-bag-001-main.svg",
    priority: 7,
    ctaLabel: "Start Custom Bag Project",
    whatsappMessage:
      contactMessage("I want to discuss an OEM/ODM custom bag project. Please tell me what information you need."),
    seoTitle: `OEM ODM Custom Bag Manufacturer | ${siteConfig.brandName}`,
    seoDescription:
      `Start OEM/ODM custom bag projects with ${siteConfig.brandName}, including samples, materials, logo methods, production, QC, and packing.`,
  },
];

export const products: Product[] = productCategories.map((category, index) => ({
  id: `rovon-${category.slug}-001`,
  slug: `${category.slug}-sample-001`,
  name: category.name,
  category: category.slug,
  productLine: category.slug === "oem-odm-custom-bags" ? "oem-odm" : "manufacturing",
  description: category.description,
  shortDescription: category.headline,
  materials: ["Nylon", "Oxford fabric", "PU", "Polyester", "Custom material options"],
  size: "Custom sizes available by project",
  colors: ["Black", "Navy", "Gray", "Khaki", "Custom colors"],
  features: [
    "Factory-backed production",
    "Logo and packing customization",
    "Wholesale order support",
    "Export-ready quality control",
  ],
  targetMarkets: ["Africa", "Middle East", "Southeast Asia", "Latin America"],
  suitableBuyers: ["Importers", "Distributors", "Trading companies", "Brand buyers"],
  moqNote: "MOQ depends on material, structure, logo method, and packing requirements.",
  images: [category.image],
  isFeatured: index < 6,
  supportsOEM: true,
  seoTitle: category.seoTitle,
  seoDescription: category.seoDescription,
  whatsappMessage: category.whatsappMessage,
}));

export const readyStockInfo = {
  slug: "ready-stock",
  name: "Ready Stock & Mixed Wholesale",
  headline: "Flexible ready stock support as a supplementary wholesale channel",
  description:
    `Ready Stock & Mixed Wholesale is a flexible supplement for fast-moving markets, while ${siteConfig.brandName}'s main focus is factory-backed bag manufacturing, wholesale supply, and OEM/ODM solutions.`,
  ctaLabel: "Ask for Available Stock List",
  whatsappMessage:
    contactMessage("I want to ask about ready stock and mixed wholesale options. Please send the available stock list."),
};

export function getCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.category === slug);
}


import { contactMessage, siteConfig } from "@/data/site";

export type ProductLine = "manufacturing" | "wholesale" | "ready-stock" | "oem-odm";

export type ProductCategory = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  buyerUseCase: string;
  suitableBuyers: string[];
  productHighlights: string[];
  customizationOptions: string[];
  moqNote: string;
  relatedCategorySlugs: string[];
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

const defaultMoqNote = "MOQ depends on product type, material, and customization requirements.";

export const productCategories: ProductCategory[] = [
  {
    slug: "travel-bags",
    name: "Travel Bags",
    headline: "Travel bag manufacturing for wholesale and regional distribution",
    description:
      "Factory-backed duffel bags, travel organizers, luggage-style soft bags, and multi-function travel products for importers and distributors.",
    buyerUseCase:
      "Suitable for buyers building travel goods programs, seasonal wholesale lines, promotional travel collections, or regional distribution categories.",
    suitableBuyers: ["Importers", "Travel goods wholesalers", "Regional distributors", "Promotional buyers"],
    productHighlights: [
      "Durable material directions for travel use",
      "Multiple capacity and structure options",
      "Logo customization for wholesale programs",
      "Packing support for export orders",
    ],
    customizationOptions: ["Material", "Logo", "Zipper", "Lining", "Size", "Color", "Packaging"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["mens-bags", "crossbody-bags", "oem-odm-custom-bags"],
    image: "/images/products/travel-bags/travel-bag-001-main.svg",
    priority: 1,
    ctaLabel: "Request Travel Bag Quote",
    whatsappMessage:
      contactMessage("I am interested in travel bags for wholesale supply. Please send catalog options, materials, and quotation details."),
    seoTitle: `Travel Bag Manufacturer in China | ${siteConfig.brandName}`,
    seoDescription:
      `Source travel bags from ${siteConfig.brandName}, a China-based travel bag manufacturer and wholesale bag supplier supporting OEM/ODM custom projects.`,
  },
  {
    slug: "mens-bags",
    name: "Men's Bags",
    headline: "Men's bag supply for wholesale buyers and private label projects",
    description:
      "Business, casual, crossbody, shoulder, and daily men's bag solutions with material, logo, structure, and packing support.",
    buyerUseCase:
      "Built for men's accessory distributors, trading companies, importers, and private label buyers who need practical styles for daily and business use.",
    suitableBuyers: ["Men's bag importers", "Accessory distributors", "Trading companies", "Private label buyers"],
    productHighlights: [
      "Business and casual style directions",
      "Adjustable strap and compartment options",
      "PU, nylon, Oxford, and polyester material choices",
      "Logo label, metal logo, and packing discussion",
    ],
    customizationOptions: ["Material", "Logo method", "Hardware", "Strap", "Compartments", "Color", "Carton packing"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["crossbody-bags", "chest-bags", "oem-odm-custom-bags"],
    image: "/images/products/mens-bags/mens-bag-001-main.svg",
    priority: 2,
    ctaLabel: "Ask for Men's Bag Catalog",
    whatsappMessage:
      contactMessage("I am looking for men's bags for wholesale distribution. Please send catalog options, materials, and quotation details."),
    seoTitle: `Men's Bag Manufacturer and Supplier | ${siteConfig.brandName}`,
    seoDescription:
      `${siteConfig.brandName} is a men's bag manufacturer and wholesale supplier for importers, distributors, trading companies, and OEM/ODM buyers worldwide.`,
  },
  {
    slug: "womens-backpacks",
    name: "Women's Backpacks",
    headline: "Women's backpack supplier for fashion, daily, and wholesale channels",
    description:
      "Women's backpacks in practical daily styles with flexible material, color, logo, and packing options for wholesale buyers.",
    buyerUseCase:
      "Designed for buyers sourcing daily backpacks, fashion backpack lines, regional retail supply, or private label backpack programs.",
    suitableBuyers: ["Backpack importers", "Fashion accessory wholesalers", "Regional distributors", "Brand buyers"],
    productHighlights: [
      "Daily and fashion-oriented structure options",
      "Color and lining coordination support",
      "Logo, puller, label, and packaging customization",
      "Wholesale-ready category planning",
    ],
    customizationOptions: ["Outer material", "Lining", "Logo", "Puller", "Shoulder strap", "Color", "Hangtag"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["travel-bags", "crossbody-bags", "oem-odm-custom-bags"],
    image: "/images/products/womens-backpacks/women-backpack-001-main.svg",
    priority: 3,
    ctaLabel: "Request Backpack Catalog",
    whatsappMessage:
      contactMessage("I am interested in women's backpacks. Please send catalog options, material choices, and wholesale quotation details."),
    seoTitle: `Women's Backpack Supplier in China | ${siteConfig.brandName}`,
    seoDescription:
      `Find women's backpacks from ${siteConfig.brandName}, a China wholesale bag supplier supporting distribution, private label, and OEM/ODM customization.`,
  },
  {
    slug: "chest-bags",
    name: "Chest Bags",
    headline: "Chest bags for fast-moving wholesale and lifestyle markets",
    description:
      "Compact chest bags and sling styles for urban, sports, outdoor, and regional wholesale markets.",
    buyerUseCase:
      "A practical category for buyers sourcing compact daily bags, lifestyle sling products, sports-inspired accessories, or fast-moving wholesale lines.",
    suitableBuyers: ["Importers", "Lifestyle bag wholesalers", "Market distributors", "Trading companies"],
    productHighlights: [
      "Compact structure for daily carry",
      "Urban, outdoor, and sports-inspired directions",
      "Adjustable strap and pocket layout options",
      "Logo and packaging customization support",
    ],
    customizationOptions: ["Material", "Strap", "Buckle", "Pocket layout", "Logo", "Color", "Packing"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["waist-bags", "mens-bags", "crossbody-bags"],
    image: "/images/products/chest-bags/chest-bag-001-main.svg",
    priority: 4,
    ctaLabel: "Ask for Chest Bag Price",
    whatsappMessage:
      contactMessage("I want to source chest bags. Please send available design directions, materials, MOQ notes, and wholesale quotation details."),
    seoTitle: `Chest Bag Manufacturer and Wholesale Supplier | ${siteConfig.brandName}`,
    seoDescription:
      `${siteConfig.brandName} is a chest bag manufacturer and wholesale supplier for global importers, distributors, and private label buyers.`,
  },
  {
    slug: "waist-bags",
    name: "Waist Bags",
    headline: "Waist bag production for travel, daily, sports, and market supply",
    description:
      "Lightweight waist bags with custom materials, strap structures, logo methods, and market-ready packing options.",
    buyerUseCase:
      "Suitable for buyers planning travel accessories, outdoor-inspired products, daily waist bag ranges, or replenishment programs for regional markets.",
    suitableBuyers: ["Travel accessory importers", "Sports bag distributors", "Wholesale market buyers", "Promotional buyers"],
    productHighlights: [
      "Lightweight structure for easy daily use",
      "Travel, outdoor, and casual style directions",
      "Buckle, strap, and pocket customization",
      "Flexible packing discussion for wholesale orders",
    ],
    customizationOptions: ["Fabric", "Buckle", "Strap", "Pocket structure", "Logo", "Color", "Polybag or carton packing"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["chest-bags", "crossbody-bags", "travel-bags"],
    image: "/images/products/waist-bags/waist-bag-001-main.svg",
    priority: 5,
    ctaLabel: "Request Waist Bag Quote",
    whatsappMessage:
      contactMessage("I am interested in waist bags. Please send catalog options, customization choices, and wholesale quotation details."),
    seoTitle: `Waist Bag Supplier and Manufacturer | ${siteConfig.brandName}`,
    seoDescription:
      `Source waist bags from ${siteConfig.brandName}, a China wholesale bag supplier supporting OEM bag manufacturing and export packing discussion.`,
  },
  {
    slug: "crossbody-bags",
    name: "Crossbody Bags",
    headline: "Crossbody bag solutions for global wholesale buyers",
    description:
      "Crossbody bags across men's, casual, travel, and daily-use segments with factory support for bulk orders.",
    buyerUseCase:
      "A versatile product direction for buyers who need daily-use bag ranges, men's accessory programs, travel-related small bags, or private label development.",
    suitableBuyers: ["Bag importers", "Accessory wholesalers", "Regional distributors", "Brand buyers"],
    productHighlights: [
      "Daily, casual, travel, and men's style directions",
      "Adjustable strap and compartment planning",
      "Material, logo, and hardware options",
      "Suitable for multi-category wholesale programs",
    ],
    customizationOptions: ["Material", "Logo", "Hardware", "Strap length", "Interior structure", "Color", "Packaging"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["mens-bags", "chest-bags", "waist-bags"],
    image: "/images/products/crossbody-bags/crossbody-bag-001-main.svg",
    priority: 6,
    ctaLabel: "Request Crossbody Bag Quote",
    whatsappMessage:
      contactMessage("I need crossbody bags for wholesale supply. Please share catalog options, customization choices, and quotation details."),
    seoTitle: `Crossbody Bag Manufacturer and Supplier | ${siteConfig.brandName}`,
    seoDescription:
      `${siteConfig.brandName} supports crossbody bag manufacturing, wholesale supply, and OEM/ODM custom bag projects for global buyers.`,
  },
  {
    slug: "oem-odm-custom-bags",
    name: "OEM / ODM Custom Bags",
    headline: "Custom bag development from sampling to bulk production",
    description:
      "OEM/ODM support for material selection, logo application, structure adjustment, sample development, production, QC, and export packing.",
    buyerUseCase:
      "For brand buyers, importers, and trading companies that need a customized bag project based on a target market, reference sample, design brief, or private label plan.",
    suitableBuyers: ["Brand buyers", "Private label importers", "Trading companies", "Custom project buyers"],
    productHighlights: [
      "Design brief and product direction discussion",
      "Material, hardware, structure, and logo planning",
      "Sample communication before bulk production",
      "Quality check and export packing coordination",
    ],
    customizationOptions: ["Bag type", "Material", "Logo method", "Hardware", "Structure", "Size", "Packaging"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["travel-bags", "mens-bags", "womens-backpacks"],
    image: "/images/products/oem-odm/oem-odm-bag-001-main.svg",
    priority: 7,
    ctaLabel: "Start Custom Bag Project",
    whatsappMessage:
      contactMessage("I want to discuss an OEM/ODM custom bag project. Please tell me what information you need for catalog, sample, and quotation discussion."),
    seoTitle: `OEM ODM Custom Bag Manufacturer | ${siteConfig.brandName}`,
    seoDescription:
      `Start OEM/ODM custom bag projects with ${siteConfig.brandName}, a China custom bag manufacturer supporting samples, materials, logo methods, production, QC, and packing.`,
  },
];

export const products: Product[] = productCategories.map((category, index) => ({
  id: `rovon-${category.slug}-001`,
  slug: `${category.slug}-sample-001`,
  name: `${category.name} Capability Direction`,
  category: category.slug,
  productLine: category.slug === "oem-odm-custom-bags" ? "oem-odm" : "manufacturing",
  description: category.description,
  shortDescription: category.headline,
  materials: ["Nylon", "Oxford fabric", "PU", "Polyester", "Custom material options"],
  size: "Custom sizes available by project",
  colors: ["Black", "Navy", "Gray", "Khaki", "Custom colors"],
  features: category.productHighlights,
  targetMarkets: ["Africa", "Middle East", "Southeast Asia", "Latin America"],
  suitableBuyers: category.suitableBuyers,
  moqNote: category.moqNote,
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
    `Ready Stock & Mixed Wholesale is a flexible supplement for fast-moving markets, while ${siteConfig.brandName}'s main focus remains factory-backed bag manufacturing, wholesale supply, and OEM/ODM custom bag solutions.`,
  ctaLabel: "Ask for Available Stock List",
  whatsappMessage:
    contactMessage("I want to ask about ready stock and mixed wholesale options. Please send the current available stock list."),
};

export function getCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.category === slug);
}

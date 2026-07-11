import { contactMessage, siteConfig } from "@/data/site";

export type ProductLine = "manufacturing" | "wholesale" | "ready-stock" | "oem-odm";

export type ProductCategory = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  buyerUseCase: string;
  suitableBuyers: string[];
  commonUseCases: string[];
  productHighlights: string[];
  customizationOptions: string[];
  sourcingSupport: string[];
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

const defaultMoqNote =
  "MOQ depends on bag type, material, color, logo method, packing, and available stock conditions.";

export const productCategories: ProductCategory[] = [
  {
    slug: "travel-bags",
    name: "Travel Bags",
    headline: "Travel bag manufacturing and flexible supply for wholesale buyers",
    description:
      "Duffel bags, travel organizers, multi-function travel bags, and export-ready travel products for importers, distributors, and private label buyers.",
    buyerUseCase:
      "Suitable for buyers building travel goods programs, seasonal wholesale lines, promotional travel collections, or market-testing orders.",
    suitableBuyers: ["Importers", "Travel goods wholesalers", "Regional distributors", "Promotional buyers"],
    commonUseCases: ["Regional travel goods programs", "Promotional travel bag projects", "Wholesale duffel bag sourcing", "Private label travel accessories"],
    productHighlights: [
      "Durable material directions for travel use",
      "Multiple capacity and structure options",
      "Logo customization for wholesale programs",
      "Packing support for export orders",
    ],
    customizationOptions: ["Material", "Logo", "Zipper", "Lining", "Size", "Color", "Packaging"],
    sourcingSupport: ["Production planning", "Availability check", "Material and capacity discussion", "Logo and packing requirements"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["mens-bags", "crossbody-bags", "oem-odm-custom-bags"],
    image: "/images/products/travel-bags/travel-bag-001-main.svg",
    priority: 1,
    ctaLabel: "Ask About This Category",
    whatsappMessage:
      contactMessage("I am interested in travel bags. Please send the latest catalog and help me choose between Factory Manufacturing and Flexible Supply options for my market."),
    seoTitle: `Travel Bag Manufacturer in China | ${siteConfig.brandName}`,
    seoDescription:
      `Source travel bags from ${siteConfig.brandName}, a factory-backed travel bag manufacturer in China supporting OEM/ODM production and flexible wholesale supply.`,
  },
  {
    slug: "mens-bags",
    name: "Men's Bags",
    headline: "Men's bag manufacturing for wholesale, private label, and flexible sourcing",
    description:
      "Business, casual, crossbody, shoulder, and daily men's bag solutions with material, logo, structure, and packing support.",
    buyerUseCase:
      "Built for men's accessory distributors, trading companies, importers, and private label buyers who need practical styles, stable quality, and clear supply choices.",
    suitableBuyers: ["Men's bag importers", "Accessory distributors", "Trading companies", "Private label buyers"],
    commonUseCases: ["Men's daily bag programs", "Business and casual bag sourcing", "Private label accessory projects", "Regional wholesale distribution"],
    productHighlights: [
      "Business and casual style directions",
      "Adjustable strap and compartment options",
      "PU, nylon, Oxford, and polyester material choices",
      "Logo label, metal logo, and packing discussion",
    ],
    customizationOptions: ["Material", "Logo method", "Hardware", "Strap", "Compartments", "Color", "Carton packing"],
    sourcingSupport: ["Style matching", "Factory Manufacturing brief", "Flexible stock check", "Wholesale quotation preparation"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["crossbody-bags", "chest-bags", "oem-odm-custom-bags"],
    image: "/images/products/mens-bags/mens-bag-001-main.svg",
    priority: 2,
    ctaLabel: "Ask About This Category",
    whatsappMessage:
      contactMessage("I am interested in men's bags. Please send suitable catalog options and advise whether Factory Manufacturing or Flexible Supply is better for my order plan."),
    seoTitle: `Men's Bag Manufacturer and Supplier | ${siteConfig.brandName}`,
    seoDescription:
      `${siteConfig.brandName} is a men's bag manufacturer and flexible wholesale supplier from China for importers, distributors, trading companies, and OEM/ODM buyers.`,
  },
  {
    slug: "womens-backpacks",
    name: "Women's Backpacks",
    headline: "Women's backpack supply for daily, fashion, and fast-moving wholesale channels",
    description:
      "Women's backpacks in practical daily styles with flexible material, color, logo, and packing options for wholesale buyers.",
    buyerUseCase:
      "Designed for buyers sourcing daily backpacks, fashion backpack lines, regional retail supply, private label programs, or flexible replenishment.",
    suitableBuyers: ["Backpack importers", "Fashion accessory wholesalers", "Regional distributors", "Brand buyers"],
    commonUseCases: ["Women's daily backpack sourcing", "Fashion backpack programs", "Private label backpack development", "Regional wholesale replenishment"],
    productHighlights: [
      "Daily and fashion-oriented structure options",
      "Color and lining coordination support",
      "Logo, puller, label, and packaging customization",
      "Wholesale-ready category planning",
    ],
    customizationOptions: ["Outer material", "Lining", "Logo", "Puller", "Shoulder strap", "Color", "Hangtag"],
    sourcingSupport: ["Catalog and color direction", "Lining and puller discussion", "Logo and hangtag coordination", "Manufacturing or flexible supply planning"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["travel-bags", "crossbody-bags", "oem-odm-custom-bags"],
    image: "/images/products/womens-backpacks/women-backpack-001-main.svg",
    priority: 3,
    ctaLabel: "Ask About This Category",
    whatsappMessage:
      contactMessage("I am interested in women's backpacks. Please send catalog options and help me check OEM/ODM, ready stock, or mixed wholesale directions."),
    seoTitle: `Women's Backpack Supplier in China | ${siteConfig.brandName}`,
    seoDescription:
      `Find women's backpacks from ${siteConfig.brandName}, a China wholesale bag supplier supporting flexible sourcing, private label, and OEM/ODM customization.`,
  },
  {
    slug: "chest-bags",
    name: "Chest Bags",
    headline: "Chest bags for fast-moving wholesale, lifestyle, and OEM/ODM markets",
    description:
      "Compact chest bags and sling styles for urban, sports, outdoor, and regional wholesale markets.",
    buyerUseCase:
      "A practical category for buyers sourcing compact daily bags, lifestyle sling products, sports-inspired accessories, or fast-moving wholesale lines with lower inventory risk.",
    suitableBuyers: ["Importers", "Lifestyle bag wholesalers", "Market distributors", "Trading companies"],
    commonUseCases: ["Urban sling bag sourcing", "Sports-inspired accessory programs", "Compact daily bag wholesale", "Market-ready product matching"],
    productHighlights: [
      "Compact structure for daily carry",
      "Urban, outdoor, and sports-inspired directions",
      "Adjustable strap and pocket layout options",
      "Logo and packaging customization support",
    ],
    customizationOptions: ["Material", "Strap", "Buckle", "Pocket layout", "Logo", "Color", "Packing"],
    sourcingSupport: ["Style matching", "Strap and pocket structure discussion", "Logo and packing coordination", "Quotation preparation"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["waist-bags", "mens-bags", "crossbody-bags"],
    image: "/images/products/chest-bags/chest-bag-001-main.svg",
    priority: 4,
    ctaLabel: "Ask About This Category",
    whatsappMessage:
      contactMessage("I am interested in chest bags. Please send catalog options and help me compare custom production, ready stock, or mixed wholesale supply."),
    seoTitle: `Chest Bag Manufacturer and Wholesale Supplier | ${siteConfig.brandName}`,
    seoDescription:
      `${siteConfig.brandName} is a chest bag manufacturer and flexible wholesale supplier from China for importers, distributors, and private label buyers.`,
  },
  {
    slug: "waist-bags",
    name: "Waist Bags",
    headline: "Waist bag production and flexible market supply from China",
    description:
      "Lightweight waist bags with custom materials, strap structures, logo methods, and market-ready packing options.",
    buyerUseCase:
      "Suitable for buyers planning travel accessories, outdoor-inspired products, daily waist bag ranges, market testing, or replenishment programs for regional markets.",
    suitableBuyers: ["Travel accessory importers", "Sports bag distributors", "Wholesale market buyers", "Promotional buyers"],
    commonUseCases: ["Travel accessory programs", "Outdoor-inspired waist bag sourcing", "Daily-use wholesale lines", "Promotional bag projects"],
    productHighlights: [
      "Lightweight structure for easy daily use",
      "Travel, outdoor, and casual style directions",
      "Buckle, strap, and pocket customization",
      "Flexible packing discussion for wholesale orders",
    ],
    customizationOptions: ["Fabric", "Buckle", "Strap", "Pocket structure", "Logo", "Color", "Polybag or carton packing"],
    sourcingSupport: ["Fabric and buckle discussion", "Logo and strap requirement follow-up", "Packing coordination", "Quotation preparation"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["chest-bags", "crossbody-bags", "travel-bags"],
    image: "/images/products/waist-bags/waist-bag-001-main.svg",
    priority: 5,
    ctaLabel: "Ask About This Category",
    whatsappMessage:
      contactMessage("I am interested in waist bags. Please send catalog options and advise the suitable supply path for my quantity range and target market."),
    seoTitle: `Waist Bag Supplier and Manufacturer | ${siteConfig.brandName}`,
    seoDescription:
      `Source waist bags from ${siteConfig.brandName}, a China waist bag supplier supporting OEM bag manufacturing, mixed wholesale, and export packing discussion.`,
  },
  {
    slug: "crossbody-bags",
    name: "Crossbody Bags",
    headline: "Crossbody bag solutions for wholesale, private label, and flexible sourcing",
    description:
      "Crossbody bags across men's, casual, travel, and daily-use segments with factory support for bulk orders.",
    buyerUseCase:
      "A versatile product direction for buyers who need daily-use bag ranges, men's accessory programs, travel-related small bags, flexible replenishment, or private label development.",
    suitableBuyers: ["Bag importers", "Accessory wholesalers", "Regional distributors", "Brand buyers"],
    commonUseCases: ["Daily crossbody bag programs", "Men's accessory sourcing", "Travel small-bag projects", "Private label crossbody development"],
    productHighlights: [
      "Daily, casual, travel, and men's style directions",
      "Adjustable strap and compartment planning",
      "Material, logo, and hardware options",
      "Suitable for multi-category wholesale programs",
    ],
    customizationOptions: ["Material", "Logo", "Hardware", "Strap length", "Interior structure", "Color", "Packaging"],
    sourcingSupport: ["Category and style planning", "Hardware and strap discussion", "Logo and structure coordination", "Catalog and pricing follow-up"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["mens-bags", "chest-bags", "waist-bags"],
    image: "/images/products/crossbody-bags/crossbody-bag-001-main.svg",
    priority: 6,
    ctaLabel: "Ask About This Category",
    whatsappMessage:
      contactMessage("I am interested in crossbody bags. Please send catalog options and help me choose between OEM/ODM production and flexible wholesale supply."),
    seoTitle: `Crossbody Bag Manufacturer and Supplier | ${siteConfig.brandName}`,
    seoDescription:
      `${siteConfig.brandName} supports crossbody bag manufacturing, flexible wholesale supply, and OEM/ODM custom bag projects for global buyers.`,
  },
  {
    slug: "oem-odm-custom-bags",
    name: "OEM / ODM Custom Bags",
    headline: "Factory Manufacturing for OEM/ODM, private label, and custom bag development",
    description:
      "OEM/ODM support for material selection, logo application, structure adjustment, sample development, production, QC, and export packing.",
    buyerUseCase:
      "For brand owners, importers, and trading companies that need a customized bag project based on a target market, reference sample, design brief, or private label plan.",
    suitableBuyers: ["Brand buyers", "Private label importers", "Trading companies", "Custom project buyers"],
    commonUseCases: ["Private label bag development", "Custom logo bag programs", "Material and structure customization", "Sample-to-production project follow-up"],
    productHighlights: [
      "Design brief and product direction discussion",
      "Material, hardware, structure, and logo planning",
      "Sample communication before bulk production",
      "Quality check and export packing coordination",
    ],
    customizationOptions: ["Bag type", "Material", "Logo method", "Hardware", "Structure", "Size", "Packaging"],
    sourcingSupport: ["Design brief review", "Material and logo method discussion", "Sample requirement follow-up", "Bulk production and packing communication"],
    moqNote: defaultMoqNote,
    relatedCategorySlugs: ["travel-bags", "mens-bags", "womens-backpacks"],
    image: "/images/products/oem-odm/oem-odm-bag-001-main.svg",
    priority: 7,
    ctaLabel: "Discuss Your Requirements",
    whatsappMessage:
      contactMessage("I am interested in Factory Manufacturing for an OEM/ODM custom bag project. Please tell me what information you need for materials, logo, samples, quantity, and packing."),
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
  name: "Flexible Supply / Ready Stock",
  headline: "Ready stock, factory overstock, mixed wholesale, low MOQ, and faster delivery as a flexible supply option",
  description:
    `Flexible Supply is the supplementary path for ready stock, factory overstock, mixed wholesale, low MOQ, fast delivery, and market testing. It supports buyers who need lower inventory risk, while ${siteConfig.brandName}'s core positioning remains factory-backed bag manufacturing and OEM/ODM custom bag supply.`,
  ctaLabel: "Discuss Your Requirements",
  whatsappMessage:
    contactMessage("I am interested in Flexible Supply. Please send available ready stock, factory overstock, or mixed wholesale options and help me check what fits my market and quantity range."),
};

export function getCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.category === slug);
}

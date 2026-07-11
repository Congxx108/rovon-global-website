import { contactMessage, siteConfig } from "@/data/site";

export type Market = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  strengths: string[];
  whatsappMessage: string;
};

export const markets: Market[] = [
  {
    slug: "africa",
    name: "Africa",
    headline: "Wholesale bag supply for fast-moving African markets",
    description:
      `${siteConfig.brandName} supports African importers, distributors, wholesalers, and market sellers with Flexible Supply for ready stock, mixed wholesale, market testing, lower inventory risk, and replenishment programs.`,
    strengths: ["Flexible supply and mixed wholesale", "Market testing with lower inventory risk", "Ready stock and factory overstock discussion", "Direct WhatsApp communication with Cason"],
    whatsappMessage:
      contactMessage("I am sourcing bags for the African market. Please send flexible supply, ready stock, mixed wholesale, and suitable catalog options."),
  },
  {
    slug: "middle-east",
    name: "Middle East",
    headline: "Bag manufacturing and OEM/ODM support for Middle East buyers",
    description:
      `For Middle East buyers, ${siteConfig.brandName} supports texture, capacity, appearance, travel bags, men's bags, chest bags, crossbody bags, OEM/ODM production, private label projects, materials, hardware, and packing requirements.`,
    strengths: ["Travel bags and men's bags", "Chest bags and crossbody bags", "Texture, capacity, and appearance discussion", "OEM/ODM and private label support"],
    whatsappMessage:
      contactMessage("I am sourcing bags for the Middle East market. Please share travel bag, men's bag, chest bag, crossbody bag, OEM/ODM, and private label options."),
  },
  {
    slug: "southeast-asia",
    name: "Southeast Asia",
    headline: "Flexible bag supply for trend-driven Southeast Asian markets",
    description:
      `${siteConfig.brandName} helps Southeast Asian buyers source fast-moving styles, practical daily bags, women's backpacks, crossbody bags, and flexible category combinations for online and wholesale channels.`,
    strengths: ["Fast-moving daily bag styles", "Women's backpacks and crossbody bags", "Flexible sourcing and category combinations", "Market-fit catalog recommendations"],
    whatsappMessage:
      contactMessage("I need bag supply options for Southeast Asia. Please send fast-moving styles, women's backpacks, crossbody bags, and flexible sourcing recommendations."),
  },
  {
    slug: "latin-america",
    name: "Latin America",
    headline: "China bag supply chain support for Latin American importers",
    description:
      `${siteConfig.brandName} supports Latin American importers and distributors with stable bag categories, OEM/ODM projects, travel bags, men's bags, regional wholesale supply, and practical catalog communication.`,
    strengths: ["Importer and distributor support", "Travel bags and men's bags", "Stable category planning", "OEM/ODM and wholesale supply"],
    whatsappMessage:
      contactMessage("I am sourcing bags for Latin America. Please send wholesale, OEM/ODM, travel bag, men's bag, and stable category supply information."),
  },
];

export function getMarketBySlug(slug: string) {
  return markets.find((market) => market.slug === slug);
}


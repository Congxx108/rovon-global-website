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
      `${siteConfig.brandName} supports importers, distributors, and market sellers with practical bag categories, flexible communication, and supply options for replenishment and wholesale programs.`,
    strengths: ["Wholesale supply", "Ready stock support", "Competitive product range", "Fast WhatsApp communication"],
    whatsappMessage:
      contactMessage("I am sourcing bags for the African market. Please send catalog and wholesale supply options."),
  },
  {
    slug: "middle-east",
    name: "Middle East",
    headline: "Bag manufacturing and OEM/ODM support for Middle East buyers",
    description:
      `For Middle East buyers, ${siteConfig.brandName} can support men's bags, travel bags, chest bags, waist bags, private label projects, materials, hardware, and packing requirements.`,
    strengths: ["Men's and travel bags", "Private label support", "Material and hardware options", "OEM/ODM projects"],
    whatsappMessage:
      contactMessage("I am sourcing bags for the Middle East market. Please share product and OEM/ODM options."),
  },
  {
    slug: "southeast-asia",
    name: "Southeast Asia",
    headline: "Flexible bag supply for trend-driven Southeast Asian markets",
    description:
      `${siteConfig.brandName} helps regional buyers source women's backpacks, daily bags, crossbody bags, and flexible wholesale product combinations.`,
    strengths: ["Trend-responsive styles", "Women's backpacks", "Daily bag categories", "Flexible wholesale planning"],
    whatsappMessage:
      contactMessage("I need bag supply options for Southeast Asia. Please send catalog and recommended categories."),
  },
  {
    slug: "latin-america",
    name: "Latin America",
    headline: "China bag supply chain support for Latin American importers",
    description:
      `${siteConfig.brandName} supports importers and regional distributors with travel bags, men's bags, backpacks, multi-category wholesale supply, and custom projects.`,
    strengths: ["Importer support", "Regional distribution", "Multi-category wholesale", "OEM/ODM customization"],
    whatsappMessage:
      contactMessage("I am sourcing bags for Latin America. Please send wholesale and OEM/ODM information."),
  },
];

export function getMarketBySlug(slug: string) {
  return markets.find((market) => market.slug === slug);
}


import { siteConfig, vantoKaro } from "@/data/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What are ROVON Global's two supply solutions?",
    answer:
      `${siteConfig.brandName} works through two supply solutions: Factory Manufacturing for OEM/ODM, private label, custom bags, and long-term bulk production; and Flexible Supply for ready stock, factory overstock, mixed wholesale, low MOQ, market testing, and faster delivery.`,
  },
  {
    question: "What is the difference between Factory Manufacturing and Flexible Supply?",
    answer:
      "Factory Manufacturing is for buyers who need custom materials, logo methods, samples, production planning, QC, and repeat orders. Flexible Supply is for buyers who want available stock, factory overstock, mixed category combinations, lower inventory risk, or faster replenishment.",
  },
  {
    question: "Can I talk directly with Cason on WhatsApp?",
    answer:
      `Yes. ${siteConfig.contactPerson} is the real contact behind ${siteConfig.brandName}. Buyers can speak with him directly about catalogs, product direction, OEM/ODM requirements, quantity range, market fit, packing, and the right supply path before asking for a quotation.`,
  },
  {
    question: "Is ROVON Global only a mixed bag supplier?",
    answer:
      `No. Mixed wholesale is only one part of the Flexible Supply path. The main positioning of ${siteConfig.brandName} is factory-backed bag manufacturing and flexible B2B supply from China, including OEM/ODM production, private label projects, and selected ready stock or overstock support.`,
  },
  {
    question: "Do you support OEM/ODM custom bags?",
    answer:
      "Yes. OEM/ODM projects can include material selection, structure adjustment, logo methods, labels, trims, hardware, sample development, bulk production, quality inspection, and export packing coordination.",
  },
  {
    question: "What is VANTO KARO?",
    answer: vantoKaro.description,
  },
  {
    question: "Can I use my own brand or logo?",
    answer:
      "Yes. Buyers can discuss private label and logo options such as woven labels, rubber patches, metal plates, embroidery, printing, hangtags, trims, hardware, and branded packing. Feasibility depends on the product structure, material, quantity, and production method.",
  },
  {
    question: "What information should I send before asking for a quotation?",
    answer:
      "Send your product category, quantity range, destination market, business type, logo or customization needs, material or quality preference, packing needs, and whether you prefer Factory Manufacturing or Flexible Supply. Clear information helps Cason give a practical next step.",
  },
  {
    question: "Do you support ready stock, factory overstock, and mixed wholesale?",
    answer:
      "Yes, when suitable options are available. These belong to Flexible Supply and are useful for market testing, lower MOQ needs, mixed category combinations, fast-moving wholesale, and replenishment. Availability changes, so buyers should contact Cason for the current list.",
  },
  {
    question: "Which buyers are suitable for ROVON Global?",
    answer:
      "ROVON Global is suitable for importers, wholesalers, regional distributors, trading companies, boutique owners, online store sellers, independent website sellers, brand owners, and OEM/ODM custom bag buyers who need reliable China bag sourcing support.",
  },
  {
    question: "What product categories are the main focus?",
    answer:
      `${siteConfig.brandName} focuses on travel bags, men's bags, women's backpacks, chest bags, waist bags, crossbody bags, and OEM/ODM custom bags. Hand bags and school bags may appear as Flexible Supply or ready stock opportunities, but they are not the core manufacturing positioning.`,
  },
  {
    question: "How does ROVON Global reduce sourcing risk?",
    answer:
      "The process starts by clarifying market fit, quantity range, product category, material level, customization needs, and packing requirements before quotation. This helps buyers avoid wrong product combinations, unclear MOQ assumptions, and unnecessary inventory risk.",
  },
];

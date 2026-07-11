import { siteConfig } from "@/data/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What is your MOQ?",
    answer:
      "MOQ depends on the bag type, material, color, logo method, packing, and whether the order is custom production or available stock. Share your category, quantity range, and market so we can suggest a practical starting point.",
  },
  {
    question: "Can I order samples before bulk production?",
    answer:
      "Yes. Samples can be arranged for suitable OEM/ODM projects after the main material, size, logo method, and structure are discussed. For ready-stock items, sample availability depends on current inventory.",
  },
  {
    question: "How long does sampling usually take?",
    answer:
      "Sampling time depends on the product complexity, material availability, logo method, and revision needs. Simple adjustments are usually faster than new structures or fully customized developments.",
  },
  {
    question: "What is the typical production lead time?",
    answer:
      "Production lead time depends on category, order quantity, material preparation, customization, packing, and the factory schedule. Clear requirements help us estimate timing more accurately.",
  },
  {
    question: "Which logo methods do you support?",
    answer:
      "Common options include woven labels, rubber patches, metal plates, embroidery, printing, zipper pullers, hangtags, and branded packing. The right method depends on material, order quantity, and the product surface.",
  },
  {
    question: "Can you customize materials, colors, and sizes?",
    answer:
      "Yes. Materials, colors, lining, hardware, size, structure, straps, pockets, and packing can be discussed for OEM/ODM orders. Final feasibility depends on the design, quantity, and material supply.",
  },
  {
    question: "How do you control quality?",
    answer:
      "Quality checks can cover materials, cutting, stitching, reinforcement, hardware, logo placement, packing, carton marks, and final shipment readiness. The inspection focus depends on the product and order requirements.",
  },
  {
    question: "Can you help with packing and shipping?",
    answer:
      "Yes. Packing can be discussed for wholesale cartons, private label packaging, mixed cartons, labels, carton marks, and export preparation. Shipping coordination depends on destination, volume, and buyer requirements.",
  },
  {
    question: "Do ready-stock items change frequently?",
    answer:
      "Yes. Ready stock, factory overstock, and mixed wholesale options change with current inventory. Contact Cason for the latest available list before planning a replenishment or test order.",
  },
  {
    question: "What payment terms do you accept?",
    answer:
      "Payment terms depend on the order type, buyer profile, product category, and cooperation stage. Please discuss the project details first so the team can confirm suitable terms.",
  },
  {
    question: "What information should I send for a quotation?",
    answer:
      "Send the product category, quantity range, destination market, business type, logo or customization needs, material level, packing needs, and any reference images. Clear details help us respond with suitable products, MOQ options, and pricing.",
  },
  {
    question: "What are ROVON Global's two supply solutions?",
    answer:
      `${siteConfig.brandName} supports Factory Manufacturing for OEM/ODM, private label, custom bags, and bulk production, plus Flexible Supply for ready stock, factory overstock, mixed wholesale, low MOQ, and market testing.`,
  },
  {
    question: "Can I talk directly with Cason on WhatsApp?",
    answer:
      `Yes. ${siteConfig.contactPerson} is your direct contact at ${siteConfig.brandName} for catalog requests, product discussions, OEM/ODM projects, ready-stock updates, and follow-up questions.`,
  },
];

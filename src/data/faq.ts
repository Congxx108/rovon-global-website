import { siteConfig } from "@/data/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Can I talk directly with Cason on WhatsApp?",
    answer:
      `Yes. ${siteConfig.contactPerson} is the direct contact at ${siteConfig.brandName} for catalog requests, wholesale inquiries, OEM/ODM discussions, and product requirement follow-up. WhatsApp is the fastest way to clarify your category, quantity range, market, material needs, logo requirements, and packing plan.`,
  },
  {
    question: "What information should I prepare before asking for a quote?",
    answer:
      "Please prepare your target bag category, estimated quantity, destination market, preferred material or quality level, logo or customization needs, packing requirements, and expected delivery timeline. Clear information helps us recommend the right catalog direction and quotation path.",
  },
  {
    question: "What types of bags do you manufacture or supply?",
    answer:
      `${siteConfig.brandName} focuses on travel bags, men's bags, women's backpacks, chest bags, waist bags, crossbody bags, and OEM/ODM custom bag projects. Ready stock and mixed wholesale can also be discussed as a supplementary option for selected fast-moving markets.`,
  },
  {
    question: "Do you support OEM/ODM custom bag projects?",
    answer:
      "Yes. We can discuss custom materials, colors, logo methods, structure adjustments, sample development, packing requirements, and bulk production planning based on your market and order needs.",
  },
  {
    question: "Can I add my own logo?",
    answer:
      "Yes. Logo options depend on the material, product structure, and quantity. Common directions include woven labels, rubber patches, metal plates, embroidery, printing, and customized hangtags or packing.",
  },
  {
    question: "What materials and accessories can be customized?",
    answer:
      "Materials, lining, zippers, buckles, webbing, hardware, straps, labels, colors, and packing can be discussed. The final options depend on the product category, target quality level, and production feasibility.",
  },
  {
    question: "Can I request samples before bulk production?",
    answer:
      "Sample development can be arranged for suitable OEM/ODM projects. Before sampling, it is helpful to share reference images, target size, material direction, logo requirements, order quantity, and target market.",
  },
  {
    question: "What is your MOQ?",
    answer:
      "MOQ depends on the product type, material, color, logo method, and packing requirements. Ready stock items may have different conditions from custom production. Please contact us with your category and market so we can give a practical answer.",
  },
  {
    question: "Do you support mixed wholesale or ready stock?",
    answer:
      `Ready Stock & Mixed Wholesale is a flexible supplement for fast-moving markets, while ${siteConfig.brandName}'s main focus is factory-backed bag manufacturing, wholesale supply, and OEM/ODM solutions.`,
  },
  {
    question: `Is Ready Stock the main business of ${siteConfig.brandName}?`,
    answer:
      `No. Ready Stock & Mixed Wholesale is only a supplementary channel. The main positioning of ${siteConfig.brandName} remains factory-backed bag manufacturing, wholesale supply, and OEM/ODM custom bag solutions for global B2B buyers.`,
  },
  {
    question: "How do you control quality?",
    answer:
      "Quality control can include material review, production checks, stitching and workmanship inspection, logo and hardware confirmation, packing review, and final shipment checks before export.",
  },
  {
    question: "Can you help with packing and shipping?",
    answer:
      "Yes. Packing can be discussed for wholesale cartons, private label packing, regional distribution, and export needs. Shipping coordination depends on destination, order volume, and buyer requirements.",
  },
  {
    question: "Do you provide catalogs for different bag categories?",
    answer:
      `Yes. Contact ${siteConfig.contactPerson} on WhatsApp with your target category, market, quantity range, and customization needs. We can then share relevant catalog options for travel bags, men's bags, women's backpacks, chest bags, waist bags, crossbody bags, or OEM/ODM custom projects.`,
  },
];


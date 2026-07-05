export type FactoryProfile = {
  yearsExperience: string | null;
  productionBase: string | null;
  skilledWorkers: string | null;
  productionLines: string | null;
  monthlyCapacity: string | null;
  qualityControl: string;
  globalSupply: string;
};

// Replace null fields with verified ROVON Global factory data before launch.
// Do not show unconfirmed years, area, worker count, line count, or monthly capacity on the public site.
export const factoryProfile: FactoryProfile = {
  yearsExperience: null,
  productionBase: null,
  skilledWorkers: null,
  productionLines: null,
  monthlyCapacity: null,
  qualityControl: "Quality control from materials to packing",
  globalSupply: "Stable supply chain for wholesale orders",
};

export const factoryStrengths = [
  {
    title: "Experienced bag manufacturing support",
    description:
      "Factory-backed coordination for sampling, material selection, structure adjustment, production, packing, and export communication.",
  },
  {
    title: "Flexible production capacity",
    description:
      "Production planning can be discussed by product category, material, order quantity, customization level, and delivery schedule.",
  },
  {
    title: factoryProfile.globalSupply,
    description:
      "Multi-category supply support for importers, distributors, trading companies, and regional wholesale buyers.",
  },
  {
    title: factoryProfile.qualityControl,
    description:
      "Checks can cover material, stitching, hardware, logo application, packing confirmation, and final shipment readiness.",
  },
  {
    title: "OEM/ODM support for global buyers",
    description:
      "Custom logo, material, size, structure, color, label, hangtag, and packing support for brand and channel buyers.",
  },
];


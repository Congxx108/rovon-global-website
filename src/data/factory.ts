export type FactoryProfile = {
  yearsExperience: string | null;
  productionBase: string | null;
  skilledWorkers: string | null;
  productionLines: string | null;
  monthlyCapacity: string | null;
  dailyShipping: string | null;
  qualityControl: string;
  globalSupply: string;
};

export const factoryProfile: FactoryProfile = {
  yearsExperience: null,
  productionBase: "Around 5,000 sqm warehouse and operating space",
  skilledWorkers: "150+ skilled workers",
  productionLines: "10 production lines",
  monthlyCapacity: null,
  dailyShipping: "Around 2,000 bags shipped per day",
  qualityControl: "Quality control from materials to packing",
  globalSupply: "Factory-backed supply for manufacturing and flexible wholesale orders",
};

export const factoryStats = [
  factoryProfile.productionBase,
  factoryProfile.skilledWorkers,
  factoryProfile.productionLines,
  factoryProfile.dailyShipping,
].filter((item): item is string => Boolean(item));

export const factoryStrengths = [
  {
    title: "Factory-backed bag production",
    description:
      "Backed by around 5,000 sqm of warehouse and operating space, 150+ skilled workers, and 10 production lines for bag manufacturing and supply coordination.",
  },
  {
    title: "Flexible supply capability",
    description:
      "Ready stock, factory overstock, mixed wholesale, low MOQ, and faster delivery can be discussed when available for selected market needs.",
  },
  {
    title: factoryProfile.globalSupply,
    description:
      "Multi-category support for importers, wholesalers, regional distributors, trading companies, online sellers, and brand buyers.",
  },
  {
    title: factoryProfile.qualityControl,
    description:
      "Checks can cover material, stitching, hardware, logo application, packing confirmation, and final shipment readiness before dispatch.",
  },
  {
    title: "OEM/ODM and private label support",
    description:
      "Custom logo, material, size, structure, color, label, hangtag, trim, hardware, and packing support for brand and channel buyers.",
  },
];

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://rovonglobal.com").replace(/\/+$/, "");
const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "8615302605504").replace(/\D/g, "");
const companyAddress = "No. 378, Wuyi Road, Baigou, Baoding, Hebei, China";
const googleMapsQuery = "Baigou, Baoding, Hebei, China";
const encodedGoogleMapsQuery = encodeURIComponent(googleMapsQuery);

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61574281337883",
    icon: "facebook",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@cason.wholesale_bag",
    icon: "tiktok",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cason.wholesale_bag",
    icon: "instagram",
  },
];

export const siteConfig = {
  companyName: "ROVON Global",
  brandName: "ROVON Global",
  name: "ROVON Global",
  siteUrl,
  url: siteUrl,
  description:
    "ROVON Global is a factory-backed bag manufacturer and flexible supply partner from China, supporting OEM/ODM production, private label projects, ready stock, factory overstock, mixed wholesale, and practical sourcing communication for global B2B buyers.",
  contactPerson: "Cason",
  contactName: "Cason",
  email: "cason@rovonglobal.com",
  whatsappNumber,
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY ?? "+86 153 0260 5504",
  address: companyAddress,
  googleMapsQuery,
  googleMapsEmbedUrl: `https://www.google.com/maps?q=${encodedGoogleMapsQuery}&output=embed`,
  googleMapsExternalUrl: `https://www.google.com/maps/search/?api=1&query=${encodedGoogleMapsQuery}`,
  socialLinks,
};

export const supplySolutions = [
  {
    title: "Factory Manufacturing",
    subtitle: "For OEM/ODM, private label, custom bags, and long-term bulk production.",
    description:
      "Use this path when you need custom materials, logo methods, structure development, samples, quality control, packing, and repeatable production planning.",
    fit: ["OEM/ODM", "Private label", "Custom bags", "Bulk production"],
  },
  {
    title: "Flexible Supply",
    subtitle: "For ready stock, factory overstock, mixed wholesale, market testing, and faster delivery.",
    description:
      "Use this path when you need lower inventory risk, flexible category combinations, available stock discussion, and faster replenishment for selected markets.",
    fit: ["Ready stock", "Factory overstock", "Mixed wholesale", "Low MOQ"],
  },
];

export const vantoKaro = {
  name: "VANTO KARO",
  description:
    "VANTO KARO is an independent bag product brand developed by Cason for selected bag lines, labels, trims, hardware, and packaging. It is manufactured and supplied by ROVON Global, and it does not replace ROVON Global's role as the manufacturing and supply chain partner.",
};

export function whatsappLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

export function contactMessage(message: string) {
  return `Hello ${siteConfig.contactPerson}, ${message}`;
}

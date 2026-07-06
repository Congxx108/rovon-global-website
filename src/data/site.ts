const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://rovonglobal.com").replace(/\/+$/, "");
const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "8615302605504").replace(/\D/g, "");

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
    "ROVON Global is a China-based professional bag manufacturer, factory-backed wholesale supplier, and OEM/ODM partner for global importers, distributors, trading companies, and brand buyers.",
  contactPerson: "Cason",
  contactName: "Cason",
  email: "cason@rovonglobal.com",
  whatsappNumber,
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY ?? "+86 153 0260 5504",
  address: "No. 378, Wuyi Road, Baigou, Baoding, Hebei, China",
  socialLinks,
};

export function whatsappLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

export function contactMessage(message: string) {
  return `Hello ${siteConfig.contactPerson}, ${message}`;
}

import type { FaqItem } from "@/data/faq";
import { siteConfig, whatsappLink } from "@/data/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path = "") {
  if (!path || path === "/") {
    return siteConfig.siteUrl;
  }

  return `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    address: siteConfig.address,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        name: siteConfig.contactPerson,
        email: siteConfig.email,
        telephone: siteConfig.whatsappDisplay,
        url: whatsappLink(`Hello ${siteConfig.contactPerson}, I want to contact ${siteConfig.brandName}.`),
        availableLanguage: ["en"],
      },
    ],
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
    },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const homeItem: BreadcrumbItem = { name: "Home", path: "/" };
  const allItems = [homeItem, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}


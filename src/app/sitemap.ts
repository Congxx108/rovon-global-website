import type { MetadataRoute } from "next";
import { manufacturingPages } from "@/data/manufacturing";
import { markets } from "@/data/markets";
import { productCategories } from "@/data/products";
import { siteConfig } from "@/data/site";

const staticRoutes = [
  "",
  "/catalog",
  "/products",
  "/ready-stock",
  "/manufacturing",
  "/wholesale-solutions",
  "/markets",
  "/oem-odm",
  "/about",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls = [
    ...staticRoutes,
    ...productCategories.map((category) => `/products/${category.slug}`),
    ...manufacturingPages.map((page) => `/manufacturing/${page.slug}`),
    ...markets.map((market) => `/markets/${market.slug}`),
  ];

  return urls.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}


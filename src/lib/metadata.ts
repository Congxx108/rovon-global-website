import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(siteConfig.brandName) ? title : `${title} | ${siteConfig.brandName}`;

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.brandName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

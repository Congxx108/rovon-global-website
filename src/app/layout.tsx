import type { Metadata } from "next";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brandName} | China Bag Manufacturer & Wholesale Supplier`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  keywords: [
    "bag manufacturer China",
    "wholesale bag supplier",
    "travel bag manufacturer",
    "men's bag manufacturer",
    "women backpack supplier",
    "chest bag manufacturer",
    "waist bag supplier",
    "OEM bag manufacturer",
    "ODM bag supplier",
    "custom bag manufacturer",
  ],
  openGraph: {
    title: `${siteConfig.brandName} | China Bag Manufacturer & Global Wholesale Supplier`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | China Bag Manufacturer & Global Wholesale Supplier`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <AnalyticsScripts />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}


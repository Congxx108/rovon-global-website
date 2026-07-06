import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { productCategories, readyStockInfo } from "@/data/products";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Products",
  description:
    `Explore ${siteConfig.brandName} product categories including travel bags, men's bags, women's backpacks, chest bags, waist bags, crossbody bags, and OEM/ODM custom bags.`,
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Bag Product Categories for Global Wholesale Buyers"
        description={`${siteConfig.brandName} focuses on multi-category bag manufacturing and B2B supply. These product categories are designed for importers, distributors, trading companies, brand buyers, and regional wholesale partners.`}
        breadcrumbPath="/products"
      >
        <ButtonLink
          href="/catalog"
          eventName="click_get_catalog"
          eventParams={{ cta_label: "Get Latest Catalog", page_path: "/products" }}
        >
          Get Latest Catalog
        </ButtonLink>
      </PageHero>
      <section className="section-y">
        <div className="container-shell grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <ProductCard key={category.slug} category={category} />
          ))}
          <Link
            href="/ready-stock"
            className="focus-ring group flex min-h-[340px] flex-col justify-between rounded-sm border border-dashed border-stonebrand-200 bg-graphite-50 p-7 transition hover:border-graphite-400"
          >
            <div>
              <p className="muted-label">Supplementary channel</p>
              <h2 className="mt-5 text-2xl font-semibold leading-tight text-graphite-950">
                {readyStockInfo.name}
              </h2>
              <p className="mt-4 text-sm leading-6 text-graphite-600">
                Ready Stock / Mixed Wholesale is a flexible supplement for selected fast-moving markets, while the main focus remains factory-backed manufacturing, wholesale supply, and OEM/ODM.
              </p>
            </div>
            <span className="mt-8 text-sm font-bold text-clay-600 transition group-hover:text-graphite-950">
              Ask for available stock list
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}


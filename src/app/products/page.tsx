import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { productCategories } from "@/data/products";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

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
        <ButtonLink href="/catalog">Get Latest Catalog</ButtonLink>
      </PageHero>
      <section className="section-y">
        <div className="container-shell grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <ProductCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}


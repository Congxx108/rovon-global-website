import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { getCategoryBySlug, getProductsByCategory, productCategories } from "@/data/products";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return createPageMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: `/products/${category.slug}`,
  });
}

export default async function ProductCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.slug);

  return (
    <>
      <PageHero title={category.name} description={category.headline} breadcrumbPath={`/products/${category.slug}`}>
        <WhatsAppCTA message={category.whatsappMessage} label={category.ctaLabel} />
        <ButtonLink href="/products" variant="outline">
          View All Categories
        </ButtonLink>
      </PageHero>

      <section className="section-y">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="panel-card relative aspect-[4/3] overflow-hidden bg-navy-50">
            <Image
              src={category.image}
              alt={`${category.name} manufacturing category`}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h2 className="headline-serif text-4xl font-normal leading-tight text-navy-950">
              {category.description}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Wholesale supply",
                "OEM/ODM support",
                "Material options",
                "Logo and packing customization",
                "Export-ready QC",
                "Global market support",
              ].map((item) => (
                <div key={item} className="panel-card panel-card-hover p-4 text-sm font-semibold text-navy-900">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y soft-section">
        <div className="container-shell">
          <h2 className="headline-serif text-4xl font-normal leading-tight text-navy-950">
            Sample Data Structure
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            This first phase uses local static product data. Future product lists can support pagination or Load More when a larger catalog is added.
          </p>
          <div className="mt-8 grid gap-6">
            {categoryProducts.map((product) => (
              <article key={product.id} className="panel-card p-6">
                <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-navy-50">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(min-width: 768px) 36vw, 100vw"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-950">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                    <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="font-semibold text-navy-950">Materials</dt>
                        <dd className="mt-1 text-slate-600">{product.materials?.join(", ")}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy-950">Size</dt>
                        <dd className="mt-1 text-slate-600">{product.size}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy-950">Target Markets</dt>
                        <dd className="mt-1 text-slate-600">{product.targetMarkets?.join(", ")}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy-950">Buyers</dt>
                        <dd className="mt-1 text-slate-600">{product.suitableBuyers?.join(", ")}</dd>
                      </div>
                    </dl>
                    <WhatsAppCTA
                      message={product.whatsappMessage ?? category.whatsappMessage}
                      label="Send Product Inquiry"
                      className="mt-6"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Discuss ${category.name} Supply`}
        description={`Share your market, target quantity, material preferences, and packing needs. ${siteConfig.brandName} can recommend a practical sourcing path.`}
        message={category.whatsappMessage}
      />
    </>
  );
}


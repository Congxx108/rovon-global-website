import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  const relatedCategories = category.relatedCategorySlugs
    .map((relatedSlug) => getCategoryBySlug(relatedSlug))
    .filter((relatedCategory): relatedCategory is NonNullable<typeof relatedCategory> => Boolean(relatedCategory));

  return (
    <>
      <PageHero title={category.name} description={category.headline} breadcrumbPath={`/products/${category.slug}`}>
        <WhatsAppCTA
          message={category.whatsappMessage}
          label={`Contact ${siteConfig.contactPerson} on WhatsApp`}
          eventName="click_product_inquiry"
          eventParams={{ category: category.name, category_slug: category.slug, cta_label: `Contact ${siteConfig.contactPerson} on WhatsApp` }}
        />
        <ButtonLink href="/products" variant="outline">
          View All Categories
        </ButtonLink>
      </PageHero>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="industrial-frame relative aspect-[4/3] overflow-hidden bg-stonebrand-100">
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
            <p className="editorial-eyebrow">Category supply overview</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] text-graphite-950">
              {category.description}
            </h2>
            <p className="mt-6 text-base leading-8 text-graphite-600">{category.buyerUseCase}</p>
            <div className="mt-7 border border-stonebrand-200 bg-graphite-50 p-5">
              <p className="text-sm font-semibold text-graphite-950">MOQ note</p>
              <p className="mt-2 text-sm leading-6 text-graphite-600">{category.moqNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-stonebrand-200 bg-graphite-50">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="editorial-eyebrow">B2B sourcing fit</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] text-graphite-950">
              Built for B2B sourcing, not retail product browsing.
            </h2>
            <p className="mt-5 text-base leading-7 text-graphite-600">
              This page shows category capability and supply direction. It is not a live retail inventory list. Cason can help you clarify whether Factory Manufacturing, Flexible Supply, or OEM/ODM customization is the right path.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="border border-stonebrand-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-graphite-950">Suitable Buyers</h3>
                <div className="mt-5 grid gap-3">
                  {category.suitableBuyers.map((buyer) => (
                    <p key={buyer} className="flex items-center gap-3 text-sm font-semibold text-graphite-700">
                      <Check className="h-4 w-4 text-clay-600" aria-hidden="true" />
                      {buyer}
                    </p>
                  ))}
                </div>
              </div>
              <div className="border border-stonebrand-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-graphite-950">Common Use Cases</h3>
                <div className="mt-5 grid gap-3">
                  {category.commonUseCases.map((useCase) => (
                    <p key={useCase} className="flex items-start gap-3 text-sm leading-6 text-graphite-700">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-clay-600" aria-hidden="true" />
                      {useCase}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="border border-stonebrand-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-graphite-950">Product Highlights</h3>
                <div className="mt-5 grid gap-3">
                  {category.productHighlights.map((highlight) => (
                    <p key={highlight} className="flex items-start gap-3 text-sm leading-6 text-graphite-700">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-clay-600" aria-hidden="true" />
                      {highlight}
                    </p>
                  ))}
                </div>
              </div>
              <div className="border border-stonebrand-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-graphite-950">Production / Sourcing Support</h3>
                <div className="mt-5 grid gap-3">
                  {category.sourcingSupport.map((support) => (
                    <p key={support} className="flex items-start gap-3 text-sm leading-6 text-graphite-700">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-clay-600" aria-hidden="true" />
                      {support}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="editorial-eyebrow">Customization options</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] text-graphite-950">
              Discuss materials, structure, logo, supply path, and packing before quotation.
            </h2>
            <p className="mt-5 text-base leading-7 text-graphite-600">
              For Factory Manufacturing, share reference photos, target market, expected quantity, material direction, logo needs, and packing requirements. For Flexible Supply, share your target market, category mix, quantity range, and delivery expectation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTA
                message={category.whatsappMessage}
                label={`Contact ${siteConfig.contactPerson} on WhatsApp`}
                eventName="click_product_inquiry"
                eventParams={{ category: category.name, category_slug: category.slug, cta_label: `Contact ${siteConfig.contactPerson} on WhatsApp` }}
              />
              <ButtonLink href="/oem-odm" variant="outline">
                View OEM/ODM Process
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {category.customizationOptions.map((option) => (
              <div key={option} className="border border-stonebrand-200 bg-white p-4 text-sm font-semibold text-graphite-900 transition hover:border-graphite-400">
                {option}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-stonebrand-200 bg-graphite-50">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="editorial-eyebrow">Product direction example</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] text-graphite-950">
              Capability examples for catalog and sourcing discussion.
            </h2>
            <p className="mt-4 text-sm leading-6 text-graphite-600">
              The current page uses representative static data to describe category capability. Real photos, specifications, stock lists, and OEM/ODM details should be confirmed with {siteConfig.contactPerson} before quotation.
            </p>
          </div>
          <div className="mt-8 grid gap-6">
            {categoryProducts.map((product) => (
              <article key={product.id} className="border border-stonebrand-200 bg-white p-6">
                <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stonebrand-100">
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
                    <h3 className="text-xl font-semibold text-graphite-950">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-graphite-600">{product.description}</p>
                    <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="font-semibold text-graphite-950">Materials</dt>
                        <dd className="mt-1 text-graphite-600">{product.materials?.join(", ")}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-graphite-950">Size</dt>
                        <dd className="mt-1 text-graphite-600">{product.size}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-graphite-950">Target Markets</dt>
                        <dd className="mt-1 text-graphite-600">{product.targetMarkets?.join(", ")}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-graphite-950">MOQ</dt>
                        <dd className="mt-1 text-graphite-600">{product.moqNote}</dd>
                      </div>
                    </dl>
                    <WhatsAppCTA
                      message={product.whatsappMessage ?? category.whatsappMessage}
                      label="Send Product Requirements"
                      className="mt-6"
                      eventName="click_product_inquiry"
                      eventParams={{ category: category.name, category_slug: category.slug, cta_label: "Send Product Requirements" }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedCategories.length > 0 ? (
        <section className="section-y bg-white">
          <div className="container-shell">
            <div className="max-w-3xl">
              <p className="editorial-eyebrow">Related categories</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] text-graphite-950">
                Build a broader wholesale bag program.
              </h2>
              <p className="mt-4 text-sm leading-6 text-graphite-600">
                Related categories can support a stronger Factory Manufacturing plan or a more flexible wholesale combination for market testing.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedCategories.map((relatedCategory) => (
                <Link
                  key={relatedCategory.slug}
                  href={`/products/${relatedCategory.slug}`}
                  className="focus-ring group border border-stonebrand-200 bg-white p-6 transition hover:border-graphite-400 hover:shadow-card"
                >
                  <h3 className="text-lg font-semibold text-graphite-950">{relatedCategory.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-graphite-600">{relatedCategory.headline}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-clay-600 transition group-hover:text-graphite-950">
                    Explore category
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        title={`Discuss ${category.name} Supply`}
        description={`Share your market, target quantity, material preferences, business type, and packing needs. ${siteConfig.contactPerson} can help choose between Factory Manufacturing, Flexible Supply, and OEM/ODM customization.`}
        message={category.whatsappMessage}
      />
    </>
  );
}

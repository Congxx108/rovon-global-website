import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    `Learn about ${siteConfig.brandName}, a China-based bag manufacturer and wholesale supplier serving global B2B buyers with manufacturing, supply, and OEM/ODM support.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${siteConfig.brandName}`}
        description={`${siteConfig.brandName} is positioned as a China-based bag manufacturer and wholesale supplier serving importers, distributors, trading companies, regional buyers, and brand customers worldwide.`}
        breadcrumbPath="/about"
      />
      <section className="section-y">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="headline-serif text-4xl font-normal leading-tight text-navy-950">
              Built for Professional B2B Sourcing
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The new {siteConfig.brandName} website is structured around factory strength, professional product categories, global wholesale cooperation, and OEM/ODM capability. It is not a retail ecommerce site and does not use cart, rating, SKU comparison, or checkout logic.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "China-based bag manufacturer",
              "Global wholesale supply partner",
              "Multi-category product system",
              "OEM/ODM custom support",
              "Regional market communication",
              "WhatsApp-first inquiry path",
            ].map((item) => (
              <div key={item} className="panel-card panel-card-hover p-5 text-sm font-semibold text-navy-900">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}


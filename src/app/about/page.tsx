import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { productCategories } from "@/data/products";
import { contactMessage, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const buyerSupport = [
  "Multi-category sourcing",
  "Catalog and quotation support",
  "Customization communication",
  "Sample and production follow-up",
  "Packing and export coordination",
];

export const metadata = createPageMetadata({
  title: "About ROVON Global and Cason",
  description:
    `Learn about ${siteConfig.brandName}, a China-based bag manufacturer and wholesale supplier, and ${siteConfig.contactPerson}, the direct contact for global B2B bag sourcing inquiries.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${siteConfig.brandName}`}
        description={`${siteConfig.brandName} is a China-based bag manufacturer and wholesale supplier supporting global B2B buyers with factory-backed production, wholesale supply, and OEM/ODM custom bag solutions.`}
        breadcrumbPath="/about"
      >
        <WhatsAppCTA
          message={contactMessage(`I want to learn more about ${siteConfig.brandName} and discuss bag sourcing support.`)}
        />
      </PageHero>

      <section className="section-y">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="editorial-eyebrow">About ROVON Global</p>
            <h2 className="headline-serif mt-4 text-4xl font-normal leading-tight text-navy-950">
              A factory-backed supply partner for professional bag buyers.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              {siteConfig.brandName} serves importers, distributors, wholesalers, trading companies, and brand buyers who need reliable communication for bag manufacturing, wholesale supply, and OEM/ODM custom projects from China.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "China-based professional bag manufacturer",
              "Factory-backed wholesale supplier",
              "OEM/ODM custom bag partner",
              "WhatsApp-first B2B inquiry path",
            ].map((item) => (
              <div key={item} className="panel-card panel-card-hover p-5 text-sm font-semibold text-navy-900">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y soft-section">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="editorial-eyebrow">What we focus on</p>
            <h2 className="headline-serif mt-4 text-4xl font-normal leading-tight text-navy-950">
              Core bag categories for global wholesale sourcing.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <div key={category.slug} className="panel-card p-5">
                <p className="text-sm font-semibold text-navy-950">{category.name}</p>
                <p className="mt-2 text-xs leading-5 text-slate-600">{category.headline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="editorial-eyebrow">How we support buyers</p>
            <h2 className="headline-serif mt-4 text-4xl font-normal leading-tight text-navy-950">
              From product category discussion to packing coordination.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              The website is structured for B2B sourcing. Buyers can clarify product categories, catalog needs, materials, logos, sample plans, production follow-up, and packing requirements without generic ecommerce steps.
            </p>
          </div>
          <div className="grid gap-4">
            {buyerSupport.map((item) => (
              <div key={item} className="border-t border-stonebrand-200 pt-4 text-sm font-semibold text-navy-950">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y soft-section">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="editorial-eyebrow">Direct contact</p>
            <h2 className="headline-serif mt-4 text-4xl font-normal leading-tight text-navy-950">
              Meet {siteConfig.contactPerson}, Your Direct Contact at {siteConfig.brandName}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              {siteConfig.contactPerson} helps global buyers communicate directly with {siteConfig.brandName} for catalogs, wholesale inquiries, OEM/ODM discussions, and order requirement follow-up. For buyers who prefer fast WhatsApp communication, {siteConfig.contactPerson} provides a clear contact point instead of a generic inquiry form.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTA
                message={contactMessage("I want to discuss bag sourcing, catalog options, and OEM/ODM requirements directly.")}
              />
              <ButtonLink href="/products" variant="outline">
                Request Latest Catalog
              </ButtonLink>
            </div>
          </div>
          <div className="panel-card bg-sand-50 p-6">
            <h3 className="text-lg font-semibold text-navy-950">What to discuss with {siteConfig.contactPerson}</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
              <li>Target bag category and destination market</li>
              <li>Quantity range and catalog needs</li>
              <li>Material, logo, color, and packing requirements</li>
              <li>OEM/ODM sample or production questions</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Talk to ${siteConfig.contactPerson} About Your Bag Sourcing Plan`}
        description={`Send your target category, market, quantity range, and customization needs. ${siteConfig.contactPerson} can help you get the right catalog and move the inquiry forward.`}
        message={contactMessage("I want to talk about my bag sourcing plan and request the latest catalog.")}
      />
    </>
  );
}

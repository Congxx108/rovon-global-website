import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { productCategories } from "@/data/products";
import { contactMessage, siteConfig, supplySolutions, vantoKaro } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const buyerSupport = [
  "Multi-category sourcing",
  "Catalog and quotation preparation",
  "Customization communication",
  "Sample and production follow-up",
  "Packing and export coordination",
];

export const metadata = createPageMetadata({
  title: "About ROVON Global and Cason",
  description:
    `Learn about ${siteConfig.brandName}, its bag manufacturing and supply work, ${siteConfig.contactPerson} as the direct B2B contact, and VANTO KARO as an independent bag product brand.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${siteConfig.brandName}`}
        description={`${siteConfig.brandName} supports global B2B buyers with bag manufacturing, wholesale supply, OEM/ODM development, ready stock, and export coordination from China.`}
        breadcrumbPath="/about"
      >
        <WhatsAppCTA
          message={contactMessage(`I want to learn more about ${siteConfig.brandName} and discuss bag sourcing support.`)}
          eventName="click_contact_cason"
        />
      </PageHero>

      <section className="section-y">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="editorial-eyebrow">About ROVON Global</p>
            <h2 className="headline-serif mt-4 text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
              A China-based bag manufacturer and supply partner for global buyers.
            </h2>
            <p className="mt-5 text-base leading-7 text-graphite-600">
              {siteConfig.brandName} serves importers, distributors, wholesalers, trading companies, boutique owners, e-commerce sellers, DTC brand owners, and brand buyers who need reliable China bag sourcing support.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "OEM/ODM and private label development",
              "Ready stock, overstock, and mixed wholesale support",
              "Direct WhatsApp communication with Cason",
              "Selected VANTO KARO product-brand elements",
            ].map((item) => (
              <div key={item} className="rounded-md border border-[#dddddd] bg-white p-5 text-sm font-bold text-graphite-900 shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
                {item}
              </div>
            ))}
            <div className="rounded-md border border-[#dddddd] bg-white p-5 text-sm text-graphite-900 shadow-[0_6px_18px_rgba(0,0,0,0.04)] sm:col-span-2">
              <p className="muted-label">Production Base Location</p>
              <p className="mt-3 font-bold">Baigou, Baoding, Hebei, China</p>
              <a
                href={siteConfig.googleMapsExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-bold text-graphite-950 underline underline-offset-4 transition hover:text-graphite-600"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y soft-section">
        <div className="container-shell mb-12 grid gap-6 md:grid-cols-2">
          {supplySolutions.map((solution) => (
            <div key={solution.title} className="interactive-card rounded-md border border-[#dddddd] bg-white p-6 shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
              <p className="editorial-eyebrow">Supply solution</p>
              <h2 className="mt-3 text-2xl font-black text-graphite-950">{solution.title}</h2>
              <p className="mt-3 text-sm leading-6 text-graphite-600">{solution.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="container-shell grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="editorial-eyebrow">What we focus on</p>
            <h2 className="headline-serif mt-4 text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
              Core bag categories for global wholesale sourcing.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <div key={category.slug} className="rounded-md border border-[#dddddd] bg-white p-5 shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
                <p className="text-sm font-black text-graphite-950">{category.name}</p>
                <p className="mt-2 text-xs leading-5 text-graphite-600">{category.headline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="editorial-eyebrow">How we support buyers</p>
            <h2 className="headline-serif mt-4 text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
              From product category discussion to packing coordination.
            </h2>
            <p className="mt-5 text-base leading-7 text-graphite-600">
              We keep the sourcing process direct and practical, from product selection and sampling to production, inspection, packing and export coordination.
            </p>
          </div>
          <div className="grid gap-4">
            {buyerSupport.map((item) => (
              <div key={item} className="border-t border-stonebrand-200 pt-4 text-sm font-semibold text-graphite-950">
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
            <h2 className="headline-serif mt-4 text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
              Meet {siteConfig.contactPerson}, Your Direct Contact at {siteConfig.brandName}
            </h2>
            <p className="mt-5 text-base leading-7 text-graphite-600">
              {siteConfig.contactPerson} helps global buyers communicate directly about catalogs, product requirements, OEM/ODM projects, ready-stock updates, quantity range, market fit, and order follow-up. {siteConfig.brandName} remains the supply partner; Cason is the practical WhatsApp contact.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTA
                message={contactMessage("I want to discuss bag sourcing, catalog options, and OEM/ODM requirements directly.")}
                eventName="click_contact_cason"
              />
              <ButtonLink
                href="/catalog"
                variant="outline"
                eventName="click_get_catalog"
                eventParams={{ cta_label: "Request Latest Catalog", page_path: "/about" }}
              >
                Request Latest Catalog
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-md border border-[#dddddd] bg-[#f7f7f7] p-6">
            <h3 className="text-lg font-black text-graphite-950">What to discuss with {siteConfig.contactPerson}</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-graphite-700">
              <li>Target bag category and destination market</li>
              <li>Quantity range and catalog needs</li>
              <li>Material, logo, color, and packing requirements</li>
              <li>OEM/ODM sample or production questions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="editorial-eyebrow">Independent product brand</p>
            <h2 className="headline-serif mt-4 text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
              {vantoKaro.name}
            </h2>
          </div>
          <div className="rounded-md border border-[#dddddd] bg-white p-6 shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
            <p className="text-base leading-7 text-graphite-600">{vantoKaro.description}</p>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Talk to ${siteConfig.contactPerson} About Your Bag Sourcing Plan`}
        description={`Send your target category, market, quantity range, business type, and customization needs. ${siteConfig.contactPerson} can recommend suitable products and next steps.`}
        message={contactMessage("I want to talk about my bag sourcing plan, request the latest catalog, and discuss suitable next steps.")}
      />
    </>
  );
}

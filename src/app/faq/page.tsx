import { CtaBand } from "@/components/cta-band";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { faqItems } from "@/data/faq";
import { contactMessage, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { faqPageJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "FAQ",
  description:
    `B2B bag sourcing FAQ for global buyers covering ${siteConfig.brandName}'s two supply solutions, Factory Manufacturing, Flexible Supply, OEM/ODM, VANTO KARO, ready stock, catalogs, MOQ, and how to contact ${siteConfig.contactPerson}.`,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqItems)} />
      <PageHero
        title="B2B Bag Sourcing FAQ"
        description={`Answers for importers, distributors, trading companies, online sellers, brand owners, and OEM/ODM buyers choosing between Factory Manufacturing and Flexible Supply from ${siteConfig.brandName}.`}
        breadcrumbPath="/faq"
      >
        <ButtonLink
          href="/catalog"
          eventName="click_get_catalog"
          eventParams={{ cta_label: "Request Latest Catalog", page_path: "/faq" }}
        >
          Request Latest Catalog
        </ButtonLink>
      </PageHero>

      <section className="section-y">
        <div className="container-shell max-w-4xl">
          <div className="grid gap-5">
            {faqItems.map((item) => (
              <article key={item.question} className="panel-card p-6">
                <h2 className="headline-serif text-2xl font-semibold leading-tight text-graphite-950">
                  {item.question}
                </h2>
                <p className="mt-3 text-sm leading-6 text-graphite-600 md:text-base md:leading-7">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a Category-Specific Answer?"
        description={`Share your target product, market, order quantity, business type, and customization needs. ${siteConfig.contactPerson} can give a practical sourcing reply and help choose the right supply path.`}
        message={contactMessage("I have a question about bag sourcing, two supply solutions, MOQ, samples, ready stock, or OEM/ODM support.")}
      />
    </>
  );
}


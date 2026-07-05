import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { faqItems } from "@/data/faq";
import { contactMessage, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { faqPageJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "FAQ",
  description:
    `B2B bag sourcing FAQ for global buyers covering ${siteConfig.brandName} product categories, OEM/ODM, samples, MOQ, ready stock, catalogs, quality control, packing, shipping, and how to contact ${siteConfig.contactPerson}.`,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqItems)} />
      <PageHero
        title="B2B Bag Sourcing FAQ"
        description={`Answers for importers, distributors, trading companies, and brand buyers sourcing bags from ${siteConfig.brandName}.`}
        breadcrumbPath="/faq"
      >
        <WhatsAppCTA
          message={contactMessage("please send me the latest bag catalog and help me clarify the right quotation path.")}
          label="Request Latest Catalog"
        />
      </PageHero>

      <section className="section-y">
        <div className="container-shell max-w-4xl">
          <div className="grid gap-5">
            {faqItems.map((item) => (
              <article key={item.question} className="panel-card p-6">
                <h2 className="headline-serif text-2xl font-normal leading-tight text-navy-950">
                  {item.question}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a Category-Specific Answer?"
        description={`Share your target product, market, order quantity, and customization needs. ${siteConfig.contactPerson} can give a practical sourcing reply.`}
        message={contactMessage("I have a question about bag sourcing, MOQ, samples, or OEM/ODM support.")}
      />
    </>
  );
}


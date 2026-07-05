import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { readyStockInfo } from "@/data/products";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Ready Stock & Mixed Wholesale",
  description:
    `Ready Stock & Mixed Wholesale is a flexible supplement for fast-moving markets, while ${siteConfig.brandName}'s main focus is factory-backed bag manufacturing, wholesale supply, and OEM/ODM solutions.`,
  path: "/ready-stock",
});

export default function ReadyStockPage() {
  return (
    <>
      <PageHero title={readyStockInfo.name} description={readyStockInfo.headline} breadcrumbPath="/ready-stock">
        <WhatsAppCTA message={readyStockInfo.whatsappMessage} label={readyStockInfo.ctaLabel} />
      </PageHero>
      <section className="section-y">
        <div className="container-shell max-w-4xl">
          <h2 className="headline-serif text-4xl font-normal leading-tight text-navy-950">
            Supplementary Supply Channel
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {readyStockInfo.description}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Available stock list by communication",
              "Mixed wholesale for selected buyer needs",
              "Fast replenishment discussion",
              "Supplementary to manufacturing, wholesale supply, and OEM/ODM",
            ].map((item) => (
              <div key={item} className="panel-card p-5 text-sm font-semibold text-navy-900">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Ask for Available Stock List"
        description={`Ready stock details change quickly. Contact ${siteConfig.contactPerson} on WhatsApp to request the latest available options.`}
        message={readyStockInfo.whatsappMessage}
      />
    </>
  );
}


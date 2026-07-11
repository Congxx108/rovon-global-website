import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { readyStockInfo } from "@/data/products";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Flexible Supply for Market Testing and Faster Replenishment",
  description:
    `Explore ready stock, factory overstock, and mixed wholesale options from ${siteConfig.brandName} for lower inventory exposure, faster delivery, and market testing.`,
  path: "/ready-stock",
});

export default function ReadyStockPage() {
  return (
    <>
      <PageHero title={readyStockInfo.name} description={readyStockInfo.headline} breadcrumbPath="/ready-stock">
        <WhatsAppCTA
          message={readyStockInfo.whatsappMessage}
          label={readyStockInfo.ctaLabel}
          eventName="click_ready_stock_inquiry"
          eventParams={{ cta_label: readyStockInfo.ctaLabel, inquiry_type: "Ready Stock List" }}
        />
      </PageHero>
      <section className="section-y">
        <div className="container-shell max-w-4xl">
          <h2 className="headline-serif text-4xl font-semibold leading-tight text-graphite-950">
            Flexible Supply is useful when buyers need speed, testing, or lower inventory risk.
          </h2>
          <p className="mt-4 text-base leading-7 text-graphite-600">
            {readyStockInfo.description}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Ready stock and factory overstock availability check",
              "Mixed wholesale for selected market needs",
              "Low MOQ and faster delivery discussion when available",
              "Factory Manufacturing and OEM/ODM support when custom production is needed",
            ].map((item) => (
              <div key={item} className="panel-card p-5 text-sm font-semibold text-graphite-900">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Check Current Stock Options"
        description={`Ready stock, factory overstock, and mixed wholesale details change quickly. Contact ${siteConfig.contactPerson} on WhatsApp to request current options and market-fit recommendations.`}
        message={readyStockInfo.whatsappMessage}
      />
    </>
  );
}


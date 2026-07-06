import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { markets } from "@/data/markets";
import { contactMessage, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Markets",
  description:
    `${siteConfig.brandName} supports bag buyers across Africa, the Middle East, Southeast Asia, and Latin America with wholesale supply and OEM/ODM options.`,
  path: "/markets",
});

export default function MarketsPage() {
  return (
    <>
      <PageHero
        title="Global Market Support"
        description={`${siteConfig.brandName} serves global importers, distributors, trading companies, and regional buyers with market-fit bag categories, wholesale planning, and practical communication.`}
        breadcrumbPath="/markets"
      />
      <section className="section-y">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          {markets.map((market) => (
            <Link
              key={market.slug}
              href={`/markets/${market.slug}`}
              className="focus-ring panel-card panel-card-hover group p-6"
            >
              <h2 className="headline-serif text-3xl font-semibold leading-tight text-graphite-950">{market.name}</h2>
              <p className="mt-3 text-base leading-7 text-graphite-600">{market.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-graphite-800">
                View market support
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand
        title="Ask for Regional Supply Options"
        message={contactMessage(`I want to discuss regional bag supply options with ${siteConfig.brandName}.`)}
      />
    </>
  );
}


import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { getMarketBySlug, markets } from "@/data/markets";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

type MarketDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return markets.map((market) => ({ slug: market.slug }));
}

export async function generateMetadata({ params }: MarketDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  return market
    ? createPageMetadata({
        title: `${market.name} Market`,
        description: market.description,
        path: `/markets/${market.slug}`,
      })
    : {};
}

export default async function MarketDetailPage({ params }: MarketDetailProps) {
  const { slug } = await params;
  const market = getMarketBySlug(slug);

  if (!market) {
    notFound();
  }

  return (
    <>
      <PageHero title={market.headline} description={market.description} breadcrumbPath={`/markets/${market.slug}`}>
        <WhatsAppCTA message={market.whatsappMessage} label="Contact for Regional Supply" />
      </PageHero>
      <section className="section-y">
        <div className="container-shell max-w-4xl">
          <h2 className="headline-serif text-4xl font-semibold leading-tight text-navy-950">
            Market-Fit Supply Focus
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {market.strengths.map((strength) => (
              <div key={strength} className="panel-card p-5 text-sm font-semibold text-navy-900">
                {strength}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title={`Discuss ${market.name} Supply`}
        description={`Share your target market, preferred bag categories, order plan, and packing needs. ${siteConfig.brandName} can recommend suitable product and supply options.`}
        message={market.whatsappMessage}
      />
    </>
  );
}


import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { factoryStrengths } from "@/data/factory";
import { contactMessage, siteConfig, supplySolutions } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { inquiryProcess, wholesaleSegments } from "@/data/wholesale";

export const metadata = createPageMetadata({
  title: "Wholesale Solutions",
  description:
    `Wholesale bag supply solutions from ${siteConfig.brandName} for importers, distributors, trading companies, brand buyers, and sellers sourcing from China.`,
  path: "/wholesale-solutions",
});

export default function WholesaleSolutionsPage() {
  return (
    <>
      <PageHero
        title="Two Supply Models for Different Buying Needs"
        description={`From long-term OEM/ODM production to ready stock and market-testing orders, ${siteConfig.brandName} helps B2B buyers choose a sourcing model that fits their business stage.`}
        breadcrumbPath="/wholesale-solutions"
      >
        <WhatsAppCTA
          message={contactMessage("I want to discuss wholesale bag supply solutions for my market. Please help me check suitable categories, MOQ options, and pricing details.")}
          label="Discuss Your Requirements"
          eventName="click_contact_cason"
          eventParams={{ cta_label: `Talk to ${siteConfig.contactPerson}`, inquiry_type: "Wholesale Solutions" }}
        />
        <ButtonLink href="/products" variant="outline">
          View Product Categories
        </ButtonLink>
      </PageHero>

      <section className="section-y bg-white">
        <div className="container-shell mb-10 grid gap-6 md:grid-cols-2">
          {supplySolutions.map((solution) => (
            <article key={solution.title} className="interactive-card rounded-md border border-[#dddddd] bg-white p-7 shadow-[0_8px_22px_rgba(0,0,0,0.05)]">
              <p className="editorial-eyebrow">Supply solution</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-graphite-950">{solution.title}</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-graphite-800">{solution.subtitle}</p>
              <p className="mt-4 text-sm leading-6 text-graphite-600">{solution.description}</p>
            </article>
          ))}
        </div>
        <div className="container-shell">
          <div className="grid gap-0 overflow-hidden rounded-md border border-[#dddddd] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.04)] md:grid-cols-2">
            {wholesaleSegments.map((segment, index) => (
              <article key={segment.title} className="border-b border-stonebrand-200 p-7 md:border-r md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-graphite-500">
                  {String(index + 1).padStart(2, "0")} / Buyer type
                </p>
                <h2 className="mt-7 text-3xl font-black leading-tight text-graphite-950">
                  For {segment.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-graphite-600 md:text-base md:leading-7">
                  {segment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-stonebrand-200 bg-graphite-50">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
              Supply advantages for wholesale buyers.
            </h2>
            <p className="mt-4 text-base leading-7 text-graphite-600">
              Buyers can discuss product category planning, OEM/ODM requirements, catalog support, packing, market-specific supply options, and long-term production directly with {siteConfig.contactPerson}.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {factoryStrengths.map((item) => (
              <div key={item.title} className="rounded-md border border-[#dddddd] bg-white p-5 shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:border-graphite-300">
                <CheckCircle2 className="h-5 w-5 text-graphite-950" aria-hidden="true" />
                <h3 className="mt-4 text-base font-black text-graphite-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-graphite-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
              Inquiry Process
            </h2>
            <p className="mt-4 text-base leading-7 text-graphite-600">
              A clear inquiry helps the team recommend suitable categories, available options, pricing details, and customization possibilities.
            </p>
            <ButtonLink href="/contact" variant="secondary" className="mt-8">
              Discuss Your Requirements
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="grid gap-4">
            {inquiryProcess.map((step, index) => (
              <div key={step} className="grid gap-5 border-t border-stonebrand-200 pt-5 sm:grid-cols-[72px_1fr]">
                <span className="text-3xl font-black text-graphite-950">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold leading-6 text-graphite-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Explore Wholesale Cooperation"
        description={`Send your buyer type, target category, market, quantity range, and customization needs. ${siteConfig.contactPerson} can recommend suitable products and next steps.`}
        message={contactMessage("I want to explore wholesale cooperation for bag supply. Please help me check suitable categories, MOQ options, and pricing details.")}
      />
    </>
  );
}


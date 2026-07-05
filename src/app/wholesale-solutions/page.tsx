import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { factoryStrengths } from "@/data/factory";
import { contactMessage, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { inquiryProcess, wholesaleSegments } from "@/data/wholesale";

export const metadata = createPageMetadata({
  title: "Wholesale Solutions",
  description:
    `Wholesale bag supply solutions from ${siteConfig.brandName} for importers, distributors, trading companies, and brand buyers sourcing factory-backed bags from China.`,
  path: "/wholesale-solutions",
});

export default function WholesaleSolutionsPage() {
  return (
    <>
      <PageHero
        title="Wholesale Bag Supply Solutions for Global Buyers"
        description={`${siteConfig.brandName} is not a retail shop. We support global wholesale buyers with factory-backed multi-category bag supply, OEM/ODM customization, catalog support, and flexible cooperation for different markets. Talk to ${siteConfig.contactPerson} to discuss your buyer type and sourcing plan.`}
        breadcrumbPath="/wholesale-solutions"
      >
        <WhatsAppCTA
          message={contactMessage("I want to discuss wholesale bag supply solutions for my market. Please help me clarify catalog options, product categories, and quotation requirements.")}
          label={`Talk to ${siteConfig.contactPerson}`}
          eventName="click_contact_cason"
          eventParams={{ cta_label: `Talk to ${siteConfig.contactPerson}`, inquiry_type: "Wholesale Solutions" }}
        />
        <ButtonLink href="/products" variant="outline">
          View Product Categories
        </ButtonLink>
      </PageHero>

      <section className="section-y">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2">
            {wholesaleSegments.map((segment) => (
              <article key={segment.title} className="panel-card panel-card-hover p-6">
                <h2 className="headline-serif text-3xl font-normal leading-tight text-navy-950">
                  For {segment.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                  {segment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y soft-section">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="headline-serif text-4xl font-normal leading-tight text-navy-950">
              Factory-Backed Supply Advantages
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The cooperation model is built for B2B sourcing, not retail transaction. Buyers can discuss product category planning, OEM/ODM requirements, catalog support, packing, and market-fit supply directly with {siteConfig.contactPerson}.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {factoryStrengths.map((item) => (
              <div key={item.title} className="panel-card panel-card-hover p-5">
                <CheckCircle2 className="h-5 w-5 text-clay-600" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="headline-serif text-4xl font-normal leading-tight text-navy-950">
              Inquiry Process
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A clear inquiry helps the team recommend suitable categories, catalog direction, quotation logic, and customization options.
            </p>
            <ButtonLink href="/contact" variant="secondary" className="mt-8">
              Contact {siteConfig.contactPerson}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="grid gap-4">
            {inquiryProcess.map((step, index) => (
              <div key={step} className="panel-card flex gap-4 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-navy-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="pt-2 text-sm font-semibold leading-6 text-navy-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Explore Wholesale Cooperation"
        description={`Send your buyer type, target category, market, quantity, and customization needs. ${siteConfig.contactPerson} can help you choose the right sourcing direction.`}
        message={contactMessage("I want to explore wholesale cooperation for bag supply. Please help me clarify my buyer type, category needs, and quotation path.")}
      />
    </>
  );
}


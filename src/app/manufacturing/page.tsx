import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { manufacturingPages } from "@/data/manufacturing";
import { contactMessage, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Manufacturing",
  description:
    `${siteConfig.brandName} provides factory-backed bag manufacturing support for global B2B buyers, including category-based production communication, sampling, quality control, packing, export support, and OEM/ODM custom bags.`,
  path: "/manufacturing",
});

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        title="Factory-Backed Bag Manufacturing"
        description={`${siteConfig.brandName} supports global buyers with structured manufacturing communication across product categories, material selection, accessory matching, sample discussion, production coordination, quality inspection, packing, and OEM/ODM custom bag workflows.`}
        breadcrumbPath="/manufacturing"
      />
      <section className="section-y">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="editorial-eyebrow">Professional factory support</p>
            <h2 className="headline-serif mt-4 text-4xl font-normal leading-tight text-navy-950">
              Built around practical bag production communication.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Instead of presenting unverified production numbers, this manufacturing section focuses on the real working areas global buyers need to discuss: category direction, materials, sample details, sewing process, inspection, packing, and export coordination.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Category-based bag manufacturing support",
              "Material selection and accessory matching",
              "Pattern, structure, and sample communication",
              "Sewing and production coordination",
              "Quality inspection before packing",
              "OEM/ODM customization workflow",
            ].map((item) => (
              <div key={item} className="panel-card panel-card-hover p-5 text-sm font-semibold text-navy-900">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {manufacturingPages.map((page) => (
            <Link
              key={page.slug}
              href={`/manufacturing/${page.slug}`}
              className="focus-ring panel-card panel-card-hover group p-6"
            >
              <h2 className="text-xl font-semibold text-navy-950">{page.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{page.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-800">
                Learn more
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand
        title="Discuss Production Capability"
        description={`Share your product category, material direction, quantity range, and custom requirements. ${siteConfig.contactPerson} can help clarify the manufacturing discussion path.`}
        message={contactMessage(`I want to discuss ${siteConfig.brandName} manufacturing capability for my bag sourcing project. Please help me clarify materials, samples, production support, and packing requirements.`)}
      />
    </>
  );
}


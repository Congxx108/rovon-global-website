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
    `${siteConfig.brandName} manufacturing capability covers factory production, sampling, quality control, packing, shipping, and OEM/ODM bag support.`,
  path: "/manufacturing",
});

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        title="Factory-Backed Bag Manufacturing"
        description={`${siteConfig.brandName} presents manufacturing strength through production capability, material coordination, sample development, quality control, packing, and export-ready shipment support.`}
        breadcrumbPath="/manufacturing"
      />
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
        message={contactMessage(`I want to discuss ${siteConfig.brandName} manufacturing capability for my bag sourcing project.`)}
      />
    </>
  );
}


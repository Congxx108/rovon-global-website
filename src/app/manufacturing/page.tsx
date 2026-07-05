import { ArrowRight } from "lucide-react";
import Image from "next/image";
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
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="industrial-frame overflow-hidden">
            <div className="relative aspect-[16/10] bg-slate-100">
              <Image
                src="/images/hero/rovon-hero-supply.svg"
                alt="Factory-backed bag manufacturing support placeholder"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <div>
            <p className="editorial-eyebrow">Professional factory support</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] text-navy-950">
              Built around practical bag production communication.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Instead of presenting unverified production numbers, this manufacturing section focuses on the real working areas global buyers need to discuss: category direction, materials, sample details, sewing process, inspection, packing, and export coordination.
            </p>
            <div className="mt-8 grid gap-0 border-y border-stonebrand-200">
              {[
                "Category-based bag manufacturing support",
                "Material selection and accessory matching",
                "Pattern, structure, and sample communication",
                "Sewing and production coordination",
                "Quality inspection before packing",
                "OEM/ODM customization workflow",
              ].map((item) => (
                <div key={item} className="border-b border-stonebrand-200 py-4 last:border-b-0">
                  <p className="text-sm font-semibold text-navy-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-y border-y border-stonebrand-200 bg-slate-50">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {manufacturingPages.map((page) => (
            <Link
              key={page.slug}
              href={`/manufacturing/${page.slug}`}
              className="focus-ring group border border-stonebrand-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-card"
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


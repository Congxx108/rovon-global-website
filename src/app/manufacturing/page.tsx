import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { factoryStats } from "@/data/factory";
import { manufacturingPages } from "@/data/manufacturing";
import { contactMessage, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Manufacturing",
  description:
    `${siteConfig.brandName} provides Factory Manufacturing support from China for OEM/ODM bags, private label projects, bulk production, quality control, packing, and export communication.`,
  path: "/manufacturing",
});

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        title="Factory Manufacturing for Custom Bags and Long-term Supply"
        description={`${siteConfig.brandName} supports global buyers with structured manufacturing communication across product categories, material selection, accessory matching, sample discussion, production coordination, quality inspection, packing, and OEM/ODM custom bag workflows.`}
        breadcrumbPath="/manufacturing"
      />
      <section className="section-y">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-md border border-[#dddddd] bg-white shadow-[0_8px_22px_rgba(0,0,0,0.06)]">
            <div className="relative aspect-[16/10] bg-graphite-100">
              <Image
                src="/images/generated/factory-process-detail.png"
                alt="Factory-backed luggage manufacturing support"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="editorial-eyebrow">Factory-backed supply capability</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
              Built around practical bag production and sourcing communication.
            </h2>
            <p className="mt-5 text-base leading-7 text-graphite-600">
              Backed by around 5,000 sqm of warehouse and operating space, 150+ skilled workers, and 10 production lines, ROVON Global supports both flexible wholesale orders and large-scale OEM/ODM production, with around 2,000 bags shipped per day.
            </p>
            <div className="mt-8 grid gap-0 border-y border-stonebrand-200">
              {[...factoryStats,
                "Category-based bag manufacturing support",
                "Material selection and accessory matching",
                "Pattern, structure, and sample communication",
                "Sewing and production coordination",
                "Quality inspection before packing",
                "OEM/ODM and private label workflow",
              ].map((item) => (
                <div key={item} className="border-b border-stonebrand-200 py-4 last:border-b-0">
                  <p className="text-sm font-semibold text-graphite-900">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md border border-stonebrand-200 bg-graphite-50 p-5">
              <p className="text-sm font-black text-graphite-950">Factory-backed supply from Baigou, China</p>
              <p className="mt-2 text-sm leading-6 text-graphite-600">{siteConfig.address}</p>
              <a
                href={siteConfig.googleMapsExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-bold text-graphite-950 underline underline-offset-4 transition hover:text-graphite-600"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-y border-y border-stonebrand-200 bg-graphite-50">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {manufacturingPages.map((page) => (
            <Link
              key={page.slug}
              href={`/manufacturing/${page.slug}`}
              className="focus-ring group rounded-md border border-[#dddddd] bg-white p-7 shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:border-graphite-300"
            >
              <h2 className="text-xl font-black text-graphite-950">{page.title}</h2>
              <p className="mt-3 text-sm leading-6 text-graphite-600">{page.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-graphite-800">
                Learn more
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand
        title="Discuss Production Capability"
        description={`Share your product category, material direction, quantity range, business type, and custom requirements. ${siteConfig.contactPerson} can help clarify whether Factory Manufacturing or Flexible Supply fits the project.`}
        message={contactMessage(`I want to discuss ${siteConfig.brandName} Factory Manufacturing capability for my bag sourcing project. Please help me clarify materials, samples, production support, packing requirements, and whether flexible supply is also suitable.`)}
      />
    </>
  );
}


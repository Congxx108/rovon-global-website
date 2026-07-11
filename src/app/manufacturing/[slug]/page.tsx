import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { getManufacturingPageBySlug, manufacturingPages } from "@/data/manufacturing";
import { contactMessage, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

type ManufacturingDetailProps = {
  params: Promise<{ slug: string }>;
};

const detailContent = {
  "factory-overview": {
    heading: "Production Base",
    description:
      "A practical view of ROVON Global's production base, core bag categories, and workflow for global B2B buyers.",
    sections: [
      {
        title: "Production Base",
        points: [
          "Around 5,000 sqm warehouse and operating space",
          "150+ skilled workers",
          "10 production lines",
          "Around 2,000 bags shipped per day",
        ],
      },
      {
        title: "What We Produce",
        points: [
          "Travel bags, men's bags, women's backpacks, chest bags, waist bags, and crossbody bags",
          "OEM/ODM custom bags and private label projects",
          "Ready stock, factory overstock, and mixed wholesale options when available",
        ],
      },
      {
        title: "Production Workflow",
        points: [
          "Material preparation",
          "Cutting",
          "Stitching",
          "Assembly",
          "Inspection",
          "Packing",
        ],
      },
    ],
    ctaTitle: "Discuss Your Production Requirements",
    ctaMessage:
      "I want to discuss production requirements for my bag sourcing project. Please help me clarify category, materials, quantity, samples, and packing.",
  },
  "quality-control": {
    heading: "Quality Checks From Materials to Final Packing",
    description:
      "Quality work focuses on visible, practical checks that help reduce avoidable sourcing problems before shipment.",
    sections: [
      {
        title: "Inspection Flow",
        points: [
          "Incoming material review",
          "Cutting and component preparation",
          "Stitching and reinforcement",
          "Structure and function check",
          "Hardware and logo placement",
          "Packing and final shipment inspection",
        ],
      },
    ],
    ctaTitle: "Discuss Your Quality Requirements",
    ctaMessage:
      "I want to discuss quality requirements for my bag sourcing project. Please help me review materials, stitching, logo placement, hardware, packing, and shipment checks.",
  },
  "packing-shipping": {
    heading: "Packing and Export Preparation for Wholesale Orders",
    description:
      "Packing and export preparation should match the buyer's sales channel, market requirements, carton plan, and shipment arrangement.",
    sections: [
      {
        title: "Packing Options",
        points: [
          "Individual polybag",
          "Carton packing",
          "Private label packaging",
          "Mixed cartons where applicable",
          "Hangtags and labels",
        ],
      },
      {
        title: "Export Preparation",
        points: [
          "Carton marks",
          "Quantity confirmation",
          "Volume coordination",
          "Destination requirements",
          "Shipment documentation support",
        ],
      },
    ],
    ctaTitle: "Discuss Packing and Shipping Requirements",
    ctaMessage:
      "I want to discuss packing and shipping requirements for my bag order. Please help me clarify carton packing, labels, carton marks, quantity, volume, and destination requirements.",
  },
} as const;

export function generateStaticParams() {
  return manufacturingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ManufacturingDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getManufacturingPageBySlug(slug);
  return page
    ? createPageMetadata({
        title: page.title,
        description: page.description,
        path: `/manufacturing/${page.slug}`,
      })
    : {};
}

export default async function ManufacturingDetailPage({ params }: ManufacturingDetailProps) {
  const { slug } = await params;
  const page = getManufacturingPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const content = detailContent[page.slug as keyof typeof detailContent];

  return (
    <>
      <PageHero title={page.title} description={page.description} breadcrumbPath={`/manufacturing/${page.slug}`} />
      <section className="section-y">
        <div className="container-shell max-w-4xl">
          <h2 className="headline-serif text-4xl font-semibold leading-tight text-graphite-950">
            {content.heading}
          </h2>
          <p className="mt-4 text-base leading-7 text-graphite-600">
            {content.description}
          </p>
          <div className="mt-8 grid gap-5">
            {content.sections.map((section) => (
              <div key={section.title} className="panel-card p-6">
                <h3 className="text-xl font-black text-graphite-950">{section.title}</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.points.map((point) => (
                    <div key={point} className="border-t border-stonebrand-200 pt-3 text-sm font-semibold leading-6 text-graphite-900">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title={content.ctaTitle}
        description={`Talk to ${siteConfig.contactPerson} about your target bag category, material requirements, customization needs, quantity range, and packing plan.`}
        message={contactMessage(content.ctaMessage)}
      />
    </>
  );
}


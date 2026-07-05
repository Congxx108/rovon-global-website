import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Globe2,
  Handshake,
  PenTool,
  ShieldCheck,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { factoryStrengths } from "@/data/factory";
import { markets } from "@/data/markets";
import { productCategories, readyStockInfo } from "@/data/products";
import { contactMessage, siteConfig } from "@/data/site";
import { inquiryProcess, wholesaleSegments } from "@/data/wholesale";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "ROVON Global | China Bag Manufacturer & Wholesale Supplier",
  description:
    `${siteConfig.brandName} is a China-based professional bag manufacturer, factory-backed wholesale supplier, and OEM/ODM partner for global B2B buyers.`,
  path: "/",
});

const trustItems = [
  "Factory-backed production",
  "Multi-category wholesale supply",
  "OEM/ODM custom support",
  "Global B2B buyer communication",
];

const manufacturingCapabilities = [
  "Material selection",
  "Sample development",
  "Skilled sewing process",
  "Quality inspection",
  "Packing and export support",
];

const wholesaleIcons = [Store, Handshake, BriefcaseBusiness, PenTool];

const oemSteps = [
  "Design Brief",
  "Material & Structure",
  "Sampling",
  "Bulk Production",
  "Quality Check & Packing",
];

const sourcingSupport = [
  {
    title: "Wholesale bag sourcing",
    description: "Discuss target categories, market positioning, materials, and practical catalog directions for wholesale buying.",
  },
  {
    title: "OEM/ODM custom development",
    description: "Support custom bag projects with material, structure, logo, sample, and packing communication.",
  },
  {
    title: "Product category planning",
    description: "Build a focused product mix across travel bags, men's bags, backpacks, chest bags, waist bags, and crossbody bags.",
  },
  {
    title: "Logo and material customization",
    description: "Coordinate logo methods, fabric choices, zipper, lining, color, label, and packaging requirements.",
  },
  {
    title: "Sample communication",
    description: "Clarify reference samples, design notes, specification details, and quotation requirements before bulk discussion.",
  },
  {
    title: "Packing and export coordination",
    description: "Support carton, polybag, label, and export packing communication for B2B orders.",
  },
];

const homepageInquirySteps = [
  {
    title: "Share your target categories",
    description: "Tell us the bag categories, target buyers, and market you are planning for.",
  },
  {
    title: "Get catalog and quotation",
    description: "Receive suitable catalog directions and a quotation path based on the information shared.",
  },
  {
    title: "Confirm materials and customization",
    description: "Clarify material, logo, color, size, structure, and packing requirements.",
  },
  {
    title: "Sample or order confirmation",
    description: "Confirm whether the next step is sample discussion or direct order planning.",
  },
  {
    title: "Production, packing and delivery support",
    description: "Coordinate production follow-up, quality check, packing, and delivery communication.",
  },
];

const whyWorkItems = [
  "Factory-backed sourcing support",
  "Multi-category bag supply",
  "OEM/ODM communication support",
  "Flexible cooperation for different markets",
  `Direct contact with ${siteConfig.contactPerson} on WhatsApp`,
];

const casonSupportItems = [
  "Direct WhatsApp communication",
  "Catalog and quotation coordination",
  "Product category and material discussion",
  "OEM/ODM requirement follow-up",
];

export default function HomePage() {
  const featuredCategories = productCategories.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-sand-50">
        <div className="absolute inset-0 subtle-grid opacity-45" aria-hidden="true" />
        <div className="container-shell relative grid min-h-[calc(100vh-100px)] items-center gap-12 py-14 md:min-h-[760px] md:py-20 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="max-w-3xl">
            <p className="editorial-eyebrow">China-based Bag Manufacturing & Wholesale Supply</p>
            <h1 className="headline-serif mt-5 text-5xl font-normal leading-[1.02] text-navy-950 md:text-7xl">
              Factory-Backed Bag Manufacturing for Global Wholesale Buyers
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">
              {siteConfig.brandName} supports importers, distributors, trading companies, and brand buyers with factory-backed bag production, multi-category wholesale supply, and OEM/ODM custom solutions. Contact {siteConfig.contactPerson} directly to discuss catalogs, product requirements, and sourcing plans.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/catalog"
                eventName="click_get_catalog"
                eventParams={{ cta_label: "Get Latest Catalog", page_path: "/" }}
              >
                Get Latest Catalog
              </ButtonLink>
              <WhatsAppCTA
                message={contactMessage(`please send me the latest ${siteConfig.brandName} catalog and wholesale quotation.`)}
                eventName="click_contact_cason"
              />
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3 border-t border-stonebrand-200 pt-3 text-sm font-semibold text-navy-950">
                  <Check className="h-4 w-4 text-clay-600" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.05fr_0.72fr] md:items-end">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-stonebrand-100 shadow-lift">
              <Image
                src="/images/hero/rovon-hero-supply.svg"
                alt="ROVON Global bag manufacturing and wholesale supply visual"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                unoptimized
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/60 bg-white/95 p-5 shadow-card backdrop-blur">
                <p className="text-sm font-semibold text-navy-950">B2B inquiry path</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Catalog, quote, OEM/ODM discussion, production planning, and export support.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {productCategories.slice(0, 2).map((category) => (
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className="focus-ring group relative aspect-[4/3] overflow-hidden rounded-lg bg-stonebrand-100 shadow-card"
                >
                  <Image
                    src={category.image}
                    alt={`${category.name} category preview`}
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    unoptimized
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/75 to-transparent p-5 text-white">
                    <p className="headline-serif text-2xl">{category.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stonebrand-200 bg-white">
        <div className="container-shell grid gap-4 py-6 md:grid-cols-4">
          {trustItems.map((item) => (
            <p key={item} className="text-sm font-semibold text-navy-950">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell">
          <SectionHeading
            title="Product Categories We Manufacture"
            description="A focused product system for wholesale sourcing, private label development, and multi-category supply programs."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category, index) => (
              <div key={category.slug} className={index === 0 ? "lg:col-span-2" : undefined}>
                <ProductCard category={category} />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/products" variant="outline">
              View All Product Categories
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-y soft-section">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="editorial-eyebrow">Sourcing support</p>
              <h2 className="headline-serif mt-4 text-4xl font-normal leading-tight text-navy-950 md:text-5xl">
                What We Support for B2B Buyers
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-600">
              {siteConfig.brandName} helps buyers move from category interest to a clearer sourcing plan, including catalog discussion, custom options, sample communication, and export packing coordination.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sourcingSupport.map((item) => (
              <div key={item.title} className="panel-card panel-card-hover p-6">
                <Check className="h-5 w-5 text-clay-600" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y soft-section">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="group relative aspect-[16/11] overflow-hidden rounded-lg bg-stonebrand-100 shadow-lift">
            <Image
              src="/images/hero/rovon-hero-supply.svg"
              alt="Manufacturing support visual for ROVON Global"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              unoptimized
            />
          </div>
          <div>
            <SectionHeading
              title="Manufacturing Strength Built Around Practical Export Support"
              description={`${siteConfig.brandName} is structured for material discussion, sampling, production follow-up, quality checks, packing, and B2B communication.`}
            />
            <div className="mt-9 grid gap-4">
              {manufacturingCapabilities.map((item) => (
                <div key={item} className="flex items-center gap-4 border-t border-stonebrand-200 pt-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-clay-600 shadow-sm">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="font-semibold text-navy-950">{item}</p>
                </div>
              ))}
            </div>
            <ButtonLink href="/manufacturing" variant="secondary" className="mt-9">
              View Manufacturing
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-y bg-sand-50">
        <div className="container-shell">
          <SectionHeading
            title="Wholesale Programs for Global Buyers"
            description={`${siteConfig.brandName} is not a retail shop. We support sourcing programs for different B2B buyer types, from category planning to catalog and quotation discussion.`}
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {wholesaleSegments.map((segment, index) => {
              const Icon = wholesaleIcons[index] ?? Store;
              return (
                <Link
                  href="/wholesale-solutions"
                  key={segment.title}
                  className="focus-ring panel-card panel-card-hover group p-6"
                >
                  <Icon className="h-7 w-7 text-clay-600" aria-hidden="true" />
                  <h3 className="headline-serif mt-8 text-2xl font-normal text-navy-950">{segment.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{segment.description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-clay-600 transition group-hover:text-navy-950">
                    Explore program
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              title="OEM/ODM Custom Bag Solutions"
              description="A clear development path from buyer brief to sample confirmation, bulk production, quality check, and packing preparation."
            />
            <ButtonLink href="/oem-odm" variant="secondary" className="mt-9">
              Start OEM/ODM Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="grid gap-4">
            {oemSteps.map((step, index) => (
              <div key={step} className="grid gap-4 border-t border-stonebrand-200 pt-5 sm:grid-cols-[80px_1fr]">
                <p className="headline-serif text-4xl text-clay-600">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="text-lg font-semibold text-navy-950">{step}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{inquiryProcess[index] ?? "Confirm production and shipment details with the team."}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y soft-section">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="editorial-eyebrow">Inquiry process</p>
              <h2 className="headline-serif mt-4 text-4xl font-normal leading-tight text-navy-950 md:text-5xl">
                A simple path from sourcing request to production discussion.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Share practical details first: target category, market, quantity range, material preference, logo needs, and packing requirements. This helps the quotation discussion stay realistic.
              </p>
            </div>
            <div className="grid gap-4">
              {homepageInquirySteps.map((step, index) => (
                <div key={step.title} className="grid gap-4 border-t border-stonebrand-200 pt-5 sm:grid-cols-[72px_1fr]">
                  <p className="headline-serif text-4xl text-clay-600">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-950">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y soft-section">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="editorial-eyebrow">Regional supply</p>
              <h2 className="headline-serif mt-4 text-4xl font-normal leading-tight text-navy-950 md:text-5xl">
                Global market support without narrowing the brand to one region.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-600">
              Market pages help buyers understand suitable categories and cooperation direction across Africa, the Middle East, Southeast Asia, and Latin America while keeping the main positioning focused on manufacturing, wholesale supply, and OEM/ODM.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {markets.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className="focus-ring panel-card panel-card-hover p-6"
              >
                <Globe2 className="h-6 w-6 text-clay-600" aria-hidden="true" />
                <h3 className="headline-serif mt-8 text-2xl font-normal text-navy-950">{market.name}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{market.headline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-sand-50">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="editorial-eyebrow">Why work with us</p>
            <h2 className="headline-serif mt-4 text-4xl font-normal leading-tight text-navy-950 md:text-5xl">
              Practical support for buyers who need a reliable bag supply partner.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              The goal is professional B2B inquiry, not retail transaction. It is to help importers, distributors, trading companies, and brand buyers communicate sourcing needs clearly and move toward a workable wholesale or OEM/ODM plan.
            </p>
          </div>
          <div className="grid gap-4">
            {whyWorkItems.map((item) => (
              <div key={item} className="flex items-center gap-4 border-t border-stonebrand-200 pt-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-clay-600 shadow-sm">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="font-semibold text-navy-950">{item}</p>
              </div>
            ))}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/wholesale-solutions" variant="secondary">
                Explore Wholesale Solutions
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <WhatsAppCTA
                message={contactMessage("I want to discuss wholesale bag sourcing and OEM/ODM support. Please send the latest catalog and quotation path.")}
                eventName="click_contact_cason"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="editorial-eyebrow">Direct buyer communication</p>
            <h2 className="headline-serif mt-4 text-4xl font-normal leading-tight text-navy-950 md:text-5xl">
              Work Directly With {siteConfig.contactPerson}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              {siteConfig.contactPerson} is your direct contact at {siteConfig.brandName} for wholesale bag sourcing, OEM/ODM communication, catalog requests, and product requirement discussions. Instead of sending a generic inquiry, buyers can talk directly through WhatsApp to clarify categories, quantities, materials, customization needs, and delivery plans.
            </p>
            <WhatsAppCTA
              message={contactMessage("I want to discuss my bag sourcing plan. Please help me with catalog options, product requirements, and OEM/ODM communication.")}
              label={`Contact ${siteConfig.contactPerson} on WhatsApp`}
              className="mt-8"
              eventName="click_contact_cason"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {casonSupportItems.map((item) => (
              <div key={item} className="panel-card panel-card-hover p-6">
                <Check className="h-5 w-5 text-clay-600" aria-hidden="true" />
                <p className="mt-5 text-sm font-semibold leading-6 text-navy-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="rounded-lg border border-stonebrand-200 bg-sand-50 p-8 md:p-10">
            <p className="editorial-eyebrow">Supplementary channel</p>
            <h2 className="headline-serif mt-4 text-4xl font-normal leading-tight text-navy-950">
              Ready Stock stays secondary to factory-backed supply.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              {readyStockInfo.description}
            </p>
          </div>
          <div className="grid gap-4">
            {factoryStrengths.slice(0, 3).map((item) => (
              <div key={item.title} className="flex gap-4 border-t border-stonebrand-200 pt-5">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-clay-600" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="mt-3 flex flex-wrap gap-3">
              <ButtonLink href="/ready-stock" variant="outline">
                Learn About Ready Stock
              </ButtonLink>
              <WhatsAppCTA
                message={readyStockInfo.whatsappMessage}
                label={readyStockInfo.ctaLabel}
                eventName="click_ready_stock_inquiry"
                eventParams={{ cta_label: readyStockInfo.ctaLabel }}
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Build a clearer bag sourcing plan with ROVON Global."
        description={`Send your target categories, market, quantity, and customization needs. ${siteConfig.contactPerson} can share catalog options and a practical quotation path.`}
      />
    </>
  );
}


import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ClipboardCheck,
  Factory,
  Globe2,
  Handshake,
  Layers3,
  MessageCircle,
  PackageCheck,
  PenTool,
  Ruler,
  Scissors,
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
import { markets } from "@/data/markets";
import { productCategories, readyStockInfo } from "@/data/products";
import { contactMessage, siteConfig } from "@/data/site";
import { wholesaleSegments } from "@/data/wholesale";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "ROVON Global | China Bag Manufacturer & Wholesale Supplier",
  description:
    `${siteConfig.brandName} is a China-based professional bag manufacturer, factory-backed wholesale supplier, and OEM/ODM partner for global B2B buyers.`,
  path: "/",
});

const trustItems = [
  "Factory-backed supply",
  "Multi-category bags",
  "OEM/ODM development",
  "WhatsApp communication",
];

const processSteps = [
  {
    title: "Product Brief",
    description: "Share target category, market, quantity range, and reference direction.",
    icon: ClipboardCheck,
  },
  {
    title: "Material & Structure",
    description: "Discuss fabric, lining, hardware, logo method, structure, and packing needs.",
    icon: Layers3,
  },
  {
    title: "Sample Direction",
    description: "Clarify sample details, adjustment points, and quotation requirements.",
    icon: Ruler,
  },
  {
    title: "Production Follow-up",
    description: "Move into order communication, quality check, packing, and delivery support.",
    icon: Factory,
  },
];

const manufacturingBlocks = [
  {
    title: "Materials & Accessories",
    description: "Fabric, lining, zipper, puller, buckle, label, hangtag, and packing direction.",
    icon: Layers3,
  },
  {
    title: "Cutting & Sewing",
    description: "Structured production communication for different bag categories and structures.",
    icon: Scissors,
  },
  {
    title: "Quality Control",
    description: "Inspection discussion from material details to finished goods and packing checks.",
    icon: ShieldCheck,
  },
  {
    title: "Packing & Export Support",
    description: "Polybag, carton, carton mark, warehouse, and shipment coordination for B2B buyers.",
    icon: PackageCheck,
  },
];

const wholesaleIcons = [Store, Handshake, BriefcaseBusiness, PenTool];

const casonSupportItems = [
  "Catalog and category direction",
  "Wholesale quotation preparation",
  "OEM/ODM requirement follow-up",
  "Material, logo, packing discussion",
];

export default function HomePage() {
  const featuredCategories = productCategories.slice(0, 6);

  return (
    <>
      <section className="border-b border-stonebrand-200 bg-white">
        <div className="container-shell grid min-h-[calc(100vh-88px)] gap-12 py-12 md:min-h-[720px] md:py-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="editorial-eyebrow">China-based Bag Manufacturing & Wholesale Supply</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.02em] text-navy-950 md:text-7xl">
              Bag Manufacturing & Wholesale Supply from China
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">
              {siteConfig.brandName} supports importers, distributors, trading companies, and brand buyers with travel bags, men&apos;s bags, women&apos;s backpacks, chest bags, waist bags, crossbody bags, and OEM/ODM custom bag solutions. Contact {siteConfig.contactPerson} directly for catalog requests, quotation paths, and product requirement discussion.
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
          </div>

          <div className="industrial-frame overflow-hidden">
            <div className="grid border-b border-stonebrand-200 bg-white px-4 py-3 sm:grid-cols-3">
              {["Travel Bags", "Men's Bags", "OEM/ODM"].map((item) => (
                <p key={item} className="border-stonebrand-200 py-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-600 sm:border-r sm:px-4 last:sm:border-r-0">
                  {item}
                </p>
              ))}
            </div>
            <div className="relative aspect-[16/10] bg-slate-100">
              <Image
                src="/images/hero/rovon-hero-supply.svg"
                alt="ROVON Global product display placeholder for bag manufacturing"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="grid divide-y divide-stonebrand-200 bg-white md:grid-cols-3 md:divide-x md:divide-y-0">
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-clay-600">Core focus</p>
                <p className="mt-2 text-sm font-semibold text-navy-950">Factory-backed bag supply</p>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-clay-600">Buyer path</p>
                <p className="mt-2 text-sm font-semibold text-navy-950">Catalog to inquiry</p>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-clay-600">Contact</p>
                <p className="mt-2 text-sm font-semibold text-navy-950">Talk to {siteConfig.contactPerson}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stonebrand-200 bg-slate-50">
        <div className="container-shell grid divide-y divide-stonebrand-200 md:grid-cols-4 md:divide-x md:divide-y-0">
          {trustItems.map((item) => (
            <div key={item} className="flex min-h-20 items-center gap-3 py-4 md:px-6">
              <Check className="h-4 w-4 text-clay-600" aria-hidden="true" />
              <p className="text-sm font-bold text-navy-950">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell">
          <SectionHeading
            title="Product Categories We Manufacture"
            description="A focused product category system for wholesale sourcing, private label development, and multi-category supply programs."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category, index) => (
              <div key={category.slug} className={index === 0 ? "lg:col-span-2 lg:row-span-2" : undefined}>
                <ProductCard category={category} featured={index === 0} />
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

      <section className="section-y border-y border-stonebrand-200 bg-slate-50">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="editorial-eyebrow">OEM/ODM manufacturing process</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] text-navy-950 md:text-5xl">
              From sourcing brief to production follow-up.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              The process is built for B2B buyers who need clear communication before quotation: category direction, material choices, logo needs, sample details, production, quality check, and packing support.
            </p>
            <ButtonLink href="/oem-odm" variant="secondary" className="mt-8">
              Discuss OEM/ODM Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="grid gap-0 border border-stonebrand-200 bg-white md:grid-cols-2">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="border-b border-stonebrand-200 p-7 last:border-b-0 md:border-r md:last:border-r-0 md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-clay-600" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-navy-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <div className="industrial-frame overflow-hidden">
            <div className="relative aspect-[16/10] bg-slate-100">
              <Image
                src="/images/hero/rovon-hero-supply.svg"
                alt="Manufacturing, quality control, materials and packing support placeholder"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <div>
            <p className="editorial-eyebrow">Manufacturing strength / Quality control</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] text-navy-950 md:text-5xl">
              Built around materials, sewing, inspection, packing, and export support.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Instead of unverified factory numbers, the website focuses on the production topics buyers actually need to clarify before orders.
            </p>
            <div className="mt-8 grid gap-0 border-y border-stonebrand-200">
              {manufacturingBlocks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href="/manufacturing"
                    className="group grid gap-4 border-b border-stonebrand-200 py-5 last:border-b-0 sm:grid-cols-[44px_1fr_24px]"
                  >
                    <Icon className="h-6 w-6 text-clay-600" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-navy-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-clay-600 sm:block" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-stonebrand-200 bg-slate-50">
        <div className="container-shell">
          <SectionHeading
            title="Wholesale Solutions for Global Buyers"
            description={`${siteConfig.brandName} is not a retail shop. We support sourcing programs for importers, distributors, trading companies, and brand buyers.`}
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {wholesaleSegments.map((segment, index) => {
              const Icon = wholesaleIcons[index] ?? Store;
              return (
                <Link
                  href="/wholesale-solutions"
                  key={segment.title}
                  className="focus-ring group border border-stonebrand-200 bg-white p-7 transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-card"
                >
                  <Icon className="h-7 w-7 text-clay-600" aria-hidden="true" />
                  <h3 className="mt-8 text-2xl font-semibold text-navy-950">{segment.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{segment.description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-clay-600 transition group-hover:text-navy-950">
                    Explore solution
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="editorial-eyebrow">Direct buyer communication</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] text-navy-950 md:text-5xl">
              Talk directly with {siteConfig.contactPerson} after reviewing the website.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {siteConfig.contactPerson} is the direct contact at {siteConfig.brandName} for wholesale bag sourcing, catalog requests, OEM/ODM discussions, and product requirement follow-up. The role is simple: help buyers communicate efficiently, not replace the ROVON Global brand.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/catalog">Request Latest Catalog</ButtonLink>
              <WhatsAppCTA
                message={contactMessage("I want to discuss my bag sourcing plan. Please help me with catalog options, product requirements, and OEM/ODM communication.")}
                label={`Contact ${siteConfig.contactPerson} on WhatsApp`}
                eventName="click_contact_cason"
              />
            </div>
          </div>
          <div className="grid gap-0 border border-stonebrand-200 bg-white sm:grid-cols-2">
            {casonSupportItems.map((item) => (
              <div key={item} className="border-b border-stonebrand-200 p-7 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                <MessageCircle className="h-6 w-6 text-clay-600" aria-hidden="true" />
                <p className="mt-6 text-base font-semibold leading-6 text-navy-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-stonebrand-200 bg-slate-50">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="editorial-eyebrow">Supplementary channel</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] text-navy-950 md:text-5xl">
              Ready Stock stays secondary to factory-backed supply.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {readyStockInfo.description}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {markets.slice(0, 4).map((market) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className="focus-ring group border border-stonebrand-200 bg-white p-6 transition hover:border-slate-400"
              >
                <Globe2 className="h-5 w-5 text-clay-600" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold text-navy-950">{market.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{market.headline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Request a bag catalog and discuss your sourcing plan."
        description={`Tell ${siteConfig.contactPerson} your target category, market, quantity range, and customization needs. ROVON Global can help clarify wholesale options and OEM/ODM possibilities.`}
      />
    </>
  );
}

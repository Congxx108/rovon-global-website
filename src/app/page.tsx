import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ClipboardCheck,
  Factory,
  Handshake,
  Layers3,
  MessageCircle,
  PackageCheck,
  PenTool,
  Ruler,
  Scissors,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
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

const capabilityStrip = [
  "Factory-backed production",
  "Multi-category sourcing",
  "Quality inspection",
  "Export packing",
  "Wholesale cooperation",
];

const processSteps = [
  {
    title: "Watch Cason's video",
    description: "Many buyers first discover ROVON Global through product and sourcing videos.",
    icon: MessageCircle,
  },
  {
    title: "Request catalog",
    description: "Share your target category, market, and quantity range before quotation.",
    icon: ClipboardCheck,
  },
  {
    title: "Confirm requirements",
    description: "Discuss material, logo, color, structure, packing, and sample direction.",
    icon: Ruler,
  },
  {
    title: "Production follow-up",
    description: "Move into order communication, quality checks, packing, and delivery support.",
    icon: Factory,
  },
];

const supplyChainItems = [
  {
    title: "Factory-backed production",
    description: "Category-based manufacturing communication for travel bags, backpacks, crossbody bags, waist bags, and custom projects.",
    icon: Factory,
  },
  {
    title: "Materials & components",
    description: "Support for fabric, lining, zipper, buckle, puller, logo label, hangtag, and packaging direction.",
    icon: Layers3,
  },
  {
    title: "Cutting & sewing support",
    description: "Structured discussion around bag shape, compartments, straps, stitching, and product construction.",
    icon: Scissors,
  },
  {
    title: "Quality control & packing",
    description: "Inspection and packing communication from material details to export-ready carton requirements.",
    icon: PackageCheck,
  },
];

const trustItems = [
  "Avoid dead stock with clearer category planning",
  "Reduce sourcing risk through direct requirement discussion",
  "Factory-backed supply instead of anonymous retail listings",
  "Stable quality-control communication before packing",
  "Direct WhatsApp communication with Cason",
  "Suitable category combinations for different markets",
];

const wholesaleIcons = [Store, Handshake, BriefcaseBusiness, PenTool];

export default function HomePage() {
  const featuredCategories = productCategories.slice(0, 6);

  return (
    <>
      <section className="premium-hero border-b border-stonebrand-200">
        <div className="container-shell grid min-h-[calc(100vh-88px)] gap-12 py-12 md:min-h-[720px] md:py-20 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="editorial-eyebrow">China-based bag manufacturing & wholesale supply</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-graphite-950 md:text-7xl">
              Factory-backed Bag Manufacturer & Global Wholesale Supplier
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite-600">
              {siteConfig.brandName} supports global importers, distributors, wholesalers, trading companies, and brand buyers with travel bags, men&apos;s bags, women&apos;s backpacks, chest bags, waist bags, crossbody bags, and OEM/ODM custom bag solutions from China.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTA
                message={contactMessage("I want to discuss bag manufacturing, wholesale supply, and OEM/ODM options. Please help me with catalog and sourcing requirements.")}
                label={`Talk to ${siteConfig.contactPerson} on WhatsApp`}
                eventName="click_contact_cason"
              />
              <ButtonLink href="/products" variant="outline">
                Explore Bag Categories
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-3 border-y border-stonebrand-200 py-5 sm:grid-cols-2">
              {["Factory-backed supply", "OEM/ODM custom support", "Catalog-based sourcing", "Direct contact with Cason"].map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm font-semibold text-graphite-800">
                  <Check className="h-4 w-4 text-clay-600" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="media-frame bg-white">
            <div className="grid border-b border-stonebrand-200 bg-white px-4 py-3 sm:grid-cols-3">
              {["Product category", "Factory support", "Export packing"].map((item) => (
                <p key={item} className="border-stonebrand-200 py-1 text-xs font-bold uppercase tracking-[0.14em] text-graphite-600 sm:border-r sm:px-4 last:sm:border-r-0">
                  {item}
                </p>
              ))}
            </div>
            <div className="relative aspect-[16/10] bg-graphite-50">
              <Image
                src="/images/hero/rovon-hero-supply.svg"
                alt="ROVON Global bag manufacturing and wholesale supply visual placeholder"
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="grid divide-y divide-stonebrand-200 bg-white md:grid-cols-3 md:divide-x md:divide-y-0">
              {["Travel Bags", "Backpacks", "OEM/ODM"].map((item) => (
                <div key={item} className="p-4">
                  <p className="muted-label">Category</p>
                  <p className="mt-2 text-sm font-semibold text-graphite-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stonebrand-200 bg-white">
        <div className="container-shell grid divide-y divide-stonebrand-200 md:grid-cols-5 md:divide-x md:divide-y-0">
          {capabilityStrip.map((item) => (
            <div key={item} className="flex min-h-20 items-center py-4 md:px-5">
              <p className="text-sm font-semibold text-graphite-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell">
          <SectionHeading
            title="Product Categories We Manufacture"
            description="A focused B2B product directory for importers, wholesalers, distributors, and brand buyers who need clear category planning before quotation."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category, index) => (
              <div key={category.slug} className={index === 0 ? "lg:col-span-2 lg:row-span-2" : undefined}>
                <ProductCard category={category} featured={index === 0} />
              </div>
            ))}
            <Link
              href="/ready-stock"
              className="focus-ring group flex min-h-[360px] flex-col justify-between rounded-sm border border-dashed border-stonebrand-200 bg-graphite-50 p-7 transition hover:border-graphite-400"
            >
              <div>
                <p className="muted-label">Supplementary channel</p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-graphite-950">
                  {readyStockInfo.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-graphite-600">
                  Ready Stock / Mixed Wholesale stays secondary to factory-backed manufacturing, wholesale supply, and OEM/ODM custom bag solutions.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-clay-600 transition group-hover:text-graphite-950">
                Ask for current stock list
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-stonebrand-200 bg-graphite-50">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="editorial-eyebrow">OEM/ODM manufacturing process</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite-950 md:text-5xl">
              A clearer path from buyer brief to production follow-up.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite-600">
              The workflow is designed for professional buyers who need practical communication before quotation: category direction, material selection, logo needs, sample detail, production, quality control, and export packing.
            </p>
            <ButtonLink href="/oem-odm" variant="secondary" className="mt-8">
              View OEM/ODM Process
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="grid border border-stonebrand-200 bg-white md:grid-cols-2">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="border-b border-stonebrand-200 p-7 last:border-b-0 md:border-r md:last:border-r-0 md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-clay-600" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-graphite-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-graphite-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-graphite-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="media-frame">
            <div className="relative aspect-[16/10] bg-graphite-50">
              <Image
                src="/images/hero/rovon-hero-supply.svg"
                alt="Manufacturing, material, inspection and packing support placeholder"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <div>
            <p className="editorial-eyebrow">Factory / Supply chain support</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite-950 md:text-5xl">
              Manufacturing communication built around materials, construction, QC, and packing.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite-600">
              ROVON Global avoids unverified factory numbers. The focus is on the working topics buyers need to confirm before placing a wholesale or OEM/ODM order.
            </p>
            <div className="mt-8 grid gap-0 border-y border-stonebrand-200">
              {supplyChainItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href="/manufacturing"
                    className="group grid gap-4 border-b border-stonebrand-200 py-5 last:border-b-0 sm:grid-cols-[44px_1fr_24px]"
                  >
                    <Icon className="h-6 w-6 text-clay-600" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-graphite-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-graphite-600">{item.description}</p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 text-graphite-400 transition group-hover:translate-x-1 group-hover:text-clay-600 sm:block" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-stonebrand-200 bg-graphite-50">
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
                  className="focus-ring group border border-stonebrand-200 bg-white p-7 transition duration-200 hover:-translate-y-0.5 hover:border-graphite-400 hover:shadow-card"
                >
                  <Icon className="h-7 w-7 text-clay-600" aria-hidden="true" />
                  <h3 className="mt-8 text-2xl font-semibold text-graphite-950">{segment.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-graphite-600">{segment.description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-clay-600 transition group-hover:text-graphite-950">
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
        <div className="container-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="editorial-eyebrow">Why work with ROVON Global</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite-950 md:text-5xl">
              Built for buyers who need a safer sourcing path.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite-600">
              Buyers can discuss target market, category mix, quantity range, quality level, and customization needs before moving into quotation or samples.
            </p>
          </div>
          <div className="grid border border-stonebrand-200 bg-white sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="border-b border-stonebrand-200 p-6 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                <Check className="h-5 w-5 text-clay-600" aria-hidden="true" />
                <p className="mt-5 text-base font-semibold leading-6 text-graphite-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-stonebrand-200 bg-graphite-50">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="editorial-eyebrow">Direct buyer communication</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite-950 md:text-5xl">
              Talk directly with {siteConfig.contactPerson} about your bag sourcing plan.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite-600">
              {siteConfig.contactPerson} is the direct contact at {siteConfig.brandName} for catalog requests, wholesale quotation preparation, OEM/ODM discussions, and product requirement follow-up. This strengthens trust without replacing the ROVON Global brand.
            </p>
          </div>
          <div className="border border-stonebrand-200 bg-white p-7 md:p-9">
            <p className="muted-label">What to send</p>
            <ul className="mt-6 grid gap-4 text-sm leading-6 text-graphite-700 sm:grid-cols-2">
              {["Target market", "Product category", "Quantity range", "Quality level", "Logo or material needs", "Packing or delivery questions"].map((item) => (
                <li key={item} className="border-t border-stonebrand-200 pt-4 font-semibold">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTA
                message={contactMessage("I want to discuss my bag sourcing plan. My target market, category, quantity range, and quality level are ready to share.")}
                label={`Talk to ${siteConfig.contactPerson}`}
                eventName="click_contact_cason"
              />
              <ButtonLink href="/catalog" variant="outline">
                Prepare Catalog Inquiry
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Send your bag sourcing requirements to Cason."
        description={`Send your target market, product category, quantity range, and quality level. ${siteConfig.brandName} can help you choose a safer purchasing plan before moving into quotation or OEM/ODM discussion.`}
      />
    </>
  );
}

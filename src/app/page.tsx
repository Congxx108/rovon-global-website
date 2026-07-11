import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Factory,
  Handshake,
  Layers3,
  PackageCheck,
  Ruler,
  Scissors,
  ShieldCheck,
  Stamp,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { HomeProcessTabs } from "@/components/home-process-tabs";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { factoryStats } from "@/data/factory";
import { faqItems } from "@/data/faq";
import { productCategories } from "@/data/products";
import { contactMessage, siteConfig, supplySolutions, vantoKaro } from "@/data/site";
import { wholesaleSegments } from "@/data/wholesale";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "ROVON Global | Factory-backed Bag Manufacturer & Flexible Supply Partner",
  description:
    `${siteConfig.brandName} is a factory-backed bag manufacturer and flexible supply partner from China, supporting OEM/ODM production, private label, ready stock, factory overstock, and mixed wholesale.`,
  path: "/",
});

const buyerMarks = ["FACTORY-BACKED SUPPLY", "TWO SUPPLY SOLUTIONS", "OEM/ODM PRODUCTION", "FLEXIBLE WHOLESALE", "DIRECT WHATSAPP CONTACT WITH CASON"];

const productIcons = [BriefcaseBusiness, Store, Layers3, PackageCheck, Ruler, Scissors, Factory];

const materialItems = [
  { title: "Materials", text: "Oxford, nylon, polyester, PU, lining, and project-based material choices.", icon: Layers3 },
  { title: "Structure", text: "Capacity, compartments, straps, pocket layout, and carry comfort planning.", icon: Ruler },
  { title: "Hardware", text: "Zippers, buckles, pullers, sliders, locks, and metal accessory options.", icon: ShieldCheck },
  { title: "Stitching", text: "Reinforcement, sewing details, handle joints, and wholesale-ready finishing.", icon: Scissors },
  { title: "Logo Options", text: "Woven label, rubber patch, metal logo, printing, and custom hangtag support.", icon: Stamp },
  { title: "Packing", text: "Polybag, carton, label, mixed carton, and export packing coordination.", icon: PackageCheck },
];

const wholesaleIcons = [Store, Handshake, BriefcaseBusiness, Factory];

export default function HomePage() {
  const featuredCategories = productCategories.slice(0, 7);

  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden bg-black text-white md:min-h-[760px] xl:min-h-[820px]">
        <Image
          src="/images/generated/luggage-factory-hero.png"
          alt="Modern bag and luggage factory production line"
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/48 to-black/55" />
        <div className="container-shell relative flex min-h-[680px] flex-col items-center justify-center py-24 text-center md:min-h-[760px] xl:min-h-[820px]">
          <p className="hero-kicker text-[11px] font-bold uppercase tracking-[0.28em] text-white/75">
            Factory-backed bag manufacturer from China
          </p>
          <h1 className="hero-title mt-5 max-w-4xl text-5xl font-black leading-[0.98] text-white md:text-7xl">
            Factory-backed Bag Manufacturer
            <span className="block">& Flexible Supply Partner</span>
          </h1>
          <p className="hero-subtext mt-6 max-w-3xl text-base leading-8 text-white/82 md:text-lg">
            ROVON Global helps global B2B buyers source bags from China through two supply solutions: Factory Manufacturing for OEM/ODM and long-term production, and Flexible Supply for ready stock, factory overstock, mixed wholesale, low MOQ, and fast delivery.
          </p>
          <div className="hero-actions mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink
              href="/catalog"
              className="border-white bg-white !text-graphite-950 hover:border-white hover:bg-[#eeeeee]"
              eventName="click_get_catalog"
              eventParams={{ cta_label: "Hero Get Latest Catalog" }}
            >
              Get Latest Catalog
            </ButtonLink>
            <WhatsAppCTA
              message={contactMessage("I visited ROVON Global and want to discuss bag sourcing. Please send catalog options and help me choose between Factory Manufacturing and Flexible Supply.")}
              label="Contact Cason"
              eventName="click_contact_cason"
              className="border-white/50 bg-white/10 text-white hover:border-white hover:bg-white hover:!text-graphite-950"
            />
          </div>
        </div>
        <div className="absolute bottom-[-1px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[18px] border-b-[18px] border-x-transparent border-b-white" />
      </section>

      <Reveal as="section" className="border-b border-[#dedede] bg-white">
        <div className="container-shell py-8 text-center">
          <p className="text-lg font-black text-graphite-950 md:text-xl">
            Factory-backed supply for global importers, distributors, wholesalers, brand buyers and OEM/ODM buyers.
          </p>
        </div>
        <div className="overflow-hidden border-t border-[#eeeeee] py-6">
          <div className="marquee-track text-center text-[17px] font-black uppercase leading-none text-[#cfd2d3] lg:text-xl" aria-label="Buyer types">
            {[0, 1].map((groupIndex) => (
              <div key={groupIndex} className="marquee-group" aria-hidden={groupIndex === 1}>
                {buyerMarks.map((mark) => (
                  <span key={`${groupIndex}-${mark}`} className="whitespace-nowrap">{mark}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-y bg-white">
        <div className="container-shell">
          <SectionHeading
            title="One Supplier. Two Supply Solutions."
            description="Choose the sourcing path that fits your business stage, order plan, inventory risk, and customization needs."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {supplySolutions.map((solution, index) => (
              <Reveal key={solution.title} delay={index * 120}>
                <div className="interactive-card h-full rounded-md border border-[#dedede] bg-white p-7 shadow-[0_14px_38px_rgba(0,0,0,0.055)] md:p-9">
                  <p className="muted-label">{String(index + 1).padStart(2, "0")} / Supply solution</p>
                  <h2 className="mt-6 text-3xl font-black leading-tight text-graphite-950">{solution.title}</h2>
                  <p className="mt-3 text-base font-semibold leading-7 text-graphite-800">{solution.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-graphite-600">{solution.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {solution.fit.map((item) => (
                      <span key={item} className="rounded border border-stonebrand-200 px-3 py-2 text-xs font-bold text-graphite-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-y bg-white">
        <div className="container-shell">
          <SectionHeading
            title="Product Categories We Manufacture"
            description="Core bag categories for Factory Manufacturing, wholesale programs, private label projects, and Flexible Supply discussions."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCategories.map((category, index) => (
              (() => {
                const Icon = productIcons[index] ?? BriefcaseBusiness;
                return (
                  <Reveal
                    key={category.slug}
                    delay={(index % 4) * 100}
                  >
                    <Link
                      href={`/products/${category.slug}`}
                      className="focus-ring interactive-card group flex min-h-[330px] flex-col rounded-md border border-[#dedede] bg-white p-4 text-center shadow-[0_12px_34px_rgba(0,0,0,0.055)] hover:border-graphite-400"
                    >
                      <div className="interactive-media relative aspect-[4/3] overflow-hidden rounded-sm bg-[linear-gradient(135deg,#fafafa_0%,#f0f0f0_52%,#f8f8f8_100%)]" role="img" aria-label={`${category.name} product direction`}>
                        <div className="absolute left-4 top-4 text-[10px] font-bold uppercase tracking-[0.1em] text-graphite-500">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="absolute inset-x-8 bottom-10 h-px bg-[#d8d8d8]" />
                        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-graphite-900 transition group-hover:border-graphite-500">
                          <Icon className="h-9 w-9" aria-hidden="true" />
                        </div>
                        <div className="absolute right-5 top-5 h-8 w-12 border border-[#dedede] bg-white/60" />
                        <div className="absolute bottom-5 left-5 h-8 w-20 border border-[#dedede] bg-white/60" />
                      </div>
                      <div className="flex flex-1 flex-col items-center pt-5">
                        <h3 className="text-base font-black text-graphite-950">{category.name}</h3>
                        <p className="mt-3 line-clamp-2 text-xs leading-5 text-graphite-600">{category.buyerUseCase}</p>
                        <span className="interactive-button mt-auto inline-flex rounded bg-graphite-950 px-5 py-2 text-[11px] font-bold text-white">
                          View more
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })()
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-white pb-20 md:pb-24">
        <div className="container-shell">
          <SectionHeading
            title="A Clear OEM/ODM Process From Idea To Production"
            description="A stable Factory Manufacturing workflow for custom bags, private label projects, catalog selection, sample confirmation, production, inspection, and packing."
            align="center"
          />
          <HomeProcessTabs />
        </div>
      </Reveal>

      <Reveal as="section" className="section-y bg-[#f4f4f4]">
        <div className="container-shell">
          <SectionHeading
            title="Materials, Components And Packing Support"
            description="A practical capability view for material selection, structure planning, hardware, stitching, logo application, export packing, and selected VANTO KARO brand elements."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {materialItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(index % 3) * 100} className="h-full">
                <div className="interactive-card h-full rounded-md border border-[#e2e2e2] bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.045)]">
                  <div className="interactive-media flex aspect-[5/3] items-center justify-center rounded-sm bg-[linear-gradient(135deg,#f8f8f8_0%,#eeeeee_50%,#f7f7f7_100%)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-graphite-900">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-black text-graphite-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite-600">{item.text}</p>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-y bg-white">
        <div className="container-shell grid gap-8 md:grid-cols-[1.08fr_0.92fr] md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#eeeeee] md:aspect-[5/4]">
            <Image
              src="/images/generated/luggage-factory-hero.png"
              alt="ROVON Global factory-backed bag supply capability"
              fill
              sizes="(min-width: 768px) 580px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="rounded-md border border-[#dedede] bg-white p-7 shadow-[0_18px_48px_rgba(0,0,0,0.07)] md:p-10">
            <p className="editorial-eyebrow mb-3">Factory capability</p>
            <h2 className="text-3xl font-black leading-[1.08] text-graphite-950 md:text-4xl">
              Factory-backed Supply Capability
            </h2>
            <p className="mt-5 text-sm leading-7 text-graphite-600 md:text-base">
              Backed by around 5,000 sqm of warehouse and operating space, 150+ skilled workers, and 10 production lines, ROVON Global supports both Flexible Supply orders and large-scale OEM/ODM production, with around 2,000 bags shipped per day.
            </p>
            <div className="mt-6 grid gap-4 border-y border-[#dedede] py-6">
              {[...factoryStats, "Direct production and sourcing communication with Cason"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-graphite-800">
                  <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/manufacturing">
                View Manufacturing Capability
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <WhatsAppCTA
                message={contactMessage("I want to talk about production capability, Factory Manufacturing, Flexible Supply, quality inspection, and packing support.")}
                label="Talk to Cason About Production"
                className="bg-white !text-graphite-950 hover:bg-graphite-950 hover:!text-white"
                eventName="click_contact_cason"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-y border-y border-stonebrand-200 bg-[#f6f6f6]">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="editorial-eyebrow">Cason / ROVON Global / VANTO KARO</p>
            <h2 className="text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
              A clear brand structure for buyer trust.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Cason",
                text: "The real contact behind ROVON Global and your direct WhatsApp sourcing partner.",
              },
              {
                title: "ROVON Global",
                text: "The manufacturing and supply chain partner for Factory Manufacturing and Flexible Supply.",
              },
              {
                title: vantoKaro.name,
                text: "An independent bag product brand for selected lines, labels, trims, hardware, and packaging.",
              },
            ].map((item) => (
              <div key={item.title} className="interactive-card rounded-md border border-[#dedede] bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.04)]">
                <h3 className="text-lg font-black text-graphite-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-y bg-white pt-0">
        <div className="container-shell">
          <SectionHeading
            title="What Set Us Apart?"
            description="Different buyer types need different sourcing support. ROVON keeps the path practical for supply-path selection, catalog direction, customization, production, and follow-up."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {wholesaleSegments.map((segment, index) => {
              const Icon = wholesaleIcons[index] ?? Store;
              return (
                <Reveal key={segment.title} delay={index * 100}>
                  <Link
                    href="/wholesale-solutions"
                    className="focus-ring interactive-card group block rounded-md border border-[#dedede] bg-white p-5 shadow-[0_12px_34px_rgba(0,0,0,0.045)] hover:border-graphite-400"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e9e9e9]">
                      <Image
                        src={index % 2 === 0 ? "/images/generated/luggage-factory-hero.png" : "/images/generated/factory-process-detail.png"}
                        alt={`${segment.title} wholesale support`}
                        fill
                        sizes="(min-width: 1024px) 260px, (min-width: 768px) 50vw, 100vw"
                        className="interactive-media object-cover"
                      />
                    </div>
                    <Icon className="mt-5 h-5 w-5 text-graphite-800" aria-hidden="true" />
                    <h3 className="mt-3 text-lg font-black text-graphite-950">For {segment.title}</h3>
                    <p className="mt-3 line-clamp-4 text-sm leading-7 text-graphite-600">{segment.description}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-y bg-[#f6f6f6]">
        <div className="container-shell">
          <h2 className="text-center text-4xl font-black text-graphite-950">FAQ</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqItems.map((item, index) => (
              <Reveal key={item.question} delay={(index % 2) * 100}>
              <div className="interactive-card rounded-md border border-[#e2e2e2] bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-graphite-950" aria-hidden="true" />
                  <div>
                    <h3 className="text-base font-black text-graphite-950">{item.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-graphite-600">{item.answer}</p>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <CtaBand
        title="Send your bag sourcing requirements to Cason."
        description="Share your target market, product category, quantity range, business type and customization needs. ROVON Global will help you choose between Factory Manufacturing and Flexible Supply before quotation."
        message={contactMessage("I want to send my bag sourcing requirements. Please help me review product category, quantity range, and whether Factory Manufacturing or Flexible Supply fits before quotation.")}
      />
    </>
  );
}

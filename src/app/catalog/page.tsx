import { ArrowRight, ClipboardList, MessageCircle, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CatalogInquiryForm } from "@/components/catalog/catalog-inquiry-form";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { contactMessage, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Bag Catalog Request | ROVON Global",
  description:
    `Tell ${siteConfig.contactPerson} what you need and request the latest ${siteConfig.brandName} catalog, suitable product recommendations, MOQ options, and pricing details on WhatsApp.`,
  path: "/catalog",
});

const requestTypes = [
  "Latest category catalog",
  "Factory Manufacturing discussion",
  "Flexible Supply options",
  "OEM/ODM and private label brief",
];

const inquiryTips = [
  "Target bag category and market",
  "Estimated quantity range",
  "Destination market and business type",
  "Logo, material, color, or packing needs",
  "Preferred supply path, sample, or timeline questions",
];

export default function CatalogPage() {
  return (
    <>
      <PageHero
        title="Prepare Your Bag Sourcing Inquiry"
        description={`Share a few details so ${siteConfig.contactPerson} can recommend the right catalog, product options, and next steps for your business.`}
        breadcrumbPath="/catalog"
      >
        <ButtonLink href="/products" variant="outline">
          View Product Categories
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <WhatsAppCTA
          message={contactMessage("I visited ROVON Global website. Please send me the latest catalog and help me check suitable product recommendations, MOQ options, and pricing details.")}
          label={`Contact ${siteConfig.contactPerson} Directly`}
          eventName="click_contact_cason"
          eventParams={{ cta_label: `Contact ${siteConfig.contactPerson} Directly`, page_path: "/catalog" }}
        />
      </PageHero>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <aside className="sticky top-28 hidden gap-5 lg:grid">
            <div className="border border-stonebrand-200 bg-graphite-50 p-7">
              <ClipboardList className="h-7 w-7 text-clay-600" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-graphite-950">
                Prepare a professional B2B sourcing inquiry.
              </h2>
              <p className="mt-3 text-sm leading-6 text-graphite-600">
                Share the category, quantity range, destination market, business type, and customization needs that help {siteConfig.contactPerson} recommend practical next steps.
              </p>
            </div>

            <div className="border border-stonebrand-200 bg-white p-7">
              <MessageCircle className="h-7 w-7 text-clay-600" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-graphite-950">
                What you can request
              </h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-graphite-700">
                {requestTypes.map((item) => (
                  <li key={item} className="border-t border-stonebrand-200 pt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-graphite-950 p-7 text-white">
              <ShieldCheck className="h-7 w-7 text-clay-400" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight">
                Direct contact at {siteConfig.brandName}
              </h2>
              <p className="mt-3 text-sm leading-6 text-graphite-200">
                {siteConfig.contactPerson} is the direct contact at {siteConfig.brandName} for catalog requests, ready stock, factory overstock, mixed wholesale, OEM/ODM communication, and pricing follow-up.
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-graphite-200">
                {inquiryTips.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>

          <div>
            <div className="mb-8 border-b border-stonebrand-200 pb-8">
              <p className="editorial-eyebrow">WhatsApp inquiry builder</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.01em] text-graphite-950 md:text-5xl">
                Share the basics, then send them to {siteConfig.contactPerson} on WhatsApp.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-graphite-600">
                Fill in what you already know: product category, quantity range, destination market, business type, logo needs, and timing. If some details are not confirmed yet, leave them blank or choose Not sure yet. The form only creates a WhatsApp message and does not store your information.
              </p>
            </div>
            <CatalogInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

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
    `Request the latest ${siteConfig.brandName} bag catalog and send your wholesale, sourcing, or OEM/ODM inquiry directly to ${siteConfig.contactPerson} on WhatsApp.`,
  path: "/catalog",
});

const requestTypes = [
  "Latest category catalog",
  "Wholesale quotation direction",
  "Ready stock options",
  "OEM/ODM project discussion",
];

const inquiryTips = [
  "Target bag category and market",
  "Estimated quantity range",
  "Logo, material, color, or packing needs",
  "Sample, order, or timeline questions",
];

export default function CatalogPage() {
  return (
    <>
      <PageHero
        title="Get Latest Bag Catalog"
        description={`Tell ${siteConfig.contactPerson} what kind of bags you are looking for. We will help you understand suitable categories, wholesale options, and OEM/ODM possibilities before the WhatsApp discussion starts.`}
        breadcrumbPath="/catalog"
      >
        <ButtonLink href="/products" variant="outline">
          View Product Categories
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <WhatsAppCTA
          message={contactMessage("I want to contact you directly about bag catalog, wholesale sourcing, and OEM/ODM support.")}
          label={`Contact ${siteConfig.contactPerson} Directly`}
          eventName="click_contact_cason"
          eventParams={{ cta_label: `Contact ${siteConfig.contactPerson} Directly`, page_path: "/catalog" }}
        />
      </PageHero>

      <section className="section-y bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <aside className="sticky top-28 hidden gap-5 lg:grid">
            <div className="border border-stonebrand-200 bg-slate-50 p-7">
              <ClipboardList className="h-7 w-7 text-clay-600" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-navy-950">
                Prepare a clearer B2B inquiry.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                This page helps buyers prepare a clearer inquiry before contacting {siteConfig.contactPerson}. It is not a download gate, retail checkout, or price list page.
              </p>
            </div>

            <div className="border border-stonebrand-200 bg-white p-7">
              <MessageCircle className="h-7 w-7 text-clay-600" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-navy-950">
                What you can request
              </h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
                {requestTypes.map((item) => (
                  <li key={item} className="border-t border-stonebrand-200 pt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-950 p-7 text-white">
              <ShieldCheck className="h-7 w-7 text-clay-400" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight">
                Direct contact at {siteConfig.brandName}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                {siteConfig.contactPerson} is the direct contact at {siteConfig.brandName} for catalog requests, wholesale sourcing, ready stock options, and OEM/ODM communication.
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-slate-200">
                {inquiryTips.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>

          <div>
            <div className="mb-8 border-b border-stonebrand-200 pb-8">
              <p className="editorial-eyebrow">WhatsApp inquiry builder</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.01em] text-navy-950 md:text-5xl">
                Share the basics, then send them to {siteConfig.contactPerson}.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                Fill in what you already know. If some details are not confirmed yet, leave them blank or choose Not sure yet. The form only creates a WhatsApp message and does not store your information.
              </p>
            </div>
            <CatalogInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

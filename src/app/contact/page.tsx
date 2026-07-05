import { Mail, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { contactMessage, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact Cason",
  description:
    `Contact ${siteConfig.contactPerson} from ${siteConfig.brandName} for bag sourcing, wholesale catalog requests, OEM/ODM inquiries, and product requirement discussion.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={`Contact ${siteConfig.contactPerson} for Bag Sourcing & OEM/ODM Inquiries`}
        description={`Share your target product category, quantity range, market, customization needs, and timeline. ${siteConfig.contactPerson} can help you get the right catalog, discuss product requirements, and move your wholesale or OEM/ODM inquiry forward.`}
        breadcrumbPath="/contact"
      >
        <WhatsAppCTA message={contactMessage(`I want to contact ${siteConfig.brandName} for catalog, quotation, and bag sourcing support.`)} />
      </PageHero>
      <section className="section-y">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel-card panel-card-hover p-6">
            <MessageCircle className="h-8 w-8 text-clay-600" aria-hidden="true" />
            <h2 className="headline-serif mt-5 text-3xl font-normal leading-tight text-navy-950">
              Contact {siteConfig.contactPerson} on WhatsApp
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              WhatsApp is the fastest way to discuss catalogs, wholesale quotation direction, OEM/ODM requirements, product categories, and order follow-up with a real contact at {siteConfig.brandName}.
            </p>
            <WhatsAppCTA
              message={contactMessage(`please send me the latest ${siteConfig.brandName} catalog and wholesale quotation.`)}
              label={`Contact ${siteConfig.contactPerson} on WhatsApp`}
              className="mt-6"
            />
          </div>
          <div className="panel-card bg-sand-50 p-6">
            <Mail className="h-8 w-8 text-clay-600" aria-hidden="true" />
            <h2 className="headline-serif mt-5 text-3xl font-normal leading-tight text-navy-950">
              Before contacting, prepare:
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
              <li>Target bag category</li>
              <li>Estimated quantity</li>
              <li>Destination market</li>
              <li>Logo and packing needs</li>
              <li>Preferred material or quality level</li>
              <li>Expected delivery timeline</li>
            </ul>
            <ButtonLink href={`mailto:${siteConfig.email}`} variant="outline" className="mt-6">
              Email {siteConfig.contactPerson}
            </ButtonLink>
            <div className="mt-6 grid gap-2 text-sm leading-6 text-slate-600">
              <p><span className="font-semibold text-navy-950">WhatsApp:</span> {siteConfig.whatsappDisplay}</p>
              <p><span className="font-semibold text-navy-950">Address:</span> {siteConfig.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


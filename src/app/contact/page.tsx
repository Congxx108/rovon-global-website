import { Mail, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { contactMessage, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    `Contact ${siteConfig.contactPerson} from ${siteConfig.brandName} on WhatsApp to request catalog, wholesale quotation, OEM/ODM support, or regional supply options.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={`Contact ${siteConfig.contactPerson} for Catalog, Quote, or OEM/ODM`}
        description={`Send your target product category, market, order quantity, customization needs, and timeline. ${siteConfig.brandName} can respond with catalog options, wholesale quotation direction, and next-step sourcing support.`}
        breadcrumbPath="/contact"
      >
        <WhatsAppCTA message={contactMessage(`I want to contact ${siteConfig.brandName} for catalog, quotation, and bag sourcing support.`)} />
      </PageHero>
      <section className="section-y">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel-card panel-card-hover p-6">
            <MessageCircle className="h-8 w-8 text-clay-600" aria-hidden="true" />
            <h2 className="headline-serif mt-5 text-3xl font-normal leading-tight text-navy-950">
              WhatsApp Inquiry
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              The main conversion path is WhatsApp inquiry for catalog, quotation, OEM/ODM discussion, and market supply communication.
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
              What to Include
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
              <li>Product category</li>
              <li>Target market</li>
              <li>Estimated quantity</li>
              <li>Material or style reference</li>
              <li>Logo and packing needs</li>
              <li>Shipment timeline</li>
            </ul>
            <ButtonLink href={`mailto:${siteConfig.email}`} variant="outline" className="mt-6">
              Email {siteConfig.email}
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


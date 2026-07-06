import { Mail, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { GoogleMap } from "@/components/site/google-map";
import { SocialLinks } from "@/components/social-links";
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
        <WhatsAppCTA
          message={contactMessage(`I want to contact ${siteConfig.brandName} for catalog, quotation, and bag sourcing support.`)}
          eventName="click_contact_cason"
        />
        <ButtonLink
          href="/catalog"
          variant="outline"
          eventName="click_get_catalog"
          eventParams={{ cta_label: "Prepare Catalog Inquiry", page_path: "/contact" }}
        >
          Prepare Catalog Inquiry
        </ButtonLink>
      </PageHero>
      <section className="section-y">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-md border border-[#dddddd] bg-white p-6 shadow-[0_6px_18px_rgba(0,0,0,0.05)]">
            <MessageCircle className="h-8 w-8 text-graphite-950" aria-hidden="true" />
            <h2 className="headline-serif mt-5 text-3xl font-black leading-tight text-graphite-950">
              Contact {siteConfig.contactPerson} on WhatsApp
            </h2>
            <p className="mt-3 text-sm leading-6 text-graphite-600">
              WhatsApp is the fastest way to discuss catalogs, wholesale quotation direction, OEM/ODM requirements, product categories, and order follow-up with a real contact at {siteConfig.brandName}.
            </p>
            <WhatsAppCTA
              message={contactMessage(`please send me the latest ${siteConfig.brandName} catalog and wholesale quotation.`)}
              label={`Contact ${siteConfig.contactPerson} on WhatsApp`}
              className="mt-6"
              eventName="click_contact_cason"
            />
            <div className="mt-7 border-t border-[#dedede] pt-6">
              <p className="text-sm leading-7 text-graphite-600">
                You can also follow ROVON Global on Facebook, TikTok and Instagram for product updates, factory scenes and sourcing videos.
              </p>
              <SocialLinks className="mt-4" />
            </div>
          </div>
          <div className="rounded-md border border-[#dddddd] bg-[#f7f7f7] p-6">
            <Mail className="h-8 w-8 text-graphite-950" aria-hidden="true" />
            <h2 className="headline-serif mt-5 text-3xl font-black leading-tight text-graphite-950">
              Before contacting, prepare:
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-graphite-700 sm:grid-cols-2">
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
            <div className="mt-6 grid gap-2 text-sm leading-6 text-graphite-600">
              <p><span className="font-semibold text-graphite-950">WhatsApp:</span> {siteConfig.whatsappDisplay}</p>
              <p><span className="font-semibold text-graphite-950">Address:</span> {siteConfig.address}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-y border-t border-stonebrand-200 bg-graphite-50">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="editorial-eyebrow">Company location</p>
            <h2 className="headline-serif mt-4 text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
              Visit / Locate {siteConfig.brandName}
            </h2>
            <p className="mt-5 text-base leading-7 text-graphite-600">
              {siteConfig.brandName} is based in Baigou, Baoding, Hebei, China. Buyers can contact {siteConfig.contactPerson} on WhatsApp before visiting or discussing sourcing requirements.
            </p>
            <p className="mt-5 text-sm font-semibold leading-6 text-graphite-900">
              {siteConfig.address}
            </p>
          </div>
          <GoogleMap
            address={siteConfig.address}
            embedUrl={siteConfig.googleMapsEmbedUrl}
            externalUrl={siteConfig.googleMapsExternalUrl}
          />
        </div>
      </section>
    </>
  );
}


import { ButtonLink } from "@/components/button-link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { contactMessage, siteConfig } from "@/data/site";

type CtaBandProps = {
  title?: string;
  description?: string;
  message?: string;
};

export function CtaBand({
  title = "Ready to discuss your bag sourcing plan?",
  description = `Send your target categories, market, quantity, and customization needs. ${siteConfig.contactPerson} can share catalog options and a practical quotation path.`,
  message = contactMessage(`I want to discuss bag sourcing with ${siteConfig.brandName}. Please send catalog and quotation details.`),
}: CtaBandProps) {
  return (
    <section className="bg-navy-950 py-16 text-white md:py-20">
      <div className="container-shell relative overflow-hidden rounded-lg border border-white/10 bg-clay-900 p-8 shadow-lift md:p-12">
        <div className="absolute inset-0 subtle-grid opacity-10" aria-hidden="true" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="editorial-eyebrow mb-4 text-sand-200">Wholesale inquiry</p>
            <h2 className="headline-serif text-4xl font-normal leading-tight md:text-5xl">{title}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300 md:text-base md:leading-7">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href="/catalog"
              eventName="click_get_catalog"
              eventParams={{ cta_label: "Get Latest Catalog" }}
            >
              Get Latest Catalog
            </ButtonLink>
            <WhatsAppCTA
              message={message}
              label={`Contact ${siteConfig.contactPerson} on WhatsApp`}
              eventName="click_contact_cason"
            />
            <ButtonLink
              href="/contact"
              variant="outline"
              className="border-white/20 bg-white/10 text-white hover:bg-white/15"
              eventName="click_contact_cason"
              eventParams={{ cta_label: "Contact Page" }}
            >
              Contact Page
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}


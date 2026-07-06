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
    <section className="border-y border-stonebrand-200 bg-graphite-950 py-14 text-white md:py-20">
      <div className="container-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-clay-300">Wholesale inquiry</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.01em] md:text-5xl">{title}</h2>
            <p className="mt-4 text-sm leading-6 text-graphite-300 md:text-base md:leading-7">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href="/catalog"
              className="border-clay-500 bg-clay-500 hover:border-white hover:bg-white hover:text-graphite-950"
              eventName="click_get_catalog"
              eventParams={{ cta_label: "Get Latest Catalog" }}
            >
              Get Latest Catalog
            </ButtonLink>
            <WhatsAppCTA
              message={message}
              label={`Contact ${siteConfig.contactPerson} on WhatsApp`}
              className="border-white/20 bg-white/10 hover:bg-white hover:text-graphite-950"
              eventName="click_contact_cason"
            />
            <ButtonLink
              href="/contact"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:border-white hover:bg-white hover:text-graphite-950"
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


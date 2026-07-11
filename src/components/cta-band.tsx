import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { contactMessage, siteConfig } from "@/data/site";

type CtaBandProps = {
  title?: string;
  description?: string;
  message?: string;
};

export function CtaBand({
  title = "Ready to discuss your bag sourcing plan?",
  description = `Send your target category, market, quantity range, business type, and customization needs. ${siteConfig.contactPerson} can recommend suitable products, MOQ options, and next steps.`,
  message = contactMessage(`I want to discuss bag sourcing with ${siteConfig.brandName}. Please send catalog options and suitable product recommendations.`),
}: CtaBandProps) {
  return (
    <Reveal as="section" className="border-y border-stonebrand-200 bg-graphite-950 py-16 text-white md:py-20">
      <div className="container-shell">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <Reveal className="max-w-2xl" delay={80}>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-graphite-300">Wholesale inquiry</p>
            <h2 className="text-4xl font-black leading-[1.02] md:text-5xl">{title}</h2>
            <p className="mt-5 text-sm leading-7 text-graphite-300 md:text-base">{description}</p>
          </Reveal>
          <Reveal className="flex flex-col gap-3 justify-self-start md:justify-self-end" delay={180}>
            <WhatsAppCTA
              message={message}
              label={`Contact ${siteConfig.contactPerson} on WhatsApp`}
              className="w-full border-white bg-white !text-graphite-950 hover:border-white hover:bg-[#eeeeee] md:w-[260px]"
              eventName="click_contact_cason"
            />
            <ButtonLink
              href="/catalog"
              variant="outline"
              className="w-full border-white/25 !bg-transparent !text-white hover:border-white hover:!bg-white hover:!text-graphite-950 md:w-[260px]"
              eventName="click_get_catalog"
              eventParams={{ cta_label: "Get Latest Catalog" }}
            >
              Get Latest Catalog
            </ButtonLink>
            <div className="pt-3 text-left md:w-[260px]">
              <p className="text-xs leading-5 text-graphite-400">
                Found us through Facebook or TikTok? Continue the conversation with Cason on WhatsApp.
              </p>
              <SocialLinks tone="light" className="mt-3" />
            </div>
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
}

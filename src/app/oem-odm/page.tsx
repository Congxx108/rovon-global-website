import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { contactMessage, siteConfig, vantoKaro } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const steps = [
  "Share target product, reference style, market, and quantity",
  "Confirm material, color, size, structure, logo, and packing direction",
  "Develop sample and review adjustment details",
  "Approve quotation, timeline, and bulk production plan",
  "Run production, quality control, packing, and shipment coordination",
];

export const metadata = createPageMetadata({
  title: "OEM/ODM Custom Bags",
  description:
    `Start Factory Manufacturing and OEM/ODM custom bag projects with ${siteConfig.brandName}, including logo, material, size, structure, sample development, bulk production, QC, VANTO KARO brand elements, and packing.`,
  path: "/oem-odm",
});

export default function OemOdmPage() {
  return (
    <>
      <PageHero
        title="Factory Manufacturing for OEM/ODM Custom Bags"
        description={`${siteConfig.brandName} supports custom bag projects from idea, material selection, logo application, structure adjustment, and sampling to bulk production, quality control, packing, and export support. Contact ${siteConfig.contactPerson} to prepare a clear custom bag brief.`}
        breadcrumbPath="/oem-odm"
      >
        <WhatsAppCTA
          message={contactMessage("I want to discuss Factory Manufacturing for an OEM/ODM custom bag project. Please tell me what information you need for materials, logo, sample, quantity, and packing requirements.")}
          label="Discuss OEM/ODM Project"
          eventName="click_oem_odm_inquiry"
          eventParams={{ cta_label: "Discuss OEM/ODM Project", inquiry_type: "OEM/ODM Custom Project" }}
        />
      </PageHero>
      <section className="section-y bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="editorial-eyebrow">Custom development workflow</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-graphite-950 md:text-4xl">
              A structured path for custom bag projects.
            </h2>
            <p className="mt-4 text-base leading-7 text-graphite-600">
              Buyers can discuss logo methods, materials, hardware, lining, size, structure, colors, labels, hangtags, packing, carton marks, and market-specific product planning.
            </p>
          </div>
          <div className="grid gap-0 overflow-hidden rounded-md border border-[#dddddd] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
            {steps.map((step, index) => (
              <div key={step} className="grid gap-5 border-b border-stonebrand-200 p-6 last:border-b-0 sm:grid-cols-[84px_1fr]">
                <span className="text-3xl font-black text-graphite-950">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-bold leading-7 text-graphite-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title={`Prepare Your Custom Bag Brief With ${siteConfig.contactPerson}`}
        description={`Send your reference images, category, material ideas, target market, logo needs, estimated quantity, and packing plan to start a practical OEM/ODM discussion. ${vantoKaro.name} can also be discussed for selected labels, trims, hardware, and packaging.`}
        message={contactMessage("I want to prepare a custom bag brief for Factory Manufacturing and OEM/ODM production. Please help me clarify materials, logo, sample, quantity, and packing requirements.")}
      />
    </>
  );
}


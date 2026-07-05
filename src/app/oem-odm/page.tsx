import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { contactMessage, siteConfig } from "@/data/site";
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
    `Start OEM/ODM custom bag projects with ${siteConfig.brandName}, including logo, material, size, structure, sample development, bulk production, QC, and packing.`,
  path: "/oem-odm",
});

export default function OemOdmPage() {
  return (
    <>
      <PageHero
        title="OEM/ODM Custom Bag Solutions"
        description={`${siteConfig.brandName} supports custom bag projects from idea, material selection, logo application, structure adjustment, and sampling to bulk production, quality control, packing, and export support. Contact ${siteConfig.contactPerson} to clarify your custom bag brief and next-step requirements.`}
        breadcrumbPath="/oem-odm"
      >
        <WhatsAppCTA
          message={contactMessage("I want to discuss an OEM/ODM custom bag project. Please tell me what information you need for materials, logo, sample, and order requirements.")}
          label="Discuss OEM/ODM Project"
          eventName="click_oem_odm_inquiry"
          eventParams={{ cta_label: "Discuss OEM/ODM Project", inquiry_type: "OEM/ODM Custom Project" }}
        />
      </PageHero>
      <section className="section-y bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="editorial-eyebrow">Custom development workflow</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] text-navy-950">
              A structured path for custom bag projects.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Buyers can discuss logo methods, materials, hardware, lining, size, structure, colors, labels, hangtags, packing, carton marks, and market-specific product planning.
            </p>
          </div>
          <div className="grid gap-0 border border-stonebrand-200 bg-white">
            {steps.map((step, index) => (
              <div key={step} className="grid gap-5 border-b border-stonebrand-200 p-6 last:border-b-0 sm:grid-cols-[84px_1fr]">
                <span className="text-3xl font-semibold text-clay-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-semibold leading-7 text-navy-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title={`Prepare Your Custom Bag Brief With ${siteConfig.contactPerson}`}
        description="Send your reference images, category, material ideas, target market, logo needs, and estimated quantity to start a practical OEM/ODM discussion."
        message={contactMessage("I want to prepare a custom bag brief for OEM/ODM production. Please help me clarify materials, logo, sample, and order requirements.")}
      />
    </>
  );
}


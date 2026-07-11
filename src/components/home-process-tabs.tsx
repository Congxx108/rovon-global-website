"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/button-link";

const processSteps = [
  {
    title: "Start with your idea",
    eyebrow: "Factory Manufacturing brief",
    heading: "Confirm the supply path before quotation.",
    description:
      "Cason helps buyers organize product direction, material expectations, logo needs, quantity range, packing details, sample questions, and whether the project belongs to Factory Manufacturing or Flexible Supply.",
    points: [
      "Share your target market, product category, quantity range, reference style, and expected quality level.",
      "Clarify whether the project is private label, full OEM/ODM development, ready stock, factory overstock, or mixed wholesale.",
      "Prepare a practical inquiry path before quotation starts.",
    ],
  },
  {
    title: "Confirm materials and structure",
    eyebrow: "Material planning",
    heading: "Align the build before sampling.",
    description:
      "ROVON Global reviews material direction, hardware, lining, capacity, pocket structure, logo method, VANTO KARO elements where suitable, and export packing expectations before sample details are confirmed.",
    points: [
      "Confirm fabric, lining, zipper, buckle, handle, strap, and hardware direction.",
      "Review logo method, color direction, size, and compartment structure.",
      "Reduce repeated changes by aligning key specifications early.",
    ],
  },
  {
    title: "Sample development",
    eyebrow: "Sample follow-up",
    heading: "Turn the confirmed direction into a sample.",
    description:
      "Sample communication focuses on practical details buyers need to evaluate before committing to bulk production.",
    points: [
      "Prepare sample requirements based on confirmed materials and structure.",
      "Check size, logo placement, stitching, finish, and product usability.",
      "Use sample feedback to finalize the production direction.",
    ],
  },
  {
    title: "Bulk production",
    eyebrow: "Production coordination",
    heading: "Move into controlled bulk production.",
    description:
      "After confirmation, ROVON coordinates production communication around material, logo, color, packing, and delivery requirements.",
    points: [
      "Confirm final product specification and packing details.",
      "Coordinate category, quantity, color, and logo requirements for production.",
      "Keep buyer communication clear before inspection and shipment.",
    ],
  },
  {
    title: "Quality inspection and packing",
    eyebrow: "Shipment readiness",
    heading: "Check details before packing and delivery.",
    description:
      "Inspection and packing communication helps buyers reduce avoidable sourcing risk before shipment.",
    points: [
      "Check stitching, zipper, hardware, labels, cartons, and visible finishing details.",
      "Coordinate polybag, carton, mixed packing, label, and export-ready requirements.",
      "Prepare the order for practical shipment follow-up.",
    ],
  },
];

export function HomeProcessTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = processSteps[activeIndex];

  return (
    <>
      <div className="mt-10 grid overflow-hidden rounded-md border border-[#dedede] text-center text-[11px] font-bold uppercase tracking-[0.05em] text-graphite-500 shadow-[0_12px_32px_rgba(0,0,0,0.05)] sm:grid-cols-5">
        {processSteps.map((step, index) => (
          <button
            key={step.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`interactive-button min-h-12 border-b border-[#dedede] px-4 py-3 sm:border-b-0 sm:border-r sm:last:border-r-0 ${
              activeIndex === index
                ? "bg-white text-graphite-950"
                : "bg-[#f7f7f7] text-graphite-500 hover:bg-white hover:text-graphite-950"
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>
      <div key={activeStep.title} className="tab-panel-in mx-auto grid max-w-5xl gap-8 rounded-b-md border-x border-b border-[#dedede] bg-white p-6 shadow-[0_22px_60px_rgba(0,0,0,0.09)] md:grid-cols-[0.95fr_1.05fr] md:p-10">
        <div className="self-center">
          <p className="editorial-eyebrow mb-3">{activeStep.eyebrow}</p>
          <h3 className="text-2xl font-black leading-tight text-graphite-950 md:text-3xl">{activeStep.heading}</h3>
          <p className="mt-4 text-sm leading-7 text-graphite-600">{activeStep.description}</p>
          <div className="mt-6 grid gap-3">
            {activeStep.points.map((point) => (
              <div key={point} className="flex gap-3 text-sm leading-6 text-graphite-700">
                <Check className="mt-1 h-4 w-4 shrink-0 text-graphite-950" aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <ButtonLink href="/oem-odm" className="mt-7">
            View OEM/ODM Process
          </ButtonLink>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#f5f5f5]">
          <Image
            src="/images/generated/factory-process-detail.png"
            alt="Bag component inspection and OEM material discussion"
            fill
            sizes="(min-width: 768px) 520px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}

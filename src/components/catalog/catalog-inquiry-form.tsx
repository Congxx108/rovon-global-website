"use client";

import { MessageCircle } from "lucide-react";
import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { siteConfig, whatsappLink } from "@/data/site";

const businessTypeOptions = [
  "Importer",
  "Distributor",
  "Wholesaler",
  "Trading Company",
  "Brand Buyer",
  "Boutique / Retail Chain",
  "Online Seller",
  "Other",
];

const categoryOptions = [
  "Travel Bags",
  "Men's Bags",
  "Women's Backpacks",
  "Chest Bags",
  "Waist Bags",
  "Crossbody Bags",
  "OEM/ODM Custom Bags",
  "Ready Stock / Mixed Wholesale",
  "Not sure yet",
];

const quantityOptions = [
  "100 - 300 pcs",
  "300 - 500 pcs",
  "500 - 1000 pcs",
  "1000+ pcs",
  "Trial order / flexible quantity",
  "Not sure yet",
];

const inquiryPurposeOptions = [
  "Latest Catalog",
  "Wholesale Price",
  "OEM/ODM Custom Project",
  "Ready Stock List",
  "Product Recommendation",
  "Other",
];

const customizationOptions = [
  "Logo",
  "Material",
  "Color",
  "Size / Structure",
  "Packing",
  "No customization yet",
  "Not sure yet",
];

type CatalogFormState = {
  buyerName: string;
  businessType: string;
  interestedCategory: string;
  quantityRange: string;
  destinationMarket: string;
  inquiryPurpose: string;
  customizationNeeds: string[];
  extraMessage: string;
};

const initialState: CatalogFormState = {
  buyerName: "",
  businessType: "",
  interestedCategory: "",
  quantityRange: "",
  destinationMarket: "",
  inquiryPurpose: "",
  customizationNeeds: [],
  extraMessage: "",
};

function valueOrFallback(value: string) {
  return value.trim() || "Not provided";
}

function SelectField({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-navy-950" htmlFor={id}>
      {label}
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring min-h-12 rounded-md border border-stonebrand-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm outline-none transition hover:border-clay-500/40"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function CatalogInquiryForm() {
  const [formState, setFormState] = useState<CatalogFormState>(initialState);

  useEffect(() => {
    trackEvent("view_catalog_page", { page_path: "/catalog" });
  }, []);

  const customizationSummary = useMemo(() => {
    return formState.customizationNeeds.length > 0
      ? formState.customizationNeeds.join(", ")
      : "Not provided";
  }, [formState.customizationNeeds]);

  function updateField<Key extends keyof CatalogFormState>(field: Key, value: CatalogFormState[Key]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function toggleCustomization(option: string) {
    setFormState((current) => {
      const exists = current.customizationNeeds.includes(option);
      return {
        ...current,
        customizationNeeds: exists
          ? current.customizationNeeds.filter((item) => item !== option)
          : [...current.customizationNeeds, option],
      };
    });
  }

  function buildMessage() {
    return [
      `Hello ${siteConfig.contactPerson}, I visited ${siteConfig.brandName} website and would like to request the latest bag catalog.`,
      "",
      `Buyer name: ${valueOrFallback(formState.buyerName)}`,
      `Company / business type: ${valueOrFallback(formState.businessType)}`,
      `Interested category: ${valueOrFallback(formState.interestedCategory)}`,
      `Quantity range: ${valueOrFallback(formState.quantityRange)}`,
      `Destination market: ${valueOrFallback(formState.destinationMarket)}`,
      `Inquiry purpose: ${valueOrFallback(formState.inquiryPurpose)}`,
      `Customization needs: ${customizationSummary}`,
      `Message: ${valueOrFallback(formState.extraMessage)}`,
      "",
      "Please help me check suitable bag options and wholesale quotation.",
    ].join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackEvent("submit_catalog_whatsapp", {
      business_type: formState.businessType || "Not provided",
      category: formState.interestedCategory || "Not provided",
      quantity_range: formState.quantityRange || "Not provided",
      inquiry_type: formState.inquiryPurpose || "Not provided",
      has_customization: formState.customizationNeeds.length > 0,
      page_path: "/catalog",
      cta_label: `Send Inquiry to ${siteConfig.contactPerson} on WhatsApp`,
    });
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="panel-card bg-white p-5 shadow-lift md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy-950" htmlFor="buyer-name">
          Buyer name
          <input
            id="buyer-name"
            value={formState.buyerName}
            onChange={(event) => updateField("buyerName", event.target.value)}
            placeholder="Your name"
            className="focus-ring min-h-12 rounded-md border border-stonebrand-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-clay-500/40"
          />
        </label>

        <SelectField
          id="business-type"
          label="Company / Business type"
          value={formState.businessType}
          options={businessTypeOptions}
          onChange={(value) => updateField("businessType", value)}
        />

        <SelectField
          id="interested-category"
          label="Interested category"
          value={formState.interestedCategory}
          options={categoryOptions}
          onChange={(value) => updateField("interestedCategory", value)}
        />

        <SelectField
          id="quantity-range"
          label="Quantity range"
          value={formState.quantityRange}
          options={quantityOptions}
          onChange={(value) => updateField("quantityRange", value)}
        />

        <label className="grid gap-2 text-sm font-semibold text-navy-950" htmlFor="destination-market">
          Destination market / country
          <input
            id="destination-market"
            value={formState.destinationMarket}
            onChange={(event) => updateField("destinationMarket", event.target.value)}
            placeholder="For example: Ghana, UAE, Philippines, Chile"
            className="focus-ring min-h-12 rounded-md border border-stonebrand-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-clay-500/40"
          />
        </label>

        <SelectField
          id="inquiry-purpose"
          label="Inquiry purpose"
          value={formState.inquiryPurpose}
          options={inquiryPurposeOptions}
          onChange={(value) => updateField("inquiryPurpose", value)}
        />
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-navy-950">Customization needs</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {customizationOptions.map((option) => (
            <label
              key={option}
              className="flex min-h-12 cursor-pointer items-center gap-3 rounded-md border border-stonebrand-200 bg-sand-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-clay-500/40 hover:bg-white"
            >
              <input
                type="checkbox"
                checked={formState.customizationNeeds.includes(option)}
                onChange={() => toggleCustomization(option)}
                className="h-4 w-4 accent-clay-600"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 grid gap-2 text-sm font-semibold text-navy-950" htmlFor="extra-message">
        Message / extra requirements
        <textarea
          id="extra-message"
          value={formState.extraMessage}
          onChange={(event) => updateField("extraMessage", event.target.value)}
          placeholder="Tell Cason about target styles, materials, logo needs, packing, sample questions, or timeline."
          rows={5}
          className="focus-ring rounded-md border border-stonebrand-200 bg-white px-4 py-3 text-sm font-medium leading-6 text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-clay-500/40"
        />
      </label>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-clay-600 bg-clay-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-clay-700 hover:shadow-card active:translate-y-px"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Send Inquiry to {siteConfig.contactPerson} on WhatsApp
        </button>
        <p className="text-xs leading-5 text-slate-500">
          No database submission. Your message opens in WhatsApp with the details you prepared.
        </p>
      </div>
    </form>
  );
}

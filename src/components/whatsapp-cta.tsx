"use client";

import { MessageCircle } from "lucide-react";
import type { AnalyticsEventName, AnalyticsParams } from "@/lib/analytics";
import { trackEvent } from "@/lib/analytics";
import { siteConfig, whatsappLink } from "@/data/site";

type WhatsAppCTAProps = {
  message: string;
  label?: string;
  className?: string;
  eventName?: AnalyticsEventName;
  eventParams?: AnalyticsParams;
};

export function WhatsAppCTA({
  message,
  label = `Contact ${siteConfig.contactPerson} on WhatsApp`,
  className = "",
  eventName = "click_whatsapp",
  eventParams,
}: WhatsAppCTAProps) {
  return (
    <a
      href={whatsappLink(message)}
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-clay-600 bg-clay-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-clay-700 hover:shadow-card active:translate-y-px ${className}`}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent(eventName, { cta_label: label, ...eventParams })}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}

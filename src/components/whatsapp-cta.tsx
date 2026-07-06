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
      className={`focus-ring interactive-button inline-flex min-h-10 items-center justify-center gap-2 rounded border border-graphite-950 bg-graphite-950 px-6 py-2.5 text-[12px] font-bold tracking-[0.03em] text-white shadow-none hover:border-graphite-800 hover:bg-graphite-800 ${className}`}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent(eventName, { cta_label: label, ...eventParams })}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}

function cleanTrackingId(value: string | undefined) {
  return (value ?? "").trim().replace(/[^A-Za-z0-9_-]/g, "");
}

export const analyticsConfig = {
  gaMeasurementId: cleanTrackingId(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID),
  metaPixelId: cleanTrackingId(process.env.NEXT_PUBLIC_META_PIXEL_ID),
  tiktokPixelId: cleanTrackingId(process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID),
};

export type AnalyticsEventName =
  | "view_catalog_page"
  | "submit_catalog_whatsapp"
  | "click_whatsapp"
  | "click_contact_cason"
  | "click_get_catalog"
  | "click_product_inquiry"
  | "click_oem_odm_inquiry"
  | "click_ready_stock_inquiry";

export type AnalyticsParams = {
  category?: string;
  category_slug?: string;
  page_path?: string;
  cta_label?: string;
  inquiry_type?: string;
  business_type?: string;
  quantity_range?: string;
  has_customization?: boolean;
};

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, string | boolean>) => void;
    fbq?: (command: "trackCustom", eventName: string, params?: Record<string, string | boolean>) => void;
    ttq?: {
      track?: (eventName: string, params?: Record<string, string | boolean>) => void;
    };
  }
}

const allowedParamKeys = [
  "category",
  "category_slug",
  "page_path",
  "cta_label",
  "inquiry_type",
  "business_type",
  "quantity_range",
  "has_customization",
] as const;

function sanitizeParams(params: AnalyticsParams = {}) {
  const sanitized: Record<string, string | boolean> = {};

  for (const key of allowedParamKeys) {
    const value = params[key];
    if (typeof value === "string" && value.trim()) {
      sanitized[key] = value.trim().slice(0, 120);
    }
    if (typeof value === "boolean") {
      sanitized[key] = value;
    }
  }

  if (!sanitized.page_path && typeof window !== "undefined") {
    sanitized.page_path = window.location.pathname;
  }

  return sanitized;
}

export function hasAnalyticsConfig() {
  return Boolean(
    analyticsConfig.gaMeasurementId ||
      analyticsConfig.metaPixelId ||
      analyticsConfig.tiktokPixelId
  );
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const sanitizedParams = sanitizeParams(params);

  window.gtag?.("event", eventName, sanitizedParams);
  window.fbq?.("trackCustom", eventName, sanitizedParams);
  window.ttq?.track?.(eventName, sanitizedParams);
}

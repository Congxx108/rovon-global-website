"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const sectionSelectors = [
  "main > section:not(:first-child):not(.reveal)",
  "main section.section-y:not(.reveal)",
  "main form[class*='border']",
];

const cardSelectors = [
  "main .panel-card",
  "main .industrial-card",
  "main .media-frame",
  "main .interactive-card",
  "main article[class*='border'][class*='bg-white']",
  "main a[href][class*='border'][class*='bg-white']",
  "main a[href][class*='border'][class*='bg-[#f7f7f7]']",
  "main div[class*='rounded-md'][class*='border']",
];

function getDelay(element: HTMLElement, isCard: boolean) {
  if (!isCard || !element.parentElement) {
    return 0;
  }

  const siblings = Array.from(element.parentElement.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement
  );
  const index = Math.max(0, siblings.indexOf(element));
  return Math.min((index % 6) * 90, 450);
}

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const targets = new Map<HTMLElement, boolean>();

    sectionSelectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        if (!element.closest(".reveal")) {
          targets.set(element, false);
        }
      });
    });

    cardSelectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        if (!element.closest(".reveal")) {
          targets.set(element, true);
        }
      });
    });

    const elements = Array.from(targets.entries()).filter(([element]) => {
      return !element.classList.contains("motion-observed") && !element.closest("[data-motion-skip='true']");
    });

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          element.classList.add("motion-visible");
          observer.unobserve(element);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    elements.forEach(([element, isCard]) => {
      element.style.setProperty("--reveal-delay", `${getDelay(element, isCard)}ms`);
      element.style.setProperty("--reveal-y", isCard ? "18px" : "24px");
      element.classList.add("motion-observed");
      if (isCard) {
        element.classList.add("motion-card");
      }
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

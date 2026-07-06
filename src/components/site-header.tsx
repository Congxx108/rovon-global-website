"use client";

import { Globe2, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { activeLanguage } from "@/data/languages";
import { siteConfig, whatsappLink } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Factory" },
  { href: "/oem-odm", label: "OEM/ODM" },
  { href: "/wholesale-solutions", label: "Wholesale" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const whatsappHref = whatsappLink(
    `Hello ${siteConfig.contactPerson}, I want to learn more about ${siteConfig.brandName} bag manufacturing and wholesale supply.`
  );
  const trackNavItem = (href: string, label: string) => {
    if (href === "/catalog") {
      trackEvent("click_get_catalog", { cta_label: label });
    }
    if (href === "/contact") {
      trackEvent("click_contact_cason", { cta_label: label });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stonebrand-200 bg-white/95 backdrop-blur-xl">
      <div className="hidden border-b border-stonebrand-200 bg-graphite-50 text-graphite-950 lg:block">
        <div className="container-shell flex min-h-8 items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-4 font-medium text-graphite-600">
            <span>Factory-backed bag supply from China</span>
            <span className="text-graphite-300">/</span>
            <span>Travel bags, backpacks, crossbody bags, OEM/ODM</span>
          </div>
          <div className="flex items-center gap-5 font-semibold">
            <Link
              className="text-graphite-950 transition hover:text-clay-600"
              href="/catalog"
              onClick={() => trackEvent("click_get_catalog", { cta_label: "Get Latest Catalog" })}
            >
              Get Latest Catalog
            </Link>
            <a
              className="text-graphite-950 transition hover:text-clay-600"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("click_contact_cason", { cta_label: `Contact ${siteConfig.contactPerson} on WhatsApp` })}
            >
              Contact {siteConfig.contactPerson} on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-shell flex min-h-14 items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md py-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-graphite-950 text-xs font-bold tracking-normal text-white">
            RG
          </span>
          <span>
            <span className="block text-sm font-bold tracking-normal text-graphite-950">
              {siteConfig.brandName}
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.08em] text-graphite-500">
              Bag Manufacturer & Supplier
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => trackNavItem(item.href, item.label)}
                className={`focus-ring rounded-sm px-3 py-2 text-sm font-semibold transition duration-200 ${
                  active ? "bg-graphite-100 text-graphite-950" : "text-graphite-600 hover:bg-graphite-50 hover:text-graphite-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span
            className="inline-flex min-h-9 items-center gap-2 rounded-sm border border-stonebrand-200 bg-white px-3 py-2 text-xs font-semibold text-graphite-600"
            title="Multi-language support planned for a future phase"
            aria-label="Current language: English. Multi-language support planned for a future phase."
          >
            <Globe2 className="h-4 w-4 text-graphite-500" aria-hidden="true" />
            {activeLanguage.label}
          </span>
          <Link
            href="/catalog"
            className="focus-ring inline-flex min-h-9 items-center rounded-sm border border-stonebrand-200 px-4 py-2 text-sm font-semibold text-graphite-950 transition duration-200 hover:border-graphite-950"
            onClick={() => trackEvent("click_get_catalog", { cta_label: "Header Get Catalog" })}
          >
            Get Catalog
          </Link>
          <a
            href={whatsappHref}
            className="focus-ring inline-flex min-h-9 items-center gap-2 rounded-sm border border-clay-600 bg-clay-600 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:border-graphite-950 hover:bg-graphite-950"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("click_contact_cason", { cta_label: `Talk to ${siteConfig.contactPerson}` })}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Talk to {siteConfig.contactPerson}
          </a>
        </div>

        <button
          type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-sm border border-stonebrand-200 text-graphite-950 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-stonebrand-200 bg-white lg:hidden">
          <nav className="container-shell grid gap-1 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  trackNavItem(item.href, item.label);
                  setIsOpen(false);
                }}
                className="focus-ring rounded-sm px-3 py-3 text-sm font-semibold text-graphite-700 transition hover:bg-graphite-50 hover:text-graphite-950"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/catalog"
              onClick={() => {
                trackEvent("click_get_catalog", { cta_label: "Mobile Get Catalog" });
                setIsOpen(false);
              }}
              className="focus-ring rounded-sm border border-stonebrand-200 px-3 py-3 text-sm font-semibold text-graphite-950 transition hover:border-graphite-950"
            >
              Get Catalog
            </Link>
            <span className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-sm border border-stonebrand-200 px-3 py-3 text-sm font-semibold text-graphite-600">
              <Globe2 className="h-4 w-4 text-graphite-500" aria-hidden="true" />
              {activeLanguage.label}
            </span>
            <a
              href={whatsappHref}
              className="focus-ring mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-clay-600 px-4 py-3 text-sm font-semibold text-white"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("click_contact_cason", { cta_label: `Contact ${siteConfig.contactPerson} on WhatsApp` })}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Contact {siteConfig.contactPerson} on WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}


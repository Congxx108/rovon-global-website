"use client";

import { Globe2, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { activeLanguage } from "@/data/languages";
import { siteConfig, whatsappLink } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const navItems = [
  { href: "/catalog", label: "Catalog" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/wholesale-solutions", label: "Wholesale" },
  { href: "/markets", label: "Markets" },
  { href: "/oem-odm", label: "OEM/ODM" },
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
    <header className="sticky top-0 z-50 border-b border-stonebrand-200 bg-white/95 shadow-[0_1px_0_rgba(20,34,43,0.04)] backdrop-blur-xl">
      <div className="hidden border-b border-stonebrand-200 bg-sand-100 text-navy-950 lg:block">
        <div className="container-shell flex min-h-9 items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-5 text-navy-800">
            <span>China-based Bag Manufacturing & Wholesale Supply</span>
            <span className="text-clay-500/50">/</span>
            <span>OEM/ODM Support</span>
          </div>
          <div className="flex items-center gap-5">
            <Link
              className="transition hover:text-clay-700"
              href="/catalog"
              onClick={() => trackEvent("click_get_catalog", { cta_label: "Get Latest Catalog" })}
            >
              Get Latest Catalog
            </Link>
            <a
              className="transition hover:text-clay-700"
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

      <div className="container-shell flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md py-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-950 text-sm font-bold tracking-normal text-white shadow-sm">
            RG
          </span>
          <span>
            <span className="block text-base font-semibold tracking-normal text-navy-950">
              {siteConfig.brandName}
            </span>
            <span className="block text-xs font-medium text-slate-500">
              Bag Manufacturer & Supplier
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => trackNavItem(item.href, item.label)}
                className={`focus-ring rounded-md px-3 py-2 text-sm font-medium transition duration-200 ${
                  active ? "bg-sand-100 text-navy-950" : "text-slate-700 hover:bg-sand-50 hover:text-navy-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-stonebrand-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600"
            title="Multi-language support planned for a future phase"
            aria-label="Current language: English. Multi-language support planned for a future phase."
          >
            <Globe2 className="h-4 w-4 text-clay-600" aria-hidden="true" />
            {activeLanguage.label}
          </span>
          <a
            href={whatsappHref}
            className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-clay-600 px-4 py-2 text-sm font-semibold text-clay-700 transition duration-200 hover:bg-clay-600 hover:text-white hover:shadow-card"
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
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-stonebrand-200 text-navy-950 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-stonebrand-200 bg-white shadow-card lg:hidden">
          <nav className="container-shell grid gap-1 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  trackNavItem(item.href, item.label);
                  setIsOpen(false);
                }}
                className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-sand-50 hover:text-navy-950"
              >
                {item.label}
              </Link>
            ))}
            <span className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-md border border-stonebrand-200 px-3 py-3 text-sm font-semibold text-slate-600">
              <Globe2 className="h-4 w-4 text-clay-600" aria-hidden="true" />
              {activeLanguage.label}
            </span>
            <a
              href={whatsappHref}
              className="focus-ring mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-clay-600 px-4 py-3 text-sm font-semibold text-white shadow-sm"
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


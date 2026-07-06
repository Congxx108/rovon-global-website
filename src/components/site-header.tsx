"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SocialLinks } from "@/components/social-links";
import { siteConfig, whatsappLink } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
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
    <header className="relative z-50 border-b border-[#dedede] bg-white">
      <div className="container-shell flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded py-2" aria-label={`${siteConfig.brandName} home`}>
          <span className="flex h-8 w-8 items-center justify-center border border-graphite-950 text-sm font-black leading-none text-graphite-950">R</span>
          <span className="text-[13px] font-black uppercase tracking-[0.12em] text-graphite-950">
            {siteConfig.brandName}
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => trackNavItem(item.href, item.label)}
                data-active={active}
                className={`focus-ring nav-link rounded py-2 text-[11px] font-bold uppercase tracking-[0.1em] transition duration-200 ${
                  active ? "text-graphite-950" : "text-graphite-500 hover:text-graphite-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="hidden xl:block">
            <SocialLinks />
          </div>
          <Link
            href="/catalog"
            className="focus-ring interactive-button inline-flex min-h-9 items-center justify-center rounded border border-[#d8d8d8] bg-white px-4 text-[11px] font-bold tracking-[0.08em] text-graphite-950 hover:border-graphite-950"
            onClick={() => trackEvent("click_get_catalog", { cta_label: "Header Get Catalog" })}
          >
            Get Catalog
          </Link>
          <a
            href={whatsappHref}
            className="focus-ring interactive-button inline-flex min-h-9 items-center justify-center rounded bg-graphite-950 px-4 text-[11px] font-bold tracking-[0.08em] text-white hover:bg-graphite-800"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("click_contact_cason", { cta_label: `Header Contact ${siteConfig.contactPerson}` })}
          >
            Contact Cason
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded border border-stonebrand-200 text-graphite-950 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-stonebrand-200 bg-white transition-[max-height,opacity,transform] duration-300 ease-out lg:hidden ${
          isOpen ? "max-h-[560px] translate-y-0 opacity-100" : "max-h-0 -translate-y-1 opacity-0"
        }`}
      >
          <nav className="container-shell grid gap-1 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  trackNavItem(item.href, item.label);
                  setIsOpen(false);
                }}
                className="focus-ring rounded px-3 py-3 text-sm font-semibold text-graphite-700 transition hover:bg-graphite-50 hover:text-graphite-950"
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
              className="focus-ring rounded border border-stonebrand-200 px-3 py-3 text-sm font-semibold text-graphite-950 transition hover:border-graphite-950"
            >
              Get Catalog
            </Link>
            <a
              href={whatsappHref}
              className="focus-ring mt-2 inline-flex min-h-11 items-center justify-center rounded bg-graphite-950 px-4 py-3 text-sm font-semibold text-white"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("click_contact_cason", { cta_label: `Contact ${siteConfig.contactPerson} on WhatsApp` })}
            >
              Contact {siteConfig.contactPerson} on WhatsApp
            </a>
            <SocialLinks label="Follow ROVON Global" className="mt-4 border-t border-stonebrand-200 pt-4" />
          </nav>
      </div>
    </header>
  );
}

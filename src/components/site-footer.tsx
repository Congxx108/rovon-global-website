import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { productCategories, readyStockInfo } from "@/data/products";
import { contactMessage, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-stonebrand-200 bg-graphite-950 text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_1fr]">
        <div className="lg:pr-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-white text-xs font-black text-white">
              R
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.12em]">{siteConfig.brandName}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-graphite-400">Bag manufacturer & wholesale supplier</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-graphite-300">
            Factory-backed bag production, wholesale supply, and OEM/ODM custom support for global B2B buyers.
          </p>
        </div>

        <div>
          <p className="muted-label text-graphite-400">Categories</p>
          <ul className="mt-5 space-y-3 text-sm text-graphite-300">
            {productCategories.slice(0, 7).map((category) => (
              <li key={category.slug}>
                <Link className="transition hover:text-white" href={`/products/${category.slug}`}>
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link className="transition hover:text-white" href={`/${readyStockInfo.slug}`}>
                Ready Stock
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="muted-label text-graphite-400">Factory</p>
          <ul className="mt-5 space-y-3 text-sm text-graphite-300">
            <li><Link className="transition hover:text-white" href="/manufacturing">Manufacturing</Link></li>
            <li><Link className="transition hover:text-white" href="/manufacturing/factory-overview">Factory Overview</Link></li>
            <li><Link className="transition hover:text-white" href="/manufacturing/quality-control">Quality Control</Link></li>
            <li><Link className="transition hover:text-white" href="/manufacturing/packing-shipping">Packing & Shipping</Link></li>
            <li><Link className="transition hover:text-white" href="/oem-odm">OEM/ODM Process</Link></li>
          </ul>
        </div>

        <div>
          <p className="muted-label text-graphite-400">Company</p>
          <ul className="mt-5 space-y-3 text-sm text-graphite-300">
            <li><Link className="transition hover:text-white" href="/wholesale-solutions">Wholesale Solutions</Link></li>
            <li><Link className="transition hover:text-white" href="/catalog">Catalog Request</Link></li>
            <li><Link className="transition hover:text-white" href="/about">About</Link></li>
            <li><Link className="transition hover:text-white" href="/faq">FAQ</Link></li>
            <li><Link className="transition hover:text-white" href="/contact">Contact Cason</Link></li>
          </ul>
        </div>

        <div>
          <p className="muted-label text-graphite-400">Contact Cason</p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-graphite-300">
            <li>{siteConfig.contactPerson}</li>
            <li><a className="transition hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li>{siteConfig.whatsappDisplay}</li>
            <li>{siteConfig.address}</li>
          </ul>
          <WhatsAppCTA
            message={contactMessage("I want to contact you from the website footer about catalog and bag sourcing support.")}
            label={`Contact ${siteConfig.contactPerson}`}
            className="mt-6 w-full border-white bg-white !text-graphite-950 hover:border-white hover:bg-[#eeeeee]"
            eventName="click_contact_cason"
            eventParams={{ page_path: "footer" }}
          />
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-2 text-xs text-graphite-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
          <p>B2B inquiry website for catalog requests, sourcing discussion, and OEM/ODM communication.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { productCategories, readyStockInfo } from "@/data/products";
import { markets } from "@/data/markets";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-stonebrand-200 bg-navy-950 text-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.05fr_2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-bold text-navy-950">
              RG
            </span>
            <div>
              <p className="font-semibold">{siteConfig.brandName}</p>
              <p className="text-sm text-slate-300">China Bag Manufacturer & Wholesale Supplier</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
            Factory-backed bag production, wholesale supply, and OEM/ODM custom support for professional global buyers. {siteConfig.contactPerson} is the direct contact for catalog requests and sourcing discussions.
          </p>
          <Link
            href="/catalog"
            className="focus-ring mt-8 inline-flex rounded-md bg-clay-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-clay-700"
          >
            Request Latest Catalog
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="editorial-eyebrow text-sand-200">Products</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {productCategories.slice(0, 6).map((category) => (
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
            <p className="editorial-eyebrow text-sand-200">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li><Link className="transition hover:text-white" href="/manufacturing">Manufacturing</Link></li>
              <li><Link className="transition hover:text-white" href="/wholesale-solutions">Wholesale Solutions</Link></li>
              <li><Link className="transition hover:text-white" href="/catalog">Catalog Request</Link></li>
              <li><Link className="transition hover:text-white" href="/manufacturing/factory-overview">Factory Overview</Link></li>
              <li><Link className="transition hover:text-white" href="/manufacturing/quality-control">Quality Control</Link></li>
              <li><Link className="transition hover:text-white" href="/oem-odm">OEM/ODM</Link></li>
              <li><Link className="transition hover:text-white" href="/about">About</Link></li>
              <li><Link className="transition hover:text-white" href="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <p className="editorial-eyebrow text-sand-200">Markets</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {markets.map((market) => (
                <li key={market.slug}>
                  <Link className="transition hover:text-white" href={`/markets/${market.slug}`}>
                    {market.name}
                  </Link>
                </li>
              ))}
              <li><Link className="transition hover:text-white" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="editorial-eyebrow text-sand-200">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>{siteConfig.contactPerson}</li>
              <li><a className="transition hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              <li>{siteConfig.whatsappDisplay}</li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
          <p>B2B inquiry website for catalog requests, sourcing discussion, and OEM/ODM communication.</p>
        </div>
      </div>
    </footer>
  );
}


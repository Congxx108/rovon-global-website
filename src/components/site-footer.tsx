import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { productCategories, readyStockInfo } from "@/data/products";
import { contactMessage, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-stonebrand-200 bg-graphite-950 text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_1fr]">
        <Reveal className="lg:pr-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-white text-xs font-black text-white">
              R
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.12em]">{siteConfig.brandName}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-graphite-300">
            Factory-Backed Bag Manufacturer & Flexible Supply Partner from China.
          </p>
          <SocialLinks label="Follow ROVON Global" tone="light" className="mt-7" />
        </Reveal>

        <Reveal delay={80}>
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
                Flexible Supply
              </Link>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <p className="muted-label text-graphite-400">Factory</p>
          <ul className="mt-5 space-y-3 text-sm text-graphite-300">
            <li><Link className="transition hover:text-white" href="/manufacturing">Manufacturing</Link></li>
            <li><Link className="transition hover:text-white" href="/manufacturing/factory-overview">Factory Overview</Link></li>
            <li><Link className="transition hover:text-white" href="/manufacturing/quality-control">Quality Control</Link></li>
            <li><Link className="transition hover:text-white" href="/manufacturing/packing-shipping">Packing & Shipping</Link></li>
            <li><Link className="transition hover:text-white" href="/oem-odm">OEM/ODM Process</Link></li>
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <p className="muted-label text-graphite-400">Company</p>
          <ul className="mt-5 space-y-3 text-sm text-graphite-300">
            <li><Link className="transition hover:text-white" href="/wholesale-solutions">Two Supply Solutions</Link></li>
            <li><Link className="transition hover:text-white" href="/catalog">Catalog Request</Link></li>
            <li><Link className="transition hover:text-white" href="/about">About</Link></li>
            <li><Link className="transition hover:text-white" href="/faq">FAQ</Link></li>
            <li><Link className="transition hover:text-white" href="/contact">Contact Cason</Link></li>
          </ul>
        </Reveal>

        <Reveal delay={320}>
          <p className="muted-label text-graphite-400">Contact Cason</p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-graphite-300">
            <li>{siteConfig.contactPerson}</li>
            <li><a className="transition hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li>{siteConfig.whatsappDisplay}</li>
            <li>{siteConfig.address}</li>
            <li>
              <a
                className="inline-flex font-semibold text-white underline decoration-white/25 underline-offset-4 transition hover:decoration-white"
                href={siteConfig.googleMapsExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </li>
          </ul>
          <WhatsAppCTA
            message={contactMessage("I want to contact you from the website footer about catalog, OEM/ODM, ready stock, and bag sourcing support.")}
            label={`Contact ${siteConfig.contactPerson}`}
            className="mt-6 w-full border-white bg-white !text-graphite-950 hover:border-white hover:bg-[#eeeeee]"
            eventName="click_contact_cason"
            eventParams={{ page_path: "footer" }}
          />
        </Reveal>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-2 text-xs text-graphite-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

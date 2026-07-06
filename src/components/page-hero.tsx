import type { ReactNode } from "react";
import Image from "next/image";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";

type PageHeroProps = {
  title: string;
  description: string;
  children?: ReactNode;
  breadcrumbPath?: string;
};

export function PageHero({ title, description, children, breadcrumbPath }: PageHeroProps) {
  return (
    <>
      {breadcrumbPath ? (
        <JsonLd data={breadcrumbJsonLd([{ name: title, path: breadcrumbPath }])} />
      ) : null}
      <section className="overflow-hidden border-b border-[#d8d8d8] bg-white text-graphite-950">
        <div className="relative h-60 bg-black md:h-80">
          <Image
            src="/images/generated/luggage-factory-hero.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute bottom-[-1px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[16px] border-b-[16px] border-x-transparent border-b-white" />
        </div>
        <div className="container-shell py-12 text-center md:py-16">
          <nav className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-graphite-500" aria-label="Breadcrumb">
            Home / {title}
          </nav>
          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.05] text-graphite-950 md:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-graphite-600 md:text-base md:leading-8">
            {description}
          </p>
          {children ? <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div> : null}
        </div>
      </section>
    </>
  );
}

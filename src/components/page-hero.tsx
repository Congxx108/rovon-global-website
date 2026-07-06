import type { ReactNode } from "react";
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
      <section className="relative overflow-hidden border-b border-stonebrand-200 bg-graphite-50 py-14 text-graphite-950 md:py-20">
        <div className="container-shell relative max-w-5xl">
          <nav className="mb-5 text-[11px] font-bold uppercase tracking-[0.16em] text-graphite-500" aria-label="Breadcrumb">
            Home / {title}
          </nav>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-graphite-600 md:text-lg md:leading-8">
            {description}
          </p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </section>
    </>
  );
}


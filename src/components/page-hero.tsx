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
      <section className="relative overflow-hidden border-b border-stonebrand-200 bg-sand-50 py-16 text-navy-950 md:py-24">
        <div className="absolute inset-0 subtle-grid opacity-40" aria-hidden="true" />
        <div className="container-shell relative max-w-5xl">
          <nav className="editorial-eyebrow mb-6" aria-label="Breadcrumb">
            Home / {title}
          </nav>
          <h1 className="headline-serif max-w-4xl text-4xl font-normal leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            {description}
          </p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </section>
    </>
  );
}


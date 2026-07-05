import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { getManufacturingPageBySlug, manufacturingPages } from "@/data/manufacturing";
import { contactMessage } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

type ManufacturingDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return manufacturingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ManufacturingDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getManufacturingPageBySlug(slug);
  return page
    ? createPageMetadata({
        title: page.title,
        description: page.description,
        path: `/manufacturing/${page.slug}`,
      })
    : {};
}

export default async function ManufacturingDetailPage({ params }: ManufacturingDetailProps) {
  const { slug } = await params;
  const page = getManufacturingPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageHero title={page.title} description={page.description} breadcrumbPath={`/manufacturing/${page.slug}`} />
      <section className="section-y">
        <div className="container-shell max-w-4xl">
          <h2 className="headline-serif text-4xl font-normal leading-tight text-navy-950">
            What Buyers Can Discuss
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {page.points.map((point) => (
              <div key={point} className="panel-card p-5 text-sm font-semibold text-navy-900">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title={`Discuss ${page.title}`}
        message={contactMessage(`I want to discuss ${page.title.toLowerCase()} for my bag sourcing project.`)}
      />
    </>
  );
}


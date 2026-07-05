import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/data/products";

type ProductCardProps = {
  category: ProductCategory;
};

export function ProductCard({ category }: ProductCardProps) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="focus-ring group overflow-hidden rounded-lg bg-white shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-stonebrand-100">
        <Image
          src={category.image}
          alt={`${category.name} product capability`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          unoptimized
        />
        <div className="absolute left-4 top-4 rounded-md border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold text-navy-950 shadow-sm">
          Category {String(category.priority).padStart(2, "0")}
        </div>
      </div>
      <div className="border-x border-b border-stonebrand-200 p-6">
        <h3 className="headline-serif text-2xl font-normal text-navy-950">{category.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{category.description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clay-600 transition group-hover:text-navy-950">
          View category
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}


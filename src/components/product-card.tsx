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
      className="focus-ring group overflow-hidden rounded-md border border-stonebrand-200 bg-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={category.image}
          alt={`${category.name} product capability`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          unoptimized
        />
        <div className="absolute left-4 top-4 rounded-sm border border-white/70 bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-navy-950">
          Category {String(category.priority).padStart(2, "0")}
        </div>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="text-xl font-bold tracking-tight text-navy-950">{category.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{category.description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-clay-600 transition group-hover:text-navy-950">
          View category
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}


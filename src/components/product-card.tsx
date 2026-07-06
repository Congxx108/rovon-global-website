import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/data/products";

type ProductCardProps = {
  category: ProductCategory;
  featured?: boolean;
};

export function ProductCard({ category, featured = false }: ProductCardProps) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="focus-ring group flex h-full flex-col overflow-hidden rounded-sm border border-stonebrand-200 bg-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-graphite-400 hover:shadow-card"
    >
      <div className={`relative overflow-hidden bg-graphite-50 ${featured ? "aspect-[16/9] lg:aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image
          src={category.image}
          alt={`${category.name} product capability`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/12 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        <div className="absolute left-4 top-4 border border-white/80 bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-graphite-950">
          Category {String(category.priority).padStart(2, "0")}
        </div>
      </div>
      <div className={`flex flex-1 flex-col p-5 md:p-6 ${featured ? "lg:p-8" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <h3 className={`${featured ? "text-3xl" : "text-xl"} font-semibold tracking-tight text-graphite-950`}>
            {category.name}
          </h3>
          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-graphite-400 transition group-hover:translate-x-1 group-hover:text-clay-600" aria-hidden="true" />
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-graphite-600">{category.buyerUseCase}</p>
        <div className="mt-6 grid gap-3 border-y border-stonebrand-200 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-graphite-500">
          <p>{category.suitableBuyers.slice(0, 2).join(" / ")}</p>
          <p>Material / logo / packing support</p>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-clay-600 transition group-hover:text-graphite-950">
          Explore {category.name}
        </span>
      </div>
    </Link>
  );
}


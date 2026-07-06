import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ProductCategory } from "@/data/products";

type ProductCardProps = {
  category: ProductCategory;
  featured?: boolean;
};

const productImagePositions = ["0% 0%", "100% 0%", "0% 100%", "100% 100%"];

export function ProductCard({ category, featured = false }: ProductCardProps) {
  const imagePosition = productImagePositions[(category.priority - 1) % productImagePositions.length] ?? "50% 50%";

  return (
    <Link
      href={`/products/${category.slug}`}
      className="focus-ring group flex h-full flex-col overflow-hidden rounded-md border border-stonebrand-200 bg-white shadow-[0_6px_18px_rgba(0,0,0,0.05)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-graphite-300 hover:shadow-card"
    >
      <div
        className={`relative overflow-hidden bg-[#f6f6f6] bg-[url('/images/generated/luggage-product-catalog.png')] bg-[length:210%_210%] bg-no-repeat transition duration-700 ease-out group-hover:scale-[1.02] ${featured ? "aspect-[16/9] lg:aspect-[16/10]" : "aspect-[4/3]"}`}
        style={{ backgroundPosition: imagePosition }}
        role="img"
        aria-label={`${category.name} product capability`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/12 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        <div className="absolute left-4 top-4 border border-white/80 bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-graphite-950">
          Category {String(category.priority).padStart(2, "0")}
        </div>
      </div>
      <div className={`flex flex-1 flex-col p-5 md:p-6 ${featured ? "lg:p-8" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <h3 className={`${featured ? "text-3xl" : "text-xl"} font-black text-graphite-950`}>
            {category.name}
          </h3>
          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-graphite-400 transition group-hover:translate-x-1 group-hover:text-graphite-950" aria-hidden="true" />
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-graphite-600">{category.buyerUseCase}</p>
        <div className="mt-6 grid gap-3 border-y border-stonebrand-200 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-graphite-500">
          <p>{category.suitableBuyers.slice(0, 2).join(" / ")}</p>
          <p>Material / logo / packing support</p>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-graphite-950 transition group-hover:text-graphite-700">
          Explore {category.name}
        </span>
      </div>
    </Link>
  );
}


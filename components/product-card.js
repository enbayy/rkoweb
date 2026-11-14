"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/catalog";
import { useShop } from "@/components/shop-context";
import { HeartIcon } from "@/components/icons";

export default function ProductCard({ product }) {
  const { favorites, toggleFavorite } = useShop();
  const liked = favorites.includes(product.slug);

  return (
    <article className="relative rounded-2xl bg-white p-3 shadow-sm transition hover:shadow-md">
      <button
        type="button"
        aria-pressed={liked}
        aria-label={liked ? "Favorilerden çıkar" : "Favorilere ekle"}
        onClick={() => toggleFavorite(product.slug)}
        className={`absolute top-5 right-5 z-10 grid h-9 w-9 place-items-center rounded-full shadow-sm ${liked ? "bg-heart-soft" : "bg-white"}`}
      >
        <HeartIcon filled={liked} />
      </button>
      <Link href={`/urun/${product.slug}`} className="block">
        <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
          {product.stock === 0 ? (
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2 py-1 text-[11px] text-zinc-500">
              Stokta yok
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 line-clamp-2 min-h-10 text-sm text-zinc-600">{product.name}</h3>
        <div className="mt-2 text-right">
          {product.oldPrice ? (
            <p className="text-xs text-zinc-400 line-through">{formatPrice(product.oldPrice)}</p>
          ) : (
            <span className="block h-4" />
          )}
          <p className="font-semibold text-brand">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}

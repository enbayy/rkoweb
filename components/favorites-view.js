"use client";

import Link from "next/link";
import { getProduct } from "@/lib/catalog";
import { useShop } from "@/components/shop-context";
import Breadcrumb from "@/components/breadcrumb";
import ProductCard from "@/components/product-card";

export default function FavoritesView() {
  const { favorites } = useShop();
  const products = favorites.map((slug) => getProduct(slug)).filter(Boolean);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumb
        items={[
          { href: "/", label: "Ana Sayfa" },
          { label: "Favorilerim" },
        ]}
      />
      <h1 className="mt-3 text-2xl font-medium text-zinc-800">Favorilerim</h1>

      {products.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-sm text-zinc-500">Henüz favori ürününüz yok. Kalp ikonuna basarak ekleyebilirsiniz.</p>
          <Link
            href="/"
            className="mt-6 inline-flex h-11 items-center rounded-lg bg-brand px-5 text-sm font-medium text-white hover:bg-brand-dark"
          >
            Alışverişe dön
          </Link>
        </div>
      ) : (
        <>
          <p className="mt-1 text-sm text-zinc-500">{products.length} ürün</p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

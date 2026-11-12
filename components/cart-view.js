"use client";

import Link from "next/link";
import { formatPrice, productImage } from "@/lib/catalog";
import { useShop } from "@/components/shop-context";
import OrderSummary from "@/components/order-summary";

export default function CartView() {
  const { items, updateQuantity, removeItem } = useShop();

  if (!items.length) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="text-2xl font-medium text-zinc-800">Sepetim</h1>
        <p className="mt-3 text-sm text-zinc-500">Sepetiniz boş. Kartlardan bir ürün ekleyebilirsiniz.</p>
        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center rounded-lg bg-brand px-5 text-sm font-medium text-white hover:bg-brand-dark"
        >
          Alışverişe dön
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1.4fr_0.8fr]">
      <div>
        <h1 className="text-2xl font-medium text-zinc-800">Sepetim</h1>
        <ul className="mt-5 space-y-4">
          {items.map((item) => (
            <li key={item.slug} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <Link
                href={`/urun/${item.slug}`}
                className="relative grid h-28 w-24 shrink-0 place-items-center overflow-hidden rounded-xl bg-white"
              >
                {item.image ? (
                  <img
                    src={productImage(item.image, 400)}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                ) : null}
              </Link>
              <div className="min-w-0 flex-1">
                <Link href={`/urun/${item.slug}`} className="text-sm text-zinc-800 hover:text-brand">
                  {item.name}
                </Link>
                {item.note ? <p className="mt-1 text-xs text-zinc-500">Not: {item.note}</p> : null}
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Adedi azalt"
                    onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                    className="grid h-8 w-8 place-items-center rounded-lg bg-zinc-100"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    aria-label="Adedi artır"
                    onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                    className="grid h-8 w-8 place-items-center rounded-lg bg-zinc-100"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => removeItem(item.slug)}
                    className="ml-2 text-sm text-zinc-500 hover:text-brand-dark"
                  >
                    Kaldır
                  </button>
                </div>
              </div>
              <p className="text-sm font-semibold text-brand">{formatPrice(item.price * item.quantity)}</p>
            </li>
          ))}
        </ul>
      </div>
      <OrderSummary action="checkout" />
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPrice, getCategory, productImage } from "@/lib/catalog";
import { useShop } from "@/components/shop-context";
import Breadcrumb from "@/components/breadcrumb";
import ProductSection from "@/components/product-section";

const tabs = [
  { id: "ozellikler", label: "Ürün Özellikleri" },
  { id: "yorumlar", label: "Yorumlar" },
  { id: "odeme", label: "Ödeme Seçenekleri" },
  { id: "iade", label: "İade Koşulları" },
];

export default function ProductDetail({ product, related }) {
  const { addItem } = useShop();
  const category = getCategory(product.category);
  const [slide, setSlide] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState("ozellikler");
  const [added, setAdded] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const slides = product.images?.length ? product.images : [product.image];
  const soldOut = product.stock === 0;

  function changeQuantity(next) {
    setQuantity(Math.max(1, Math.min(next, product.stock)));
  }

  function addToCart() {
    if (soldOut) return;
    addItem(product, quantity);
    setAdded(true);
  }

  function addReview(event) {
    event.preventDefault();
    setReviews((current) => [{ name: reviewName.trim(), text: reviewText.trim() }, ...current]);
    setReviewName("");
    setReviewText("");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumb
        items={[
          { href: "/", label: "Ana Sayfa" },
          { href: `/kategori/${category.slug}`, label: category.name },
          { label: product.name },
        ]}
      />

      <div className="mt-6 grid items-start gap-8 lg:grid-cols-2">
        <div>
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white">
            <img
              src={slides[slide]}
              srcSet={`${productImage(slides[slide], 800)} 800w, ${slides[slide]} 1200w`}
              sizes="(min-width: 1024px) 560px, 100vw"
              alt={product.name}
              className="h-full w-full object-contain"
            />
            {slides.length > 1 ? (
              <>
                <button
                  type="button"
                  aria-label="Önceki görsel"
                  onClick={() => setSlide((current) => (current === 0 ? slides.length - 1 : current - 1))}
                  className="absolute top-1/2 left-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white shadow-sm"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Sonraki görsel"
                  onClick={() => setSlide((current) => (current + 1) % slides.length)}
                  className="absolute top-1/2 right-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white shadow-sm"
                >
                  ›
                </button>
              </>
            ) : null}
          </div>
          <div className="mt-3 flex justify-center gap-2">
            {slides.map((label, index) => (
              <button
                key={label}
                type="button"
                aria-label={`${index + 1} / ${slides.length}`}
                aria-current={slide === index ? "true" : undefined}
                onClick={() => setSlide(index)}
                className={`h-2.5 w-2.5 rounded-full ${slide === index ? "bg-brand" : "bg-zinc-300"}`}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-500">
            <Link href={`/kategori/${category.slug}`} className="hover:text-brand">
              {category.name}
            </Link>
          </p>
          <h1 className="mt-2 text-2xl font-medium text-zinc-800">{product.name}</h1>
          <p className="mt-4 text-2xl font-semibold text-brand">{formatPrice(product.price)}</p>
          {product.oldPrice ? (
            <p className="text-sm text-zinc-400 line-through">{formatPrice(product.oldPrice)}</p>
          ) : null}
          <p className="mt-3 text-sm text-zinc-500">{soldOut ? "Stokta yok" : "Stokta"}</p>
          <p className="mt-4 text-sm leading-6 text-zinc-600">{product.description}</p>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm text-zinc-600">Adet</span>
            <div className="flex h-11 items-center rounded-lg bg-zinc-100">
              <button
                type="button"
                aria-label="Adedi azalt"
                disabled={soldOut}
                onClick={() => changeQuantity(quantity - 1)}
                className="h-11 w-10 disabled:opacity-40"
              >
                −
              </button>
              <input
                aria-label="Adet"
                type="number"
                min={1}
                max={product.stock || 1}
                value={soldOut ? 0 : quantity}
                disabled={soldOut}
                onChange={(event) => changeQuantity(Number(event.target.value) || 1)}
                className="h-11 w-14 bg-transparent text-center outline-none"
              />
              <button
                type="button"
                aria-label="Adedi artır"
                disabled={soldOut}
                onClick={() => changeQuantity(quantity + 1)}
                className="h-11 w-10 disabled:opacity-40"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={addToCart}
            disabled={soldOut}
            className="mt-4 h-12 w-full rounded-lg bg-brand text-sm font-medium text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-zinc-300"
          >
            {soldOut ? "Stokta yok" : added ? "Sepete eklendi" : "Sepete Ekle"}
          </button>
          {added ? (
            <Link href="/sepet" className="mt-3 block text-center text-sm text-brand hover:underline">
              Sepete git
            </Link>
          ) : null}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex gap-2 overflow-x-auto border-b border-zinc-100">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`shrink-0 border-b-2 px-3 py-3 text-sm ${
                tab === item.id ? "border-brand text-brand" : "border-transparent text-zinc-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="py-5 text-sm leading-6 text-zinc-600">
          {tab === "ozellikler" ? (
            <ul className="list-disc space-y-2 pl-5">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          ) : null}

          {tab === "yorumlar" ? (
            <div className="space-y-4">
              {reviews.length === 0 ? <p>Henüz yorum yok.</p> : null}
              {reviews.map((review) => (
                <article key={`${review.name}-${review.text}`} className="rounded-xl bg-zinc-50 px-4 py-3">
                  <p className="font-medium text-zinc-800">{review.name}</p>
                  <p className="mt-1">{review.text}</p>
                </article>
              ))}
              <form onSubmit={addReview} className="grid gap-3 sm:max-w-md">
                <input
                  required
                  value={reviewName}
                  onChange={(event) => setReviewName(event.target.value)}
                  placeholder="Adınız"
                  aria-label="Adınız"
                  className="h-11 rounded-lg border border-zinc-200 px-3 outline-none focus:border-brand"
                />
                <textarea
                  required
                  value={reviewText}
                  onChange={(event) => setReviewText(event.target.value)}
                  placeholder="Yorumunuz"
                  aria-label="Yorumunuz"
                  rows={3}
                  className="rounded-lg border border-zinc-200 px-3 py-2 outline-none focus:border-brand"
                />
                <button type="submit" className="h-11 rounded-lg bg-zinc-800 text-white">
                  Yorumu göster
                </button>
              </form>
            </div>
          ) : null}

          {tab === "odeme" ? (
            <div className="grid gap-3 sm:grid-cols-3">
              {["Havale / EFT", "Kapıda ödeme", "Banka veya kredi kartı"].map((option) => (
                <div key={option} className="rounded-xl bg-zinc-50 px-4 py-4">
                  <p className="font-medium text-zinc-800">{option}</p>
                  <p className="mt-1 text-zinc-500">Ödeme için WhatsApp üzerinden iletişime geçilir.</p>
                </div>
              ))}
            </div>
          ) : null}

          {tab === "iade" ? (
            <p>
              İade koşulları bu örnekte yalnızca sayfa düzenini göstermek içindir.{" "}
              <Link href="/sayfa/garanti-ve-iade" className="text-brand hover:underline">
                Garanti ve iade sayfasına git.
              </Link>
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-12">
        <ProductSection title="Benzer Ürünler" products={related} />
      </div>
    </div>
  );
}

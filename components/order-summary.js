"use client";

import { formatPrice, shippingCost, STORE } from "@/lib/catalog";
import { useShop } from "@/components/shop-context";

function shortName(name) {
  return name.split(/\s*[|–]\s*|\s+-\s+/)[0].trim();
}

function cartMessage(items, total) {
  const lines = items.map(
    (item) => `• ${shortName(item.name)} — ${formatPrice(item.price * item.quantity)}`,
  );

  return [
    "Merhaba, sepetimdeki ürünler için ödeme yapmak istiyorum.",
    "",
    ...lines,
    "",
    `Toplam: ${formatPrice(total)}`,
  ].join("\n");
}

export default function OrderSummary({ action }) {
  const { items, subtotal } = useShop();
  const shipping = shippingCost(subtotal);
  const total = subtotal + shipping;
  const remaining = STORE.freeShippingLimit - subtotal;
  const contactHref = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(
    cartMessage(items, total),
  )}`;

  return (
    <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="text-lg font-medium text-zinc-800">Sipariş özeti</h2>
      <dl className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-500">Ara toplam</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-500">Kargo</dt>
          <dd>{subtotal > 0 && shipping === 0 ? "Bedava" : formatPrice(shipping)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-zinc-100 pt-3 text-base font-semibold text-zinc-800">
          <dt>Toplam</dt>
          <dd className="text-brand">{formatPrice(total)}</dd>
        </div>
      </dl>
      {subtotal > 0 && remaining > 0 ? (
        <p className="mt-4 text-sm text-zinc-500">
          Kargo bedava için {formatPrice(remaining)} daha ekleyin.
        </p>
      ) : null}
      {action === "checkout" ? (
        <div className="mt-5">
          <a
            href={contactHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-lg bg-[#25D366] text-sm font-medium text-white hover:bg-[#1ebe57]"
          >
            Ödemek için iletişime geç
          </a>
        </div>
      ) : null}
    </aside>
  );
}

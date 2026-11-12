import { getDiscountedProducts, products } from "@/lib/catalog";
import { LockIcon, ReturnIcon, TruckIcon } from "@/components/icons";
import ProductSection from "@/components/product-section";

const trust = [
  {
    icon: LockIcon,
    title: "Güvenli alışveriş",
    text: "Ödeme WhatsApp üzerinden, bizimle iletişime geçerek tamamlanır.",
  },
  {
    icon: TruckIcon,
    title: "Kargo",
    text: "1500 TL ve üzeri siparişlerde kargo bedava.",
  },
  {
    icon: ReturnIcon,
    title: "Kolay iade",
    text: "İade koşulları sayfası yerleşim örneğidir.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-8">
      <ProductSection title="Ürünler" products={products} href="/yeni-urunler" />
      <ProductSection title="İndirimdekiler" products={getDiscountedProducts()} href="/indirimdekiler" />
      <section className="grid gap-4 sm:grid-cols-3">
        {trust.map((item) => (
          <article key={item.title} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-zinc-100 text-zinc-700">
              <item.icon />
            </span>
            <div>
              <h2 className="font-medium text-zinc-800">{item.title}</h2>
              <p className="mt-1 text-sm text-zinc-500">{item.text}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

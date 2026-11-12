import Link from "next/link";
import ProductCard from "@/components/product-card";

export default function ProductSection({ title, products, href }) {
  if (!products.length) return null;

  return (
    <section>
      <div className="relative mb-4 flex flex-col items-center gap-1 sm:block">
        <h2 className="text-center text-xl font-medium text-zinc-800">{title}</h2>
        {href ? (
          <Link
            href={href}
            className="text-sm text-brand hover:underline sm:absolute sm:top-1 sm:right-0"
          >
            Tümünü gör
          </Link>
        ) : null}
      </div>
      <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.slug} className="w-[72%] shrink-0 snap-start sm:w-[46%] md:w-auto md:shrink">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

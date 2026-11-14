import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/product-detail";
import { getProduct, getRelatedProducts, products } from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? product.name : "Ürün" };
}

export default function ProductPage({ params }) {
  return (
    <Suspense fallback={<ProductFallback />}>
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return <ProductDetail product={product} related={getRelatedProducts(product)} />;
}

function ProductFallback() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8" aria-busy="true" aria-live="polite">
      <div className="h-4 w-48 rounded bg-zinc-200" />
      <div className="mt-6 grid items-start gap-8 lg:grid-cols-2">
        <div className="aspect-square rounded-2xl bg-white" />
        <div className="space-y-4 rounded-2xl bg-white p-6">
          <div className="h-7 w-2/3 rounded bg-zinc-200" />
          <div className="h-5 w-1/3 rounded bg-zinc-100" />
          <div className="h-24 rounded bg-zinc-100" />
          <div className="h-11 w-40 rounded-full bg-zinc-200" />
        </div>
      </div>
    </div>
  );
}

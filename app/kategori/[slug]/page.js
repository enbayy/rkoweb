import { Suspense } from "react";
import { notFound } from "next/navigation";
import Listing from "@/components/listing";
import { categories, getCategory, getProductsByCategory } from "@/lib/catalog";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategory(slug);
  return { title: category ? category.name : "Kategori" };
}

export default function CategoryPage({ params }) {
  return (
    <Suspense fallback={<CategoryFallback />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

async function CategoryContent({ params }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <Listing
      key={category.slug}
      title={category.name}
      products={getProductsByCategory(slug)}
      categorySlug={category.slug}
      breadcrumb={[
        { href: "/", label: "Ana Sayfa" },
        { label: category.name },
      ]}
    />
  );
}

function CategoryFallback() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8" aria-busy="true" aria-live="polite">
      <div className="h-4 w-40 rounded bg-zinc-200" />
      <div className="mt-6 h-8 w-56 rounded bg-zinc-200" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="aspect-[3/4] rounded-2xl bg-white" />
        ))}
      </div>
    </div>
  );
}

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

export default async function CategoryPage({ params }) {
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

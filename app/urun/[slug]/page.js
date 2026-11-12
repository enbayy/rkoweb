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

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return <ProductDetail product={product} related={getRelatedProducts(product)} />;
}

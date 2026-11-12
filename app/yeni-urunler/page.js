import Listing from "@/components/listing";
import { getNewProducts } from "@/lib/catalog";

export const metadata = { title: "Yeni Ürünler" };

export default function NewProductsPage() {
  return (
    <Listing
      title="Yeni Ürünler"
      products={getNewProducts()}
      breadcrumb={[
        { href: "/", label: "Ana Sayfa" },
        { label: "Yeni Ürünler" },
      ]}
    />
  );
}

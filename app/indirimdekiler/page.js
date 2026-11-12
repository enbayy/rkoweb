import Listing from "@/components/listing";
import { getDiscountedProducts } from "@/lib/catalog";

export const metadata = { title: "İndirimdekiler" };

export default function DiscountPage() {
  return (
    <Listing
      title="İndirimdekiler"
      products={getDiscountedProducts()}
      breadcrumb={[
        { href: "/", label: "Ana Sayfa" },
        { label: "İndirimdekiler" },
      ]}
    />
  );
}

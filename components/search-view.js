"use client";

import { useSearchParams } from "next/navigation";
import { searchProducts } from "@/lib/catalog";
import Listing from "@/components/listing";

export default function SearchView() {
  const params = useSearchParams();
  const query = params.get("q") || "";
  const results = searchProducts(query);

  return (
    <Listing
      key={query}
      title={query ? `“${query}” için sonuçlar` : "Arama"}
      products={results}
      showToolbar={Boolean(query)}
      emptyText={
        query ? "Aramanızla eşleşen ürün bulunamadı." : "Aramak için yukarıdaki alana bir kelime yazın."
      }
    />
  );
}

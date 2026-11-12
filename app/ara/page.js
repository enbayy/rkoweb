import { Suspense } from "react";
import SearchView from "@/components/search-view";

export const metadata = { title: "Arama" };

export default function SearchPage() {
  return (
    <Suspense fallback={<p className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-500">Aranıyor...</p>}>
      <SearchView />
    </Suspense>
  );
}

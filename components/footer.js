import Link from "next/link";
import { cacheLife } from "next/cache";
import { categories, quickLinks, STORE } from "@/lib/catalog";

async function CopyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-zinc-800">HIZLI ERİŞİM</h2>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-zinc-600 hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-zinc-800">KATEGORİLER</h2>
          <ul className="mt-3 space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/kategori/${category.slug}`} className="text-sm text-zinc-600 hover:text-brand">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-zinc-800">ADRES VE İLETİŞİM</h2>
          <a href={STORE.phoneHref} className="mt-3 block text-sm text-zinc-600 hover:text-brand">
            {STORE.phoneDisplay}
          </a>
          <p className="mt-2 text-sm text-zinc-600">KONYA / SELÇUKLU</p>
        </div>
      </div>

      <p className="border-t border-zinc-100 py-4 text-center text-xs text-zinc-400">
        © <CopyrightYear /> {STORE.name}. Tüm hakları {STORE.name}&apos;ya aittir.
      </p>
    </footer>
  );
}

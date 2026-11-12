"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/catalog";

export default function CategoryBar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Kategoriler" className="hidden border-t border-zinc-200 bg-white md:block">
      <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-4">
        {categories.map((category) => {
          const href = `/kategori/${category.slug}`;
          const active = pathname === href;
          return (
            <li key={category.slug}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`block border-b-2 py-3 text-[13px] font-medium tracking-wide whitespace-nowrap uppercase ${
                  active ? "border-brand text-brand" : "border-transparent text-zinc-700 hover:text-brand"
                }`}
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

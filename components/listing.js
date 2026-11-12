"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, getPriceBands, getPriceBounds, products as allProducts, sortProducts } from "@/lib/catalog";
import Breadcrumb from "@/components/breadcrumb";
import ProductCard from "@/components/product-card";

function formatRangePrice(value) {
  return `${new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value)} TL`;
}

function parseBound(value) {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const number = Number(trimmed);
  return Number.isFinite(number) ? number : null;
}

function FilterSection({ title, children, className = "" }) {
  const [open, setOpen] = useState(true);

  return (
    <section className={className}>
      <h2>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-3 border-b border-zinc-200 pb-2 text-left text-sm font-semibold text-zinc-800"
        >
          {title}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={`h-4 w-4 shrink-0 text-zinc-500 transition ${open ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </h2>
      {open ? children : null}
    </section>
  );
}

function CategoryFilters({
  activeSlug,
  bands,
  inStock,
  setInStock,
  onlyNew,
  setOnlyNew,
  onlyDiscount,
  setOnlyDiscount,
  draftMin,
  setDraftMin,
  draftMax,
  setDraftMax,
  selectedIndexes,
  onApplyPrice,
  onToggleBand,
}) {
  const counts = {};
  for (const category of categories) counts[category.slug] = 0;
  for (const product of allProducts) {
    if (counts[product.category] != null) counts[product.category] += 1;
  }

  const statuses = [
    { key: "stock", label: "Stoktakiler", checked: inStock, onChange: setInStock },
    { key: "new", label: "Yeni Ürünler", checked: onlyNew, onChange: setOnlyNew },
    { key: "discount", label: "İndirimli Ürünler", checked: onlyDiscount, onChange: setOnlyDiscount },
  ];

  return (
    <aside className="rounded-2xl bg-white p-5 shadow-sm">
      <FilterSection title="Kategori">
        <ul className="mt-2">
          {categories.map((category) => {
            const active = category.slug === activeSlug;
            return (
              <li key={category.slug}>
                <Link
                  href={`/kategori/${category.slug}`}
                  aria-current={active ? "page" : undefined}
                  className={`block py-1.5 text-sm ${
                    active ? "font-medium text-brand" : "text-zinc-600 hover:text-brand"
                  }`}
                >
                  {category.name} ({counts[category.slug]})
                </Link>
              </li>
            );
          })}
        </ul>
      </FilterSection>

      <FilterSection title="Ürün Durumu" className="mt-6">
        <div className="mt-3 space-y-2.5">
          {statuses.map((status) => (
            <label key={status.key} className="flex items-center gap-2 text-sm text-zinc-700">
              <input
                type="checkbox"
                checked={status.checked}
                onChange={(event) => status.onChange(event.target.checked)}
                className="accent-brand"
              />
              {status.label}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Fiyat Aralığı" className="mt-6">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onApplyPrice();
        }}
      >
        <div className="mt-3 grid grid-cols-2 gap-2">
          <input
            inputMode="numeric"
            aria-label="En düşük fiyat"
            value={draftMin}
            onChange={(event) => setDraftMin(event.target.value)}
            className="h-10 rounded-lg border border-transparent bg-zinc-100 px-3 text-sm outline-none focus:border-brand"
          />
          <input
            inputMode="numeric"
            aria-label="En yüksek fiyat"
            value={draftMax}
            onChange={(event) => setDraftMax(event.target.value)}
            className="h-10 rounded-lg border border-transparent bg-zinc-100 px-3 text-sm outline-none focus:border-brand"
          />
        </div>
        {bands.length ? (
          <ul className="mt-3 space-y-2.5">
            {bands.map((band, index) => (
              <li key={`${band.min}-${band.max}`}>
                <label className="flex items-center gap-2 text-sm text-zinc-700">
                  <input
                    type="checkbox"
                    checked={selectedIndexes.includes(index)}
                    onChange={() => onToggleBand(index)}
                    className="accent-brand"
                  />
                  {formatRangePrice(band.min)} - {formatRangePrice(band.max)}
                </label>
              </li>
            ))}
          </ul>
        ) : null}
        <button
          type="submit"
          className="mt-3 h-10 w-full rounded-lg bg-brand text-sm font-medium text-white hover:bg-brand-dark"
        >
          Filtrele
        </button>
      </form>
      </FilterSection>
    </aside>
  );
}

export default function Listing({ title, products, breadcrumb, emptyText, showToolbar = true, categorySlug }) {
  const [sort, setSort] = useState("default");
  const [inStock, setInStock] = useState(false);
  const [onlyNew, setOnlyNew] = useState(false);
  const [onlyDiscount, setOnlyDiscount] = useState(false);
  const [appliedMin, setAppliedMin] = useState(null);
  const [appliedMax, setAppliedMax] = useState(null);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const bands = useMemo(() => getPriceBands(products), [products]);
  const [draftMin, setDraftMin] = useState(() => (products.length ? String(getPriceBounds(products).min) : ""));
  const [draftMax, setDraftMax] = useState(() => (products.length ? String(getPriceBounds(products).max) : ""));

  const visible = useMemo(() => {
    const filtered = products.filter((product) => {
      if (inStock && product.stock <= 0) return false;
      if (onlyNew && !product.isNew) return false;
      if (onlyDiscount && !product.oldPrice) return false;
      if (selectedIndexes.length) {
        const matchesBand = selectedIndexes.some((index) => {
          const band = bands[index];
          return band && product.price >= band.min && product.price <= band.max;
        });
        if (!matchesBand) return false;
      } else {
        if (appliedMin != null && product.price < appliedMin) return false;
        if (appliedMax != null && product.price > appliedMax) return false;
      }
      return true;
    });
    return sortProducts(filtered, sort);
  }, [products, sort, inStock, onlyNew, onlyDiscount, appliedMin, appliedMax, selectedIndexes, bands]);

  function applyPrice() {
    let min = parseBound(draftMin);
    let max = parseBound(draftMax);
    if (min != null && max != null && min > max) {
      const swap = min;
      min = max;
      max = swap;
      setDraftMin(String(min));
      setDraftMax(String(max));
    }
    setSelectedIndexes([]);
    setAppliedMin(min);
    setAppliedMax(max);
  }

  function toggleBand(index) {
    setAppliedMin(null);
    setAppliedMax(null);
    setSelectedIndexes((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  }

  const gridClass = categorySlug
    ? "mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
    : "mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {breadcrumb ? <Breadcrumb items={breadcrumb} /> : null}
      <div className={categorySlug ? "mt-5 grid items-start gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]" : undefined}>
        {categorySlug ? (
          <CategoryFilters
            activeSlug={categorySlug}
            bands={bands}
            inStock={inStock}
            setInStock={setInStock}
            onlyNew={onlyNew}
            setOnlyNew={setOnlyNew}
            onlyDiscount={onlyDiscount}
            setOnlyDiscount={setOnlyDiscount}
            draftMin={draftMin}
            setDraftMin={setDraftMin}
            draftMax={draftMax}
            setDraftMax={setDraftMax}
            selectedIndexes={selectedIndexes}
            onApplyPrice={applyPrice}
            onToggleBand={toggleBand}
          />
        ) : null}

        <div>
          <h1 className={`text-2xl font-medium text-zinc-800 ${breadcrumb && !categorySlug ? "mt-3" : ""}`}>{title}</h1>
          <p className="mt-1 text-sm text-zinc-500">{visible.length} ürün</p>

          {showToolbar ? (
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
              <label className="flex items-center gap-3 text-sm text-zinc-600">
                <span>Sıralama</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  aria-label="Sıralama"
                  className="h-10 rounded-lg bg-zinc-100 px-3 outline-none"
                >
                  <option value="default">Varsayılan</option>
                  <option value="price-asc">Fiyat: artan</option>
                  <option value="price-desc">Fiyat: azalan</option>
                  <option value="name">İsme göre</option>
                </select>
              </label>
              {categorySlug ? null : (
                <label className="flex items-center gap-2 text-sm text-zinc-700">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(event) => setInStock(event.target.checked)}
                    className="accent-brand"
                  />
                  Stoktakiler
                </label>
              )}
            </div>
          ) : null}

          {visible.length ? (
            <div className={gridClass}>
              {visible.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-2xl bg-white px-4 py-10 text-center text-sm text-zinc-500">
              {emptyText || "Bu görünümde ürün yok."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

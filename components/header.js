"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { categories, productImage, productTitle, quickLinks, searchProducts, STORE } from "@/lib/catalog";
import { useShop } from "@/components/shop-context";
import { CartIcon, CloseIcon, MenuIcon } from "@/components/icons";

function SearchForm({ className = "" }) {
  const router = useRouter();
  const pathname = usePathname();
  const listId = useId();
  const boxRef = useRef(null);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  const query = value.trim();
  const results = useMemo(() => (query ? searchProducts(query).slice(0, 6) : []), [query]);
  const show = open && query.length > 0;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onPointerDown(event) {
      if (!boxRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function goToSearch() {
    setOpen(false);
    router.push(query ? `/ara?q=${encodeURIComponent(query)}` : "/ara");
  }

  function onSubmit(event) {
    event.preventDefault();
    if (active >= 0 && results[active]) {
      setOpen(false);
      router.push(`/urun/${results[active].slug}`);
      return;
    }
    goToSearch();
  }

  function onKeyDown(event) {
    if (!show) {
      if (event.key === "Escape") setOpen(false);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => (results.length ? (index + 1) % results.length : -1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => (results.length ? (index <= 0 ? results.length - 1 : index - 1) : -1));
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <form onSubmit={onSubmit} ref={boxRef} className={`relative flex gap-2 ${className}`}>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setOpen(true);
          setActive(-1);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        placeholder="Ara"
        aria-label="Ara"
        role="combobox"
        aria-expanded={show}
        aria-controls={listId}
        aria-autocomplete="list"
        autoComplete="off"
        className="h-11 w-full rounded-lg border border-transparent bg-zinc-100 px-4 text-sm outline-none focus:border-brand"
      />
      <button
        type="submit"
        className="h-11 shrink-0 rounded-lg bg-brand px-5 text-sm font-medium text-white hover:bg-brand-dark"
      >
        Ara
      </button>

      {show ? (
        <div className="absolute top-full right-0 left-0 z-50 mt-2 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-zinc-500">Eşleşen ürün bulunamadı.</p>
          ) : (
            <ul id={listId} role="listbox" className="max-h-80 overflow-y-auto">
              {results.map((product, index) => (
                <li key={product.slug} role="option" aria-selected={index === active}>
                  <Link
                    href={`/urun/${product.slug}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 ${
                      index === active ? "bg-zinc-50" : "hover:bg-zinc-50"
                    }`}
                  >
                    <img
                      src={productImage(product.image, 200)}
                      alt=""
                      className="h-12 w-12 shrink-0 rounded-lg bg-zinc-50 object-contain"
                    />
                    <span className="line-clamp-2 text-sm text-zinc-800">{productTitle(product.name)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={goToSearch}
            className="w-full border-t border-zinc-100 px-4 py-2.5 text-left text-sm font-medium text-brand hover:bg-zinc-50"
          >
            Tüm sonuçları gör
          </button>
        </div>
      ) : null}
    </form>
  );
}

function MenuDrawer({ onClose }) {
  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose();
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button type="button" className="absolute inset-0 bg-black/40" aria-label="Menüyü kapat" onClick={onClose} />
      <div className="absolute inset-y-0 left-0 flex w-72 max-w-[85%] flex-col bg-white p-5 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold tracking-wide text-zinc-800">MENÜ</p>
          <button type="button" onClick={onClose} aria-label="Kapat" className="rounded-full p-2 hover:bg-zinc-100">
            <CloseIcon />
          </button>
        </div>
        <p className="mb-2 text-xs font-semibold tracking-wide text-zinc-400">KATEGORİLER</p>
        <nav className="flex flex-col">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/kategori/${category.slug}`}
              onClick={onClose}
              className="border-b border-zinc-100 py-3 text-sm text-zinc-700"
            >
              {category.name}
            </Link>
          ))}
        </nav>
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wide text-zinc-400">HIZLI ERİŞİM</p>
        <nav className="flex flex-col">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={onClose} className="py-2 text-sm text-zinc-700">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default function Header() {
  const { count, favorites } = useShop();
  const [open, setOpen] = useState(false);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header className="relative z-40 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-4 md:flex">
        <button
          type="button"
          className="rounded-full p-2 text-zinc-700 hover:bg-zinc-100 md:hidden"
          aria-label="Menüyü aç"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>

        <Link href="/" className="flex flex-col items-center justify-self-center md:items-start md:justify-self-auto">
          <Image
            src="/rko-logo.png"
            alt={STORE.name}
            width={917}
            height={351}
            preload
            className="h-9 w-auto sm:h-11"
          />
          <span className="font-script text-lg leading-none text-zinc-500">{STORE.tagline}</span>
        </Link>

        <div className="flex items-center gap-2 justify-self-end md:ml-auto md:gap-4">
          <SearchForm className="hidden w-80 lg:flex" />
          <Link href="/favoriler" className="flex items-center gap-2 rounded-full p-2 text-sm text-zinc-700 hover:bg-zinc-100">
            <span>Favorilerim</span>
            {favorites.length > 0 ? (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[11px] font-semibold text-white">
                {favorites.length}
              </span>
            ) : null}
          </Link>
          <Link href="/sepet" className="relative flex items-center gap-2 rounded-full p-2 text-sm text-zinc-700 hover:bg-zinc-100">
            <CartIcon />
            <span className="hidden sm:inline">Sepetim</span>
            {count > 0 ? (
              <span className="absolute -top-0.5 right-0 grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[11px] font-semibold text-white sm:static">
                {count}
              </span>
            ) : null}
          </Link>
        </div>
      </div>

      <div className="px-4 pb-4 lg:hidden">
        <SearchForm />
      </div>

      {open ? <MenuDrawer onClose={closeMenu} /> : null}
    </header>
  );
}

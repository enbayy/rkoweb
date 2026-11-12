"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

const CART_KEY = "rko-cart";
const CART_EVENT = "rko-cart-change";
const FAVORITES_KEY = "rko-favorites";
const FAVORITES_EVENT = "rko-favorites-change";

const ShopContext = createContext(null);

function subscribe(eventName) {
  return (callback) => {
    window.addEventListener(eventName, callback);
    window.addEventListener("storage", callback);
    return () => {
      window.removeEventListener(eventName, callback);
      window.removeEventListener("storage", callback);
    };
  };
}

function read(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function write(key, value, eventName) {
  localStorage.setItem(key, value);
  window.dispatchEvent(new Event(eventName));
}

function parseCart(raw) {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function parseFavorites(raw) {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((slug) => typeof slug === "string") : [];
  } catch {
    return [];
  }
}

export function ShopProvider({ children }) {
  const cartRaw = useSyncExternalStore(
    subscribe(CART_EVENT),
    () => read(CART_KEY, "[]"),
    () => "[]",
  );

  const favoritesRaw = useSyncExternalStore(
    subscribe(FAVORITES_EVENT),
    () => read(FAVORITES_KEY, "[]"),
    () => "[]",
  );

  const items = useMemo(() => parseCart(cartRaw), [cartRaw]);
  const favorites = useMemo(() => parseFavorites(favoritesRaw), [favoritesRaw]);

  const addItem = useCallback((product, quantity = 1, note = "") => {
    const list = parseCart(read(CART_KEY, "[]"));
    const existing = list.find((item) => item.slug === product.slug);
    const next = existing
      ? list.map((item) =>
          item.slug === product.slug
            ? {
                ...item,
                quantity: Math.min(item.quantity + quantity, product.stock),
                note: note || item.note,
              }
            : item,
        )
      : [
          ...list,
          {
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.image,
            stock: product.stock,
            quantity,
            note,
          },
        ];
    write(CART_KEY, JSON.stringify(next), CART_EVENT);
  }, []);

  const updateQuantity = useCallback((slug, quantity) => {
    const list = parseCart(read(CART_KEY, "[]"));
    const next = list.map((item) =>
      item.slug === slug
        ? { ...item, quantity: Math.max(1, Math.min(quantity, item.stock || 99)) }
        : item,
    );
    write(CART_KEY, JSON.stringify(next), CART_EVENT);
  }, []);

  const removeItem = useCallback((slug) => {
    const list = parseCart(read(CART_KEY, "[]"));
    write(
      CART_KEY,
      JSON.stringify(list.filter((item) => item.slug !== slug)),
      CART_EVENT,
    );
  }, []);

  const clearCart = useCallback(() => {
    write(CART_KEY, "[]", CART_EVENT);
  }, []);

  const toggleFavorite = useCallback((slug) => {
    const list = parseFavorites(read(FAVORITES_KEY, "[]"));
    const next = list.includes(slug) ? list.filter((item) => item !== slug) : [...list, slug];
    write(FAVORITES_KEY, JSON.stringify(next), FAVORITES_EVENT);
  }, []);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      favorites,
      toggleFavorite,
    }),
    [items, count, subtotal, addItem, updateQuantity, removeItem, clearCart, favorites, toggleFavorite],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop yalnızca mağaza düzeninde kullanılabilir.");
  }
  return context;
}

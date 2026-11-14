export const STORE = {
  name: "RKO",
  tagline: "alışveriş burada",
  phoneDisplay: "0538 918 2997",
  phoneHref: "tel:+905389182997",
  whatsapp: "905389182997",
  address: "Örnek Mahallesi, Demo Sokak No: 1, İstanbul",
  freeShippingLimit: 1500,
  shippingFee: 99,
};

export const announcements = [
  "1500 TL ve üzeri alışverişlerde kargo bedava",
  "Kargo ücreti 110 TL",
  "Siparişler 1-3 iş günü içinde hazırlanır",
];

export const categories = [
  { slug: "kart-oyunlari", name: "Kart Oyunları" },
  { slug: "konsept-hediyelik", name: "Konsept Hediyelik" },
  { slug: "egitici-oyuncak", name: "Eğitici Oyun" },
  { slug: "anahtarliklar", name: "Anahtarlıklar" },
  { slug: "3d-figurler", name: "3D Figürler" },
];

const drafts = [
  {
    slug: "tek-dilek-hakki",
    name: "Tek Dilek Hakkı | Gizemli Konsept Hediyelik Ürün | Arkadaş Hediyesi | Koleksiyonluk Dilek Çubuğu | Sevgiliye Hediye | Obsession Filmi Hediyelik Ürün",
    category: "konsept-hediyelik",
    price: 74.99,
    oldPrice: null,
    images: [
      "/urunler/tek-dilek-hakki/1.webp",
      "/urunler/tek-dilek-hakki/2.webp",
      "/urunler/tek-dilek-hakki/3.webp",
      "/urunler/tek-dilek-hakki/4.webp",
    ],
  },
  {
    slug: "ok-nok-kutu-oyunu",
    name: "OK NOK Kutu Oyunu – Arkadaş Ortamı Soru Cevap Kart Oyunu | Eğlenceli Parti Oyunu | 2-8 Kişilik Yetişkin Masa Oyunu | 180 Sorulu Sohbet Oyunu | Sevgililer İçin İlişki Soruları",
    category: "kart-oyunlari",
    price: 199,
    oldPrice: null,
    images: [
      "/urunler/ok-nok-kutu-oyunu/1.webp",
      "/urunler/ok-nok-kutu-oyunu/2.webp",
      "/urunler/ok-nok-kutu-oyunu/3.webp",
      "/urunler/ok-nok-kutu-oyunu/4.webp",
      "/urunler/ok-nok-kutu-oyunu/5.webp",
      "/urunler/ok-nok-kutu-oyunu/6.webp",
    ],
  },
  {
    slug: "red-flag-vs-green-flag",
    name: "RED FLAG vs GREEN FLAG Kart Oyunu | Flört, İlişki ve Arkadaş Ortamı İçin 150 Eğlenceli Soru | Parti Kutu Oyunu",
    category: "kart-oyunlari",
    price: 199.99,
    oldPrice: null,
    images: [
      "/urunler/red-flag-vs-green-flag/1.webp",
      "/urunler/red-flag-vs-green-flag/2.webp",
      "/urunler/red-flag-vs-green-flag/3.webp",
      "/urunler/red-flag-vs-green-flag/4.webp",
      "/urunler/red-flag-vs-green-flag/5.webp",
      "/urunler/red-flag-vs-green-flag/6.webp",
      "/urunler/red-flag-vs-green-flag/7.webp",
    ],
  },
  {
    slug: "kizlar-gecesi",
    name: "Kızlar Gecesi Kutu Oyunu | Kız Kıza Eğlence ve Parti Oyunu | 180 Görev | İtiraf Et - Risk Al - Şımar | +15 Yaş",
    category: "kart-oyunlari",
    price: 199,
    oldPrice: null,
    images: [
      "/urunler/kizlar-gecesi/1.webp",
      "/urunler/kizlar-gecesi/2.webp",
      "/urunler/kizlar-gecesi/3.webp",
      "/urunler/kizlar-gecesi/4.webp",
      "/urunler/kizlar-gecesi/5.webp",
      "/urunler/kizlar-gecesi/6.webp",
    ],
  },
  {
    slug: "one-wish-willow",
    name: "One Wish Willow Dilek Çubuğu - Tek Dilek Hakkı | Eğlenceli Hediyelik Sevgiliye Hediye - Obsession Filmi Dilek Çubuğu",
    category: "konsept-hediyelik",
    price: 142,
    oldPrice: 149,
    images: [
      "/urunler/one-wish-willow/1.webp",
      "/urunler/one-wish-willow/2.webp",
      "/urunler/one-wish-willow/3.webp",
      "/urunler/one-wish-willow/4.webp",
    ],
  },
  {
    slug: "askim-sen-soyle",
    name: "Aşkım Sen Söyle | Sevgililer İçin Kart Oyunu | Konuşma Kartları | Sevgililer Günü Kart Oyunu",
    category: "kart-oyunlari",
    price: 199,
    oldPrice: null,
    images: [
      "/urunler/askim-sen-soyle/1.webp",
      "/urunler/askim-sen-soyle/2.webp",
      "/urunler/askim-sen-soyle/3.webp",
      "/urunler/askim-sen-soyle/4.webp",
      "/urunler/askim-sen-soyle/5.webp",
      "/urunler/askim-sen-soyle/6.webp",
    ],
  },
  {
    slug: "sevgili-quizi",
    name: "Sevgili Quizı Çift Oyunu – Sevgililer İçin Eğlenceli Soru Cevap Oyunu, Sevgili Testi, Çiftler İçin Romantik Oyun",
    category: "kart-oyunlari",
    price: 199,
    oldPrice: null,
    images: [
      "/urunler/sevgili-quizi/1.webp",
      "/urunler/sevgili-quizi/2.webp",
      "/urunler/sevgili-quizi/3.webp",
      "/urunler/sevgili-quizi/4.webp",
      "/urunler/sevgili-quizi/5.webp",
    ],
  },
  {
    slug: "ayni-hayal",
    name: "Aynı Hayal Sevgili Çift Oyunu – Çiftlere Özel Romantik Çizim ve Hayal Oyunu, Sevgili Hediyesi",
    category: "kart-oyunlari",
    price: 196.38,
    oldPrice: null,
    images: [
      "/urunler/ayni-hayal/1.webp",
      "/urunler/ayni-hayal/2.webp",
      "/urunler/ayni-hayal/3.webp",
      "/urunler/ayni-hayal/4.webp",
      "/urunler/ayni-hayal/5.webp",
      "/urunler/ayni-hayal/6.webp",
    ],
  },
  {
    slug: "grubun-enleri",
    name: "Grubun Enleri Kart Oyunu | 3-8 Kişilik Eğlenceli Parti Oyunu | Eğlenceli Kutu Oyunu | Arkadaş Ortamı ve Ev Partisi Oyunu (+15)",
    category: "kart-oyunlari",
    price: 279,
    oldPrice: null,
    images: [
      "/urunler/grubun-enleri/1.webp",
      "/urunler/grubun-enleri/2.webp",
      "/urunler/grubun-enleri/3.webp",
      "/urunler/grubun-enleri/4.webp",
      "/urunler/grubun-enleri/5.webp",
      "/urunler/grubun-enleri/6.webp",
      "/urunler/grubun-enleri/7.webp",
    ],
  },
  {
    slug: "whos-most-likely",
    name: "Who’s Most Likely? – Eğlenceli İngilizce Parti Oyunu, İngilizce Soru Cevap Kutu Oyunu, 150 Soruluk Kart Oyunu, A2+ Ve Üzeri İçin Keyifli Sohbet Oyunu",
    category: "kart-oyunlari",
    price: 199,
    oldPrice: null,
    images: [
      "/urunler/whos-most-likely/1.webp",
      "/urunler/whos-most-likely/2.webp",
      "/urunler/whos-most-likely/3.webp",
      "/urunler/whos-most-likely/4.webp",
      "/urunler/whos-most-likely/5.webp",
    ],
  },
  {
    slug: "canavari-bul",
    name: "Canavarı Bul! Çocuk Dikkat ve Zeka Oyunu | Eğitici Kutu Oyunu | Aile Oyunu | 4+ Yaş",
    category: "egitici-oyuncak",
    price: 199,
    oldPrice: null,
    images: [
      "/urunler/canavari-bul/1.webp",
      "/urunler/canavari-bul/2.webp",
      "/urunler/canavari-bul/3.webp",
      "/urunler/canavari-bul/4.webp",
      "/urunler/canavari-bul/5.webp",
      "/urunler/canavari-bul/6.webp",
    ],
  },
];

export const products = drafts.map((item) => {
  const parts = item.name
    .split(/\s*[|–]\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
  return {
    ...item,
    image: item.images[0],
    isNew: true,
    stock: 20,
    description: parts.slice(1).join(" · ") || item.name,
    features: parts.length > 1 ? parts.slice(1) : [item.name],
  };
});

export const infoPages = [
  {
    slug: "teslimat-kosullari",
    title: "Teslimat Koşulları",
    paragraphs: [
      "Siparişler hazırlık süresinin ardından kargoya verilir. Bu sayfa, teslimat koşulları ekranının yerini göstermek için yazılmıştır.",
      "1500 TL ve üzeri alışverişlerde kargo ücretsizdir. Bu tutarın altındaki siparişlerde kargo bedeli 99 TL olarak sepete eklenir.",
      "Teslimat adresi, ödeme için WhatsApp üzerinden iletişime geçildiğinde alınır.",
    ],
  },
  {
    slug: "satis-sozlesmesi",
    title: "Satış Sözleşmesi",
    paragraphs: [
      "Bu metin, satış sözleşmesi sayfasının yerini göstermek için yazılmıştır. Gerçek bir sözleşme değildir.",
      "Ödeme sitede alınmaz. Sepetten WhatsApp ile iletişime geçilerek tamamlanır.",
    ],
  },
  {
    slug: "garanti-ve-iade",
    title: "Garanti ve İade Koşulları",
    paragraphs: [
      "Garanti ve iade sayfası örnek yerleşimdir. Buradan gerçek bir iade talebi başlatılmaz.",
      "Ürün sayfasındaki iade sekmesi bu sayfaya bağlanır.",
    ],
  },
  {
    slug: "gizlilik-ve-guvenlik",
    title: "Gizlilik ve Güvenlik",
    paragraphs: [
      "Sepet ve favoriler tarayıcınızın yerel depolama alanında durur.",
      "Kart bilgisi sitede istenmez. Ödeme WhatsApp üzerinden yapılır.",
    ],
  },
];

export const quickLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/yeni-urunler", label: "Yeni Ürünler" },
  { href: "/indirimdekiler", label: "İndirimdekiler" },
  { href: "/favoriler", label: "Favorilerim" },
  { href: "/sepet", label: "Sepetim" },
];

export function formatPrice(value) {
  return `${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)} TL`;
}

export function getCategory(slug) {
  return categories.find((item) => item.slug === slug) || null;
}

export function getProduct(slug) {
  return products.find((item) => item.slug === slug) || null;
}

export function getProductsByCategory(slug) {
  return products.filter((item) => item.category === slug);
}

export function getNewProducts() {
  return products.filter((item) => item.isNew);
}

export function getDiscountedProducts() {
  return products.filter((item) => item.oldPrice);
}

export function getRelatedProducts(product) {
  const others = products.filter((item) => item.slug !== product.slug);
  const same = others.filter((item) => item.category === product.category);
  const rest = others.filter((item) => item.category !== product.category);
  return [...same, ...rest].slice(0, 4);
}

export function productTitle(name) {
  return name.split(/\s*[|–]\s*/)[0] || name;
}

export function searchProducts(query) {
  const needle = query.trim().toLocaleLowerCase("tr");
  if (!needle) return [];
  return products.filter((product) =>
    productTitle(product.name).toLocaleLowerCase("tr").includes(needle),
  );
}

export function sortProducts(list, sort) {
  const copy = [...list];
  if (sort === "price-asc") copy.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") copy.sort((a, b) => b.price - a.price);
  else if (sort === "name") copy.sort((a, b) => a.name.localeCompare(b.name, "tr"));
  return copy;
}

export function getPriceBounds(list) {
  if (!list.length) return { min: 0, max: 0 };
  const prices = list.map((item) => item.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

export function getPriceBands(list, steps = 5) {
  if (!list.length) return [];
  const { min, max } = getPriceBounds(list);
  if (min === max) return [{ min, max }];

  const step = (max - min) / steps;
  const edges = [min];
  for (let index = 1; index < steps; index += 1) edges.push(Math.round(min + step * index));
  edges.push(max);

  const bands = [];
  for (let index = 0; index < edges.length - 1; index += 1) {
    const start = edges[index];
    const end = edges[index + 1];
    if (end <= start) continue;
    bands.push({ min: start, max: end });
  }
  return bands;
}

export function shippingCost(subtotal) {
  if (subtotal <= 0 || subtotal >= STORE.freeShippingLimit) return 0;
  return STORE.shippingFee;
}

export function getInfoPage(slug) {
  return infoPages.find((page) => page.slug === slug) || null;
}

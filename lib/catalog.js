export const STORE = {
  name: "RKO",
  tagline: "alışveriş burada",
  phoneDisplay: "0538 918 2997",
  phoneHref: "tel:+905389182997",
  whatsapp: "905389182997",
  email: "destek@rko.example",
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
      "https://cdn.dsmcdn.com/ty1973/prod/QC_ENRICHMENT/20261005/21/ead10c3f-c482-309a-9c37-d5968fc3ab39/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1942/prod/QC_ENRICHMENT/20260623/13/2445d66c-a4e4-37ac-9c12-ff0ca370e1dc/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1934/prod/QC_ENRICHMENT/20260623/13/7a6907ac-7c1d-3b5c-8675-e4cffc0cdaaa/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1915/prod/QC_PREP/20260611/01/5005849c-1a36-3001-acf6-5f32962e99ac/1_org_zoom.jpg",
    ],
  },
  {
    slug: "ok-nok-kutu-oyunu",
    name: "OK NOK Kutu Oyunu – Arkadaş Ortamı Soru Cevap Kart Oyunu | Eğlenceli Parti Oyunu | 2-8 Kişilik Yetişkin Masa Oyunu | 180 Sorulu Sohbet Oyunu | Sevgililer İçin İlişki Soruları",
    category: "kart-oyunlari",
    price: 199,
    oldPrice: null,
    images: [
      "https://cdn.dsmcdn.com/ty1973/prod/QC_ENRICHMENT/20261005/21/888e9348-906a-33a2-8db6-5e65a94962d1/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1895/prod/QC_PREP/20260510/01/340f6b59-ad02-3b7d-8201-04d3e9dbf7de/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1937/prod/QC_PREP/20260510/01/1d1b9732-074c-3c3f-aff9-b6b5e009a160/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1940/prod/QC_PREP/20260510/01/71e594db-1050-361a-8561-7902be906248/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1892/prod/QC_PREP/20260510/01/7f572f1b-3eb1-3b81-8cdd-f173a29afeb7/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1920/prod/QC_PREP/20260510/01/fc3d30fd-f5a3-3579-8c5f-5e9d3c75b802/1_org_zoom.jpg",
    ],
  },
  {
    slug: "red-flag-vs-green-flag",
    name: "RED FLAG vs GREEN FLAG Kart Oyunu | Flört, İlişki ve Arkadaş Ortamı İçin 150 Eğlenceli Soru | Parti Kutu Oyunu",
    category: "kart-oyunlari",
    price: 199.99,
    oldPrice: null,
    images: [
      "https://cdn.dsmcdn.com/ty1971/prod/QC_ENRICHMENT/20261005/21/01dbb74a-dcf1-3a1a-be49-5ec69e7c327f/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1917/prod/QC_PREP/20260723/01/953275f0-fa16-3d25-b634-4abefb92104e/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1934/prod/QC_PREP/20260723/01/286465a4-3e9f-3012-9150-fd68db8351b9/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1942/prod/QC_PREP/20260723/01/dcc10621-4ece-3e74-8282-eb0e48fbc5b2/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1918/prod/QC_PREP/20260723/01/f3cf6e53-d2aa-3d24-9418-ab4687a99ed8/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1933/prod/QC_PREP/20260723/01/e20f35c0-ce89-3317-918c-a0922d34ae54/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1918/prod/QC_PREP/20260723/01/9cd83cb5-29e0-384f-8f14-7fc37c32d820/1_org_zoom.jpg",
    ],
  },
  {
    slug: "kizlar-gecesi",
    name: "Kızlar Gecesi Kutu Oyunu | Kız Kıza Eğlence ve Parti Oyunu | 180 Görev | İtiraf Et - Risk Al - Şımar | +15 Yaş",
    category: "kart-oyunlari",
    price: 199,
    oldPrice: null,
    images: [
      "https://cdn.dsmcdn.com/ty1962/prod/QC_PREP/20260924/01/5c14b586-b00a-399e-a387-a1e031a62046/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1964/prod/QC_PREP/20260924/01/5ea93fc7-7ec7-38d5-b803-2b4082cad8ba/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1963/prod/QC_PREP/20260924/01/b2ce1dda-aee9-320c-9d1c-9f10ccb6955f/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1964/prod/QC_PREP/20260924/01/7fdd4c19-6237-37fa-8625-affad938e7fb/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1964/prod/QC_PREP/20260924/01/2f43d27b-8134-34bd-83e7-58a0ae8d229e/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1962/prod/QC_PREP/20260924/01/b0cf9a1d-d664-324b-b71f-a641a5f9140d/1_org_zoom.jpg",
    ],
  },
  {
    slug: "one-wish-willow",
    name: "One Wish Willow Dilek Çubuğu - Tek Dilek Hakkı | Eğlenceli Hediyelik Sevgiliye Hediye - Obsession Filmi Dilek Çubuğu",
    category: "konsept-hediyelik",
    price: 142,
    oldPrice: 149,
    images: [
      "https://cdn.dsmcdn.com/ty1971/prod/QC_ENRICHMENT/20261005/21/64f95932-3aeb-3f83-8a65-6d2d10713640/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1906/prod/QC_PREP/20260703/15/92a8f180-acd4-3af1-8a1b-0e67005f6f3b/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1942/prod/QC_PREP/20260703/15/e9a6e0ba-398a-3f2b-8ca1-96915ae1f523/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1930/prod/QC_PREP/20260703/15/abec0ac6-0089-3ad2-bfdb-876fe587aad7/1_org_zoom.jpg",
    ],
  },
  {
    slug: "askim-sen-soyle",
    name: "Aşkım Sen Söyle | Sevgililer İçin Kart Oyunu | Konuşma Kartları | Sevgililer Günü Kart Oyunu",
    category: "kart-oyunlari",
    price: 199,
    oldPrice: null,
    images: [
      "https://cdn.dsmcdn.com/ty1934/prod/QC_ENRICHMENT/20260801/16/6fb619b7-0b5b-31fe-b7aa-7ba49c933493/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1896/prod/QC_ENRICHMENT/20260723/19/dadd4774-1de3-3248-839a-01f9dc7ed377/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1824/prod/QC_PREP/20260213/08/540373c1-6c1e-368f-ab87-4760a3941f1b/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1826/prod/QC_PREP/20260213/08/b87b1949-c499-3c72-a941-7e76e86ea0d0/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1825/prod/QC_ENRICHMENT/20260213/16/a5629d01-37dd-3e84-b913-7a25d25835f0/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1826/prod/QC_ENRICHMENT/20260213/15/ebc91eb9-4136-39f2-8907-c4a1d01b421f/1_org_zoom.jpg",
    ],
  },
  {
    slug: "sevgili-quizi",
    name: "Sevgili Quizı Çift Oyunu – Sevgililer İçin Eğlenceli Soru Cevap Oyunu, Sevgili Testi, Çiftler İçin Romantik Oyun",
    category: "kart-oyunlari",
    price: 199,
    oldPrice: null,
    images: [
      "https://cdn.dsmcdn.com/ty1944/prod/QC_PREP/20260818/00/f4df1c1c-8ba6-3f17-a1a7-f5be3d935c6e/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1945/prod/QC_PREP/20260818/00/7fb22ba7-1f9e-3b7c-a994-ab2acc847f41/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1944/prod/QC_PREP/20260818/00/1ab88917-69b8-3703-8668-a6e88d9ee667/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1946/prod/QC_PREP/20260818/00/6b7ed700-c5fd-3cde-985b-ea8919db7141/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1945/prod/QC_PREP/20260818/00/00c5a13c-fd93-3afc-9388-f4dc018fa111/1_org_zoom.jpg",
    ],
  },
  {
    slug: "ayni-hayal",
    name: "Aynı Hayal Sevgili Çift Oyunu – Çiftlere Özel Romantik Çizim ve Hayal Oyunu, Sevgili Hediyesi",
    category: "kart-oyunlari",
    price: 196.38,
    oldPrice: null,
    images: [
      "https://cdn.dsmcdn.com/ty1945/prod/QC_PREP/20260818/00/471cbd15-f750-33fc-a6eb-e300ed287915/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1946/prod/QC_PREP/20260818/00/0e8b97d0-7425-3952-92b6-c4b4e7792f3d/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1944/prod/QC_PREP/20260818/00/8a08b2d0-b142-37c3-ac3a-4d45ef1457a7/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1944/prod/QC_PREP/20260818/00/cc32cf9b-4871-31b9-95c0-1dd7b58ae215/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1945/prod/QC_PREP/20260818/00/95e42450-2eea-391c-bfe1-2ea5b16d1c99/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1946/prod/QC_PREP/20260818/00/93dea7ac-1e53-38f8-9722-72d7aa256cbc/1_org_zoom.jpg",
    ],
  },
  {
    slug: "grubun-enleri",
    name: "Grubun Enleri Kart Oyunu | 3-8 Kişilik Eğlenceli Parti Oyunu | Eğlenceli Kutu Oyunu | Arkadaş Ortamı ve Ev Partisi Oyunu (+15)",
    category: "kart-oyunlari",
    price: 279,
    oldPrice: null,
    images: [
      "https://cdn.dsmcdn.com/ty1915/prod/QC_PREP/20260723/20/ec96e404-aaa4-364f-8a8a-4ee067979bac/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1896/prod/QC_PREP/20260723/20/205a42cd-73fc-3610-b1d1-a8bf989d221f/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1893/prod/QC_PREP/20260723/20/dd1433f3-353e-3572-b1da-1cd709a4e7da/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1914/prod/QC_PREP/20260723/20/9342e263-1661-3cac-984f-713b0c21fbd3/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1931/prod/QC_PREP/20260723/20/af40a2c3-e854-3aaf-af6b-84fedf3de911/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1930/prod/QC_PREP/20260723/20/8b9aacdb-f5d1-397b-803f-2a9bedb48175/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1937/prod/QC_PREP/20260723/20/3cae61f0-8a01-3065-90ef-1b89bd3c1dcd/1_org_zoom.jpg",
    ],
  },
  {
    slug: "whos-most-likely",
    name: "Who’s Most Likely? – Eğlenceli İngilizce Parti Oyunu, İngilizce Soru Cevap Kutu Oyunu, 150 Soruluk Kart Oyunu, A2+ Ve Üzeri İçin Keyifli Sohbet Oyunu",
    category: "kart-oyunlari",
    price: 199,
    oldPrice: null,
    images: [
      "https://cdn.dsmcdn.com/ty1945/prod/QC_PREP/20260818/00/e14234a1-723d-30ce-bd9e-a793f75d518e/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1946/prod/QC_PREP/20260818/00/c2a526b1-7c84-3a3f-8b07-1b6d58f5165e/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1945/prod/QC_PREP/20260818/00/893fded3-9efe-33a2-b493-589be4b6f9b5/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1945/prod/QC_PREP/20260818/00/afc4f36b-8506-37f8-b5cb-7f63525c1bb6/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1945/prod/QC_PREP/20260818/00/af1234ba-aad7-3c7b-8efd-0f730e20604a/1_org_zoom.jpg",
    ],
  },
  {
    slug: "canavari-bul",
    name: "Canavarı Bul! Çocuk Dikkat ve Zeka Oyunu | Eğitici Kutu Oyunu | Aile Oyunu | 4+ Yaş",
    category: "egitici-oyuncak",
    price: 199,
    oldPrice: null,
    images: [
      "https://cdn.dsmcdn.com/ty1962/prod/QC_ENRICHMENT/20260925/21/6a028572-111a-3b5b-866c-79eb81dbdd45/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1962/prod/QC_PREP/20260922/23/434ccb10-57df-3615-9a02-26a8d43adabe/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1962/prod/QC_PREP/20260922/23/1ccef214-6e37-37be-98dc-434dfb50bb8e/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1964/prod/QC_PREP/20260922/23/5a3e2a95-5344-3a76-97c5-c701b890d286/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1964/prod/QC_PREP/20260922/23/dcdb8e31-eb32-3f3e-9c82-e187e2aa8425/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1964/prod/QC_PREP/20260922/23/370a9ffe-9155-3d73-8221-93e43610f48a/1_org_zoom.jpg",
    ],
  },
];

export function productImage(url, width) {
  if (!url) return url;
  const original = url.replace(/\/mnresize\/[^/]+\/[^/]+\//, "/");
  if (!width) return original;
  return original.replace("https://cdn.dsmcdn.com/", `https://cdn.dsmcdn.com/mnresize/${width}/-/`);
}

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

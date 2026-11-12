import { Caveat, Geist } from "next/font/google";
import SiteShell from "@/components/site-shell";
import { ShopProvider } from "@/components/shop-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  title: {
    default: "RKO",
    template: "%s | RKO",
  },
  description: "RKO mağaza ürünleri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${caveat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <ShopProvider>
          <SiteShell>{children}</SiteShell>
        </ShopProvider>
      </body>
    </html>
  );
}

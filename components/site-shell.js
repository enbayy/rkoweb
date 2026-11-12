import AnnouncementBar from "@/components/announcement-bar";
import CategoryBar from "@/components/category-bar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import WhatsAppButton from "@/components/whatsapp-button";

export default function SiteShell({ children }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <CategoryBar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

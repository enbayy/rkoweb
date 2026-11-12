import { WhatsAppIcon } from "@/components/icons";
import { STORE } from "@/lib/catalog";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${STORE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed right-4 bottom-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#1ebe57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E] sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon />
    </a>
  );
}

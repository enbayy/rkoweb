import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-2xl font-medium text-zinc-800">Sayfa bulunamadı</h1>
      <p className="mt-3 text-sm text-zinc-500">Aradığınız sayfa bu örnek sitede yok.</p>
      <Link href="/" className="mt-6 inline-flex text-sm text-brand hover:underline">
        Ana sayfaya dön
      </Link>
    </div>
  );
}

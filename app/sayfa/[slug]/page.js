import { notFound } from "next/navigation";
import { getInfoPage, infoPages } from "@/lib/catalog";

export function generateStaticParams() {
  return infoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getInfoPage(slug);
  return { title: page ? page.title : "Bilgi" };
}

export default async function InfoPage({ params }) {
  const { slug } = await params;
  const page = getInfoPage(slug);
  if (!page) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-medium text-zinc-800">{page.title}</h1>
      <div className="mt-5 space-y-4 rounded-2xl bg-white p-6 text-sm leading-7 text-zinc-600 shadow-sm">
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

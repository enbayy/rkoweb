import Link from "next/link";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Sayfa yolu" className="text-sm text-zinc-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href ? (
                <Link href={item.href} className="hover:text-brand">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "text-zinc-700" : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

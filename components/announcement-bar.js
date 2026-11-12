import { announcements } from "@/lib/catalog";
import { SparkIcon } from "@/components/icons";

export default function AnnouncementBar() {
  const loop = [...announcements, ...announcements];

  return (
    <div className="ticker w-full overflow-hidden bg-black text-white" aria-label="Duyurular">
      <div className="ticker-track flex w-max">
        {loop.map((text, index) => (
          <span
            key={`${text}-${index}`}
            className="flex cursor-default items-center gap-3 px-8 py-2 text-sm whitespace-nowrap no-underline"
            aria-hidden={index >= announcements.length}
          >
            <SparkIcon />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowUpRight, BookOpenCheck, Clock3 } from "lucide-react";
import type { ChapterNavItem } from "@/content/chapters/types";
import { chapterIcons } from "./icons";

type ChapterCardProps = {
  chapter: ChapterNavItem & { summary?: string };
};

export function ChapterCard({ chapter }: ChapterCardProps) {
  const Icon = chapterIcons[chapter.iconName];

  return (
    <Link
      href={`/chapters/${chapter.slug}`}
      className="group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-80"
        style={{ background: `linear-gradient(90deg, transparent, ${chapter.accent}, transparent)` }}
      />
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex size-11 items-center justify-center rounded-[8px] border border-white/10 bg-black/30"
          style={{ color: chapter.accent }}
        >
          <Icon className="size-5" />
        </div>
        <span className="flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-400">
          {chapter.status === "curated" ? (
            <BookOpenCheck className="size-3" />
          ) : (
            <Clock3 className="size-3" />
          )}
          {chapter.status}
        </span>
      </div>
      <div className="mt-10">
        <p className="text-sm text-zinc-500">Chapter {chapter.number}</p>
        <h3 className="mt-3 text-balance text-xl font-semibold leading-tight text-zinc-50">
          {chapter.title}
        </h3>
        {chapter.summary ? (
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-400">{chapter.summary}</p>
        ) : null}
      </div>
      <div className="mt-8 flex items-center justify-between text-sm text-zinc-500">
        <span>Open notes</span>
        <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}

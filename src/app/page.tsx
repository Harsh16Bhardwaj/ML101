import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Library,
  ListChecks,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ChapterCard } from "@/components/chapter/ChapterCard";
import { LearningConstellation } from "@/components/effects/LearningConstellation";
import { Reveal } from "@/components/effects/Reveal";
import { chapters } from "@/content/chapters";

export default function Home() {
  const curatedCount = chapters.filter((chapter) => chapter.status === "curated").length;

  return (
    <main className="min-h-screen overflow-hidden bg-[#050608] text-zinc-100">
      <section className="relative min-h-[92svh] border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(125,211,252,0.16),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(134,239,172,0.1),transparent_26%),linear-gradient(180deg,#050608_0%,#080a0f_100%)]" />
        <div className="absolute right-0 top-10 h-[520px] w-[620px] max-w-full">
          <LearningConstellation />
        </div>

        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.04]">
                <BrainCircuit className="size-5 text-sky-200" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-zinc-50">Machine Learning 101</span>
                <span className="block text-xs text-zinc-500">Book notes system</span>
              </span>
            </Link>
            <Link
              href="/chapters/the-machine-learning-landscape"
              className="hidden items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.08] sm:inline-flex"
            >
              Start reading
              <ArrowRight className="size-4" />
            </Link>
          </nav>

          <div className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_420px]">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-zinc-400">
                  <Sparkles className="size-3.5 text-emerald-200" />
                  Curated from daily reading
                </div>
                <h1 className="mt-8 max-w-5xl text-balance font-serif text-4xl font-semibold leading-[0.98] text-zinc-50 sm:text-4xl lg:text-6xl">
                  Retain the book, not just the vibe.
                </h1>
                <p className="mt-8 max-w-2xl text-md leading-4 text-zinc-300 sm:text-md sm:leading-6">
                  A dark-first, chapter-wise reading system for turning Hands-On Machine Learning into sharp notes,
                  practical examples, recall hooks, and interview-ready explanations.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/chapters/the-machine-learning-landscape"
                    className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-zinc-50 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-sky-100"
                  >
                    Read Chapter 1
                    <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href="#chapter-index"
                    className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    Browse index
                    <Library className="size-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="grid grid-cols-3 gap-3">
                  <Metric icon={BookOpen} label="Chapters" value={String(chapters.length)} />
                  <Metric icon={CheckCircle2} label="Curated" value={String(curatedCount)} />
                  <Metric icon={ListChecks} label="Mode" value="SSR" />
                </div>
                <div className="mt-5 rounded-[8px] border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Current session</p>
                  <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
                    Chapter 1: The Machine Learning Landscape
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    Definitions, learning types, data failure modes, overfitting, underfitting, and validation discipline.
                  </p>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[12%] rounded-full bg-gradient-to-r from-sky-300 to-emerald-200" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="chapter-index" className="border-t border-white/10 bg-[#080a0f] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Chapter index</p>
                <h2 className="mt-3 max-w-2xl text-balance font-serif text-4xl font-semibold text-zinc-50 sm:text-5xl">
                  One clean shelf for the whole book.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-zinc-400">
                All chapters have routes and templates. Chapter 1 is curated now; the rest are ready for future note
                sessions.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map((chapter, index) => (
              <Reveal key={chapter.slug} delay={Math.min(index * 0.025, 0.18)}>
                <ChapterCard chapter={chapter} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-black/20 p-4">
      <Icon className="size-4 text-zinc-500" />
      <p className="mt-5 text-2xl font-semibold text-zinc-50">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</p>
    </div>
  );
}

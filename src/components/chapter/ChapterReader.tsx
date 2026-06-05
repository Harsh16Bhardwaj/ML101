import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Compass,
  Lightbulb,
  ListChecks,
  Map,
  Table2,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Chapter, CodeExample, ComparisonTable } from "@/content/chapters/types";
import { chapterNav, getAdjacentChapters } from "@/content/chapters";
import { Reveal } from "@/components/effects/Reveal";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { ActiveSectionIndex } from "./ActiveSectionIndex";
import { CaseStudyVisual } from "./CaseStudyVisual";
import { chapterIcons } from "./icons";

type ChapterReaderProps = {
  chapter: Chapter;
};

export function ChapterReader({ chapter }: ChapterReaderProps) {
  const Icon = chapterIcons[chapter.iconName];
  const adjacent = getAdjacentChapters(chapter.slug);
  const firstSectionId = chapter.sections[0]?.id ?? "top";

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen overflow-x-hidden bg-[#050608] text-zinc-100">
        <header className="border-b border-white/10 bg-[#050608]/85 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-zinc-50"
            >
              <ArrowLeft className="size-4" />
              Library
            </Link>
            <div className="hidden items-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-500 sm:flex">
              <BookMarked className="size-4" />
              Machine Learning 101
            </div>
          </div>
        </header>

        <main className="mx-auto grid max-w-7xl grid-cols-1 gap-8 overflow-x-hidden px-4 pb-28 pt-8 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)_280px] lg:px-8 lg:pb-20 lg:pt-10">
          <aside className="hidden lg:block">
            <div className="sticky top-8 space-y-3">
              <p className="px-3 text-xs uppercase tracking-[0.22em] text-zinc-500">Chapters</p>
              <nav className="max-h-[78vh] space-y-1 overflow-auto pr-2">
                {chapterNav.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/chapters/${item.slug}`}
                    className={`flex items-start gap-3 rounded-[8px] px-3 py-3 text-sm transition ${
                      item.slug === chapter.slug
                        ? "bg-white/10 text-zinc-50"
                        : "text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-200"
                    }`}
                  >
                    <span
                      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-white/10 text-[11px]"
                      style={{ color: item.accent }}
                    >
                      {item.number}
                    </span>
                    <span className="leading-5">{item.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <article className="w-full min-w-0 max-w-[calc(100vw-2rem)] overflow-hidden sm:max-w-full">
            <Reveal>
              <section
                id="top"
                className="relative max-w-full overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-5 sm:p-6"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${chapter.accent}, transparent)` }}
                />
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="inline-flex size-10 items-center justify-center rounded-[8px] border border-white/10 bg-black/25"
                    style={{ color: chapter.accent }}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Chapter {chapter.number} / Pages {chapter.pages}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {chapter.status}
                  </span>
                </div>
                <h1 className="mt-6 max-w-3xl text-balance break-words font-serif text-4xl font-semibold leading-[1.05] text-zinc-50 sm:text-5xl lg:text-[48px]">
                  {chapter.title}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300 sm:text-[17px]">
                  {chapter.summary}
                </p>
              </section>
            </Reveal>

            <div className="mt-8 space-y-8">
              {chapter.sections.map((section, index) => (
                <Reveal key={section.id} delay={index * 0.03}>
                  <section
                    id={section.id}
                    className="max-w-full scroll-mt-20 overflow-hidden rounded-[8px] border border-white/10 bg-[#0b0d12] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-zinc-500">
                      <span>{section.eyebrow}</span>
                      <span className="h-px w-10 bg-white/15" />
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h2 className="mt-4 text-balance break-words font-serif text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl">
                      {section.title}
                    </h2>
                    <p className="mt-5 border-l border-sky-300/50 pl-4 text-lg leading-8 text-sky-100">
                      {section.coreIdea}
                    </p>

                    <div className="mt-8 grid gap-6">
                      <NoteBlock icon={Brain} title="Theory in plain English" items={section.theory} />
                      <NoteBlock icon={Lightbulb} title="Book examples and anchors" items={section.examples} />
                      <NoteBlock icon={Compass} title="When to use this" items={section.useCases} />
                      <NoteBlock icon={ShieldAlert} title="Traps and misconceptions" items={section.traps} />
                    </div>

                    {section.caseStudies?.length ? (
                      <div className="mt-8 grid gap-4">
                        {section.caseStudies.map((caseStudy) => (
                          <div
                            key={caseStudy.title}
                            className="relative overflow-hidden rounded-[8px] border border-sky-300/20 bg-sky-300/[0.045] p-5"
                          >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
                            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-sky-200/80">
                              <BriefcaseBusiness className="size-4" />
                              Case file
                            </div>
                            <div className="mt-4 grid gap-5">
                              <div>
                                <h3 className="max-w-2xl text-balance text-xl font-semibold leading-tight text-zinc-50 sm:text-2xl">
                                  {caseStudy.title}
                                </h3>
                                <p className="mt-3 max-w-3xl text-[15px] leading-7 text-zinc-300">{caseStudy.context}</p>
                                <div className="mt-5 grid gap-3 xl:grid-cols-3">
                                  <CaseStudyPoint label="Why it matters" value={caseStudy.whyItMatters} />
                                  <CaseStudyPoint label="Pitfall" value={caseStudy.pitfall} />
                                  <CaseStudyPoint label="Takeaway" value={caseStudy.takeaway} />
                                </div>
                              </div>
                              {caseStudy.visual ? (
                                <div className="rounded-[8px] border border-white/10 bg-black/10 p-2">
                                  <CaseStudyVisual visual={caseStudy.visual} />
                                </div>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {section.tables?.length ? (
                      <div className="mt-8 grid min-w-0 gap-4">
                        {section.tables.map((table) => (
                          <ComparisonTableBlock key={table.title} table={table} />
                        ))}
                      </div>
                    ) : null}

                    {section.codeExamples?.length ? (
                      <div className="mt-8 grid min-w-0 gap-4">
                        {section.codeExamples.map((example) => (
                          <CodeExampleBlock key={example.title} example={example} />
                        ))}
                      </div>
                    ) : null}

                    <div className="mt-8 grid gap-2 rounded-[8px] border border-white/10 bg-white/[0.035] p-3">
                      <Retention label="Remember" value={section.retention.remember} />
                      <Retention label="Shows up in" value={section.retention.showsUp} />
                      <Retention label="One-liner" value={section.retention.oneLiner} />
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>

            {chapter.recallCards.length > 0 ? (
              <Reveal className="mt-8">
                <section className="rounded-[8px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <Sparkles className="size-5 text-fuchsia-200" />
                    <h2 className="text-2xl font-semibold text-zinc-50">Quick recall cards</h2>
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {chapter.recallCards.map((card) => (
                      <div key={card.prompt} className="rounded-[8px] border border-white/10 bg-black/20 p-5">
                        <p className="text-sm font-medium text-zinc-100">{card.prompt}</p>
                        <p className="mt-3 text-sm leading-6 text-zinc-400">{card.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            ) : null}

            {chapter.reviewSnippets.length > 0 ? (
              <Reveal className="mt-8">
                <section className="rounded-[8px] border border-white/10 bg-[#0b0d12] p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <BookMarked className="size-5 text-sky-200" />
                    <h2 className="text-2xl font-semibold text-zinc-50">Quick notes snippets</h2>
                  </div>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {chapter.reviewSnippets.map((snippet) => (
                      <div key={snippet} className="rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-sm leading-6 text-zinc-300">{snippet}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            ) : null}

            {chapter.practicePrompts.length > 0 ? (
              <Reveal className="mt-8">
                <section className="rounded-[8px] border border-white/10 bg-[#0b0d12] p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <ListChecks className="size-5 text-emerald-200" />
                    <h2 className="text-2xl font-semibold text-zinc-50">Session prompts</h2>
                  </div>
                  <div className="mt-6 space-y-4">
                    {chapter.practicePrompts.map((prompt) => (
                      <div key={prompt.title} className="rounded-[8px] border border-white/10 bg-white/[0.03] p-5">
                        <h3 className="font-medium text-zinc-50">{prompt.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">{prompt.prompt}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            ) : null}

            <nav className="mt-8 grid gap-4 sm:grid-cols-2">
              {adjacent.previous ? (
                <ChapterStep
                  href={`/chapters/${adjacent.previous.slug}`}
                  label="Previous"
                  title={adjacent.previous.title}
                  direction="previous"
                />
              ) : (
                <div />
              )}
              {adjacent.next ? (
                <ChapterStep
                  href={`/chapters/${adjacent.next.slug}`}
                  label="Next"
                  title={adjacent.next.title}
                  direction="next"
                />
              ) : null}
            </nav>
          </article>

          <aside className="hidden lg:block">
            <ActiveSectionIndex sections={chapter.sections} />
          </aside>
        </main>

        <div className="fixed inset-x-3 bottom-3 z-40 rounded-[8px] border border-white/10 bg-[#080a0f]/90 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl lg:hidden">
          <div className="grid grid-cols-3 gap-2 text-xs">
            <Link href="/" className="flex items-center justify-center gap-2 rounded-[6px] px-3 py-3 text-zinc-300">
              <ArrowLeft className="size-4" />
              Home
            </Link>
            <a href={`#${firstSectionId}`} className="flex items-center justify-center gap-2 rounded-[6px] px-3 py-3 text-zinc-300">
              <Map className="size-4" />
              Index
            </a>
            {adjacent.next ? (
              <Link
                href={`/chapters/${adjacent.next.slug}`}
                className="flex items-center justify-center gap-2 rounded-[6px] bg-white/10 px-3 py-3 text-zinc-50"
              >
                Next
                <ArrowRight className="size-4" />
              </Link>
            ) : (
              <span className="flex items-center justify-center gap-2 rounded-[6px] bg-white/10 px-3 py-3 text-zinc-50">
                Done
                <CheckCircle2 className="size-4" />
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function NoteBlock({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
        <Icon className="size-4 text-zinc-500" />
        {title}
      </div>
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-7 text-zinc-400">
            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Retention({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2 rounded-[8px] border border-white/10 bg-black/20 p-4 sm:grid-cols-[132px_minmax(0,1fr)] sm:items-start">
      <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{label}</p>
      <p className="text-sm leading-6 text-zinc-300">{value}</p>
    </div>
  );
}

function CaseStudyPoint({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-black/20 p-4">
      <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{label}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{value}</p>
    </div>
  );
}

function ComparisonTableBlock({ table }: { table: ComparisonTable }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-[8px] border border-white/10 bg-black/20">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
        <Table2 className="size-4" />
        {table.title}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse text-left text-sm">
          <thead className="bg-white/[0.035] text-xs uppercase tracking-[0.16em] text-zinc-500">
            <tr>
              {table.columns.map((column) => (
                <th key={column} className="border-b border-white/10 px-4 py-3 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join("|")} className="border-b border-white/5 last:border-b-0">
                {row.map((cell, cellIndex) => (
                  <td key={`${cellIndex}-${cell}`} className="px-4 py-3 leading-6 text-zinc-300">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CodeExampleBlock({ example }: { example: CodeExample }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-[8px] border border-white/10 bg-[#07090d]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
          <Code2 className="size-4" />
          {example.title}
        </div>
        <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
          {example.language}
        </span>
      </div>
      <pre className="min-w-0 overflow-x-auto p-4 text-[13px] leading-6 text-zinc-200">
        <code>{example.code}</code>
      </pre>
      {example.highlights?.length ? (
        <div className="border-t border-emerald-300/10 bg-emerald-300/[0.035] px-4 py-3">
          <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-emerald-200/75">
            <Lightbulb className="size-3.5" />
            Learn this
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {example.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2 text-xs leading-5 text-zinc-300">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-emerald-300/70" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {example.notes.length ? (
        <div className="border-t border-white/10 bg-white/[0.025] px-4 py-3">
          <ul className="space-y-2">
            {example.notes.map((note) => (
              <li key={note} className="flex gap-2 text-xs leading-5 text-zinc-400">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-zinc-600" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function ChapterStep({
  href,
  label,
  title,
  direction,
}: {
  href: string;
  label: string;
  title: string;
  direction: "previous" | "next";
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/20 hover:bg-white/[0.06] ${
        direction === "next" ? "sm:justify-end sm:text-right" : ""
      }`}
    >
      {direction === "previous" ? (
        <ArrowLeft className="size-5 text-zinc-500 transition group-hover:-translate-x-1" />
      ) : null}
      <span>
        <span className="block text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</span>
        <span className="mt-1 block text-sm font-medium text-zinc-100">{title}</span>
      </span>
      {direction === "next" ? (
        <ArrowRight className="size-5 text-zinc-500 transition group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}

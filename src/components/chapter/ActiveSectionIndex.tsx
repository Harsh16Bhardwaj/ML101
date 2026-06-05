"use client";

import { Map as MapIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { NoteSection } from "@/content/chapters/types";

type ActiveSectionIndexProps = {
  sections: Pick<NoteSection, "id" | "title">[];
};

export function ActiveSectionIndex({ sections }: ActiveSectionIndexProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ height: 0, top: 0 });
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);

  useEffect(() => {
    const activeItem = itemRefs.current[activeId];
    if (!activeItem) return;

    setIndicatorStyle({
      height: activeItem.offsetHeight,
      top: activeItem.offsetTop,
    });
  }, [activeId, sections]);

  useEffect(() => {
    if (!sectionIds.length) return;

    let frame = 0;

    const updateActiveSection = () => {
      const checkpoint = 150;
      let nextActiveId = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= checkpoint) {
          nextActiveId = id;
        }
      }

      setActiveId((current) => (current === nextActiveId ? current : nextActiveId));
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [sectionIds]);

  return (
    <div className="sticky top-8 rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-500">
        <MapIcon className="size-4" />
        Index
      </div>
      <nav className="relative mt-5 space-y-1">
        <div
          className="absolute left-0 right-0 rounded-[8px] border border-white/[0.06] bg-white/[0.045] transition-[top,height] duration-500 ease-out"
          style={{ top: indicatorStyle.top, height: indicatorStyle.height }}
          aria-hidden="true"
        />
        {sections.map((section) => {
          const isActive = section.id === activeId;

          return (
            <a
              key={section.id}
              ref={(node) => {
                itemRefs.current[section.id] = node;
              }}
              href={`#${section.id}`}
              className={`relative z-10 flex items-start gap-3 rounded-[8px] px-3 py-2.5 text-sm leading-5 transition duration-300 ${
                isActive
                  ? "text-zinc-200"
                  : "text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-200"
              }`}
            >
              <span
                className={`mt-2 size-1.5 shrink-0 rounded-full transition duration-300 ${
                  isActive ? "bg-zinc-300" : "bg-zinc-700"
                }`}
              />
              <span>{section.title}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChapterReader } from "@/components/chapter/ChapterReader";
import { chapters, getChapter } from "@/content/chapters";

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapter(slug);

  if (!chapter) {
    return {
      title: "Chapter not found | Machine Learning 101",
    };
  }

  return {
    title: `${chapter.title} | Machine Learning 101`,
    description: chapter.summary,
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);

  if (!chapter) {
    notFound();
  }

  return <ChapterReader chapter={chapter} />;
}

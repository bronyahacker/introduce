import { remark } from "remark";
import remarkHtml from "remark-html";
import matter from "gray-matter";
import { cache } from "react";
import type { BlogPost } from "@/types/blog";

function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export const processMarkdown = cache(
  async (rawContent: string, slug: string): Promise<BlogPost> => {
    const { data, content } = matter(rawContent);

    const processed = await remark().use(remarkHtml).process(content);
    const contentHtml = processed.toString();
    const readingTime = estimateReadingTime(content);

    return {
      slug,
      frontMatter: {
        title: data.title ?? slug,
        date: data.date ?? new Date().toISOString().split("T")[0],
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        coverImage: data.coverImage,
        slug,
      },
      contentHtml,
      readingTime,
    };
  }
);

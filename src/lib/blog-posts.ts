import fs from "fs";
import path from "path";
import { processMarkdown } from "./markdown";
import type { BlogPost } from "@/types/blog";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog");

export async function getAllPosts(): Promise<BlogPost[]> {
  // Ensure directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(CONTENT_DIR, filename);
      const rawContent = fs.readFileSync(filePath, "utf-8");
      return processMarkdown(rawContent, slug);
    })
  );

  return posts.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return processMarkdown(rawContent, slug);
}

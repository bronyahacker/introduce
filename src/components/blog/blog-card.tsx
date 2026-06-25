"use client";

import Link from "next/link";
import { format } from "date-fns";
import { TiltCard } from "@/components/animations/tilt-card";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { frontMatter, readingTime } = post;

  return (
    <TiltCard maxTilt={6}>
      <Link href={`/blog/${frontMatter.slug}`} className="block group">
        <article className="glass rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-lg">
          {/* Cover Image Placeholder */}
          <div className="w-full h-40 mb-4 rounded-xl bg-gradient-to-br from-[var(--electric-violet)]/20 to-[var(--cyano)]/10 flex items-center justify-center overflow-hidden">
            <span className="text-4xl opacity-30">
              {frontMatter.tags[0] === "react" ? "⚛️" :
               frontMatter.tags[0] === "css" ? "🎨" :
               frontMatter.tags[0] === "typescript" ? "📘" : "📝"}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {frontMatter.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-medium rounded-full bg-[var(--primary)]/10 text-[var(--primary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[var(--starlight)] mb-2 group-hover:text-[var(--electric-violet)] transition-colors line-clamp-2">
            {frontMatter.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[var(--muted-foreground)] mb-4 line-clamp-2">
            {frontMatter.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
            <time dateTime={frontMatter.date}>
              {format(new Date(frontMatter.date), "MMM dd, yyyy")}
            </time>
            <span>{readingTime} min read</span>
          </div>
        </article>
      </Link>
    </TiltCard>
  );
}

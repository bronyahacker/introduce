"use client";

import { useState, useMemo } from "react";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogListControls } from "@/components/blog/blog-list-controls";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import type { BlogPost } from "@/types/blog";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(
    () =>
      Array.from(new Set(posts.flatMap((p) => p.frontMatter.tags))).sort(),
    [posts]
  );

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        !search ||
        post.frontMatter.title.toLowerCase().includes(search.toLowerCase()) ||
        post.frontMatter.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesTag =
        !activeTag || post.frontMatter.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [posts, search, activeTag]);

  return (
    <>
      <BlogListControls
        tags={allTags}
        onSearch={setSearch}
        onTagFilter={setActiveTag}
        activeTag={activeTag}
      />
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[var(--muted-foreground)] text-lg">
            No posts found{search ? ` for "${search}"` : ""}.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </>
  );
}

"use client";

import { useState } from "react";

interface BlogListControlsProps {
  tags: string[];
  onSearch: (query: string) => void;
  onTagFilter: (tag: string | null) => void;
  activeTag: string | null;
}

export function BlogListControls({
  tags,
  onSearch,
  onTagFilter,
  activeTag,
}: BlogListControlsProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
      {/* Search */}
      <div className="relative w-full md:w-72">
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
          }}
          className="w-full px-4 py-2.5 rounded-xl glass text-sm text-[var(--starlight)] placeholder-[var(--muted-foreground)] outline-none focus:ring-2 focus:ring-[var(--ring)] transition-all"
        />
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Tag Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onTagFilter(null)}
          className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
            activeTag === null
              ? "bg-[var(--primary)]/20 text-[var(--primary)]"
              : "glass text-[var(--muted-foreground)] hover:text-[var(--starlight)]"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagFilter(tag)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
              activeTag === tag
                ? "bg-[var(--primary)]/20 text-[var(--primary)]"
                : "glass text-[var(--muted-foreground)] hover:text-[var(--starlight)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

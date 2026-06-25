interface MarkdownRendererProps {
  contentHtml: string;
}

export function MarkdownRenderer({ contentHtml }: MarkdownRendererProps) {
  return (
    <div
      className="prose prose-invert max-w-none
        prose-headings:text-[var(--starlight)]
        prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-[var(--muted-foreground)] prose-p:leading-relaxed
        prose-a:text-[var(--electric-violet)] prose-a:no-underline hover:prose-a:underline
        prose-code:text-[var(--cyano)] prose-code:bg-[var(--muted)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
        prose-pre:bg-[var(--void-purple)] prose-pre:border prose-pre:border-[var(--border)] prose-pre:rounded-xl
        prose-blockquote:border-l-[var(--electric-violet)] prose-blockquote:text-[var(--muted-foreground)]
        prose-img:rounded-xl
        prose-li:text-[var(--muted-foreground)]
        prose-strong:text-[var(--starlight)]
        "
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}

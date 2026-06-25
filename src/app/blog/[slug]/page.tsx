import { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getPostBySlug, getAllPosts } from "@/lib/blog-posts";
import { MarkdownRenderer } from "@/components/blog/markdown-renderer";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { GradientText } from "@/components/animations/gradient-text";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.frontMatter.title,
    description: post.frontMatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const { frontMatter, contentHtml, readingTime } = post;

  return (
    <>
      <ReadingProgress />
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12">
        <ScrollReveal>
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--electric-violet)] transition-colors mb-8"
          >
            <span aria-hidden="true">&larr;</span> Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {frontMatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--primary)]/10 text-[var(--primary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <GradientText as="h1" className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              {frontMatter.title}
            </GradientText>
            <div className="flex items-center gap-3 mt-4 text-sm text-[var(--muted-foreground)]">
              <time dateTime={frontMatter.date}>
                {format(new Date(frontMatter.date), "MMMM dd, yyyy")}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{readingTime} min read</span>
            </div>
          </header>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal delay={0.1}>
          <div className="glass rounded-2xl p-6 md:p-10">
            <MarkdownRenderer contentHtml={contentHtml} />
          </div>
        </ScrollReveal>

        {/* Footer Nav */}
        <div className="mt-12 flex justify-between items-center">
          <Link
            href="/blog"
            className="text-sm text-[var(--muted-foreground)] hover:text-[var(--electric-violet)] transition-colors"
          >
            &larr; All Posts
          </Link>
        </div>
      </article>
    </>
  );
}

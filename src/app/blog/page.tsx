import { Metadata } from "next";
import { BlogList } from "./blog-list";
import { getAllPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest blog posts about web development and design.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <h1 className="text-4xl font-bold gradient-text mb-2">Blog</h1>
      <p className="text-[var(--muted-foreground)] text-lg mb-8">
        Thoughts, tutorials, and insights on web development.
      </p>
      <BlogList posts={posts} />
    </div>
  );
}

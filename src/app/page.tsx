import { Hero } from "@/components/home/hero";
import { BlogCard } from "@/components/blog/blog-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { getAllPosts } from "@/lib/blog-posts";

export const dynamic = "force-static";

export default async function HomePage() {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <SectionHeading
                title="Latest Articles"
                subtitle="Thoughts on web development, design, and more"
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.15}>
                  <BlogCard post={post} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Showcase */}
      <section className="py-20 px-4 md:px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <SectionHeading
              title="Tech Stack"
              subtitle="Built with modern, performant technologies"
            />
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              "Next.js 15",
              "React 19",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "shadcn/ui",
            ].map((tech, i) => (
              <ScrollReveal key={tech} delay={i * 0.1}>
                <span className="inline-block px-5 py-2.5 rounded-full glass text-sm font-medium text-[var(--starlight)] hover:border-[var(--primary)]/30 transition-all cursor-default">
                  {tech}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

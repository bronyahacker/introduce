import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { GradientText } from "@/components/animations/gradient-text";
import { GlassCard } from "@/components/shared/glass-card";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.author.name}.`,
};

const timeline = [
  {
    year: "2025",
    title: "Senior Developer",
    description: "Building modern web applications with Next.js and React.",
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    description: "Working with TypeScript, Node.js, and cloud platforms.",
  },
  {
    year: "2021",
    title: "Started Web Development",
    description: "Fell in love with creating beautiful, interactive UIs.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
      {/* Header */}
      <ScrollReveal>
        <GradientText as="h1" className="text-4xl md:text-5xl font-extrabold">
          About Me
        </GradientText>
        <p className="text-lg text-[var(--muted-foreground)] mt-4 max-w-2xl">
          {siteConfig.author.bio}
        </p>
      </ScrollReveal>

      {/* Bio Card */}
      <ScrollReveal delay={0.1}>
        <GlassCard className="mt-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--electric-violet)] to-[var(--cyano)] flex items-center justify-center text-3xl">
                👨‍💻
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--starlight)] mb-2">
                {siteConfig.author.name}
              </h2>
              <p className="text-[var(--primary)] font-medium mb-4">
                {siteConfig.author.role}
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                I&apos;m a passionate developer who loves creating beautiful,
                performant web experiences. I specialize in React, Next.js, and
                TypeScript, with a keen eye for design and user experience.
                When I&apos;m not coding, I enjoy writing about what I learn
                and exploring new technologies.
              </p>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal delay={0.2}>
        <h2 className="text-2xl font-bold text-[var(--starlight)] mt-16 mb-6">
          Skills &amp; Technologies
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "React", "Next.js", "TypeScript", "JavaScript",
            "Tailwind CSS", "Node.js", "PostgreSQL", "GraphQL",
            "Framer Motion", "Figma", "Git", "Docker",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full glass text-sm font-medium text-[var(--starlight)] hover:border-[var(--primary)]/30 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <ScrollReveal delay={0.3}>
        <h2 className="text-2xl font-bold text-[var(--starlight)] mt-16 mb-6">
          Experience
        </h2>
        <div className="space-y-6">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[var(--electric-violet)]" />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-[var(--border)] mt-2" />
                )}
              </div>
              <GlassCard className="flex-1">
                <span className="text-xs font-bold text-[var(--primary)]">
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold text-[var(--starlight)] mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">
                  {item.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}

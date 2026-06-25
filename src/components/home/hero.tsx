"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "./hero-background";
import { Typewriter } from "@/components/animations/typewriter";
import { TiltCard } from "@/components/animations/tilt-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { GradientText } from "@/components/animations/gradient-text";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starfield Background */}
      <HeroBackground />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%), radial-gradient(ellipse at 80% 100%, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Hero Card */}
          <ScrollReveal variant="fade-left" className="flex-shrink-0">
            <TiltCard maxTilt={10}>
              <div className="glass-strong rounded-3xl p-8 md:p-10 text-center backdrop-blur-2xl gradient-border">
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2,
                  }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--electric-violet)] to-[var(--cyano)] p-[2px]"
                >
                  <div className="w-full h-full rounded-full bg-[var(--void-purple)] flex items-center justify-center">
                    <span className="text-3xl">👨‍💻</span>
                  </div>
                </motion.div>

                <h1 className="text-2xl md:text-3xl font-bold text-[var(--starlight)] mb-2">
                  {siteConfig.author.name}
                </h1>
                <p className="text-[var(--muted-foreground)] mb-6">
                  {siteConfig.author.role}
                </p>

                <div className="flex gap-3 justify-center">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--electric-violet)] to-[var(--cyano)] text-white font-medium text-sm hover:shadow-lg hover:shadow-[var(--electric-violet)]/25 transition-shadow"
                  >
                    Read Blog
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-[var(--starlight)] font-medium text-sm hover:bg-[var(--muted)] transition-colors"
                  >
                    About Me
                  </Link>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Right: Text */}
          <ScrollReveal variant="fade-right" delay={0.2}>
            <div className="text-center lg:text-left">
              <GradientText as="h2" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                {siteConfig.name}
              </GradientText>
              <div className="mt-6 h-8 md:h-10">
                <Typewriter
                  phrases={siteConfig.typewriterPhrases as unknown as string[]}
                  typingSpeed={60}
                  deleteSpeed={30}
                  pauseDuration={2500}
                  className="text-xl md:text-2xl text-[var(--muted-foreground)] font-light"
                />
              </div>
              <p className="mt-6 text-[var(--muted-foreground)] text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                {siteConfig.author.bio}
              </p>

              {/* Animated scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-12 hidden lg:flex justify-center lg:justify-start"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-6 h-10 rounded-full border-2 border-[var(--border)] flex items-start justify-center p-1.5">
                    <div className="w-1 h-2 rounded-full bg-[var(--electric-violet)]" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

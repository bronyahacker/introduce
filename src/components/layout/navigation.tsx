"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 100], [80, 56]);
  const bgOpacity = useTransform(scrollY, [0, 100], [0.3, 0.7]);
  const blur = useTransform(scrollY, [0, 100], [8, 24]);

  return (
    <motion.header
      style={{ height, backdropFilter: `blur(${blur}px)` }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center border-b border-[var(--border)] transition-colors"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-[var(--deep-cosmos)]"
        transition={{ duration: 0 }}
      />
      <nav className="relative w-full max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                pathname === link.href
                  ? "text-[var(--starlight)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--starlight)]"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 glass rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </motion.header>
  );
}

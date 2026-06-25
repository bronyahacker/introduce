"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
}

export function GradientText({
  children,
  as: Tag = "span",
  className,
}: GradientTextProps) {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      <Tag
        className={`bg-gradient-to-r from-[var(--electric-violet)] via-[var(--cyano)] to-[var(--nebula-rose)] bg-[length:200%_auto] bg-clip-text text-transparent ${className ?? ""}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}

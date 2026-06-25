"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ReadingProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left"
      style={{
        scaleX: progress,
        background:
          "linear-gradient(90deg, var(--electric-violet), var(--cyano), var(--nebula-rose))",
      }}
    />
  );
}

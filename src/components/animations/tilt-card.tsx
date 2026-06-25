"use client";

import { motion } from "framer-motion";
import { useTilt } from "@/hooks/use-tilt";
import type { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  maxTilt?: number;
  className?: string;
}

export function TiltCard({ children, maxTilt = 8, className }: TiltCardProps) {
  const { ref, rotateX, rotateY, glowX, glowY, onMouseMove, onMouseLeave } =
    useTilt(maxTilt);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative ${className ?? ""}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-inherit opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(139,92,246,0.1) 0%, transparent 60%)`,
        }}
      />
    </motion.div>
  );
}

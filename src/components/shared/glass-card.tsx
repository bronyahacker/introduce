import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function GlassCard({ children, className, as: Tag = "div" }: GlassCardProps) {
  return (
    <Tag className={cn("glass rounded-2xl p-6", className)}>
      {children}
    </Tag>
  );
}

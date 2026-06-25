"use client";

import { useTypewriter } from "@/hooks/use-typewriter";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function Typewriter({
  phrases,
  typingSpeed,
  deleteSpeed,
  pauseDuration,
  className,
}: TypewriterProps) {
  const { text } = useTypewriter(phrases, typingSpeed, deleteSpeed, pauseDuration);

  return (
    <span className={className} aria-label={phrases.join(". ")}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-[var(--electric-violet)] ml-0.5 animate-pulse align-middle" />
    </span>
  );
}

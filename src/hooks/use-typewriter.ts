"use client";

import { useState, useEffect, useCallback } from "react";

export function useTypewriter(
  phrases: string[],
  typingSpeed = 60,
  deleteSpeed = 30,
  pauseDuration = 2500
) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isPaused) return;

    if (isDeleting) {
      setText(currentPhrase.substring(0, text.length - 1));
      if (text.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      setText(currentPhrase.substring(0, text.length + 1));
      if (text.length === currentPhrase.length) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    }
  }, [text, phraseIndex, isDeleting, isPaused, phrases, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : isPaused ? pauseDuration : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, isPaused, typingSpeed, deleteSpeed, pauseDuration]);

  return { text, isTyping: !isPaused || text.length > 0 };
}

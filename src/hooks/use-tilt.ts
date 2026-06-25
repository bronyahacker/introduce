"use client";

import { useState, useCallback, useRef } from "react";

interface TiltResult {
  ref: (node: HTMLElement | null) => void;
  rotateX: number;
  rotateY: number;
  glowX: number;
  glowY: number;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

export function useTilt(maxTilt = 8): TiltResult {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);
  const elRef = useRef<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    elRef.current = node;
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!elRef.current) return;
      const rect = elRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setRotateX((y - 0.5) * -maxTilt * 2);
      setRotateY((x - 0.5) * maxTilt * 2);
      setGlowX(x * 100);
      setGlowY(y * 100);
    },
    [maxTilt]
  );

  const onMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
    setGlowX(50);
    setGlowY(50);
  }, []);

  return { ref, rotateX, rotateY, glowX, glowY, onMouseMove, onMouseLeave };
}

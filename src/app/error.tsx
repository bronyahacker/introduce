"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold gradient-text mb-4">
          Something Went Wrong
        </h1>
        <p className="text-[var(--muted-foreground)] mb-8">
          An unexpected error occurred. Let&apos;s try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--electric-violet)] to-[var(--cyano)] text-white font-medium text-sm hover:shadow-lg hover:shadow-[var(--electric-violet)]/25 transition-shadow"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[var(--starlight)] mb-2">
          Page Not Found
        </h2>
        <p className="text-[var(--muted-foreground)] mb-8">
          This page has drifted into deep space.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--electric-violet)] to-[var(--cyano)] text-white font-medium text-sm hover:shadow-lg hover:shadow-[var(--electric-violet)]/25 transition-shadow"
        >
          &larr; Back Home
        </Link>
      </div>
    </div>
  );
}

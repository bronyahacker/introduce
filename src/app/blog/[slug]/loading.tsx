export default function BlogPostLoading() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-12">
      <div className="h-5 w-24 bg-[var(--muted)] rounded animate-pulse mb-8" />
      <div className="flex gap-2 mb-4">
        <div className="w-14 h-6 bg-[var(--muted)] rounded-full animate-pulse" />
        <div className="w-20 h-6 bg-[var(--muted)] rounded-full animate-pulse" />
      </div>
      <div className="h-10 w-3/4 bg-[var(--muted)] rounded animate-pulse mb-4" />
      <div className="h-5 w-48 bg-[var(--muted)] rounded animate-pulse mb-10" />
      <div className="glass rounded-2xl p-10 space-y-4">
        <div className="h-4 w-full bg-[var(--muted)] rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-[var(--muted)] rounded animate-pulse" />
        <div className="h-4 w-4/6 bg-[var(--muted)] rounded animate-pulse" />
      </div>
    </div>
  );
}

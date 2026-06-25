export default function BlogLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <div className="h-10 w-24 bg-[var(--muted)] rounded-lg animate-pulse mb-2" />
      <div className="h-6 w-64 bg-[var(--muted)] rounded-lg animate-pulse mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="glass rounded-2xl p-6">
            <div className="w-full h-40 bg-[var(--muted)] rounded-xl animate-pulse mb-4" />
            <div className="flex gap-2 mb-3">
              <div className="w-12 h-5 bg-[var(--muted)] rounded-full animate-pulse" />
              <div className="w-16 h-5 bg-[var(--muted)] rounded-full animate-pulse" />
            </div>
            <div className="h-6 w-3/4 bg-[var(--muted)] rounded animate-pulse mb-2" />
            <div className="h-4 w-full bg-[var(--muted)] rounded animate-pulse mb-4" />
            <div className="flex justify-between">
              <div className="w-24 h-4 bg-[var(--muted)] rounded animate-pulse" />
              <div className="w-16 h-4 bg-[var(--muted)] rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} {siteConfig.author.name}. Built with Next.js &amp; love.
        </p>
        <div className="flex items-center gap-4">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

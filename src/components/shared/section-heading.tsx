import { cn } from "@/lib/utils";
import { GradientText } from "@/components/animations/gradient-text";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  gradient = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      {gradient ? (
        <GradientText as="h2" className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </GradientText>
      ) : (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--starlight)]">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-[var(--muted-foreground)] text-lg">{subtitle}</p>
      )}
    </div>
  );
}

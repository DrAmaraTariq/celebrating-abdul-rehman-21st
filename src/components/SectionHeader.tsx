interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 animate-fadeUp md:mb-10">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold">
        {eyebrow}
      </p>
      <h1 className="font-display text-3xl leading-tight text-accent-main md:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-secondary md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

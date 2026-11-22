type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, intro, className = "" }: Props) {
  return (
    <div data-reveal className={`max-w-2xl ${className}`}>
      <p className="text-xs font-medium tracking-wide text-accent">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-[1.75rem] leading-tight font-semibold text-balance md:text-2xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base text-ink-muted md:text-lg">{intro}</p>}
    </div>
  );
}

type Props = {
  text: string;
  /** Mots (tels qu'écrits) affichés en italique accent */
  highlight?: string[];
  className?: string;
};

/** Titre révélé mot par mot (CSS pur : 70 ms de décalage, 600 ms par mot). */
export function WordsReveal({ text, highlight = [], className = "" }: Props) {
  const words = text.split(" ");
  const start = words.length - highlight.length;
  const hasHighlight = highlight.length > 0 && words.slice(start).join(" ") === highlight.join(" ");

  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span
            className={`word-in ${hasHighlight && i >= start ? "italic text-accent" : ""}`}
            style={{ "--i": i } as React.CSSProperties}
          >
            {word}
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </h1>
  );
}

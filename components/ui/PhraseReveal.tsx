import type { CSSProperties } from "react";

type Props = {
  /** Phrases affichées l'une après l'autre (une par ligne) */
  phrases: string[];
  /** Fin de la dernière phrase mise en valeur en italique accent */
  highlight?: string;
  /** Décalage entre deux phrases, en ms */
  stagger?: number;
  className?: string;
};

/** Titre révélé phrase par phrase (CSS pur : fondu + montée, 600 ms). */
export function PhraseReveal({ phrases, highlight, stagger = 150, className = "" }: Props) {
  return (
    <h1 className={className}>
      {phrases.map((phrase, i) => {
        const isLast = i === phrases.length - 1;
        const split = isLast && highlight && phrase.endsWith(highlight) ? phrase.length - highlight.length : -1;
        return (
          <span key={phrase} className="hero-in hero-rise block" style={{ "--d": `${i * stagger}ms` } as CSSProperties}>
            {split >= 0 ? (
              <>
                {phrase.slice(0, split)}
                <span className="text-accent italic">{highlight}</span>
              </>
            ) : (
              phrase
            )}
            {!isLast && " "}
          </span>
        );
      })}
    </h1>
  );
}

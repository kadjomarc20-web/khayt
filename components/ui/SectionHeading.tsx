import type { CSSProperties } from "react";

type Props = {
  id: string;
  eyebrow: string;
  /** Le passage entre astérisques (ex. « se voit *de près.* ») s'affiche en italique accent. */
  title: string;
  intro?: string;
  className?: string;
};

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/**
 * En-tête de section. À l'entrée dans l'écran : surtitre, puis titre qui passe
 * du flou au net, puis mot accentué, puis chapeau (décalages de 120 ms).
 */
export function SectionHeading({ id, eyebrow, title, intro, className = "" }: Props) {
  const [before, accent, after = ""] = title.split("*");

  return (
    <div data-reveal-group className={`max-w-2xl ${className}`}>
      <p className="reveal-blur text-xs font-medium tracking-wide text-accent">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-[1.75rem] leading-tight font-semibold text-balance md:text-2xl">
        <span className="reveal-blur inline-block" style={delay(120)}>
          {before}
        </span>
        {accent && (
          <>
            {" "}
            <span className="reveal-blur inline-block text-accent italic" style={delay(300)}>
              {accent}
            </span>
            {after}
          </>
        )}
      </h2>
      {intro && (
        <p className="reveal-blur mt-4 text-base text-ink-muted md:text-lg" style={delay(420)}>
          {intro}
        </p>
      )}
    </div>
  );
}

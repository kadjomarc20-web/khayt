"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// Framer Motion n'est chargé qu'à l'approche de la citation (n'alourdit pas le premier affichage)
const LitWords = dynamic(() => import("./LitWords"), { ssr: false });

type Props = { quote: string; attribution: string; className?: string };

/**
 * Citation qui « s'allume » mot par mot selon le scroll. Le texte complet est
 * lu par les lecteurs d'écran ; sans JS ou en mouvement réduit, il est plein.
 */
export function ScrollLitQuote({ quote, attribution, className = "" }: Props) {
  const ref = useRef<HTMLQuoteElement>(null);
  const [near, setNear] = useState(false);
  const words = `« ${quote} »`.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "800px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure className={`mx-auto max-w-4xl ${className}`}>
      <blockquote
        ref={ref}
        className="font-display text-[1.75rem] leading-snug font-medium text-balance md:text-[2.75rem] md:leading-[1.15]"
      >
        <p className="sr-only">{words.join(" ")}</p>
        <p aria-hidden="true">
          {near ? (
            <LitWords words={words} target={ref} />
          ) : (
            words.map((word, i) => (
              <span key={`${word}-${i}`}>
                <span className="lit-word lit-word--idle">{word}</span>{" "}
              </span>
            ))
          )}
        </p>
      </blockquote>
      <figcaption className="mt-6 text-xs text-ink-muted">— {attribution}</figcaption>
    </figure>
  );
}

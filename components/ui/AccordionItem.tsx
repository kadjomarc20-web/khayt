"use client";

import { useId, useState } from "react";
import { isKeyboardClick } from "@/lib/input";

type Props = { question: string; answer: string; defaultOpen?: boolean };

/**
 * Élément d'accordéon : grid-template-rows 0fr → 1fr. Ouverture 300 ms,
 * fermeture 200 ms (la sortie est plus courte que l'entrée), instantané au clavier.
 */
export function AccordionItem({ question, answer, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const [instant, setInstant] = useState(false);
  const id = useId();
  const buttonId = `${id}-bouton`;
  const panelId = `${id}-panneau`;

  return (
    <div className="border-b border-line">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={(e) => {
            setInstant(isKeyboardClick(e));
            setOpen((v) => !v);
          }}
          className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-base font-medium md:text-lg"
        >
          {question}
          <span
            aria-hidden="true"
            className={`relative size-5 shrink-0 text-accent transition-transform ease-brand ${open ? "rotate-45 duration-300" : "duration-200"} ${instant ? "transition-none" : ""}`}
          >
            <span className="absolute top-1/2 left-0 h-0.5 w-5 -translate-y-1/2 rounded bg-current" />
            <span className="absolute top-0 left-1/2 h-5 w-0.5 -translate-x-1/2 rounded bg-current" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] ease-brand ${
          open ? "grid-rows-[1fr] opacity-100 duration-300" : "grid-rows-[0fr] opacity-0 duration-200"
        } ${instant ? "transition-none" : ""}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 text-base text-ink-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

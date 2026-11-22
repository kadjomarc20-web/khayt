"use client";

import Image from "next/image";
import { useState } from "react";
import type { BagVariant } from "@/lib/types";

type Props = { bags: BagVariant[] };

/**
 * Sac + pastilles de couleur. Les images sont empilées dans un cadre à ratio
 * fixe (4/5) : le changement se fait en fondu croisé + échelle 0.95 → 1,
 * sans aucun décalage de mise en page.
 */
export function BagViewer({ bags }: Props) {
  const [active, setActive] = useState(0);
  // Les autres teintes ne sont chargées qu'après l'affichage de la première (LCP)
  const [ready, setReady] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="relative aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[28px] bg-[radial-gradient(120%_90%_at_50%_35%,#3a2418_0%,#1a110c_55%,#0d0907_100%)]">
        {bags.map((bag, i) =>
          i > 0 && !ready ? null : (
          <Image
            key={bag.id}
            src={bag.image.src}
            alt={i === active ? bag.image.alt : ""}
            aria-hidden={i !== active}
            fill
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            onLoad={i === 0 ? () => setReady(true) : undefined}
            sizes="(min-width: 1024px) 440px, (min-width: 640px) 60vw, 90vw"
            className={`object-cover transition duration-500 ease-brand ${
              i === active ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
            }`}
            style={{ objectPosition: bag.image.position }}
          />
          ),
        )}
        {/* Vignette : fond les bords des photos dans le dégradé du cadre */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_0_60px_30px_#0d0907]"
        />
      </div>

      <div className="mt-6 flex items-center gap-4" role="group" aria-label="Couleur du cuir">
        {bags.map((bag, i) => (
          <button
            key={bag.id}
            type="button"
            onClick={() => {
              setReady(true);
              setActive(i);
            }}
            aria-pressed={i === active}
            aria-label={`Cuir ${bag.name.toLowerCase()}`}
            className="group relative inline-flex size-11 items-center justify-center rounded-full"
          >
            <span
              aria-hidden="true"
              className={`absolute inset-0 rounded-full border-2 transition-opacity duration-200 ${
                i === active ? "border-accent opacity-100" : "border-line-strong opacity-0 group-hover:opacity-100"
              }`}
            />
            <span
              aria-hidden="true"
              className="size-7 rounded-full shadow-[inset_0_0_0_1px_rgb(255_255_255/0.25)]"
              style={{ backgroundColor: bag.swatch }}
            />
          </button>
        ))}
        <p className="ml-1 min-w-20 text-xs text-ink-muted" aria-live="polite">
          {bags[active].name}
        </p>
      </div>
    </div>
  );
}

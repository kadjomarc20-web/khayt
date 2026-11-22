"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Appelle `onProgress(p)` (p de 0 à 1) pendant que l'élément suivi traverse
 * l'écran : 0 quand son haut touche le haut de l'écran, 1 quand son bas touche
 * le bas. Un seul calcul par image (requestAnimationFrame), aucun rendu React.
 * Inactif en mouvement réduit.
 */
export function useScrollProgress(target: RefObject<HTMLElement | null>, onProgress: (p: number) => void) {
  const callback = useRef(onProgress);
  useEffect(() => {
    callback.current = onProgress;
  });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = target.current;
      if (!el || reduce.matches) return;
      const rect = el.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const p = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      callback.current(p);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduce.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduce.removeEventListener("change", schedule);
    };
  }, [target]);
}

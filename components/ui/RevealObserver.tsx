"use client";

import { useEffect } from "react";

/**
 * Observe une seule fois tous les éléments [data-reveal] (et [data-reveal-group])
 * et leur ajoute .is-visible à l'entrée dans l'écran.
 * Sans JS, la classe .js est absente : tout reste visible.
 * Met aussi en pause les boucles [data-pause-offscreen] quand elles sortent de l'écran.
 */
export function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((el) => io.observe(el));

    // Les boucles décoratives (lueur du hero) se mettent en pause hors écran
    const loops = document.querySelectorAll<HTMLElement>("[data-pause-offscreen]");
    const pause = new IntersectionObserver((entries) => {
      for (const entry of entries) entry.target.classList.toggle("is-offscreen", !entry.isIntersecting);
    });
    loops.forEach((el) => pause.observe(el));

    return () => {
      io.disconnect();
      pause.disconnect();
    };
  }, []);

  return null;
}

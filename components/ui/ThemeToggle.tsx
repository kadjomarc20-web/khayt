"use client";

import { useSyncExternalStore, type MouseEvent } from "react";
import { isKeyboardClick } from "@/lib/input";

function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => mo.disconnect();
}
const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export function ThemeToggle({ className = "" }: { className?: string }) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const next = !isDark;
    const apply = () => {
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {
        /* stockage indisponible : le choix vaut pour la session */
      }
    };

    // Le nouveau thème s'étend en cercle depuis le bouton (600 ms).
    // Clavier, mouvement réduit ou navigateur sans View Transitions : bascule instantanée.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isKeyboardClick(event) || reduce || typeof document.startViewTransition !== "function") {
      apply();
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const transition = document.startViewTransition(apply);
    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 600, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" },
        );
      })
      // Second clic pendant le cercle : la transition précédente est abandonnée, c'est voulu
      .catch(() => {});
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      className={`inline-flex size-11 items-center justify-center rounded-xl text-ink transition-colors duration-200 hover:bg-surface-raised ${className}`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" strokeLinecap="round" />
          </>
        ) : (
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

"use client";

import type { PointerEvent, ReactNode } from "react";

/**
 * Grille bento : met à jour --x / --y sur la tuile survolée pour que
 * sa lueur (::after en radial-gradient) suive la souris.
 */
export function BentoGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const tile = (e.target as HTMLElement).closest<HTMLElement>("[data-glow]");
    if (!tile) return;
    const rect = tile.getBoundingClientRect();
    tile.style.setProperty("--x", `${e.clientX - rect.left}px`);
    tile.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div onPointerMove={onPointerMove} className={className}>
      {children}
    </div>
  );
}

"use client";

import { useEffect, useId, useState } from "react";
import { isKeyboardClick } from "@/lib/input";
import type { NavLink } from "@/lib/types";

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  // Au clavier, la croix apparaît sans tourbillon (règle du projet : pas d'animation au clavier)
  const [instant, setInstant] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={(e) => {
          setInstant(isKeyboardClick(e));
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="inline-flex size-11 items-center justify-center rounded-xl text-ink transition-colors duration-200 hover:bg-surface-raised"
      >
        {/* Bouton « tourbillon » : 3 traits qui tournent de 720° en croix (styles/motion.css) */}
        <span aria-hidden="true" className={`burger${open ? " is-open" : ""}${instant ? " is-instant" : ""}`}>
          <span className="burger-bar" />
        </span>
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-[calc(100%+8px)] rounded-2xl border border-line bg-surface p-2 shadow-2xl"
      >
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-xl px-4 text-base text-ink transition-colors duration-200 hover:bg-surface-raised"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

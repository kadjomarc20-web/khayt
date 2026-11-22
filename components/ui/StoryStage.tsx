"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import type { StoryChapter } from "@/lib/types";

/** Largeur (en fraction de chapitre) du fondu croisé entre deux chapitres */
const FADE = 0.18;
const clamp = (v: number) => Math.min(1, Math.max(0, v));

/**
 * Scène fixée à l'écran : le scroll fait défiler les chapitres (fondu croisé +
 * zoom lent de l'image, texte qui monte). Sans JS ou en mouvement réduit, le CSS
 * affiche une simple liste (chaque chapitre avec son image).
 */
export function StoryStage({ chapters }: { chapters: StoryChapter[] }) {
  const track = useRef<HTMLDivElement>(null);
  const images = useRef<(HTMLDivElement | null)[]>([]);
  const texts = useRef<(HTMLLIElement | null)[]>([]);
  const bar = useRef<HTMLSpanElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const n = chapters.length;

  useScrollProgress(track, (p) => {
    const x = p * n;
    chapters.forEach((chapter, i) => {
      const fadeIn = i === 0 ? 1 : (x - i + FADE) / (2 * FADE);
      const fadeOut = i === n - 1 ? 1 : (i + 1 + FADE - x) / (2 * FADE);
      const o = clamp(Math.min(fadeIn, fadeOut));
      const local = clamp((x - i + FADE) / (1 + 2 * FADE));
      const scale = chapter.zoom.from + (chapter.zoom.to - chapter.zoom.from) * local;
      const img = images.current[i];
      const text = texts.current[i];
      if (img) {
        img.style.opacity = String(o);
        img.style.transform = `scale(${scale.toFixed(4)})`;
      }
      if (text) {
        // Le texte sortant s'efface avant l'arrivée du suivant : jamais deux textes superposés
        const t = clamp((o - 0.5) * 2);
        text.style.opacity = String(t);
        text.style.transform = `translateY(${((1 - t) * (x < i + 0.5 ? 16 : -16)).toFixed(1)}px)`;
      }
    });
    if (bar.current) bar.current.style.transform = `scaleX(${p.toFixed(4)})`;
    if (counter.current) counter.current.textContent = String(Math.min(n, Math.floor(x) + 1)).padStart(2, "0");
  });

  return (
    <div ref={track} className="story-track" style={{ "--n": n } as React.CSSProperties}>
      <div className="story-sticky">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-5 md:px-8 lg:grid-cols-12 lg:items-center">
          <div aria-hidden="true" className="story-frame relative overflow-hidden rounded-[20px] bg-[#1a110c] lg:order-2 lg:col-span-7 lg:col-start-6">
            {chapters.map((chapter, i) => (
              <div
                key={chapter.id}
                ref={(el) => {
                  images.current[i] = el;
                }}
                className="story-img absolute inset-0 will-change-transform"
                style={{ transformOrigin: chapter.zoom.origin }}
              >
                <Image
                  src={chapter.image.src}
                  alt=""
                  fill
                  sizes="(min-width: 1200px) 660px, (min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: chapter.image.position }}
                />
              </div>
            ))}
          </div>

          <div className="story-col lg:order-1 lg:col-span-5">
            <ol className="story-texts">
              {chapters.map((chapter, i) => (
                <li
                  key={chapter.id}
                  ref={(el) => {
                    texts.current[i] = el;
                  }}
                  className="story-text"
                >
                  <span className="font-display text-xl font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{chapter.title}</h3>
                  <p className="mt-2 max-w-md text-base text-ink-muted">{chapter.body}</p>
                  <figure className="story-inline mt-5">
                    <Image
                      src={chapter.image.src}
                      alt={chapter.image.alt}
                      width={chapter.image.width}
                      height={chapter.image.height}
                      sizes="(min-width: 1024px) 460px, 100vw"
                      className="aspect-[4/3] w-full rounded-[20px] object-cover"
                      style={{ objectPosition: chapter.image.position }}
                    />
                  </figure>
                </li>
              ))}
            </ol>
            <div aria-hidden="true" className="story-progress mt-6 items-center gap-4 text-xs text-ink-muted">
              <span>
                <span ref={counter}>01</span> / {String(n).padStart(2, "0")}
              </span>
              <span className="relative h-0.5 flex-1 overflow-hidden rounded bg-line">
                <span ref={bar} className="absolute inset-0 origin-left scale-x-0 bg-accent" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

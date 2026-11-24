"use client";

import { LazyMotion, domAnimation, m, useScroll, useTransform, type MotionValue } from "framer-motion";
import type { RefObject } from "react";

type Props = { words: string[]; target: RefObject<HTMLElement | null> };

/** Mots liés au scroll (Framer Motion useScroll + useTransform) : opacité 0.4 → 1 (plancher AA grand texte : ≥ 3.38:1). */
export default function LitWords({ words, target }: Props) {
  const { scrollYProgress } = useScroll({ target, offset: ["start 0.9", "end 0.5"] });

  return (
    <LazyMotion features={domAnimation} strict>
      {words.map((word, i) => (
        <Word key={`${word}-${i}`} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </LazyMotion>
  );
}

type WordProps = { progress: MotionValue<number>; range: [number, number]; children: string };

function Word({ progress, range, children }: WordProps) {
  const opacity = useTransform(progress, range, [0.4, 1]);
  return (
    <>
      <m.span className="lit-word" style={{ opacity }}>
        {children}
      </m.span>{" "}
    </>
  );
}

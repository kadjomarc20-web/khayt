import type { CSSProperties } from "react";
import { BagViewer } from "@/components/ui/BagViewer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PhraseReveal } from "@/components/ui/PhraseReveal";
import type { BagVariant } from "@/lib/types";

type Cta = { label: string; href: string };

type Props = {
  titlePhrases: string[];
  highlight?: string;
  subtitle: string;
  primary: Cta;
  secondary: Cta;
  bags: BagVariant[];
};

export function Hero({ titlePhrases, highlight, subtitle, primary, secondary, bags }: Props) {
  return (
    <section
      data-tone="night"
      data-pause-offscreen
      aria-label="Présentation"
      className="relative isolate overflow-hidden rounded-b-[48px] bg-surface pt-28 pb-16 text-ink md:pt-36 md:pb-24 dark:shadow-[0_0_0_1px_var(--line)]"
    >
      {/* Moment fort de l'écran : la lueur derrière le sac */}
      <Glow drift className="top-[42%] left-1/2 size-[520px] -translate-x-1/2 md:size-[640px] lg:top-1/4 lg:left-[74%]" />
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-6">
          <PhraseReveal
            phrases={titlePhrases}
            highlight={highlight}
            className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.02] font-semibold text-balance"
          />
          <p className="hero-in hero-rise-sm mt-6 max-w-[34rem] text-base text-ink-muted md:text-lg" style={{ "--d": "350ms" } as CSSProperties}>{subtitle}</p>
          <div className="hero-in hero-rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--d": "500ms" } as CSSProperties}>
            <Button href={primary.href}>{primary.label}</Button>
            <Button href={secondary.href} variant="secondary" external>
              <WhatsAppIcon />
              {secondary.label}
            </Button>
          </div>
        </div>
        {/* Moment fort : le sac glisse depuis la droite (reste visible : c'est l'image LCP) */}
        <div className="hero-in hero-slide lg:col-span-5 lg:col-start-8" style={{ "--d": "200ms" } as CSSProperties}>
          <BagViewer bags={bags} />
        </div>
      </Container>
    </section>
  );
}

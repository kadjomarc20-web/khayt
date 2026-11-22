import type { ReactNode } from "react";

type Props = {
  id?: string;
  tone: "base" | "night";
  /** Bord arrondi de 48 px côté haut et/ou bas (transition sombre / clair) */
  rounded?: "top" | "bottom" | "both";
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

const radius = {
  top: "rounded-t-[48px]",
  bottom: "rounded-b-[48px]",
  both: "rounded-[48px]",
};

export function Section({ id, tone, rounded, labelledBy, className = "", children }: Props) {
  return (
    <section
      id={id}
      data-tone={tone}
      aria-labelledby={labelledBy}
      className={`relative isolate scroll-mt-20 overflow-hidden bg-surface py-16 text-ink md:py-24 ${
        rounded ? radius[rounded] : ""
      } ${tone === "night" ? "dark:shadow-[0_0_0_1px_var(--line)]" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

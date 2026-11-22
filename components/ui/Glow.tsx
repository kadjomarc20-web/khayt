type Props = {
  className?: string;
  /** dérive lente en boucle (12 s) */
  drift?: boolean;
  opacity?: number;
};

/** Halo cuivré : radial-gradient + flou 60px. Seul transform/opacity est animé. */
export function Glow({ className = "", drift = false, opacity = 0.55 }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full blur-[60px] will-change-transform ${
        drift ? "glow-drift" : ""
      } ${className}`}
      style={{
        opacity,
        background: "radial-gradient(closest-side, var(--glow), transparent)",
      }}
    />
  );
}

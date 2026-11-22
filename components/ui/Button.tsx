import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  /** Lien externe (WhatsApp) : nouvel onglet + rel sécurisé */
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-base font-medium transition duration-200 ease-brand motion-safe:hover:-translate-y-px";

const variants = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  secondary: "border border-line-strong text-ink hover:border-ink hover:bg-surface-raised",
};

export function Button({ href, children, variant = "primary", external, className = "" }: Props) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && <span className="sr-only"> (nouvel onglet)</span>}
    </a>
  );
}

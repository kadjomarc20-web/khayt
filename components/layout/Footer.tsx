import { Container } from "@/components/ui/Container";
import type { NavLink } from "@/lib/types";

type Props = { brand: string; links: NavLink[]; year: number };

export function Footer({ brand, links, year }: Props) {
  return (
    <footer className="border-t border-line py-12 text-ink">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold">{brand}</p>
          <p className="mt-2 max-w-xs text-xs text-ink-muted">Maroquinerie artisanale, Fès (Maroc).</p>
        </div>
        <nav aria-label="Pied de page">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-flex min-h-11 items-center text-xs text-ink-muted transition-colors duration-200 hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="mt-8">
        <p className="text-xs text-ink-muted">
          © {year} {brand}. Marque fictive, projet de démonstration. Visuels d&apos;illustration, prix et coordonnées à remplacer.
        </p>
      </Container>
    </footer>
  );
}

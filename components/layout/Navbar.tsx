import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import type { NavLink } from "@/lib/types";
import { MobileMenu } from "./MobileMenu";

type Props = { brand: string; links: NavLink[]; whatsappHref: string };

export function Navbar({ brand, links, whatsappHref }: Props) {
  return (
    <header className="fixed inset-x-0 top-3 z-50">
      <Container>
        <nav
          data-tone="night"
          aria-label="Navigation principale"
          className="relative flex h-14 items-center justify-between rounded-2xl border border-line bg-surface/80 pr-1.5 pl-4 text-ink backdrop-blur-md"
        >
          <a href="#top" className="font-display text-xl font-semibold">
            {brand}
          </a>
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-xs text-ink-muted transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-11 items-center gap-2 rounded-xl bg-accent px-4 text-xs font-medium text-on-accent transition-colors duration-200 hover:bg-accent-hover sm:inline-flex"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
            <MobileMenu links={links} />
          </div>
        </nav>
      </Container>
    </header>
  );
}

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type Props = { title: string; body: string; cta: { label: string; href: string }; note: string };

export function Contact({ title, body, cta, note }: Props) {
  return (
    <section id="contact" aria-labelledby="contact-titre" className="scroll-mt-20 pb-16 md:pb-24">
      <Container>
        <div
          data-tone="night"
          data-reveal-group
          className="relative isolate overflow-hidden rounded-[32px] bg-surface px-6 py-16 text-center text-ink md:px-12 md:py-24 dark:shadow-[0_0_0_1px_var(--line)]"
        >
          {/* Lueur qui monte depuis le bas à l'entrée dans l'écran */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-48 -z-10 flex justify-center opacity-50">
            <div
              className="glow-rise h-80 w-[120%] rounded-full blur-[60px] md:w-[80%]"
              style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
            />
          </div>
          <h2 id="contact-titre" className="mx-auto max-w-2xl font-display text-[1.75rem] leading-tight font-semibold text-balance md:text-[2.75rem]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-muted md:text-lg">{body}</p>
          <Button href={cta.href} external className="mt-8">
            <WhatsAppIcon />
            {cta.label}
          </Button>
          <p className="mt-4 text-xs text-ink-muted">{note}</p>
        </div>
      </Container>
    </section>
  );
}

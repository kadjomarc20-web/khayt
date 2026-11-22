import { AccordionItem } from "@/components/ui/AccordionItem";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem } from "@/lib/types";

type Props = { eyebrow: string; title: string; items: FaqItem[] };

export function Faq({ eyebrow, title, items }: Props) {
  return (
    <Section id="faq" tone="base" labelledBy="faq-titre">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <SectionHeading id="faq-titre" eyebrow={eyebrow} title={title} className="lg:col-span-4" />
        <div data-reveal className="border-t border-line lg:col-span-7 lg:col-start-6">
          {items.map((item) => (
            <AccordionItem key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { BentoGrid } from "@/components/ui/BentoGrid";
import { BentoTile } from "@/components/ui/BentoTile";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BentoItem } from "@/lib/types";

type Props = { eyebrow: string; title: string; items: BentoItem[] };

export function Details({ eyebrow, title, items }: Props) {
  return (
    <Section id="details" tone="base" labelledBy="details-titre">
      <Container>
        <SectionHeading id="details-titre" eyebrow={eyebrow} title={title} />
        <BentoGrid className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-12">
          {items.map((item) => (
            <BentoTile key={item.id} item={item} />
          ))}
        </BentoGrid>
      </Container>
    </Section>
  );
}

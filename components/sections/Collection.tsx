import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { ProductCard } from "@/components/ui/ProductCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Product } from "@/lib/types";

type Props = { eyebrow: string; title: string; intro: string; products: Product[] };

export function Collection({ eyebrow, title, intro, products }: Props) {
  return (
    <Section id="collection" tone="night" rounded="both" labelledBy="collection-titre">
      <Glow className="-bottom-56 left-1/2 h-80 w-[90%] -translate-x-1/2" opacity={0.3} />
      <Container>
        <SectionHeading id="collection-titre" eyebrow={eyebrow} title={title} intro={intro} />
        <ul className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3">
          {products.map((product, i) => (
            // Chaque carte est observée seule (mobile) ; sur grand écran, --i crée la cascade
            <li key={product.id} data-reveal-group className="reveal-card" style={{ "--i": i } as CSSProperties}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

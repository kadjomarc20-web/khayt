import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { ScrollLitQuote } from "@/components/ui/ScrollLitQuote";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ImageAsset } from "@/lib/types";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  quote: string;
  attribution: string;
  image: ImageAsset;
};

export function Atelier({ eyebrow, title, body, quote, attribution, image }: Props) {
  return (
    <Section id="atelier" tone="night" rounded="both" labelledBy="atelier-titre">
      {/* Lueur cuivrée sur le bord haut de la section */}
      <Glow className="-top-48 left-1/2 h-72 w-[90%] -translate-x-1/2" opacity={0.35} />
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading id="atelier-titre" eyebrow={eyebrow} title={title} className="lg:col-span-6" />
          <p data-reveal className="text-base text-ink-muted md:text-lg lg:col-span-5 lg:col-start-8">
            {body}
          </p>
        </div>
        <figure data-reveal className="mt-10 md:mt-14">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1200px) 1136px, 100vw"
            className="aspect-[4/3] w-full rounded-[20px] object-cover md:aspect-[16/8]"
          />
        </figure>
        <ScrollLitQuote quote={quote} attribution={attribution} className="mt-16 md:mt-24" />
      </Container>
    </Section>
  );
}

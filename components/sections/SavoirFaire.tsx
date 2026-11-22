import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ImageAsset } from "@/lib/types";

type Step = { title: string; body: string };
type Props = { eyebrow: string; title: string; intro: string; steps: Step[]; image: ImageAsset };

export function SavoirFaire({ eyebrow, title, intro, steps, image }: Props) {
  return (
    <Section id="savoir-faire" tone="base" labelledBy="savoir-faire-titre">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <SectionHeading id="savoir-faire-titre" eyebrow={eyebrow} title={title} intro={intro} />
          <ol className="mt-10 space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} data-reveal className="flex gap-4 border-t border-line pt-6">
                <span aria-hidden="true" className="font-display text-xl font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-medium">{step.title}</h3>
                  <p className="mt-1 text-base text-ink-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <figure data-reveal className="lg:col-span-7 lg:col-start-6 lg:self-center">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1200px) 680px, (min-width: 1024px) 58vw, 100vw"
            className="aspect-[4/3] w-full rounded-[20px] object-cover md:aspect-[16/10]"
          />
        </figure>
      </Container>
    </Section>
  );
}

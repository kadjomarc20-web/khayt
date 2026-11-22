import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoryStage } from "@/components/ui/StoryStage";
import type { StoryChapter } from "@/lib/types";

type Props = { eyebrow: string; title: string; intro: string; chapters: StoryChapter[] };

/** Savoir-faire raconté en chapitres fixés à l'écran (option B du récit au scroll). */
export function SavoirFaire({ eyebrow, title, intro, chapters }: Props) {
  return (
    // overflow-x-clip et non overflow-hidden : ce dernier casserait position: sticky
    <section
      id="savoir-faire"
      data-tone="base"
      aria-labelledby="savoir-faire-titre"
      className="relative scroll-mt-20 overflow-x-clip bg-surface pt-16 text-ink md:pt-24"
    >
      <Container>
        <SectionHeading id="savoir-faire-titre" eyebrow={eyebrow} title={title} intro={intro} />
      </Container>
      <StoryStage chapters={chapters} />
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoryStage } from "@/components/ui/StoryStage";
import type { StoryChapter } from "@/lib/types";

type Props = { eyebrow: string; title: string; intro: string; chapters: StoryChapter[] };

/**
 * Récit de fabrication au scroll (scène fixée, chapitres).
 * NON UTILISÉ pour l'instant : à brancher dans app/page.tsx quand une vraie
 * séquence vidéo sera disponible (remplacer les images de lib/story.ts par
 * les images extraites de la vidéo).
 */
export function FabricationStory({ eyebrow, title, intro, chapters }: Props) {
  return (
    // overflow-x-clip et non overflow-hidden : ce dernier casserait position: sticky
    <section
      id="fabrication"
      data-tone="base"
      aria-labelledby="fabrication-titre"
      className="relative scroll-mt-20 overflow-x-clip bg-surface pt-16 text-ink md:pt-24"
    >
      <Container>
        <SectionHeading id="fabrication-titre" eyebrow={eyebrow} title={title} intro={intro} />
      </Container>
      <StoryStage chapters={chapters} />
    </section>
  );
}

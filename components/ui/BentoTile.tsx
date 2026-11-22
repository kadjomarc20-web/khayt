import Image from "next/image";
import type { BentoItem } from "@/lib/types";

const glow =
  "relative overflow-hidden rounded-[20px] border border-line bg-surface-raised after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-200 after:ease-brand after:content-[''] after:bg-[radial-gradient(320px_circle_at_var(--x,50%)_var(--y,50%),color-mix(in_srgb,var(--glow)_32%,transparent),transparent_70%)] hover:after:opacity-100";

export function BentoTile({ item }: { item: BentoItem }) {
  if (item.kind === "text") {
    return (
      <article data-glow data-reveal className={`${glow} flex flex-col justify-end p-6 md:p-8 ${item.className ?? ""}`}>
        <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
        <p className="mt-3 max-w-md text-base text-ink-muted">{item.body}</p>
      </article>
    );
  }

  return (
    <figure data-glow data-reveal className={`${glow} aspect-square sm:aspect-[4/3] lg:aspect-auto ${item.className ?? ""}`}>
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
      <figcaption className="absolute bottom-4 left-4 z-10 rounded-full bg-surface/85 px-3 py-1.5 text-xs text-ink backdrop-blur-sm">
        {item.caption}
      </figcaption>
    </figure>
  );
}

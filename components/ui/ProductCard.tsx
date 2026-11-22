import Image from "next/image";
import type { Product } from "@/lib/types";
import { Button } from "./Button";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-surface-raised">
      <div className="relative aspect-[4/5] bg-[radial-gradient(120%_90%_at_50%_35%,#3a2418_0%,#1a110c_60%,#0d0907_100%)]">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1200px) 370px, (min-width: 768px) 31vw, 100vw"
          className="object-cover"
          style={{ objectPosition: product.image.position }}
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-5 lg:p-6">
        <h3 className="font-display text-2xl font-semibold md:text-xl lg:text-2xl">{product.name}</h3>
        <p className="mt-2 text-base text-ink-muted">{product.description}</p>
        <p className="mt-5 text-base font-medium">{product.price}</p>
        <p className="text-xs text-ink-muted">{product.priceNote}</p>
        <Button href={product.whatsappMessage} variant="secondary" external className="mt-6 w-full">
          <WhatsAppIcon />
          Commander
          <span className="sr-only"> la {product.name.toLowerCase()} sur WhatsApp</span>
        </Button>
      </div>
    </article>
  );
}

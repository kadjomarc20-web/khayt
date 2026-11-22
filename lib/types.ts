export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Cadrage CSS object-position, ex. "50% 40%" */
  position?: string;
};

export type NavLink = { label: string; href: string };

export type BagVariant = {
  id: "cognac" | "bordeaux" | "noir";
  name: string;
  /** Couleur de la pastille */
  swatch: string;
  image: ImageAsset;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote: string;
  image: ImageAsset;
  whatsappMessage: string;
};

export type BentoItem =
  | { kind: "image"; id: string; caption: string; image: ImageAsset; className?: string }
  | { kind: "text"; id: string; title: string; body: string; className?: string };

export type FaqItem = { id: string; question: string; answer: string };

/** Chapitre du récit au scroll : l'image zoome de `from` à `to` pendant le chapitre. */
export type StoryChapter = {
  id: string;
  title: string;
  body: string;
  image: ImageAsset;
  zoom: { from: number; to: number; origin: string };
};

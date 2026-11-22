import type { BagVariant, NavLink } from "./types";
import { waLink } from "./site";

export const navLinks: NavLink[] = [
  { label: "Savoir-faire", href: "#savoir-faire" },
  { label: "Atelier", href: "#atelier" },
  { label: "Collection", href: "#collection" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const bagVariants: BagVariant[] = [
  {
    id: "cognac",
    name: "Cognac",
    swatch: "#9a4a1f",
    image: {
      src: "/images/hero-cognac.jpg",
      alt: "Sac besace en cuir cognac à rabat et boucle en laiton",
      width: 864,
      height: 1080,
      // cadrage plus serré que les deux autres : on recentre légèrement
      position: "50% 58%",
    },
  },
  {
    id: "bordeaux",
    name: "Bordeaux",
    swatch: "#6b1620",
    image: {
      src: "/images/hero-bordeaux.jpg",
      alt: "Sac besace en cuir bordeaux à deux boucles en laiton",
      width: 864,
      height: 1080,
      position: "50% 55%",
    },
  },
  {
    id: "noir",
    name: "Noir",
    swatch: "#1b1512",
    image: {
      src: "/images/hero-noir.jpg",
      alt: "Sac besace en cuir noir aux coutures contrastées",
      width: 864,
      height: 1080,
      position: "50% 55%",
    },
  },
];

export const hero = {
  /** Le titre, découpé en phrases révélées l'une après l'autre */
  titlePhrases: ["Le cuir de Fès,", "cousu à la main."],
  /** Fin du titre mise en valeur en italique accent */
  highlight: "à la main.",
  subtitle:
    "Des sacs en cuir façonnés pièce par pièce dans un atelier de la médina, pensés pour être offerts et gardés longtemps.",
  primary: { label: "Découvrir la collection", href: "#collection" },
  secondary: {
    label: "Commander sur WhatsApp",
    href: waLink("Bonjour Maison Fassi, je souhaite des informations sur vos sacs."),
  },
  bags: bagVariants,
};

export const atelier = {
  eyebrow: "L'atelier",
  title: "Au cœur de la médina de Fès",
  body: "Le cuir que nous travaillons vient des tanneries de la ville, où les peaux sont encore teintées dans de grandes cuves de pierre.",
  quote:
    "Le cuir garde la mémoire des mains qui l'ont travaillé. Nous prenons le temps de bien le faire, pour qu'il dure.",
  attribution: "L'atelier Maison Fassi",
  image: {
    src: "/images/tannerie.jpg",
    alt: "Tannerie traditionnelle de Fès au coucher du soleil, cuves de teinture et peaux qui sèchent",
    width: 1080,
    height: 608,
  },
};

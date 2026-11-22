import type { BentoItem, FaqItem, Product } from "./types";
import { bagVariants } from "./content";
import { waLink } from "./site";

export const details = {
  eyebrow: "Détails",
  title: "Ce qui fait la différence se voit de près.",
  items: [
    {
      kind: "image",
      id: "couture",
      caption: "Fil ciré, point sellier",
      image: {
        src: "/images/couture.jpg",
        alt: "Gros plan d'une couture main au fil ciré sur cuir cognac",
        width: 1080,
        height: 1080,
      },
      className: "lg:col-span-6 lg:row-span-2",
    },
    {
      kind: "text",
      id: "texte",
      title: "Prêt à offrir",
      body: "Laiton patiné, tranches teintées et polies, doublure soignée. Chaque sac est remis dans son coffret avec un ruban, prêt à être offert.",
      className: "lg:col-span-6",
    },
    {
      kind: "image",
      id: "coffret-1",
      caption: "Le coffret",
      image: {
        src: "/images/coffret-1.jpg",
        alt: "Sac en cuir cognac posé dans un coffret brun sur papier de soie",
        width: 1080,
        height: 1080,
      },
      className: "lg:col-span-3",
    },
    {
      kind: "image",
      id: "coffret-2",
      caption: "L'écrin",
      image: {
        src: "/images/coffret-2.jpg",
        alt: "Sac en cuir dans un écrin ouvert, à côté d'une boîte fermée par un ruban cuivré",
        width: 1080,
        height: 1080,
      },
      className: "lg:col-span-3",
    },
  ] satisfies BentoItem[],
};

const descriptions: Record<string, string> = {
  cognac: "Un cuir chaud qui se patine et fonce avec les années.",
  bordeaux: "Une teinte profonde, élégante de jour comme de soir.",
  noir: "Le classique sobre, rehaussé de coutures contrastées.",
};

export const collection = {
  eyebrow: "Collection",
  title: "Trois teintes, un même geste.",
  intro: "Chaque modèle est fabriqué à la demande. Écrivez-nous pour connaître les délais et les finitions.",
  products: bagVariants.map(
    (bag): Product => ({
      id: bag.id,
      name: `Besace ${bag.name.toLowerCase()}`,
      description: descriptions[bag.id],
      // À REMPLACER : prix réels
      price: "À partir de XXX MAD",
      priceNote: "Prix indicatif à définir",
      image: bag.image,
      whatsappMessage: waLink(
        `Bonjour Maison Fassi, je suis intéressé·e par la besace ${bag.name.toLowerCase()}.`,
      ),
    }),
  ),
};

export const faq = {
  eyebrow: "Questions fréquentes",
  title: "Avant de commander",
  items: [
    {
      id: "livraison",
      question: "Livrez-vous au Maroc et à l'international ?",
      answer:
        "Oui, nous expédions au Maroc et à l'étranger. Les délais et les frais dépendent de la destination et vous sont confirmés sur WhatsApp au moment de la commande. [À compléter : transporteurs et délais types]",
    },
    {
      id: "entretien",
      question: "Comment entretenir le cuir ?",
      answer:
        "Dépoussiérez avec un chiffon doux et sec. Quelques fois par an, nourrissez le cuir avec une crème incolore, testée d'abord sur une zone discrète. S'il est mouillé, laissez-le sécher à l'air libre, loin d'une source de chaleur.",
    },
    {
      id: "personnalisation",
      question: "Peut-on personnaliser un sac ?",
      answer:
        "Des initiales ou une couleur de fil différente peuvent être envisagées selon le modèle. Décrivez votre idée sur WhatsApp : l'atelier vous dira ce qui est possible. [À compléter : options et tarifs]",
    },
  ] satisfies FaqItem[],
};

export const contact = {
  title: "Un cadeau à préparer ? Parlons-en.",
  body: "Couleur, délai, message à glisser dans le coffret : écrivez-nous, l'atelier vous répond directement.",
  cta: {
    label: "Écrire sur WhatsApp",
    href: waLink("Bonjour Maison Fassi, je prépare un cadeau et j'aimerais vos conseils."),
  },
  note: "Numéro de démonstration, à remplacer avant la mise en ligne.",
};

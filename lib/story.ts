import type { ImageAsset, StoryChapter } from "./types";

// Remplaçable plus tard par une vraie séquence vidéo (option A) : seules les images changent.
const artisan: ImageAsset = {
  src: "/images/artisan.jpg",
  alt: "Artisan maroquinier cousant à la main le rabat d'un sac en cuir cognac, peaux colorées suspendues derrière lui",
  width: 1080,
  height: 608,
  position: "42% 50%",
};

export const savoirFaire = {
  eyebrow: "Savoir-faire",
  title: "De la peau au sac, quatre gestes.",
  intro:
    "Nos sacs naissent sur un établi, pas sur une chaîne. Faites défiler pour suivre la fabrication, étape par étape.",
  chapters: [
    {
      id: "peau",
      title: "Choisir la peau",
      body: "Chaque peau est inspectée à la main : sa souplesse, son grain, ses nuances guident la coupe.",
      // gros plan sur les peaux suspendues, en haut à gauche de la photo
      image: { ...artisan, alt: "Peaux de cuir teintées suspendues dans l'atelier", position: "0% 50%" },
      zoom: { from: 2.2, to: 1.8, origin: "0% 0%" },
    },
    {
      id: "coupe",
      title: "Couper et préparer",
      body: "Les pièces sont tracées, coupées, puis les tranches sont affinées, teintées et polies.",
      image: artisan,
      zoom: { from: 1.25, to: 1, origin: "45% 55%" },
    },
    {
      id: "couture",
      title: "Coudre au point sellier",
      body: "Deux aiguilles, un fil de lin ciré : un point serré à la main, qui tient même si un fil venait à céder.",
      image: {
        src: "/images/couture.jpg",
        alt: "Gros plan d'une aiguille tirant un fil ciré dans une couture sur cuir cognac",
        width: 1080,
        height: 1080,
      },
      zoom: { from: 1.3, to: 1, origin: "60% 45%" },
    },
    {
      id: "sac",
      title: "Le sac prend forme",
      body: "Boucle en laiton, rabat, bandoulière : dernier contrôle, et le sac est prêt à rejoindre son coffret.",
      image: {
        src: "/images/hero-cognac.jpg",
        alt: "Sac besace en cuir cognac terminé, avec sa boucle en laiton",
        width: 864,
        height: 1080,
        position: "50% 55%",
      },
      zoom: { from: 1.15, to: 1, origin: "50% 55%" },
    },
  ] satisfies StoryChapter[],
};

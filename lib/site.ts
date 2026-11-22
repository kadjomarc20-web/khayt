export const site = {
  name: "Maison Fassi",
  // À REMPLACER : URL de production
  url: "https://maison-fassi.example",
  title: "Maison Fassi — Sacs en cuir cousus main à Fès",
  description:
    "Maroquinerie artisanale de Fès : sacs en cuir cousus à la main, livrés en coffret. Découvrez la collection et commandez sur WhatsApp.",
  // À REMPLACER : numéro WhatsApp au format international, sans + ni espaces
  whatsappNumber: "212600000000",
  year: 2026,
} as const;

/** Lien wa.me avec un message pré-rempli. */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

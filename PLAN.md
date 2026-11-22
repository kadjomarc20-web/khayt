# Plan — site vitrine Maison Fassi

## Architecture (Next.js App Router, TypeScript, Tailwind, Framer Motion)

Site statique (aucune API ni base de données : la commande passe par WhatsApp). Pages = assemblage, composants = affichage, hooks = logique, `lib/` = contenu et constantes. ~150 lignes max par fichier.

```
app/
├── layout.tsx              # lang="fr", polices next/font, métadonnées SEO, script anti-flash du thème
├── page.tsx                # assemble les sections en leur passant le contenu de lib/content.ts
├── globals.css             # tokens (clair, sombre, tone night), keyframes, reduced-motion
├── opengraph-image.tsx     # image OG générée (next/og)
├── icon.svg
├── robots.ts / sitemap.ts
components/
├── layout/                 # Navbar (+ MobileMenu), Footer
├── sections/               # Hero, Savoirfaire, Atelier, Details, Collection, Faq, Contact
└── ui/                     # Button, Container, Section (tone + bords), Reveal, Glow,
                            # ThemeToggle, ColorSwatches, BagViewer, WordsReveal,
                            # ScrollLitQuote, BentoTile, AccordionItem, WhatsAppIcon
hooks/                      # useTheme, usePointerGlow
lib/
├── content.ts              # tous les textes, images, prix placeholder (typés)
├── site.ts                 # nom, URL, numéro WhatsApp à remplacer, helper waLink()
└── types.ts
public/images/              # 8 visuels fournis, renommés
```

- Composants serveur par défaut ; `"use client"` seulement pour : thème, menu mobile, sélecteur de couleur, reveals, citation au scroll, bento (souris), accordéon.
- Thème : classe `dark` sur `<html>`, préférence système par défaut, choix mémorisé (localStorage, try/catch), script inline dans `<head>` pour éviter le flash.
- WhatsApp : `https://wa.me/<NUMERO>?text=<message encodé>` ; numéro `212600000000` marqué `// À REMPLACER`. Le bouton de chaque carte pré-remplit la couleur choisie.
- Contenu honnête : prix « à partir de XXX MAD » marqués comme fictifs, aucun avis, chiffre ou certification inventé ; délais de livraison écrits comme « à préciser ».

## Étapes

1. **(maintenant)** Plan + DESIGN.md → validation.
2. Init du projet (create-next-app, Tailwind, ESLint, Framer Motion), tokens dans `globals.css`, polices, layout, Navbar + thème.
3. Hero (titre mot par mot, sac + 3 pastilles, lueur), vérif. 360 px.
4. Sections une par une : Savoir-faire → Atelier (citation au scroll) → Détails (bento) → Collection → FAQ → Contact → Footer.
5. SEO : métadonnées, OG image, robots, sitemap.
6. Vérifs : `npm run build`, `npm run lint`, captures Playwright 360/768/1280 × clair/sombre (+ mode mouvement réduit), corrections, Lighthouse mobile (Chromium local), puis commit et push sur `claude/maison-fassi-showcase-x6l18n`.

## Points à confirmer

- Numéro WhatsApp : placeholder par défaut.
- URL du site pour les métadonnées : `https://maison-fassi.example` par défaut.

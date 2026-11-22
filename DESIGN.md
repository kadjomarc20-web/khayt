# DESIGN.md — Maison Fassi

> Marque fictive, projet test. Ce fichier est la référence visuelle : toute nouvelle page ou section s'y conforme.

## 1. Intention

Maroquinerie artisanale de Fès. Ambiance : atelier le soir, cuir chaud, laiton patiné. Calme et premium : beaucoup d'air, un seul accent cuivre, typographie à empattements pour les titres.

Règle couleur (skill *mariage-des-couleurs*) : **2 discrètes + 1 accent**.

| Rôle | Part | Clair | Sombre |
|---|---|---|---|
| Dominante (`surface`) | ~60 % | Blanc lin `#FAF6F0` | Brou de noix `#120D0A` |
| Secondaire (`surface-raised`, `ink`) | ~30 % | Sable `#F2EADF` / encre `#1E1713` | Cuir fumé `#1E1612` / ivoire `#F5EDE3` |
| Accent (`accent`) | ~10 % | Cuivre brûlé `#A8481A` | Cuivre clair `#E8834A` |

L'accent n'est utilisé que pour : bouton principal, un mot clé par titre au plus, liens, pastille active, lueurs. Jamais pour du texte courant ni de grandes surfaces.

## 2. Tokens couleur

Nommage par rôle. Valeurs exposées en variables CSS (canaux RGB pour permettre `rgb(var(--x) / <alpha>)` dans Tailwind).

### Thème clair (`:root`)

| Token | Hex | Usage |
|---|---|---|
| `--surface` | `#FAF6F0` | fond de page / sections claires |
| `--surface-raised` | `#F2EADF` | cartes, tuiles bento, accordéon |
| `--line` | `#E2D6C6` | séparateurs décoratifs (non porteurs d'info) |
| `--line-strong` | `#8C7A6B` | bordures d'éléments d'interface (bouton secondaire, focus de champ) |
| `--ink` | `#1E1713` | texte principal, titres |
| `--ink-muted` | `#5C4D43` | texte secondaire, légendes |
| `--accent` | `#A8481A` | CTA, liens, pastille active |
| `--accent-hover` | `#8F3C14` | survol du CTA |
| `--accent-soft` | `#F4E1D2` | fonds d'étiquettes, halo doux |
| `--on-accent` | `#FFF9F3` | texte sur bouton accent |

### Thème sombre (`html.dark`)

| Token | Hex | Usage |
|---|---|---|
| `--surface` | `#120D0A` | fond |
| `--surface-raised` | `#1E1612` | cartes |
| `--line` | `#3A2D25` | séparateurs décoratifs |
| `--line-strong` | `#7D6A5C` | bordures d'interface |
| `--ink` | `#F5EDE3` | texte principal |
| `--ink-muted` | `#B9A898` | texte secondaire |
| `--accent` | `#E8834A` | CTA (accent éclairci pour fond sombre) |
| `--accent-hover` | `#F09A66` | survol |
| `--accent-soft` | `#3B2318` | fonds d'étiquettes |
| `--on-accent` | `#1A0F08` | texte **sombre** sur accent clair |

### Thème local des sections (alternance)

Chaque section porte `data-tone="base"` ou `data-tone="night"` :

- `base` : suit le thème global (clair ou sombre).
- `night` : force la palette sombre. En thème global sombre, `night` descend d'un cran (`--surface: #0A0705`, `--surface-raised: #17110D`) pour que l'alternance reste lisible ; le bord arrondi de 48 px et la lueur de bord la soulignent.

Résultat : **même structure dans les deux thèmes**, seule la profondeur change.

### Contrastes mesurés (WCAG 2.x, script Python, formule de luminance relative)

| Paire | Clair | Sombre | Exigence | OK |
|---|---|---|---|---|
| ink / surface | 16.43 | 16.65 | 4.5 | ✅ |
| ink / surface-raised | 14.83 | 15.36 | 4.5 | ✅ |
| ink-muted / surface | 7.51 | 8.38 | 4.5 | ✅ |
| ink-muted / surface-raised | 6.78 | 7.74 | 4.5 | ✅ |
| accent / surface (liens, texte accent) | 5.41 | 7.15 | 4.5 | ✅ |
| accent / surface-raised | 4.88 | 6.60 | 4.5 | ✅ |
| on-accent / accent (bouton) | 5.57 | 6.97 | 4.5 | ✅ |
| on-accent / accent-hover | 7.12 | 8.53 | 4.5 | ✅ |
| ink / accent-soft | 13.94 | 12.58 | 4.5 | ✅ |
| line-strong / surface (bordures UI) | 3.82 | 3.76 | 3.0 | ✅ |
| line / surface | 1.33 | 1.45 | décoratif seulement | — |

Le texte posé sur photo reçoit toujours un voile `surface` à 70 % minimum (re-mesuré à la construction).

## 3. Typographie

Chargées via `next/font/google`, `display: swap`, sous-ensemble `latin` (accents français inclus).

- Titres : **Cormorant Garamond** 500/600 (italique 500 pour un mot clé).
- Texte : **Inter** 400/500.

| Token | Taille | Interligne | Usage |
|---|---|---|---|
| `text-xs` | 14 px | 20 px | légendes, prix, étiquettes |
| `text-base` | 16 px | 26 px | texte courant |
| `text-lg` | 20 px | 30 px | sous-titres, chapeaux |
| `text-2xl` | 32 px | 38 px | titres de section (mobile 28 px) |
| `text-display` | 56 → 72 px | 1.02 | titre du hero, `clamp(40px, 8vw, 72px)` pour tenir en 360 px |

Casse normale partout (majuscule en début de phrase seulement). Longueur de ligne du texte : 60–70 caractères max.

## 4. Espacements et grille

- Unité de base **4 px** (échelle Tailwind par défaut).
- Conteneur : `max-width: 1200px`, marges latérales 20 px (mobile) / 32 px (≥ 768).
- Grille **12 colonnes**, gouttière 24 px (16 px mobile).
- Entre sections : **96 px** (`py-24`), **64 px** sur mobile (`py-16`).
- Rayons : 12 px (boutons, champs), 20 px (cartes), 48 px (bord entre sections).
- Cibles tactiles ≥ 44 × 44 px.

## 5. Mouvement

Courbe d'entrée commune : `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`. On anime **uniquement `transform` et `opacity`** (les lueurs sont des calques flous pré-rendus qu'on déplace en `transform`). Un seul moment fort par écran.

| # | Élément | Déclencheur | Effet | Durée | Courbe | Mouvement réduit |
|---|---|---|---|---|---|---|
| 1 | Titre du hero | chargement | mots un par un, opacité 0→1 + `translateY(0.4em)`→0, décalage 70 ms | 600 ms / mot | ease-out | titre affiché d'emblée |
| 2 | Image du sac | clic pastille | fondu croisé + `scale(0.95)`→1 (images empilées, cadre à ratio fixe : aucun saut) | 500 ms | ease-out | fondu 200 ms sans échelle |
| 3 | Lueur orange hero | permanent | `radial-gradient` + `blur(60px)`, dérive `translate` + `scale` lente en boucle | 12 s | ease-in-out alterné | statique |
| 4 | Sections | scroll (entrée) | opacité 0→1 + `translateY(24px)`→0, une fois | 700 ms | ease-out | apparition directe |
| 5 | Bord sombre/clair | statique | `rounded-b-[48px]` / `rounded-t-[48px]` + lueur cuivre sur le bord | — | — | identique |
| 6 | Citation tannerie | progression du scroll | chaque mot opacité 0.25→1 (Framer `useScroll` + `useTransform`) | lié au scroll | linéaire | texte plein |
| 7 | Cartes bento | survol souris | `radial-gradient` qui suit `--x`/`--y` (calque en opacité) | 200 ms d'apparition | ease-out | lueur fixe au centre, sans suivi |
| 8 | FAQ | clic | `grid-template-rows: 0fr`→`1fr` + opacité, `aria-expanded` / `aria-controls` | 300 ms | ease-out | ouverture instantanée |
| 9 | Contact | scroll (entrée) | lueur qui monte depuis le bas : `translateY(40%)`→0 + opacité | 1000 ms | ease-out | lueur statique |
| 10 | Boutons, liens | survol / focus | changement de fond + `translateY(-1px)` ; anneau de focus 2 px accent, offset 2 px | 180 ms | ease-out | sans translation |

Note sur #8 : `grid-template-rows` n'est pas `transform`/`opacity`, mais c'est l'exception demandée par le brief ; elle ne touche que le panneau ouvert.

## 6. Images

| Fichier | Source | Usage |
|---|---|---|
| `hero-cognac.jpg` | sac cognac (cadrage plus serré) | hero + carte collection |
| `hero-bordeaux.jpg` | sac bordeaux | hero + carte collection |
| `hero-noir.jpg` | sac noir | hero + carte collection |
| `artisan.jpg` | artisan à l'établi | Savoir-faire |
| `tannerie.jpg` | tannerie au couchant | Atelier |
| `couture.jpg` | gros plan couture | Bento |
| `coffret-1.jpg`, `coffret-2.jpg` | sac en coffret | Bento |

Hero : cadre à ratio fixe `4/5`, `object-cover`, `object-position` réglé par image, fond dégradé radial brun derrière pour fondre les bords ; jamais d'étirement. `priority` sur l'image cognac seulement, `sizes` précis, les autres en lazy.

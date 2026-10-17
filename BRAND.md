# Wunderlab brand kit

**Concept:** an Erlenmeyer flask (the lab) with brass sparks (the *wunder*). The two dots in the liquid form a colon, a nod to the `:emote:` shortcuts; the flask's neck and rim echo `#`-style structure.

## Colours
| Name | Hex | Use |
|---|---|---|
| Ink | `#17122B` | text, dark surfaces |
| Paper | `#F5F4FB` | light surfaces |
| Wonder violet | `#6B4EFF` | gradient start |
| Reagent teal | `#2FD9BC` | gradient end |
| Brass | `#FFC24D` | sparks, highlights |

Liquid gradient: violet to teal, left to right.

## Type
Logo: Lora SemiBold (already outlined in the SVGs, no font needed). Interface and docs: Poppins. Both are open-licence Google Fonts.

## Usage
- Clear space: a quarter of the flask height on every side.
- Minimum size: mark 16 px, horizontal logo 120 px wide. Below 32 px use `favicon.svg`, which drops the sparks and enlarges the liquid.
- Light backgrounds: `wunderlab-logo-*.svg`. Dark backgrounds: `*-reversed.svg`. Single-colour print, stamps, embroidery: `wunderlab-mark-black.svg` / `-white.svg`.

## Which file where
| Need | File |
|---|---|
| Web favicon | `svg/favicon.svg` + `png/icons/favicon.ico` + `favicon-16/32/48.png` |
| iOS / Apple touch icon | `png/icons/apple-touch-icon-180.png`, `app-icon-ios-1024.png` (square, no rounding; iOS masks it) |
| Android adaptive icon | foreground `android-adaptive-foreground-432.png`, background colour `#17122B` |
| PWA manifest | `pwa-192.png`, `pwa-512.png`, `pwa-maskable-512.png` |
| Desktop (Windows) | `png/icons/windows-app.ico` |
| Desktop (macOS / Linux) | `app-icon-1024.png` (make `.icns` with `iconutil` on a Mac; use PNGs on Linux) |
| GitHub / Patreon / Discord avatar | `png/social/avatar-512.png` |
| Link previews | `png/social/social-card-1200x630.png` |

## HTML head snippet
```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="apple-touch-icon" href="/apple-touch-icon-180.png">
<meta name="theme-color" content="#17122B">
<meta property="og:image" content="/social-card-1200x630.png">
```

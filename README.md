# SATORI — Landing Page README

**SATORI** presents a fictional oriental spa and ritual house through a single-scroll narrative built around one promise: *where silence becomes luxury*. The project demonstrates vanilla web development—no frameworks, dependencies, or build tools required.

## Core Concept

The site trades feature lists for atmosphere. Rather than selling treatments, it moves visitors through nine scenes—hero, philosophy, signature rituals, spaces, the wellness journey, architecture and materials, guest reflections, reservation, and a closing footer—each composed to change the way time feels. Water, light, ritual, and time carry the story.

## Technical Highlights

The implementation uses **plain HTML, CSS, and JavaScript** with `IntersectionObserver` and `requestAnimationFrame` for scroll reveals and cinematic transitions. Key features include:

- Fully self-contained `index.html`—every style and script lives inline
- Semantic markup with a single `<h1>` and comprehensive alt text
- A "calm display mode" that honors reduced-motion, plus an optional atmosphere/sound toggle
- Responsive 12-column layout with dedicated mobile navigation
- WCAG-minded contrast across both light and dark surfaces
- Self-hosted, optimized assets in WebP and H.264 formats, cached immutably

## Design System

A warm neutral palette anchors the brand: Ivory (`#F4EFE6`) and Sand (`#EDE6D8`) surfaces over Charcoal Ink (`#26241F`) text, deepening into night tones (`#10181D`, `#0C1216`) for the reservation and closing scenes. Two accents carry the warmth—Bronze (`#9C7B52`) on light, Amber (`#C99B62`) on dark. Typography pairs Cormorant Garamond for display headings with Work Sans for body and UI.

## Getting Started

Run locally with any static server: `python3 -m http.server 8000`

**Live site:** [satori-spa-theta.vercel.app](https://satori-spa-theta.vercel.app)

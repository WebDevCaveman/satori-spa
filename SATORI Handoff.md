# SATORI — Handoff Package (Phase 16)
Prototype: `SATORI Site.dc.html` · Approved through Phase 15 · Date: 2026-07-11
Companion: `SATORI Acceptance Record.md` (approvals, deviations, punch list) · Full spec package: `uploads/SATORI_Claude_Design_Package_v1_0/`

## Instruction to Claude Code
Implement the approved prototype faithfully. **Do not redesign.** Treat unexplained deviation as a defect.
When a technical constraint requires change: document it → propose the smallest viable alternative → explain visual and UX impact → request approval before implementation.
All page copy is English only; placeholder/sample data is fictional and marked in the Acceptance Record.

## Page map (single page, section ids)
1. `#hero` — 01 Hero. Timed reveal: darkness → scene+mist → wordmark → headline → support → delayed "Enter SATORI" cue. Fixed nav + fixed sound toggle appear after reveal.
2. `#philosophy` — 02 Philosophy. Sticky pause, editorial text + 4:5 image; group reveal on entry.
3. `#rituals` — 03 Signature Rituals. Vertical index (8 rituals, one expanded at a time) + sticky cinematic panel with crossfade; "Reserve this ritual" deep-links into booking with preselection.
4. Spaces intro + `#spaces` — 04 Spaces. 760vh scroll-driven sticky sequence, 7 scenes, crossfade + slow push-in (scale 1.075→1), clickable progress dashes (right edge).
5. `#journal` — 05 Wellness Journey. 6 stages (Arrival…Return), index row + hairline progress + text→media sequenced swap.
6. `#architecture` — 06 Architecture & Materials. 3 material studies, per-element reveal.
7. `#reflections` — 07 Guest Reflections. 5 editorial quotes (asymmetric rhythm), 52px circular portraits, per-quote reveal; fictional-placeholder note.
8. `#reserve` — 08 Reservation. Night scene backdrop (dims 0.42→0.22 during flow), entry → 5-step flow → confirmation.
9. `#visit` — 09 Closing + footer. Seamless water-video loop + "Return to presence." + minimal footer.

## Component map
- **Nav** (fixed): wordmark, 5 section anchors (hidden ≤820px), Reserve link; transparent-over-hero → ivory bg past hero.
- **Sound toggle** (fixed, bottom-right): wave icon (3 bars + strike when muted), label hidden ≤820px. Labels: "Enable atmosphere" / "Mute atmosphere".
- **Skip link**: hidden, appears on keyboard focus, targets `#philosophy`.
- **Ritual index item**: name-button (aria-expanded), grid-rows expand animation, meta row, "Reserve this ritual".
- **Scene dash rail** (Spaces): focusable buttons, active = 28px amber; focus = 3px thick amber; click scrolls to scene window.
- **Booking panel**: progress label + hairline, back link, step container (fade-in 0.7s), option rows (border-bottom selection), day/time chips (rect, selected = ivory fill), labeled inputs with inline errors, review rows + Edit links, totals.
- **Footer**: wordmark, Visit / Contact columns, quiet Reserve link, calm-mode toggle, Privacy/Accessibility.

## Interaction map
- Anchors: CSS smooth scroll (auto under reduced motion).
- Rituals: click/keyboard ↑↓ moves selection; text swaps first, media crossfades 550ms later.
- Spaces: scroll position → active scene (prog·7); dash click scrolls to (i+0.5)/7 of the section scroll span.
- Journey: click/←→ keys; text fades out 350ms → swap → media crossfade 550ms; instant under reduced motion.
- Booking: one decision per step; Continue validates calmly (no disabled traps); back preserves data; state persisted to `localStorage['satori_booking_v1']`, cleared on confirm; day 3 simulates a fully-booked day (empty state); availability check 700ms, confirm 1200ms loading.
- Ritual multi-select: up to 3; total duration = Σ + 30min transitions; time chips filtered so start + total ≤ 20:00 close; chosen time invalidated if it stops fitting.
- Sound: WebAudio ambient (opt-in only) ↔ closing-video water audio, crossfaded by scroll proximity to footer; hard rule — nothing audible before explicit opt-in (400ms enforcement interval).
- Closing video: no autoplay attribute; JS starts muted playback when section within 1.5×viewport; 0.5× playbackRate; two copies crossfade 1.4s before clip end (seamless loop).

## State map (booking)
Steps 1-5: sanctuary → ritual(s) → day+time → preferences (guests 1/2, name, guest-2 name, email, notes) → review. States: default, loading (availability/confirm), empty (full day), field errors (aria-describedby), step error line, confirmation, reset ("Plan another visit").

## Design tokens (from approved design system)
- Ivory `#F4EFE6` · warm sand `#EDE6D8` · charcoal ink `#26241F` · night `#10181D`/`#0C1216` · bronze `#9C7B52` (on light) / amber `#C99B62` (on dark) · error clay `#D9A08A`.
- Type: Cormorant Garamond (display, 500/600) + Work Sans (UI/body, 400/500). Display 66/54/52/46/34; body 15-19; micro 11-12 uppercase tracked.
- 12-col grid, 24px gutter, 8vw margins; whitespace scale 80-200px; NO border-radius (portraits excepted), no shadows, selection = underline/border, focus = bronze outline or 2px underline.
- Breakpoints: ≤820px (single column, nav reduced, sequences shortened), ≤480px (type step-down).

## Asset manifest
| ID | Section | Type | URL | Desktop/Mobile | Reduced motion | Alt / Description | Status |
|---|---|---|---|---|---|---|---|
| HERO-001 | Hero | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_124910_c6923b47-50fc-494c-a68e-687e7b2b40dd.png | desktop+mobile | poster/still per reduced-motion | Dawn reflection pool, figure in robe, mist | Final (AI-generated, replace with brand shoot) |
| PHIL-002 | Philosophy | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_130751_4eda69fe-43c5-4134-aa68-d277bc105f7e.png | desktop+mobile | poster/still per reduced-motion | Arrival court — reflecting pool, maple, cedar wall | Final (AI-generated, replace with brand shoot) |
| RITU-003 | Rituals | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_131256_fb2b873b-3827-49d0-9953-a0854cf5840c.png | desktop+mobile | poster/still per reduced-motion | Water Rituals — cinematic scene | Final (AI-generated, replace with brand shoot) |
| RITU-004 | Rituals | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_132328_45d9b17f-6b19-4c5b-b422-364b46bad11c.png | desktop+mobile | poster/still per reduced-motion | Head & Scalp Rituals — cinematic scene | Final (AI-generated, replace with brand shoot) |
| RITU-005 | Rituals | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_131258_f35ca9ab-1623-48ac-be77-e5cc4bd4be00.png | desktop+mobile | poster/still per reduced-motion | Body Restoration — cinematic scene | Final (AI-generated, replace with brand shoot) |
| RITU-006 | Rituals | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_132330_7074a60c-e6dc-4d77-a6ad-c2d5b4d80e32.png | desktop+mobile | poster/still per reduced-motion | Facial Renewal — cinematic scene | Final (AI-generated, replace with brand shoot) |
| RITU-007 | Rituals | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_132332_28eadd45-16be-4c7a-a6cc-7d755f34906e.png | desktop+mobile | poster/still per reduced-motion | Stone & Heat Therapy — cinematic scene | Final (AI-generated, replace with brand shoot) |
| RITU-008 | Rituals | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_131259_c1c8c6e6-e5d6-4f28-bf94-615ff193fa69.png | desktop+mobile | poster/still per reduced-motion | Tea & Breath Ceremonies — cinematic scene | Final (AI-generated, replace with brand shoot) |
| RITU-009 | Rituals | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_132335_69b79bab-bc68-47b4-9ad7-a8493d484d4c.png | desktop+mobile | poster/still per reduced-motion | Couples — cinematic scene | Final (AI-generated, replace with brand shoot) |
| RITU-010 | Rituals | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_132337_8f59aa77-2e79-43bb-8615-052112467a19.png | desktop+mobile | poster/still per reduced-motion | Private Sanctuary Journeys — cinematic scene | Final (AI-generated, replace with brand shoot) |
| SPAC-011 | Spaces | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_135918_f76576a6-35e1-4d3d-a42e-4573efafb780.png | desktop+mobile | poster/still per reduced-motion | Stone Corridor — spatial sequence frame | Final (AI-generated, replace with brand shoot) |
| SPAC-012 | Spaces | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_133434_35ec4cef-8664-4eff-900f-4843e3c33fe1.png | desktop+mobile | poster/still per reduced-motion | Timber Threshold — spatial sequence frame | Final (AI-generated, replace with brand shoot) |
| SPAC-013 | Spaces | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_133435_e1845644-5e97-4339-b621-79f6fbff3079.png | desktop+mobile | poster/still per reduced-motion | Reflection Hall — spatial sequence frame | Final (AI-generated, replace with brand shoot) |
| SPAC-014 | Spaces | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_133437_8b58ce17-836c-4fcd-8c37-5f04c314ae93.png | desktop+mobile | poster/still per reduced-motion | Water Sanctuary — spatial sequence frame | Final (AI-generated, replace with brand shoot) |
| SPAC-015 | Spaces | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_133439_06d0a285-cf5d-4ab2-8486-3722cd60d82a.png | desktop+mobile | poster/still per reduced-motion | Forest Walk — spatial sequence frame | Final (AI-generated, replace with brand shoot) |
| SPAC-016 | Spaces | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_133442_c9d3b155-cb84-473c-baf0-4b1219b5b949.png | desktop+mobile | poster/still per reduced-motion | Infinity Sanctuary — spatial sequence frame | Final (AI-generated, replace with brand shoot) |
| SPAC-017 | Spaces | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_133443_8b9990d8-49a3-4688-90d2-550c03ec1d39.png | desktop+mobile | poster/still per reduced-motion | Moon Garden — spatial sequence frame | Final (AI-generated, replace with brand shoot) |
| JOUR-018 | Journey | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_142522_b0f92e43-be6d-4aec-b66c-a7a05c7dd0fd.png | desktop+mobile | poster/still per reduced-motion | Arrival — human presence gesture | Final (AI-generated, replace with brand shoot) |
| JOUR-019 | Journey | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_142523_96781924-3dc5-4f2a-93fe-6e4cac71b66e.png | desktop+mobile | poster/still per reduced-motion | Preparation — human presence gesture | Final (AI-generated, replace with brand shoot) |
| JOUR-020 | Journey | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_142524_c1c132a6-357e-4657-b03c-c3c659e127a4.png | desktop+mobile | poster/still per reduced-motion | Ritual — human presence gesture | Final (AI-generated, replace with brand shoot) |
| JOUR-021 | Journey | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_142656_ea48b4ce-7151-4440-a9c8-31a1a1e3b25d.png | desktop+mobile | poster/still per reduced-motion | Rest — human presence gesture | Final (AI-generated, replace with brand shoot) |
| JOUR-022 | Journey | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_131259_c1c8c6e6-e5d6-4f28-bf94-615ff193fa69.png | desktop+mobile | poster/still per reduced-motion | Renewal — human presence gesture | Final (AI-generated, replace with brand shoot) |
| JOUR-023 | Journey | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_142527_fb69e579-9b26-41fe-9db8-416a8b91bea9.png | desktop+mobile | poster/still per reduced-motion | Return — human presence gesture | Final (AI-generated, replace with brand shoot) |
| REFL-024 | Reflections | Portrait | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_144025_4d6c77b8-46f1-4f04-b801-f67f06516b99.png | desktop+mobile | poster/still per reduced-motion | guest portrait — elena (fictional) | Final (AI-generated, replace with brand shoot) |
| REFL-025 | Reflections | Portrait | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_145418_edd88817-eab5-4b1c-9502-2a50be17f54c.png | desktop+mobile | poster/still per reduced-motion | guest portrait — marc (fictional) | Final (AI-generated, replace with brand shoot) |
| REFL-026 | Reflections | Portrait | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_145419_7ff6be4e-3f3f-4afb-9835-8d73c4bdb469.png | desktop+mobile | poster/still per reduced-motion | guest portrait — ingrid (fictional) | Final (AI-generated, replace with brand shoot) |
| REFL-027 | Reflections | Portrait | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_144026_19e9e5b1-1827-4767-bfa2-999036544dce.png | desktop+mobile | poster/still per reduced-motion | guest portrait — tomasz (fictional) | Final (AI-generated, replace with brand shoot) |
| REFL-028 | Reflections | Portrait | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_145422_4b0f7468-cfed-4781-b418-dc7acd924a76.png | desktop+mobile | poster/still per reduced-motion | guest portrait — sofia (fictional) | Final (AI-generated, replace with brand shoot) |
| RESE-029 | Reservation | Image | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_150232_ffe7ad92-65c7-4402-a115-433a124cfd26.png | desktop+mobile | poster/still per reduced-motion | Night sanctuary — blue hour, lanterns, dark pool | Final (AI-generated, replace with brand shoot) |
| CLOS-030 | Closing | Image (poster / reduced-motion still) | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_154453_9dc9a353-8206-4408-ae96-c5e5b572668e.png | desktop+mobile | poster/still per reduced-motion | Still dark water, faint lantern reflection | Final (AI-generated, replace with brand shoot) |
| CLOS-031 | Closing | Video 10s loop (played 0.5x, dual-copy crossfade) | https://d8j0ntlcm91z4.cloudfront.net/user_3GJ9WuPW4IStx01Ioprbsjfo4bm/hf_20260711_155611_8a21ba59-ed4b-495d-81a0-3ae0ac9a923a.mp4 | desktop+mobile | poster/still per reduced-motion | Still water, trembling lantern reflection | Final (AI-generated, replace with brand shoot) |

All media AI-generated to the package's cinematic direction (lenses, restrained grade, low saturation). Replace with a real brand shoot before launch; keep compositions and light.

## Implementation requirements (from package)
Semantic HTML; responsive CSS architecture; accessible components; progressive enhancement; reduced-motion support (designed variant, not disabled); lazy media loading; mobile media fallbacks; optimized formats (AVIF/WebP, H.265/VP9 for the loop); no layout shift (reserve aspect-ratio boxes); focus management; tested booking states; performance budgets before asset integration. GSAP/Three.js allowed only with usability + fallback preserved.

## Technical risks / notes
1. Muted-autoplay policies vary — keep the JS-initiated, always-muted-first playback pattern and the audibility guard.
2. Long sticky sections (760vh) need testing on iOS Safari (rubber-banding) and low-power devices; scale push-in uses transform only.
3. The dual-video crossfade doubles decode cost briefly — consider a properly loop-cut clip in production to drop the second element.
4. WebAudio ambient is synthesized (noise buffer + LP filter); replace with a recorded ambience file if fidelity matters; keep opt-in + crossfade rules.
5. localStorage booking persistence: version the key on schema change.
6. Prices/dates/contact are fictional; booking backend, real availability, and email confirmation are out of scope of the prototype.

## Definition of faithful
Timings (reveal delays, 0.7-1.6s fades, 0.9s progress), easings (ease/linear only), palette, spacing, and copy in this prototype are approved design decisions — port them as-is.

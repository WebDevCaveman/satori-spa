# SATORI — CLAUDE DESIGN BUILD PACKAGE

**Version:** 1.0  
**Purpose:** Build the complete SATORI Oriental Spa website in Claude Design  
**Operating mode:** Sequential, verified, user-approved production  
**Primary rule:** Never continue to the next phase without explicit user approval

---

## 1. Your Role

You are working inside Claude Design as the multidisciplinary production team for SATORI.

Act simultaneously as:

- creative director,
- digital art director,
- luxury hospitality brand designer,
- UX architect,
- editorial UI designer,
- interaction designer,
- motion director,
- accessibility-aware product designer,
- and prototype quality reviewer.

Your task is not to produce a mood board, a written proposal, or a generic landing page.

Your task is to build a complete, high-fidelity, responsive, interactive prototype for SATORI directly in Claude Design.

---

## 2. Non-Negotiable Operating Protocol

You must work in small, sequential phases.

For every phase:

1. Read only the files listed for that phase.
2. Summarize what you are about to build in no more than 10 concise points.
3. Build or modify only the scope assigned to that phase.
4. Run the exact verification checklist defined for that phase.
5. Show the user what was completed.
6. Report:
   - what is finished,
   - what remains unresolved,
   - which assumptions were made,
   - and any conflicts found between files.
7. Ask the user for explicit approval.
8. Stop completely.

Do not proceed until the user clearly responds with an approval such as:

- “Akceptuję”
- “Approved”
- “Przejdź dalej”
- or another unambiguous confirmation.

Silence is not approval.

A correction request is not approval.

Partial approval is not approval for the next phase.

If the user asks for changes:

1. apply the changes,
2. repeat the verification,
3. present the revised result,
4. ask for approval again,
5. stop.

---

## 3. Forbidden Behavior

Do not:

- build the entire site in one pass,
- skip approval gates,
- merge phases without permission,
- redesign previously approved areas without clearly informing the user,
- replace SATORI’s identity with Claude Design defaults,
- use generic spa templates,
- invent major brand decisions not present in the package,
- use placeholder copy when final copy is available,
- treat accessibility as an optional final step,
- create a generic card-heavy service website,
- overuse rounded containers, pill buttons, glassmorphism, or gradients,
- use decorative oriental clichés,
- continue merely because the next task appears obvious.

---

## 4. Source-of-Truth Priority

When files conflict, follow this order:

1. `00_CONTROL/01_PROJECT_CONTRACT.md`
2. `01_FOUNDATION/01_VISION_AND_NORTH_STAR.md`
3. `01_FOUNDATION/02_BRAND_DNA.md`
4. `01_FOUNDATION/03_DESIGN_PRINCIPLES.md`
5. Phase-specific files
6. Existing prototype decisions explicitly approved by the user
7. Your own design judgment

Do not silently resolve important conflicts. Report them to the user.

---

## 5. Required Phase Sequence

Complete the project in this exact order:

### Phase 00 — Package Intake
Read:
- `00_CONTROL/01_PROJECT_CONTRACT.md`
- `00_CONTROL/02_FILE_MAP.md`
- `00_CONTROL/03_APPROVAL_PROTOCOL.md`

Output:
- confirmation that the package is understood,
- list of all files detected,
- list of any missing files,
- no visual design yet.

Approval gate:
- user confirms the package and process.

---

### Phase 01 — Vision Alignment
Read:
- `01_FOUNDATION/01_VISION_AND_NORTH_STAR.md`
- `01_FOUNDATION/02_BRAND_DNA.md`
- `01_FOUNDATION/03_DESIGN_PRINCIPLES.md`
- `01_FOUNDATION/04_ORIENTAL_LUXURY_GUARDRAILS.md`

Output:
- concise creative direction summary,
- emotional journey,
- forbidden visual directions,
- proposed design keywords,
- no page design yet.

Verification:
- ensure the brand is not generic, clinical, mystical, or decorative.

Approval gate:
- user approves the creative direction.

---

### Phase 02 — Design System
Read:
- `03_VISUAL_SYSTEM/01_COLOR_SYSTEM.md`
- `03_VISUAL_SYSTEM/02_TYPOGRAPHY_SYSTEM.md`
- `03_VISUAL_SYSTEM/03_SPACING_GRID_AND_LAYOUT.md`
- `03_VISUAL_SYSTEM/04_MATERIAL_AND_IMAGE_LANGUAGE.md`
- `03_VISUAL_SYSTEM/05_UI_COMPONENT_LANGUAGE.md`

Build:
- color tokens,
- typography styles,
- spacing system,
- grid,
- buttons,
- navigation,
- form fields,
- image containers,
- focus states,
- responsive foundations.

Do not build final sections yet.

Verification:
- inspect every component for generic AI-builder styling.
- remove unnecessary radius, shadows, and containers.

Approval gate:
- user approves the design system.

---

### Phase 03 — Information Architecture and Page Skeleton
Read:
- `02_EXPERIENCE/01_EMOTIONAL_JOURNEY.md`
- `02_EXPERIENCE/02_SITE_ARCHITECTURE.md`
- `02_EXPERIENCE/03_SCROLL_AND_ATTENTION_MODEL.md`
- `06_INTERACTION_AND_UX/01_NAVIGATION.md`

Build:
- the complete page skeleton,
- correct section order,
- navigation,
- empty but proportionally correct media zones,
- content hierarchy,
- desktop and mobile structural states.

Do not polish media or advanced motion yet.

Verification:
- every viewport asks for no more than one primary decision.
- sections feel connected, not like independent templates.

Approval gate:
- user approves the page architecture.

---

### Phase 04 — Hero
Read:
- `04_PAGE_SECTIONS/01_HERO.md`
- `05_MOTION_AND_MEDIA/01_CINEMATIC_MEDIA_DIRECTION.md`
- `05_MOTION_AND_MEDIA/02_HERO_TIMELINE.md`
- `05_MOTION_AND_MEDIA/03_SOUND_DIRECTION.md`

Build:
- full hero composition,
- initial loading state,
- reveal sequence,
- wordmark,
- headline,
- supporting copy,
- delayed entry cue,
- static and reduced-motion alternatives.

Verification:
- no standard two-button hero pattern,
- no excessive text,
- atmosphere appears before interface,
- first 8–12 seconds feel intentionally slow.

Approval gate:
- user approves the hero.

---

### Phase 05 — Philosophy
Read:
- `04_PAGE_SECTIONS/02_PHILOSOPHY.md`
- `02_EXPERIENCE/01_EMOTIONAL_JOURNEY.md`

Build:
- philosophy section,
- transition from hero,
- editorial content treatment,
- quiet architectural pause.

Verification:
- no cards,
- no decorative icons,
- no information overload,
- motion becomes quieter than in hero.

Approval gate:
- user approves the philosophy section.

---

### Phase 06 — Signature Rituals
Read:
- `04_PAGE_SECTIONS/03_SIGNATURE_RITUALS.md`
- `08_CONTENT/02_RITUAL_COPY.md`
- `05_MOTION_AND_MEDIA/04_RITUAL_MEDIA_DIRECTION.md`
- `06_INTERACTION_AND_UX/02_RITUAL_SELECTOR.md`

Build:
- vertical ritual index,
- one active ritual at a time,
- cinematic visual panel,
- duration and pricing placeholders,
- interaction states,
- mobile alternative.

Verification:
- no generic service-card grid,
- no horizontal carousel gimmick,
- selected ritual is clearly dominant,
- keyboard interaction is defined.

Approval gate:
- user approves rituals.

---

### Phase 07 — Spaces and Architecture
Read:
- `04_PAGE_SECTIONS/04_SPACES.md`
- `04_PAGE_SECTIONS/05_ARCHITECTURE_AND_MATERIALS.md`
- `05_MOTION_AND_MEDIA/05_SPATIAL_MEDIA_DIRECTION.md`
- `06_INTERACTION_AND_UX/03_SPACE_TRANSITIONS.md`

Build:
- spaces journey,
- architectural transitions,
- materials narrative,
- visual climax at Infinity Sanctuary,
- mobile spatial sequence.

Verification:
- no gallery grid,
- no reveal louder than Infinity Sanctuary,
- materials are shown in context rather than swatches,
- transitions feel optical and spatial, not like UI tabs.

Approval gate:
- user approves spaces and architecture.

---

### Phase 08 — Wellness Journey and Human Presence
Read:
- `04_PAGE_SECTIONS/06_WELLNESS_JOURNEY.md`
- `05_MOTION_AND_MEDIA/06_HUMAN_PRESENCE_DIRECTION.md`

Build:
- Arrival → Preparation → Ritual → Rest → Renewal → Return,
- human gestures,
- therapist/guest relationship,
- progress cues,
- emotional pacing.

Verification:
- people do not pose,
- no influencer or stock-photo behavior,
- human presence supports architecture rather than dominating it.

Approval gate:
- user approves the wellness journey.

---

### Phase 09 — Guest Reflections
Read:
- `04_PAGE_SECTIONS/07_GUEST_REFLECTIONS.md`
- `08_CONTENT/03_TESTIMONIAL_COPY.md`

Build:
- editorial reflections,
- names and locations,
- optional discreet portraits,
- restrained transitions.

Verification:
- no star ratings,
- no review platform widgets,
- no generic testimonial cards.

Approval gate:
- user approves guest reflections.

---

### Phase 10 — Reservation
Read:
- `04_PAGE_SECTIONS/08_RESERVATION.md`
- `06_INTERACTION_AND_UX/04_BOOKING_FLOW.md`
- `08_CONTENT/04_BOOKING_COPY.md`
- `07_RESPONSIVE_ACCESSIBILITY/02_FORM_ACCESSIBILITY.md`

Build:
- night transition,
- reservation entry,
- full multi-step flow,
- loading, error, empty, review, confirmation states,
- transparent price presentation,
- keyboard and mobile behavior.

Verification:
- one decision per step,
- no urgency or artificial scarcity,
- no aggressive upsell,
- clear focus and labels,
- background motion reduces during booking.

Approval gate:
- user approves reservation.

---

### Phase 11 — Closing and Footer
Read:
- `04_PAGE_SECTIONS/09_CLOSING_AND_FOOTER.md`

Build:
- final still-water moment,
- concise footer,
- location/contact/legal essentials,
- no crowded sitemap,
- closing emotional afterimage.

Verification:
- ending feels like an exhale,
- no new emotional peak,
- no heavy conversion block after booking.

Approval gate:
- user approves the ending.

---

### Phase 12 — Motion System
Read:
- all files in `05_MOTION_AND_MEDIA/`
- `02_EXPERIENCE/03_SCROLL_AND_ATTENTION_MODEL.md`

Apply and refine:
- reveal timing,
- scroll-linked transitions,
- primary/secondary motion hierarchy,
- hover/focus feedback,
- reduced-motion alternatives.

Verification:
- one primary motion at a time,
- movement has meaning,
- motion never competes with copy,
- no bounce, elastic, flying-card, or decorative 3D behavior.

Approval gate:
- user approves motion.

---

### Phase 13 — Responsive and Accessibility
Read:
- all files in `07_RESPONSIVE_ACCESSIBILITY/`

Build and test:
- desktop,
- tablet,
- mobile,
- touch behavior,
- focus behavior,
- contrast,
- semantic hierarchy,
- reduced motion,
- form accessibility.

Verification:
- mobile is intentionally designed, not compressed desktop,
- no hover-only critical interactions,
- content remains understandable without animation.

Approval gate:
- user approves responsive and accessibility states.

---

### Phase 14 — Content Review
Read:
- all files in `08_CONTENT/`

Verify:
- final copy,
- consistency of tone,
- line lengths,
- CTA language,
- ritual names,
- placeholder data clearly marked,
- no prohibited luxury clichés.

Approval gate:
- user approves all content.

---

### Phase 15 — Final Quality Audit
Read:
- all files in `09_QA_AND_APPROVAL/`

Perform:
- brand audit,
- visual audit,
- interaction audit,
- mobile audit,
- accessibility audit,
- booking audit,
- generic-AI-design audit,
- completeness audit.

Create:
- a punch list,
- severity for every issue,
- corrections,
- final before/after summary.

Do not mark the project complete while unresolved critical or high-priority issues remain.

Approval gate:
- user gives final prototype approval.

---

### Phase 16 — Handoff Preparation
Read:
- all files in `10_HANDOFF/`

Prepare:
- export/handoff package,
- page map,
- component map,
- interaction map,
- asset manifest,
- implementation notes,
- unresolved technical risks,
- explicit instructions for Claude Code.

Approval gate:
- user approves the handoff package.

---

## 6. Phase Completion Response Format

At the end of every phase, respond using exactly this structure:

### Phase completed
[phase name]

### What was built
- ...
- ...

### Verification performed
- [pass/fail] criterion
- [pass/fail] criterion

### Assumptions
- ...
- ...

### Open issues
- ...
- ...

### Files used
- ...
- ...

### Approval required
“Please review this phase. I will not continue until you explicitly approve it.”

Then stop.

---

## 7. Definition of Done

The project is complete only when:

- all 16 phases are approved,
- desktop and mobile prototypes are complete,
- every major interactive state is represented,
- the booking flow is complete,
- reduced-motion behavior exists,
- accessibility requirements are integrated,
- all final copy is approved,
- all critical and high QA issues are resolved,
- and the user has explicitly approved the final handoff.

Do not interpret a visually impressive prototype as completion.

Completion requires verified coherence, usability, accessibility, and user approval.

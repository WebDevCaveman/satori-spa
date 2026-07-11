# SATORI — Acceptance Record
Prototype: `SATORI Site.dc.html` · Package: SATORI Claude Design Package v1.0

| Phase | Status | Date | User comment | Locked |
|---|---|---|---|---|
| 00 Package Intake | Approved | 2026-07-11 | „Akceptuję" (60/60 plików) | Yes |
| 01 Vision Alignment | Approved | 2026-07-11 | „Akceptuję" | Yes |
| 02 Design System | Approved | 2026-07-11 | „Akceptuję" (fix: baseline nav) | Yes |
| 03 Page Skeleton | Approved | 2026-07-11 | „Akceptuję" | Yes |
| 04 Hero | Approved | 2026-07-11 | „Akceptuję" | Yes |
| 05 Philosophy | Approved | 2026-07-11 | „Akceptuję" | Yes |
| 06 Rituals | Approved | 2026-07-11 | „Akceptuję" | Yes |
| 07 Spaces | Approved | 2026-07-11 | „Akceptuję" (+ klikalne kreski nawigacji scen) | Yes |
| 08 Wellness Journey | Approved | 2026-07-11 | „Akceptuję" (+ focus kresek bez drugiej linii) | Yes |
| 09 Reflections | Approved | 2026-07-11 | „Akceptuję" (+ 5. cytat, portrety przy wszystkich, smooth anchors) | Yes |
| 10 Reservation | Approved | 2026-07-11 | „Akceptuję" (+ max 3 rytuały, filtrowanie godzin do 20:00, pole imienia 2. gościa) | Yes |
| 11 Closing | Approved | 2026-07-11 | „Akceptuję" (+ pętla wideo wody, dyscyplina dźwięku, crossfade ambient↔woda) | Yes |
| 12 Motion | Approved | 2026-07-11 | „Akceptuję" (+ trwały strażnik ciszy wideo) | Yes |
| 13 Responsive & Accessibility | Approved | 2026-07-11 | „Akceptuję" (+ mobile Rituals media na górze, „Reserve this ritual", ikona dźwięku, Journey index 1 linia) | Yes |
| 14 Content | Approved | 2026-07-11 | „Akceptuję" (+ przykładowe dane kontaktowe, wolniejsza woda 0.5×, bezszwowy loop 2-kopiowy) | Yes |
| 15 Final QA | Approved | 2026-07-11 | „Akceptuję" | Yes |
| 16 Handoff | Approved | 2026-07-11 | „akceptuje, zamknij projekt" — finalna akceptacja | Yes |

## Approved deviations from package (user-requested)
1. Microcopy „Discover the ritual" → „Reserve this ritual" (przycisk prowadzi do rezerwacji z preselekcją rytuału).
2. Piąta refleksja („I arrived with a list in my head…", Sofia R. — Milan) — copy spoza TESTIMONIAL_COPY, oznaczone jako fikcyjne.
3. Booking: multi-wybór do 3 rytuałów + filtrowanie godzin startu względem zamknięcia 20:00 (rozszerzenie ponad BOOKING_FLOW).
4. Zamknięcie: nieruchomy kadr wody → zapętlone wideo 0.5× z crossfade (spójne z „minimal environmental movement").

## Package-level conflicts resolved
- BOOKING_FLOW (7 kroków: kategoria + rytuał osobno) vs 08_RESERVATION (6 kroków): przyjęto wersję 6-krokową — 8 rytuałów strony pełni rolę kategorii; głębszy katalog nie istnieje w paczce.

## Final QA punch list (Phase 15)
Brak issues krytycznych i wysokich.

| # | Severity | Issue | Resolution |
|---|---|---|---|
| 1 | Low | „Continue deeper" (GLOBAL_MICROCOPY) nieużyte — sekwencja Spaces jest scroll-driven, brak przycisku progresji | Zaakceptowane jako nieaplikowalne; do decyzji w implementacji |
| 2 | Low | Ceny, adres, kontakt, godziny — dane fikcyjne | Oznaczone w stopce („a fictional brand study"); podmiana przy wdrożeniu |
| 3 | Low | Narzędzie zrzutów przegląda sekcję Spaces (760vh sticky) jako czarną przy syntetycznym scrollu | Artefakt narzędzia — sekcja zweryfikowana wizualnie w fazach 07–13; zalecany test na realnym urządzeniu przy wdrożeniu |
| 4 | Info | Postęp rezerwacji trwale zapisywany (localStorage) — „Begin your reservation" wznawia od zapisanego kroku | Zgodne ze spec („save progress locally"); czyszczone po potwierdzeniu |

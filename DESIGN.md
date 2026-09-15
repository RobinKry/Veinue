# DESIGN.md: Veinue web

## Source
- Brief: Restyle veinue.app. Do not use the live look. Keep only the line “Find your people.” Boast-site craft (Godly/Awwwards circuit).
- Look: apple craft + a24 (title as poster, monochrome, omit)
- Date: 2026-09-15

## Summary
Opening credit, not a landing. Black field. The sentence is the object. No radar, no amber, no glow italic, no Syne. After the title, one thought per viewport, hairlines, then the mail. Remembered as a stacked poster title.

## Medium and composition
- Medium: web
- Job: feel
- Treatment: title-on-quiet
- On frame: “Find your people.”
- In caption or next: BLE, stores, long features
- Type disappears: on-scroll (hero is the first chapter; later chapters do not keep a sticky headline)

## Directions (picked 1)

1. **Poster void (ship)** — three-line title, black, grotesque. A24. Unique to a presence product because the line is the product.
2. **Room still** — died: only assets are pixel city illustrations; full-bleed would be fake photography.
3. **Instrument catalog** — died: teenage-engineering grid would fit hardware, not a room of people.

Coffee test: a café could steal black + stacked type. It could not steal this sentence about people in a room. Keep.

## Tokens
| Role | Hex | Use |
| page | `#0C0C0C` | field |
| ink | `#F2EDE4` | titles, links |
| mute | `#8C877E` | body, meta |
| hair | `#2C2C2C` | rules |
| focus | `#F2EDE4` | focus-visible |

Type: Familjen Grotesk 600–700 display (tracking −0.045em, lh 0.9). Newsreader 400 body 18/1.5. No Inter, Geist, Syne, DM Sans.

Space: 8pt. Content ~980. Radius 0. No shadow.

Signature: the three-line title occupying the first viewport.

## Components
Nav: wordmark + text links. Mobile: full-field menu, 44px targets.
Primary action: `team@veinue.com` as a text link, same word as the closer.
Legal: text buttons, then the existing German copy.

## Page / frame patterns
1. Hero title
2. The room (one claim)
3. Friends / community / Find (list, not 3 cards)
4. Walk-in sequence (one column)
5. Closer + mail + legal
375: title scales down, menu works, no horizontal scroll.

## Motion
None required. No fade-up-on-everything. Reduced motion: static.

## Voice
Find your people. The room. Friends first. Find is for friends. Ghost. Never elevate/unlock/seamless. No em dash.

## Agent build instructions
Vite React in this repo. Drop magic/fx from the page. Do not use src/assets pixel cities. Do not clone A24’s mark.

## QA
- [x] 1440 screenshot (`qa-1440.png`)
- [x] 375: Menu opens, Mail jumps to closer, Impressum expands
- [x] anti-slop (no radar, amber, Syne, cards, glow)
- [x] AA on ink; mute used for meta
- [x] focus-visible
- [x] reduced-motion (animations off)
- [x] vs old radar: type-void wins on craft; radar wins on gimmick. Shipped the poster.

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners and operators of real-world businesses — connected homes and device fleets, gyms, clinical practices, farms, factories and labs — who need software that matches how their operation actually works. They evaluate a studio by whether it understands the work before it writes code.

## Product Purpose

Cosmos Compass is a software studio that designs and operates products for four business units: Domotics, Agriculture, Industrial and Medical. Domotics already runs three products in production; the other three units are in exploration and looking for their first cases. The site exists to make the studio legible and generate qualified conversations.

## Positioning

A studio that maps the operation, orders the domain and builds on a secure foundation before shipping interface. The same method crosses all four verticals, and the Domotics products are the evidence that it already operates in production.

## Operating Context

Visitors arrive from a referral, a product search or a direct introduction. They compare the studio against generalist agencies and in-house builds. They read in Spanish or English. A qualified conversation starts through the contact form or email and is answered within two business days. Domotics products are Smart House (IoT), Fitness Gym (local-first gym operations) and Health Psychology (clinical management). Agriculture, Industrial and Medical have no public projects yet.

## Capabilities and Constraints

- Four business units must be present in the primary navigation at all times, including units without projects.
- Every unit has its own page; units without projects show an exploration state instead of hiding or dead-ending.
- Bilingual Spanish (default) and English with localized routes and metadata.
- Next.js App Router, React, TypeScript and Tailwind CSS 4; no new runtime dependencies without a clear need.
- Contact form uses Formspree with a mailto fallback.
- Product claims, prices, customers and benchmarks must stay factual; no invented proof.

## Brand Commitments

- Name: Cosmos Compass.
- The idea: the cosmos is the territory; the compass is the instrument that helps navigate and discover it.
- Logo palette: blues for space, white for stars, gold for the compass highlight.
- The user has pinned the visual direction: skeuomorphism and Frutiger Aero, especially in product placeholders. Treat this as binding for the redesign.

## Evidence on Hand

- Three operating Domotics products with detailed, factual case content in `src/content/projects.ts`.
- Unit names, descriptions and statuses in `src/content/domains.ts`.
- No product screenshots, photography, testimonials, client logos or press assets. Product visuals must remain authored placeholders, not fake screenshots.

## Product Principles

1. Orientation before decoration: every surface should help a visitor know where they are and what to do next.
2. Show the operation, not the promise: specifics from real products outrank generic marketing lines.
3. One compass, four bearings: the four units share a method but keep their own rules and language.
4. Exploration is a first-class state: an empty unit is an invitation, not an omission.
5. Legibility and trust outrank spectacle, even inside a nostalgic material world.

## Accessibility & Inclusion

- WCAG AA contrast for body and interface text.
- Full keyboard access to navigation, the four units and the compass interaction.
- `prefers-reduced-motion` disables orbital and reveal motion.
- Both locales must carry equivalent structure and content.

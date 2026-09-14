# Home Manual Initial Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a lightweight Astro site for home maintenance problem solving.

**Architecture:** Static Astro pages consume typed data from `src/data`. Shared layout and components handle navigation, metadata, JSON-LD, and document-like content sections.

**Tech Stack:** Astro, TypeScript, plain CSS, static assets.

**Spec:** `docs/superpowers/specs/2026-09-14-home-manual-design.md`

## Global Constraints

- Modify only `emfls/emfls-home`.
- Keep JavaScript minimal and avoid UI libraries.
- Use mobile-first semantic HTML and accessible controls.
- Do not add advertising code.

### Task 1: Scaffold and documentation

**Files:** `package.json`, `astro.config.mjs`, `tsconfig.json`, `AGENTS.md`, `SITE_STRATEGY.md`, `TASKS.md`, `PROJECT_HISTORY.md`

- [ ] Create Astro configuration and project scripts.
- [ ] Record project rules, strategy, task queue, and dated history.

### Task 2: Content model and shared UI

**Files:** `src/data/site.ts`, `src/data/guides.ts`, `src/layouts/BaseLayout.astro`, `src/components/Header.astro`, `src/components/Footer.astro`, `src/styles/global.css`

- [ ] Define category and guide records outside page templates.
- [ ] Implement reusable shell, metadata, JSON-LD, and document styles.

### Task 3: Pages and routes

**Files:** `src/pages/index.astro`, `src/pages/about.astro`, `src/pages/privacy.astro`, `src/pages/contact.astro`, `src/pages/category/[slug].astro`, `src/pages/guides/[slug].astro`

- [ ] Build the homepage, category pages, guide template, and policy pages.
- [ ] Generate category and guide routes from data.

### Task 4: SEO and verification

**Files:** `public/robots.txt`, `public/favicon.svg`, `astro.config.mjs`, `src/pages/sitemap.xml.ts`

- [ ] Add sitemap, robots, canonical, OG, favicon, and structured data.
- [ ] Run install, production build, link checks, and review responsive output.

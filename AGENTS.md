# AGENTS.md

## Commands

```bash
npm run dev        # Next.js dev server (Turbopack)
npm run build      # Production build — run this to verify changes
npm run lint       # ESLint (runs `eslint .`, NOT `next lint`)
```

No test runner is configured. Use `npm run build` as the primary verification step.

## Architecture

Next.js 16 App Router. No Pages Router.

- `src/app/content/*.mdx` — blog posts with gray-matter frontmatter (`title`, `description`, `date`, `image`)
- `src/utils/mdx.ts` — server-side `getBlogPosts()` / `getBlogPost(slug)` read MDX files from disk with `fs`
- `src/mdx-components.tsx` — custom styled overrides for all MDX HTML elements; used by both `@next/mdx` and `next-mdx-remote`
- `src/app/components/mdx-renderer.tsx` — wraps `MDXRemote` from `next-mdx-remote/rsc` for rendering parsed MDX content
- `src/app/post/[slug]/page.tsx` — SSG via `generateStaticParams` + `dynamicParams = false`

Adding a new blog post: create an `.mdx` file in `src/app/content/` with the required frontmatter. Routing and listing update automatically.

## Path Aliases

```
@/*           → ./src/*
@/components  → ./src/app/components/index.ts   (barrel export)
@/utils       → ./src/utils/index.ts            (barrel export)
```

Import components via `@/components` and utilities via `@/utils`. The barrel files must be kept in sync when adding new exports.

## Styling

Design tokens are shared with the portfolio project (`haerulr2.dev`). Keep them in sync.

- **Tailwind CSS v4** — no `tailwind.config` file; all config is CSS-first via `@theme inline` in `src/app/globals.css`
- **Color tokens** — use `var(--color-*)` CSS variables (e.g., `var(--color-text-primary)`, `var(--color-border)`), never hardcoded color classes like `text-white` or `bg-black`
- **Dark mode** — class-based via `next-themes` (`.dark` class on `<html>`), not `prefers-color-scheme`
- **Radius tokens** — `var(--radius-md)` (8px), `var(--radius-lg)` (12px), `var(--radius-full)` (pill)
- **Font** — DM Sans (`--font-dm-sans`), monospace: Geist Mono (`--font-geist-mono`)
- **Layout** — content constrained to `max-w-[1100px]` with `px-6 md:px-12`
- **`cn()` utility** — `src/utils/merge-class.ts`, combines `clsx` + `tailwind-merge`

## Key Libraries

| Library | Import | Note |
|---------|--------|------|
| Motion (Framer) | `motion/react` | **Not** `framer-motion` — package renamed in v13 |
| Icons | `lucide-react` | v1.x; no brand icons available |
| Theme toggle | `next-themes` | `useTheme()` hook |
| MDX remote | `next-mdx-remote/rsc` | v6; `blockJS` defaults to `true` |

## Gotchas

- `next.config.mjs` is the active config (wraps MDX). There must not be a `next.config.ts` alongside it — Next.js 16 will conflict.
- `params` in page components must be `Promise<{ slug: string }>` and awaited. Sync access was removed in Next.js 16.
- MDX content files are read from the filesystem at build time. They are not in a CMS or database.

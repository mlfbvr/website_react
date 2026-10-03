# AGENTS.md

## Commands (use `pnpm`, never npm)

- `pnpm dev` — Vite dev server
- `pnpm build` — typecheck (`tsc -b`) then production build to `dist/`
- `pnpm lint` — oxlint (whole repo, no args)
- `pnpm format` / `pnpm format:check` — **oxfmt** (not prettier; `.prettierignore` is stale)
- `pnpm test` / `pnpm test:ui` — vitest

Notes:
- No standalone typecheck script. For a fast check use `pnpm exec tsc -b`; `pnpm build` also runs it.
- `vitest` exits non-zero when no `*.test.ts?(x)` files match, so use `pnpm test --passWithNoTests` until tests exist. Test infra (jsdom, globals, jest-dom) is already wired via `vitest.config.ts` + `src/test/setup.ts`.
- Not a git repo. `dist/` is build output and gitignored.

## Architecture

- React 19 + Vite + Tailwind CSS **v4** loaded via the `@tailwindcss/vite` plugin and `@import 'tailwindcss'` in `src/index.css`. There is no `tailwind.config` file. Use v4 class syntax (e.g. `bg-linear-to-r`, not `bg-gradient-to-r`).
- Routing uses **`react-router` v8** — import from `react-router`, not `react-router-dom`. Routes live in `src/App.tsx`; `<BrowserRouter>` wraps `<App>` in `src/main.tsx`. `portfolio` is a placeholder, `*` is an inline 404.
- Path alias `@/*` → `src/*` (vite + tsconfig). Use `@/` imports, not relative paths.
- Layout: pages in `src/pages/<name>/<Name>Page.tsx`, shared components in `src/components/<name>/<Name>.tsx`.
- FontAwesome icons are imported individually from `@fortawesome/free-*` subpackages per component (no global library registration). See `src/pages/home/HomePage.tsx` for the pattern.

## TypeScript / style constraints

- `tsconfig.app.json` sets `erasableSyntaxOnly`: **no enums, namespaces, or class parameter properties** — use union types and plain objects.
- `noUnusedLocals` / `noUnusedParameters` are on; keep imports and variables used.
- Formatting defaults (`.oxfmtrc.json`): single quotes, semicolons, trailing commas (es5), 2-space indent, printWidth 80.

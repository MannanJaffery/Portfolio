# Syed Muhammad Abdul Mannan — Portfolio

Full Stack & AI Engineer portfolio. Built on the architecture of [CharanMunur/Portfolio](https://github.com/CharanMunur/Portfolio) (MIT) with all content replaced.

**Stack:** React 19, Vite, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, React Router v7, Vercel serverless (`api/github.ts` for the GitHub activity graph).

## Structure
- `src/data/*.ts` holds all content: projects, experience, education, blog, uses, socials, tech.
- `src/components/` has sections (Hero, ExperienceTimeline, ProjectSection, BlogSection, Stats) and `ui/` primitives.
- `src/pages/` has routes: `/projects`, `/projects/:slug`, `/blogs`, `/blogs/:slug`, `/uses`, `/contact`.

## Develop
```bash
npm install
npm run dev      # frontend on :5173
npx vercel dev   # optional: serves /api/github on :3000 (set GITHUB_TOKEN for higher rate limits)
npm run build
```
The GitHub activity graph only loads where `/api/github` is available (Vercel).

## Adding content
Add an entry to `src/data/projects.ts` (set `featured: true` to show it on the home page). Add posts to `src/data/blog.ts`.

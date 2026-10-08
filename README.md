# CareerCompass AI

> Turn your skills into your career direction.

AI-powered career decision and recommendation system for pre-final-year students, final-year students, and fresh graduates.

**Status: Phase 6 — frontend prototype with 21 sample careers, transparent scoring, sample skill assessments, local career guidance, and an interactive demo dashboard** (no backend, auth, AI APIs or external services).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run typecheck
npm run build
```

## Routes

- `/` landing page
- `/assessment` career discovery: profile form, then demo results (local mock matching, no backend). From the results, take optional 5-question sample tests for Python, SQL and problem solving; test percentages are calculated in the browser and feed back into the matches. The top 3 roles show a score, a short explanation, a ranked "skills to build next" list and an expandable score breakdown; the next 3 appear under "Also worth a look". **View my guidance** opens a local sample plan based on the top match, priority skill gaps and education stage, including a sample project roadmap and optional fictional resume-feedback example. **Dashboard** opens match and completed skill-test charts, a top-role comparison, and a temporary what-if score preview that does not change the user's answers or test results.

## Structure

```
src/
  app/                 routes (App Router), layout, globals.css
  components/
    ui/                primitives: Button, Card, Badge
    assessment/        profile, matching results, skill checks, career guidance, and dashboard
    layout/            Navbar, Footer, Container
    shared/            Logo, SectionHeading, other reusable pieces
  data/                static data (careers, form options, sample skill-test questions)
  hooks/               custom hooks
  lib/                 utils (cn), constants (brand, nav)
  types/               shared TypeScript types
```

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS 3 · Lucide React · Recharts

## How matching works (src/lib/matching.ts)

Local rules only: no AI, backend or external calls. Careers live in `src/data/careers.ts`, each with weighted skills (3 core, 2 important, 1 helpful) and interests.

- Score = up to 70 points from skills + up to 30 from interests, capped at 96.
- Skill credit per skill: selected and untested = 85%; selected with a sample test = 30% + 70% of the test percent; not selected but test >= 60% = 80% of the test percent; otherwise 0.
- Interest points: two matched interests earn the full 30.
- Skills to build next: ranked by weight x missing credit; skills at 70% credit or more count as covered. When nothing is missing, the role's stretch skills are shown.
- Stage and notes do not change scores.

To add a career, append an entry to `CAREERS` using skills from `SKILLS` and interests from `INTERESTS` in `src/data/assessment.ts`.

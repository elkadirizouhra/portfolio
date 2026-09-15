# Zouhra Elkadiri — Portfolio

Personal portfolio site for a Software Engineer based in Casablanca, Morocco.

Built with **React 19**, **TypeScript**, **Vite** and **Tailwind CSS v4**. No UI
library, no icon package — the design system and icon set are part of the repo.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

---

## Editing the content

> **All site copy lives in one file: [`src/data/profile.ts`](src/data/profile.ts).**
> You should never need to open a component to change text.

| What you want to change | Where |
| --- | --- |
| Name, role, email, phone, CV path | `profile` |
| Spoken languages | `about.languages` |
| LinkedIn / GitHub / email links | `socials` |
| The code panel next to the headline | `heroSnippet` |
| About paragraphs, focus areas, statistics | `about` |
| Skill categories and technologies | `skillGroups` |
| Jobs, responsibilities, stack | `experiences` |
| Project case studies | `projects` |
| Degree, school, coursework | `education` |
| Certificates (earned / in progress / planned) | `certifications` |
| LeetCode topics and the worked snippet | `problemSolving` |
| "What I'm looking for" | `careerGoals` |
| Navbar and footer links | `navItems` |

### Placeholders to review before publishing

All content comes from the CV (`CV_Zouhra_Elkadiri.pdf`). Two things are still
guesses — search the data file for `CONFIRM`:

- **LinkedIn and GitHub URLs** (`socials`) — the CV links to both, but the URLs
  did not come through in the text, so the handles are invented. Fix these
  first: they are the links a recruiter clicks.
- **`profile.siteUrl`** — the domain you will deploy to. Also update the three
  matching URLs in `index.html` (canonical, `og:url`, JSON-LD `url`).

Everything else — name, email, phone, dates, employers, projects, education,
skills, languages — is taken straight from the CV.

### Adding a project

Append an object to `projects` in `src/data/profile.ts`. Every field is typed,
so TypeScript will tell you if something is missing.

To link a project to its repository, add a `links` key:

```ts
links: { github: 'https://github.com/<you>/<repo>', demo: 'https://…' },
```

The GitHub and live-demo buttons then appear on the card and in the case study.
Projects with no `links` show "source code is not public" instead — the right
default for internal enterprise work. Check with your employer before making a
repository built on company time public.

### Adding a certificate

Append to `certifications`. Set `status: 'Earned'` and add a `credentialUrl` to
turn the card into a link to the credential.

### The CV

`public/cv/CV_Zouhra_Elkadiri.pdf` is currently a **placeholder PDF**. Copy the
real `CV_Zouhra_Elkadiri.pdf` over it, keeping the filename, and every "Download
CV" button works — they all read `profile.cvPath`.

---

## The contact form

The site is fully static, so the form validates in the browser and then opens the
visitor's mail client with the message pre-filled. Nothing is stored or sent
anywhere.

To wire it to a real backend, replace the `window.setTimeout(...)` block in
[`src/components/Contact.tsx`](src/components/Contact.tsx) with a `fetch()` to
your endpoint (Formspree, Resend, an API route…). The validation, error states
and success state stay as they are.

---

## Design system

Colours are defined once as semantic CSS custom properties in
[`src/index.css`](src/index.css) — `--page`, `--surface`, `--fg`, `--fg-muted`,
`--hairline` and so on — with a light set on `:root` and a dark set on `.dark`.
Retune the whole site from that one block.

Brand colours, fonts, easing curves and keyframes live in the Tailwind `@theme`
block in the same file, which is what exposes utilities like `text-brand-500`,
`font-display` and `animate-float`.

Reusable utilities: `surface`, `glass`, `text-gradient`, `grid-backdrop`, and
the `reveal` / `reveal-visible` pair used for scroll animations.

**Theme switching.** A tiny inline script in `index.html` applies the saved (or
system) theme before first paint, so there is no flash of the wrong colours.
`src/hooks/useTheme.ts` keeps React in sync and persists the choice.

---

## Structure

```
src/
├─ data/profile.ts          ← all content
├─ lib/highlight.ts         ← minimal syntax highlighter for the code panels
├─ hooks/
│  ├─ useTheme.ts           ← dark / light mode, persisted
│  └─ useScrollSpy.ts       ← active navbar section
├─ components/
│  ├─ Navbar.tsx            Hero.tsx           About.tsx
│  ├─ Experience.tsx        Projects.tsx       ProjectCard.tsx
│  ├─ ProjectDetails.tsx    Skills.tsx         Education.tsx
│  ├─ Certifications.tsx    ProblemSolving.tsx CareerGoals.tsx
│  ├─ Contact.tsx           Footer.tsx
│  └─ ui/
│     ├─ Section.tsx        ← Section, SectionHeading, Container
│     ├─ Reveal.tsx         ← scroll-reveal wrapper
│     ├─ Button.tsx  Badge.tsx  Icon.tsx  CodeWindow.tsx  Aurora.tsx
└─ index.css                ← design tokens + utilities
```

---

## Accessibility & SEO

- Skip-to-content link, landmark elements, and one `<h1>` per page.
- The project modal traps focus, closes on `Escape` or backdrop click, and
  returns focus to the card that opened it.
- Form fields use real labels, `aria-invalid` and `aria-describedby`; errors are
  announced with `role="alert"`.
- Every animation is disabled under `prefers-reduced-motion: reduce`.
- Meta description, canonical URL, Open Graph / Twitter cards and a
  `schema.org/Person` JSON-LD block are all in `index.html`.

---

## Deploying

The build output is a static `dist/` folder — it works on any static host.

**Vercel / Netlify:** connect the repo; build command `npm run build`, output
directory `dist`.

**GitHub Pages:** if serving from a subpath, set `base: '/<repo-name>/'` in
`vite.config.ts` first.

Remember to update `profile.siteUrl` and the URLs in `index.html` to the real
domain so the SEO tags point somewhere valid.

# The Fela ishola

The lowercase "i" in "ishola" is intentional. Please write the brand name
exactly as "The Fela ishola" everywhere it appears.

This is the production website for **Fela Ishola**, Lead Minister of
Freedom Nation and Brand Designer at Fegitals Digitals. The site is a real,
functioning web application, not a static mockup, built to be deployed to
Netlify and connected to Supabase.

---

## 1. Project Overview

The site brings together three dimensions of Fela Ishola's life and work,
in this order of priority:

1. Faith and ministry, through Fela Ishola and Freedom Nation
2. Spiritual growth, through the Daily Guide and Messages
3. Creativity, through Fegitals Digitals and the design portfolio

Pages: Home, About, Ministry, Daily Guide (with per-entry pages), Messages
(with per-message pages), Portfolio (with per-project pages), and Contact.

Brand rules enforced throughout the codebase: black / white / orange only,
no gradients anywhere, no emojis anywhere, no em dashes in any visible
text.

---

## 2. Technology

- **React 18 + TypeScript**, built with **Vite**
- **React Router** for client-side routing (clean URLs, SPA redirects
  configured for Netlify)
- **Tailwind CSS**, themed with the black / white / orange brand palette,
  no gradient utilities used anywhere
- **Supabase** (`@supabase/supabase-js`) for Daily Guides, Messages,
  Portfolio, and Contact form storage
- **react-helmet-async** for per-page SEO (title, meta description, Open
  Graph, canonical URL)

---

## 3. Local Development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

```bash
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

---

## 4. Supabase Setup

The project is already configured to talk to the Supabase project you
supplied:

- Project URL: `https://flbravpupihonroyqmik.supabase.co`
- Publishable key: included in `.env` (already filled in for local
  development; also add both variables in the Netlify dashboard for
  production, see Environment Variables below)

To set up the database:

1. In the Supabase SQL editor (or via the Supabase CLI), run the
   migration in `supabase/migrations/0001_initial_schema.sql`. This
   creates all five tables (`daily_guides`, `messages`,
   `portfolio_projects`, `portfolio_images`, `contact_submissions`),
   their indexes, and Row Level Security policies:
   - Public (anonymous) users can **read** published content
   - Public users can **insert** contact form submissions only
   - Public users **cannot** update or delete anything
2. Run the three seed files in `supabase/seed/`, in order:
   - `01_daily_guides_september.sql`, all 30 September entries, extracted
     directly from the Daily Guide DOCX you supplied
   - `02_messages.sql`, the two Peace Be Still entries with their supplied
     descriptions
   - `03_portfolio_projects.sql`, the ten supplied portfolio project
     records (metadata only; images still need to be added, see Portfolio
     below)

If the CLI is available:

```bash
supabase link --project-ref flbravpupihonroyqmik
supabase db push
psql <connection-string> -f supabase/seed/01_daily_guides_september.sql
psql <connection-string> -f supabase/seed/02_messages.sql
psql <connection-string> -f supabase/seed/03_portfolio_projects.sql
```

(Or paste each file's contents into the Supabase SQL editor and run it.)

**Never** put your Supabase service role or secret key in this project,
in a `.env` file that gets committed, or anywhere in frontend code. The
publishable/anon key is the only key this app uses.

---

## 5. Netlify Deployment

1. Push this project to a Git repository (GitHub, GitLab, or Bitbucket).
2. In Netlify, create a new site from that repository. Netlify will read
   `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - SPA redirect (`/* -> /index.html`) so client-side routes like
     `/daily-guide/september-1-forgiveness-part-1` work on refresh
3. In **Site settings > Environment variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
4. Deploy. The initial site URL is `https://thefelaishola.netlify.app`. A
   custom domain can be attached later in Netlify's Domain settings
   without any code changes.

---

## 6. Environment Variables

Copy `.env.example` to `.env` for any fresh setup:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

A working `.env` (using the project values you supplied) is already
included for local development. It is listed in `.gitignore` and will not
be committed; set the same two variables in Netlify for production.

---

## 7. Asset Structure: Where to Put Your Files

| Asset | Folder | Recommended Format | Recommended Size |
|---|---|---|---|
| Main professional portrait | `public/images/profile/` | WebP/JPG | 4:5, 1600 x 2000px+ |
| Ministry photographs | `public/images/ministry/` | WebP/JPG | 16:9 (wide sections) or 4:5 (cards) |
| Personal photographs | `public/images/personal/` | WebP/JPG | 4:5 |
| Hero desktop images | `public/images/hero/` | WebP/AVIF | 16:9, 1920 x 1080px+ |
| Hero mobile images | `public/images/hero/` | WebP/AVIF | 4:5 or 3:4, 1600 x 2000px+ |
| Freedom Nation logo | `public/images/logos/` | SVG preferred | Vector |
| Fegitals Digitals logo | `public/images/logos/` | SVG preferred | Vector |
| Daily Guide images (optional) | `public/images/daily-guide/` | WebP/JPG | Appropriate to placement |
| Message audio | `public/audio/messages/` | MP3/M4A | High quality |
| Portfolio images | `public/portfolio/[project-folder]/` | WebP/JPG | Preserve each project's original ratio |
| Open Graph preview image | `public/images/logos/og-default.jpg` | JPG | 1200 x 630px |

Only create separate desktop/mobile versions where composition genuinely
benefits, most notably the hero. A single portrait or portfolio image with
sensible `object-position` is fine everywhere else; the site never
distorts an image to force a ratio.

### Hero images specifically

`public/images/hero/` expects these six files (the app already references
these exact names; rename the files to match, or update
`src/components/home/Hero.tsx` if you use different filenames):

```
public/images/hero/
├── ministry-desktop.webp      (16:9, Main / Fela Ishola slide)
├── ministry-mobile.webp       (4:5 or 3:4)
├── daily-guide-desktop.webp   (16:9, Daily Guide slide)
├── daily-guide-mobile.webp    (4:5 or 3:4)
├── design-desktop.webp        (16:9, Design slide)
└── design-mobile.webp         (4:5 or 3:4)
```

Separate mobile images are recommended because a composition that works
across a wide desktop hero (a subject positioned off to one side, for
example) often crops badly on a tall mobile screen. If only one image is
available for a slide, the app falls back to the desktop image on every
screen size.

Until a real image file exists at a given path, that spot on the site
shows a plain "Image coming soon" placeholder block rather than a broken
image icon, so the layout never breaks.

---

## 8. Daily Guide

### How the September content was structured

The supplied `Daily_Guide.docx` was read in full and parsed programmatically.
Every one of the 30 September entries was extracted with its date, title,
Bible reading, introduction, daily reflection, daily action, prayer, verse
to remember, and verse reference preserved exactly as written, including
paragraph breaks. Nothing was summarized, reworded, or invented. The
result is `supabase/seed/01_daily_guides_september.sql`.

### Adding future months

The `daily_guides` table and the whole reading experience are date-driven,
not hard-coded to September. To add October, November, or any future
month:

1. Prepare the new month's content in the same structure (title, slug,
   guide_date, bible_reading, introduction, daily_reflection,
   daily_action, prayer, verse_to_remember, verse_reference).
2. Insert the rows into `daily_guides` (directly in the Supabase table
   editor, or as a new seed file following the same pattern as
   `01_daily_guides_september.sql`).
3. That's it. The archive page automatically groups entries by month and
   only shows months that have published content; the Previous Day / Next
   Day links on each entry are computed from whatever is in the table, in
   date order.

### Search

The Daily Guide archive (`/daily-guide`) includes a search box that
matches title, Bible reference, date, and body text, and works the same
way on mobile as on desktop.

---

## 9. Messages

`Peace Be Still, Part 1` and `Part 2` are seeded with their full supplied
descriptions. Two fields are intentionally left empty until you provide
them:

- **Transcript**: when you have the transcript DOCX files, extract the
  text and update the `transcript` column for the matching row in
  `messages` (via the Supabase table editor, or a new seed file). The
  message detail page automatically shows a "Transcript" section as soon
  as that field is filled in, and shows nothing extra when it is empty.
- **Audio**: upload the audio file to `public/audio/messages/` (for
  example `peace-be-still-part-1.mp3`), or to Supabase Storage, and set
  the `audio_url` column to that file's path or public URL. The audio
  player component only renders when `audio_url` is set; there is never
  an empty player on the page.

---

## 10. Portfolio

The ten projects from your brief are seeded in
`supabase/seed/03_portfolio_projects.sql` with their industry, category,
image count, and aspect ratio (Year Completed is intentionally not
tracked, per your instructions).

To add the actual images:

1. Drop each project's image files into its folder under
   `public/portfolio/[project-folder]/` (folders already created, matching
   each project's slug/folder).
2. Add one row per image to the `portfolio_images` table, with
   `project_id` matching the project and `image_url` pointing at the file
   (a `public/...` path, or a Supabase Storage URL).
3. Set each project's `cover_image` column to the image you want shown on
   the Portfolio listing and homepage Creative Work section.

Until images are added, each project page shows a graceful "Images for
this project are on the way" panel instead of a broken gallery, and
projects without a `cover_image` show the same placeholder used for any
other missing image.

Images load lazily; the full portfolio library is never loaded on the
homepage, only up to three cover images in the Creative Work section.

---

## 11. Contact Form

Submissions (name, email, inquiry type, message) are inserted directly
into the `contact_submissions` table via the Supabase publishable key.
Row Level Security allows public **insert only**; nobody can read, edit,
or delete submissions through the public key; review them from the
Supabase dashboard or table editor. The form shows a clear success state
after sending, and a clear error message (with a fallback to email
directly) if the request fails.

---

## 12. Accessibility and Performance

- Semantic HTML and a consistent heading hierarchy throughout
- Full keyboard navigation, visible focus states, and ARIA labels on
  interactive controls (hero carousel, mobile menu, portfolio filters,
  lightbox)
- The hero slideshow respects `prefers-reduced-motion` and pauses its
  autoplay on hover and keyboard focus
- Images are lazy-loaded by default (the hero's first image loads eagerly)
- No unnecessary JavaScript frameworks or animation libraries

---

## 13. Content Still Needed

Per your instruction not to invent content, the following pieces of
supplied content referenced in the brief were not included as literal
text in our conversation and are left as empty, clearly-marked structure
rather than invented text:

- The full text of the 15 About / Ministry / Fegitals Digitals stories
  (structure and titles are in `src/data/aboutStories.ts`; each `body`
  field is empty and the About page shows "This chapter is being
  prepared" until filled in)
- Message transcripts for both Peace Be Still parts
- All photography, the Freedom Nation logo, and the Fegitals Digitals logo
- Portfolio images for all ten projects
- Message audio files

Nothing else on the site is invented: no testimonials, no statistics, no
additional ministries, clients, or achievements beyond what was supplied.

---

## My Upload Checklist

1. **Main professional portrait**
   Upload to `public/images/profile/`
   Recommended: 4:5, 1600 x 2000px or higher

2. **Ministry photographs**
   Upload to `public/images/ministry/`
   Recommended: 16:9 or 4:5, depending on the photograph

3. **Personal photographs**
   Upload to `public/images/personal/`
   Recommended: 4:5

4. **Hero images** (desktop and mobile, for all three slides)
   Upload to `public/images/hero/`
   See section 7 above for exact filenames and ratios

5. **Freedom Nation logo**
   Upload to `public/images/logos/`
   SVG preferred

6. **Fegitals Digitals logo**
   Upload to `public/images/logos/`
   SVG preferred

7. **Daily Guide images** (optional)
   Upload to `public/images/daily-guide/`

8. **Message audio**
   Upload to `public/audio/messages/`

9. **Portfolio images**
   Upload each project's images into its corresponding folder under
   `public/portfolio/`

10. **The 15 story texts, and the two message transcripts**
    Send as text or DOCX; they will be added to `src/data/aboutStories.ts`
    and to the `messages` table respectively.

---

Faith. Creativity. Purpose. Ideas.

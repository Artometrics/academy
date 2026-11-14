# Artometrics Academy

Artometrics Academy — art×science beginner guides.

Astro 5 static export on the Artometrics magazine shell (same masthead, wordmark, typography, and color tokens as [artometrics.com](https://artometrics.com)).

Pages:

- `/` — mission, guide categories, featured guides, common questions, The Journey
- `/guides` — every guide, by topic and A–Z
- `/guides/art-science-intersection`, `/guides/what-is-an-art-scientist`, `/guides/color-theory-physically`, `/guides/how-the-eye-sees-color`, `/guides/why-complementary-colors-work`, `/guides/value-hue-saturation`, `/guides/pigment-and-light`, `/guides/sfumato-and-atmospheric-perspective`, `/guides/composition`, `/guides/why-compositions-feel-balanced`, `/guides/negative-space-and-gestalt`, `/guides/perspective-and-optics`, `/guides/how-perspective-geometry-works`, `/guides/camera-obscura`, `/guides/light-shadow-and-the-eye`, `/guides/what-is-a-medium`, `/guides/anatomy-for-artists`, `/guides/golden-ratio`, `/guides/faces-symmetry-and-beauty`, `/guides/how-to-look-at-a-painting`, `/guides/what-is-artometrics`
- `/questions` — beginner questions, each pointed at a guide
- `/journey` and five personal notes: `/journey/what-i-got-wrong`, `/journey/the-short-list`, `/journey/where-they-meet-for-me`, `/journey/the-color-wheel-i-retired`, `/journey/the-formula-i-wanted`

Guides and the questions page are neutral. Journey notes are first person and labeled as opinion.

- Intended live domain: `academy.artometrics.com`
- Firebase project / Hosting site: `artometrics-510519` / `academy-510519`
- Note: a GCP project ID `academy-510519` is already taken globally and is not accessible to team@artometrics.com, so this site is a Hosting site in the main Artometrics project.
- Default Hosting URL (once deployed): `https://academy-510519.web.app`
- Indexing: **noindex**. Every page ships `<meta name="robots" content="noindex, nofollow">`, `firebase.json` sets `X-Robots-Tag: noindex, nofollow`, and `public/robots.txt` is `User-agent: *` / `Disallow: /`.

## Develop

```bash
npm install
npm run dev
npm run build
```

## Deploy

Deploy as `team@artometrics.com` with an explicit project flag:

```bash
firebase deploy --project artometrics-510519 --only hosting
```

Do not attach this site to Betterment Health, kmcauliffe-rainfall, or Stratus. Do not upgrade the Firebase billing plan without asking.

# Artometrics Academy

Artometrics Academy — art×science beginner guides.

Astro 5 static export on the Artometrics magazine shell (same masthead, wordmark, typography, and color tokens as [artometrics.com](https://artometrics.com)).

Pages:

- `/` — mission, guide categories, featured guides, The Journey
- `/guides` — every guide, by topic and A–Z
- `/guides/art-science-intersection`, `/guides/color-theory-physically`, `/guides/composition`, `/guides/perspective-and-optics`, `/guides/light-shadow-and-the-eye`, `/guides/what-is-a-medium`, `/guides/golden-ratio`, `/guides/how-to-look-at-a-painting`, `/guides/what-is-artometrics`
- `/journey` and three personal notes: `/journey/what-i-got-wrong`, `/journey/the-short-list`, `/journey/where-they-meet-for-me`

Guides are neutral. Journey notes are first person and labeled as opinion.

- Intended live domain: `academy.artometrics.com`
- Firebase project / Hosting site (intended): `academy-510519` / `academy-510519`
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
firebase deploy --project academy-510519 --only hosting
```

Do not attach this site to Betterment Health, kmcauliffe-rainfall, or Stratus. Do not upgrade the Firebase billing plan without asking.

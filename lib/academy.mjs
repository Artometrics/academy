import { topics } from "./content/topics.mjs";
import { guide as artScience } from "./content/guides/art-science-intersection.mjs";
import { guide as color } from "./content/guides/color-theory-physically.mjs";
import { guide as composition } from "./content/guides/composition.mjs";
import { guide as perspective } from "./content/guides/perspective-and-optics.mjs";
import { guide as light } from "./content/guides/light-shadow-and-the-eye.mjs";
import { guide as medium } from "./content/guides/what-is-a-medium.mjs";
import { guide as golden } from "./content/guides/golden-ratio.mjs";
import { guide as looking } from "./content/guides/how-to-look-at-a-painting.mjs";
import { guide as artometrics } from "./content/guides/what-is-artometrics.mjs";
import { guide as eyeColor } from "./content/guides/how-the-eye-sees-color.mjs";
import { guide as complements } from "./content/guides/why-complementary-colors-work.mjs";
import { guide as valueHue } from "./content/guides/value-hue-saturation.mjs";
import { guide as pigment } from "./content/guides/pigment-and-light.mjs";
import { guide as perspectiveGeometry } from "./content/guides/how-perspective-geometry-works.mjs";
import { guide as obscura } from "./content/guides/camera-obscura.mjs";
import { guide as anatomy } from "./content/guides/anatomy-for-artists.mjs";
import { guide as negativeSpace } from "./content/guides/negative-space-and-gestalt.mjs";
import { guide as balance } from "./content/guides/why-compositions-feel-balanced.mjs";
import { guide as sfumato } from "./content/guides/sfumato-and-atmospheric-perspective.mjs";
import { guide as faces } from "./content/guides/faces-symmetry-and-beauty.mjs";
import { guide as artScientist } from "./content/guides/what-is-an-art-scientist.mjs";
import { essay as wrong } from "./content/journey/what-i-got-wrong.mjs";
import { essay as shortList } from "./content/journey/the-short-list.mjs";
import { essay as meet } from "./content/journey/where-they-meet-for-me.mjs";
import { essay as colorWheel } from "./content/journey/the-color-wheel-i-retired.mjs";
import { essay as formula } from "./content/journey/the-formula-i-wanted.mjs";
import { questions, questionsPage } from "./content/questions.mjs";

export { topics, questions, questionsPage };

export const guides = [
  artScience,
  artScientist,
  color,
  eyeColor,
  complements,
  valueHue,
  pigment,
  sfumato,
  composition,
  balance,
  negativeSpace,
  perspective,
  perspectiveGeometry,
  obscura,
  light,
  medium,
  anatomy,
  golden,
  faces,
  looking,
  artometrics,
];

export const essays = [wrong, shortList, meet, colorWheel, formula];

export const SOURCES_NOTE =
  "Starting points for the claims in this piece, not a full bibliography. Where a point is contested, the page says so in the text.";

export function alphaKey(title) {
  return title
    .replace(/^how to /i, "")
    .replace(/^what is (a |an |the )?/i, "")
    .replace(/\?/g, "")
    .trim();
}

export function guidePath(slug) {
  return `/guides/${slug}`;
}

export function journeyPath(slug) {
  return `/journey/${slug}`;
}

export function questionsPath() {
  return "/questions";
}

export function topicById(id) {
  return topics.find((topic) => topic.id === id);
}

export function plainText(value) {
  return String(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/&[#a-z0-9]+;/gi, " ");
}

export function countWords(entry) {
  const parts = [];
  if (entry.definition) parts.push(...entry.definition);
  if (entry.takeaways) parts.push(...entry.takeaways);
  if (entry.note) parts.push(...entry.note);
  for (const section of entry.sections) {
    parts.push(section.heading, ...section.paragraphs);
  }
  return plainText(parts.join(" ")).split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(entry) {
  return Math.max(1, Math.round(countWords(entry) / 220));
}

function hrefsIn(parts) {
  const found = [];
  const re = /href="([^"]+)"/g;
  for (const part of parts) {
    let match;
    while ((match = re.exec(part))) found.push(match[1]);
  }
  return found;
}

function guideIds(guide) {
  return new Set(["definition", "takeaways", "related", "sources", ...guide.sections.map((section) => section.id)]);
}

function essayIds(essay) {
  return new Set(["note", "related", "guides-used", ...essay.sections.map((section) => section.id)]);
}

function questionIds() {
  return new Set(["definition", "takeaways", "related", "sources", ...questions.map((item) => item.id)]);
}

function validate() {
  const errors = [];
  const slugs = new Set();
  const guideBySlug = new Map(guides.map((guide) => [guide.slug, guide]));
  const essayBySlug = new Map(essays.map((essay) => [essay.slug, essay]));
  const topicIds = new Set(topics.map((topic) => topic.id));
  const indexHashes = new Set([...topicIds, "by-topic", "alphabetical"]);

  for (const guide of guides) {
    if (slugs.has(guide.slug)) errors.push(`duplicate slug ${guide.slug}`);
    slugs.add(guide.slug);
    if (!topicIds.has(guide.topic)) errors.push(`${guide.slug} has unknown topic ${guide.topic}`);
    const ids = new Set();
    for (const section of guide.sections) {
      if (ids.has(section.id)) errors.push(`${guide.slug} duplicate id ${section.id}`);
      ids.add(section.id);
    }
    for (const slug of guide.related) {
      if (slug === guide.slug) errors.push(`${guide.slug} related to itself`);
      if (!guideBySlug.has(slug)) errors.push(`${guide.slug} missing related ${slug}`);
    }
    const words = countWords(guide);
    if (words < 300 || words > 700) errors.push(`${guide.slug} is ${words} words; want 300–700`);
    for (const href of hrefsIn([
      ...guide.definition,
      ...guide.takeaways,
      ...guide.sections.flatMap((section) => section.paragraphs),
    ])) {
      checkHref(href, guideIds(guide), errors, `${guide.slug}`);
    }
  }

  for (const topic of topics) {
    if (!guides.some((guide) => guide.topic === topic.id)) errors.push(`topic ${topic.id} has no guides`);
  }

  for (const essay of essays) {
    if (slugs.has(essay.slug)) errors.push(`duplicate slug ${essay.slug}`);
    slugs.add(essay.slug);
    const words = countWords(essay);
    if (words < 350) errors.push(`${essay.slug} is only ${words} words`);
    for (const slug of essay.relatedNotes) {
      if (!essayBySlug.has(slug)) errors.push(`${essay.slug} missing note ${slug}`);
    }
    for (const slug of essay.relatedGuides) {
      if (!guideBySlug.has(slug)) errors.push(`${essay.slug} missing guide ${slug}`);
    }
    for (const href of hrefsIn([
      ...essay.note,
      ...essay.sections.flatMap((section) => section.paragraphs),
    ])) {
      checkHref(href, essayIds(essay), errors, essay.slug);
    }
  }

  const qIds = new Set();
  for (const item of questions) {
    if (qIds.has(item.id)) errors.push(`duplicate question id ${item.id}`);
    qIds.add(item.id);
  }
  for (const slug of questionsPage.related) {
    if (!guideBySlug.has(slug)) errors.push(`questions page missing related ${slug}`);
  }
  for (const href of hrefsIn([
    ...questionsPage.definition,
    ...questionsPage.takeaways,
    ...questions.flatMap((item) => item.paragraphs),
  ])) {
    checkHref(href, questionIds(), errors, "questions");
  }

  function checkHref(href, localIds, sink, label) {
    if (href.endsWith("/")) sink.push(`${label} trailing slash in ${href}`);
    if (href.startsWith("https://")) return;
    if (href.startsWith("#")) {
      const id = href.slice(1);
      if (!localIds.has(id)) sink.push(`${label} missing local id ${id}`);
      return;
    }
    if (!href.startsWith("/")) {
      sink.push(`${label} bad href ${href}`);
      return;
    }
    const [path, hash] = href.split("#");
    const known = new Set([
      "/",
      "/guides",
      "/journey",
      "/questions",
      ...guides.map((guide) => guidePath(guide.slug)),
      ...essays.map((essay) => journeyPath(essay.slug)),
    ]);
    if (!known.has(path)) sink.push(`${label} unknown path ${path}`);
    if (!hash) return;
    if (path === "/guides" && indexHashes.has(hash)) return;
    if (path === "/questions" && questionIds().has(hash)) return;
    const guide = guides.find((item) => guidePath(item.slug) === path);
    if (guide && guideIds(guide).has(hash)) return;
    const essay = essays.find((item) => journeyPath(item.slug) === path);
    if (essay && essayIds(essay).has(hash)) return;
    sink.push(`${label} unknown hash ${href}`);
  }

  if (errors.length) {
    throw new Error(`Academy catalog\n${errors.join("\n")}`);
  }
}

validate();

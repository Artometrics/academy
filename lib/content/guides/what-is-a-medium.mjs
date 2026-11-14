/** Guide. */
export const guide = {
  slug: "what-is-a-medium",
  title: "What is a medium? (oil, fresco, digital)",
  dek: "A medium is the material and the way the image reaches you. Oil, fresco, and a screen are not three flavors of the same picture. Each one forbids something.",
  topic: "materials",
  featured: false,
  definition: [
    "A medium is the stuff an image is made of, the support it sits on, and the way you meet it. Pigment is the colorant. Binder holds it. Support is wall, panel, canvas, paper, or pixel grid. Delivery is the part people skip: a screen emits light, a painting reflects it. Change any of these and you change what can be made.",
  ],
  takeaways: [
    "Oil cures by taking up oxygen. The slowness is the reason to use it.",
    "Buon fresco traps pigment in plaster as the lime becomes limestone. You paint while it is damp, and you do not get the day back.",
    "A digital file is numbers plus an encoding. It is a color only when a device renders it. Screen and print are different media.",
    "Ask which decisions the material already made. A slogan is not an analysis of one picture.",
  ],
  sections: [
    {
      id: "parts",
      heading: "Pigment, binder, support",
      paragraphs: [
        "The same blue in three binders is three paints. In oil it can be glazed over a light ground. In egg tempera it is fast and happier as a hatch than as a buttery blend. In fresco it has to survive wet alkaline plaster, which some pigments will not. The pigment’s name without the binder is half an identification. The support argues too. Wood moves differently from canvas. A wall is a building before it is a picture. Paper cockles. A copy that gets the image and ignores the support looks implausible. <a href=\"/guides/color-theory-physically#two-mixes\">How the color mixes</a> depends on this stack.",
      ],
    },
    {
      id: "oil",
      heading: "Oil cures. It does not evaporate.",
      paragraphs: [
        "A drying oil — linseed is usual; walnut and poppy are others — cross-links as it takes up oxygen. The film cures over days or months, which is why oil blends wet-into-wet and why a glaze can sit on a layer that has already firmed. A thick film can wrinkle. Oil is older than the fifteenth-century panels that made it famous. Those workshops pushed the slow film: glazes and soft transitions. “Van Eyck invented oil” skips the earlier practice.",
      ],
    },
    {
      id: "fresco",
      heading: "Fresco locks color into the wall",
      paragraphs: [
        "In buon fresco, pigment in water goes onto fresh lime plaster. Calcium hydroxide reacts with carbon dioxide and becomes calcium carbonate, catching the grains. You paint while a mineral sets. When the day’s patch, a giornata, has carbonated, a change means cutting plaster out. Fresco secco is color added after the set, with a binder, and it is easier to lose. Some pigments were saved for it because fresh lime mistreats them. Natural ultramarine is the usual case. The Sistine ceiling (1508–1512) is largely buon fresco; conservation also found secco passages, including some blues. Cennino Cennini’s <em>Il libro dell’arte</em> (around 1400) is the workshop account of racing the plaster.",
      ],
    },
    {
      id: "digital",
      heading: "A screen emits. A print reflects.",
      paragraphs: [
        "A digital image is numbers plus a rule for what they mean. Until a device shows them, there is no color to see. A monitor emits red, green, and blue light — additive mixing, as in the <a href=\"/guides/color-theory-physically#two-mixes\">color guide</a>. A print absorbs room light with ink and cannot outshine the paper and the lamp. The file that glowed on a laptop and died on paper changed media. Screens given the same numbers still disagree, which is why an ICC profile describes a device so the numbers can be translated. “RGB” is not a color until the device is named. The same pixels on a phone and at ten feet are not the same <a href=\"/guides/composition\">composition</a>.",
      ],
    },
    {
      id: "constraints",
      heading: "The constraint is the useful part",
      paragraphs: [
        "Acrylic is the comparison that sharpens the others. The polymer is already formed, dispersed in water; the water leaves and the film is ready far faster than oil. You can imitate oil with it. The blending window will not fully cooperate. The practical claim is enough, and it does not need a slogan: the material makes some decisions before you do. A description that fits fresco, oil, and a phone screen unchanged has not started. Begin where <a href=\"/guides/how-to-look-at-a-painting#material\">how to look</a> begins. What is the support. What can this combination not do.",
      ],
    },
  ],
  related: ["color-theory-physically", "light-shadow-and-the-eye", "art-science-intersection"],
  sources: [
    {
      title: "Cennino Cennini, Il libro dell’arte (around 1400).",
      detail: "Workshop practice: plaster, the day’s patch, and which pigments belong in true fresco.",
    },
    {
      title: "The Sistine ceiling, 1508–1512, and the 1980–1994 conservation.",
      detail: "Primarily buon fresco, with documented secco. Ultramarine often went on after the set because alkaline plaster treats it badly.",
    },
    {
      title: "Drying oils and acrylic dispersions.",
      detail: "Oils cure by oxidation. Acrylics coalesce as water leaves a polymer emulsion. “Dries” covers both and explains neither.",
    },
    {
      title: "ICC color management.",
      detail: "Profiles exist because RGB numbers are not yet a color. A display emits; a print reflects.",
    },
  ],
};

/** Common questions. Short answers; the guides carry the mechanism and the sources. */
export const questionsPage = {
  title: "Common questions",
  dek: "Short answers to the questions beginners actually ask about pictures and the art–science overlap. Each one ends at the guide that does the work.",
  definition: [
    "A question page is a set of short answers. It is not a second copy of the guides. Where a claim needs a mechanism, the sentence stops and points. Where a famous story is mostly myth, the answer says so here, and the guide shows the part that is real and the part that fails. If this page and a guide ever disagree, the guide is the one maintained as the explanation.",
  ],
  takeaways: [
    "Start with the question you have heard, then open the guide it names.",
    "“Myth” on this page means the popular claim overreaches a fact that is otherwise real.",
    "The Journey is opinion, labeled as opinion. Nothing here is a Journey note.",
    "The sources for a claim live on the guide. This page does not invent a second bibliography.",
  ],
  related: [
    "what-is-an-art-scientist",
    "golden-ratio",
    "pigment-and-light",
    "how-the-eye-sees-color",
    "camera-obscura",
    "how-to-look-at-a-painting",
  ],
  sources: [
    {
      title: "The guides linked from each answer.",
      detail: "Those pages carry the mechanism and the citations. This page is the short version. Do not cite it past them.",
    },
    {
      title: "Where an answer says “myth.”",
      detail: "The claim fails a check the guide names: endpoints you can move, a wheel from the wrong physics, a rating task treated as a law of pictures, or a tool nobody has documented.",
    },
  ],
};

export const questions = [
  {
    id: "mona-lisa",
    question: "Is the golden ratio in the Mona Lisa?",
    dek: "The number is real. A spiral you can slide until it kisses the panel is not a measurement.",
    featured: true,
    paragraphs: [
      "The golden ratio, about 1.618, is a real constant. Euclid constructed it and said nothing about taste. The claim that the Mona Lisa was designed on it is a different sentence, and it fails the ordinary test: the overlays do not agree about the center or about which edges count, and the notebooks do not set this panel out on the ratio. A curve that kisses a few features will do that for many portraits.",
      "The same pattern covers the Parthenon and the nautilus shell. Move the endpoints and the ratio moves. Plants are the narrower case that partly holds. The full split between the mathematics and the folklore is <a href=\"/guides/golden-ratio#overlays\">golden ratio: fact vs. myth</a>.",
    ],
  },
  {
    id: "red-and-green",
    question: "Why do red and green disagree?",
    dek: "As lights they can look yellow, and brighter. As paints they go toward mud, and darker.",
    featured: true,
    paragraphs: [
      "They only disagree if you think “mix” is one operation. Overlapped beams add energy. Red light plus green light drives the cones in a combination the visual system reports as yellow, and the patch is brighter than either beam. No yellow wavelength is required. Paint does the other job. A pigment absorbs, so two pigments together usually reflect less, and red with green is the classic dull result.",
      "A screen is the first game. A tube is the second. The school color wheel is neither. The mechanism, including why two different spectra can still match, is <a href=\"/guides/pigment-and-light\">pigment and light</a>.",
    ],
  },
  {
    id: "color-wheel",
    question: "Is a color wheel physics?",
    dek: "A wheel is a diagram for teaching a set of names. The spectrum and the printer do not use the school one.",
    featured: false,
    paragraphs: [
      "Newton’s prism spreads sunlight into a spectrum and can recombine it. That is physics. A wheel that puts red, yellow, and blue at equal posts is a studio diagram, useful for pointing, silent on wavelengths. Printers use cyan, magenta, and yellow because those are the filters that subtract. The two lists are not secret versions of each other.",
      "When a rule from the wheel fails, you have usually changed games, from paint to a screen or from one red to another red. The longer account is <a href=\"/guides/color-theory-physically#two-mixes\">color theory, physically</a>, and the mixture page is <a href=\"/guides/pigment-and-light#not-a-wheel\">pigment and light</a>.",
    ],
  },
  {
    id: "value-hue",
    question: "Value, hue, or saturation?",
    dek: "Three separate facts. “Bright” smears two of them together.",
    featured: false,
    paragraphs: [
      "Hue is which color. Saturation is how far it sits from gray. Value is how light or dark it is. A ruby can be dark and intense. A pale gray-blue can be light and dull. Asking for “brighter” does not say whether you wanted white, which usually kills saturation, or a hue farther from gray, which may go darker.",
      "In pictures, value usually does the structural work. That is a working bias with a studio check, not a theorem. The three words, and the systems that keep them apart, are in <a href=\"/guides/value-hue-saturation\">value, hue, and saturation</a>.",
    ],
  },
  {
    id: "seeing-color",
    question: "How does the eye see color?",
    dek: "Three cone types in daylight. Rods at night, and rods do not report hue.",
    featured: false,
    paragraphs: [
      "Daylight color starts with three cone classes, peaks very roughly near 420, 530, and 560 nanometers. The cone nicknamed red peaks in the yellow-green. Further along, the visual system compares those signals in opponent pairs: red against green, blue against yellow, light against dark. Dim light hands the job to rods. Once the cones have dropped out, you can get around and you cannot name hues.",
      "Most “color blindness” is a shifted cone, not grayscale vision. None of this is a color wheel. The cells are the subject of <a href=\"/guides/how-the-eye-sees-color\">how the eye sees color</a>.",
    ],
  },
  {
    id: "complements",
    question: "Do complements always work?",
    dek: "They raise contrast. Contrast is a tool, not a compliment, and the pair depends on the wheel.",
    featured: false,
    paragraphs: [
      "Stare at red and the afterimage runs toward the opponent hue. A gray square on a red field looks slightly green. Those shifts are real, and Chevreul wrote them up from a dye works in 1839. “They work” usually means the contrast is strong. Strong contrast can be the point of a passage or the reason the passage shouts.",
      "Which pair you call complementary also moves. The painter’s red against green, the opponent unique hues, and the light that adds to white are three lists. The differences are in <a href=\"/guides/why-complementary-colors-work#which-pair\">why complementary colors work</a>.",
    ],
  },
  {
    id: "perspective-seeing",
    question: "Is perspective how we see?",
    dek: "It is how one stationary eye projects onto a flat plane. You do not look that way for long.",
    featured: false,
    paragraphs: [
      "The construction is similar triangles. On a fixed picture plane, an upright object twice as far is drawn half as tall. Parallels meet in the picture because they share a direction, not because they meet in the room. The horizon of the construction sits at eye height. It is not a synonym for the sea.",
      "You have two eyes, you move, and sharp vision is a small central patch. The construction can still be exact inside its assumptions. “Correct” means consistent with one eye point. It does not mean the picture is good. The geometry is <a href=\"/guides/how-perspective-geometry-works\">how perspective geometry works</a>. The limits are in <a href=\"/guides/perspective-and-optics#one-eye\">perspective and optics</a>.",
    ],
  },
  {
    id: "vermeer",
    question: "Did Vermeer use a camera?",
    dek: "No known document says he owned one. Some painters did use the device. “Cheating” is the wrong word either way.",
    featured: true,
    paragraphs: [
      "A camera obscura throws an inverted image through a small hole or a lens. The optics are old and real. Eighteenth-century view painters, Canaletto among them, are reported using one as a drawing aid. Vermeer is the disputed case. There is a geometric argument, a broader historical thesis, and a published critique that the pictures do not require a lens. There is not, so far, a letter or an inventory.",
      "A projection is also not a painting. Someone still chooses the crop and the paint. A tool is not a fraud, and an undocumented tool is not a fact. The split is <a href=\"/guides/camera-obscura#vermeer\">the camera obscura and art</a>.",
    ],
  },
  {
    id: "leonardo-anatomy",
    question: "Did Leonardo invent anatomy?",
    dek: "He dissected and he drew. He also copied routes that are not in the body. The printed reset came later, from Vesalius.",
    featured: false,
    paragraphs: [
      "Leonardo’s anatomical sheets are extraordinary, and they stayed unpublished in his lifetime, so they did not become the textbook. Some record a dissection. One famous sheet includes a channel from the spinal cord that tradition predicted and the body does not have. Galen had taught from animal dissection for centuries. Mondino’s manual is fourteenth-century. Vesalius’s <em>Fabrica</em> (1543) corrected Galen in print after Leonardo was dead.",
      "What an artist can use is smaller than that history: the landmark this action makes on a living surface. The rest is <a href=\"/guides/anatomy-for-artists\">anatomy for artists</a>.",
    ],
  },
  {
    id: "negative-space",
    question: "What is negative space?",
    dek: "The region you did not name first. It has a shape. It does not have a spirit.",
    featured: false,
    paragraphs: [
      "Negative space is the gap: sky between branches, the margin around a head, the light between an arm and a torso. The visual system organizes a field into figure and ground, and the two can trade, which is Rubin’s vase. Drawing the gap is a way to check a contour you would otherwise symbolize.",
      "Gestalt “laws” are tendencies — proximity, similarity, closure — with known exceptions. An empty corner is not automatically a secret shape. The demonstrations and the limit are in <a href=\"/guides/negative-space-and-gestalt\">negative space and Gestalt</a>.",
    ],
  },
  {
    id: "balance-formula",
    question: "Is there a balance formula?",
    dek: "People often agree a picture feels steady or about to tip. Agreement is not a unit of weight.",
    featured: false,
    paragraphs: [
      "Symmetry is detected quickly, and a centered form can feel planted. Asymmetry can feel steady too. Experiments find real agreement, especially on simple displays, and no formula that places the next shape. “Visual weight” borrows the language of levers. Dark, large, isolated, near the edge: a useful checklist, and not a set of numbers two teachers will share.",
      "If the unit was not stated before the crop, the sum was done afterward. The golden ratio will not rescue it. The argument is <a href=\"/guides/why-compositions-feel-balanced\">why some compositions feel balanced</a>.",
    ],
  },
  {
    id: "sfumato",
    question: "What is sfumato?",
    dek: "Form turned by tone, without a hard contour. It is not the same thing as a distant hill going blue.",
    featured: false,
    paragraphs: [
      "Sfumato is the smoky blend: a cheek becomes the shadow beside the nose without a line where a line would have been a lie. Oil stays workable long enough to do it. Atmospheric perspective is the other phrase people attach to Leonardo, and it is a different mechanism. Air between you and a far ridge lowers contrast and often adds blue. A hand at arm’s length can be sfumato. It cannot be atmosphere.",
      "A soft mouth is a soft transition. It is not, by itself, a decoded emotion. Both mechanisms, and the smile hypothesis with its limit, are in <a href=\"/guides/sfumato-and-atmospheric-perspective\">sfumato and atmospheric perspective</a>.",
    ],
  },
  {
    id: "blue-hills",
    question: "Why are distant hills blue?",
    dek: "Clean air scatters short wavelengths more, so a long path adds blue light. Dust and water do not have to.",
    featured: false,
    paragraphs: [
      "Fine particles scatter blue more than red. That is why the sky is blue, and why a distant ridge seen through a lot of clean air looks pale and blue: contrast has been lost and blue light has been added. Larger particles scatter more evenly, so haze can be white, and dirty air can go brown. “Far, therefore blue” is the clean-air case plus a painter’s habit.",
      "Leonardo recorded the loss of contrast. He did not have the scattering theory. The check, and the physics, are in <a href=\"/guides/sfumato-and-atmospheric-perspective#blue-hills\">why the hills go blue</a>.",
    ],
  },
  {
    id: "symmetry",
    question: "Are symmetrical faces more beautiful?",
    dek: "In rating tasks, a bit. The effect is modest, and a rating of photos is not a rule for pictures.",
    featured: false,
    paragraphs: [
      "Composites made by averaging faces are often rated more attractive than the faces that went into them, and more symmetric versions often win by a little. “Average” means the mean of that sample. Some studies find a preference for particular deviations from it. The health story people attach — symmetry as a certificate of a good constitution — is a hypothesis, and the strong version outruns the ratings.",
      "A golden-ratio mask fitted to a portrait is an overlay, with the same weakness as any movable template. Pictures are not the rating task. The literature with its limits is <a href=\"/guides/faces-symmetry-and-beauty\">faces, symmetry, and beauty</a>.",
    ],
  },
  {
    id: "art-scientist",
    question: "What is an art scientist?",
    dek: "Someone who asks checkable questions about images. Not a license, and not a score for beauty.",
    featured: true,
    paragraphs: [
      "There is no single credential the phrase refers to. Conservation science, technical art history, empirical aesthetics, and vision science already do pieces of the work, and they do not share one method. The work itself is plain: a materials claim tied to an instrument, a geometry you can draw, a story that survives the measurement it cites. A ranking of artists is not the work.",
      "You do not need the job title to ask the questions. You do need a sentence that could be wrong. The longer version is <a href=\"/guides/what-is-an-art-scientist\">what is an art scientist?</a>, next to <a href=\"/guides/art-science-intersection\">the intersection</a> and <a href=\"/guides/what-is-artometrics\">what Artometrics is</a>.",
    ],
  },
  {
    id: "shadows",
    question: "Why isn’t the shadow just black?",
    dek: "A shadow is the light that did not arrive from one source. Other light usually fills it.",
    featured: false,
    paragraphs: [
      "Flat black is the special case: one hard lamp and almost nothing else. In a room, the side turned away from the window is lit by the wall, the floor, the shirt. Shadow color is not blue by law. A cool shadow in warm sun can be the sky’s fill, or it can be a neutral that only looks cool next to the warm lit side. Name the fill before you name a pigment.",
      "The eye also compares. The same gray can look light or dark depending on the neighbors. Both facts are in <a href=\"/guides/light-shadow-and-the-eye#shadow\">light, shadow, and how the eye works</a>.",
    ],
  },
  {
    id: "medium",
    question: "What is a medium, really?",
    dek: "The material, the support, and whether the image emits light or only reflects it.",
    featured: false,
    paragraphs: [
      "Oil cures by taking up oxygen, which is why it blends. Buon fresco traps pigment in plaster while the plaster sets, and the day’s patch does not come back. A digital file is numbers until a device renders it. A screen emits red, green, and blue light. A print can only reflect the room. The file that glowed on a laptop and died on paper changed media.",
      "A description that fits all three unchanged has not started. The constraints are the useful part, and they are in <a href=\"/guides/what-is-a-medium\">what is a medium?</a>",
    ],
  },
  {
    id: "guides-and-journey",
    question: "Are the guides and the Journey the same?",
    dek: "No. Guides are neutral explanations. The Journey is one person’s notes, and it says so.",
    featured: false,
    paragraphs: [
      "A guide defines a term, gives the mechanism, and marks where the popular version overreaches. It is written so the explanation does not depend on who needed it. The Journey is first person. The author is the founder of Artometrics, the mistakes are his, and a note at the top of each essay says it is not a guide.",
      "If you want the mechanism, use the <a href=\"/guides\">guides</a>. If you want the record of getting there, use <a href=\"/journey\">the Journey</a>. This page is the third thing: the short answer, pointed at the guide.",
    ],
  },
];

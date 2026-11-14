/** Guide. */
export const guide = {
  slug: "light-shadow-and-the-eye",
  title: "Light, shadow, and how the eye works",
  dek: "Light is radiation. Shadow is where a direct ray does not arrive — and that place is usually lit by something else. The eye reports a comparison, not a light meter.",
  topic: "color-and-light",
  featured: false,
  definition: [
    "Visible light is electromagnetic radiation in a band people usually put at about 400 to 700 nanometers, with soft edges rather than a cut. A shadow is the region one source does not reach directly. In an ordinary room that region is still lit by other surfaces. The eye does not hand you the raw intensity at a point. It builds lightness from comparisons, from a guess about the illuminant, and from where you are looking.",
  ],
  takeaways: [
    "Shadow is missing direct light, not a black pigment. Its tone is whatever fills it.",
    "A small source throws a hard edge. A large or diffuse source throws a soft one.",
    "Detail and color in daylight are concentrated in a small central patch of retina. A picture sharp to the corners is not a copy of one glance.",
    "The same gray can look light or dark depending on its neighbors. Painters used that long before anyone diagrammed a retina.",
  ],
  sections: [
    {
      id: "shadow",
      heading: "A shadow is a missing ray",
      paragraphs: [
        "A small lamp in a dark room throws a head almost into silhouette. Open a window and the side turned away is lit by the wall, the floor, the shirt. Flat black is a special case: one hard source and almost no fill. Shadow color is not blue by law. Warm sun with a sky fill makes a cooler shadow. A neutral patch that only looks cool inside a warm field may contain no blue light at all. That is simultaneous contrast. <a href=\"/guides/color-theory-physically#appearance\">Appearance is not the spectrum.</a> Name the fill before you name the pigment.",
      ],
    },
    {
      id: "the-eye",
      heading: "The eye is not a camera with a better lens",
      paragraphs: [
        "The cornea and lens focus light on the retina. That is the least useful part for a painter. Rods work in dim light and do not report color. Cones work in daylight and pack the fovea, a small central patch. Look at a face and the eyes can be sharp while the ear is not, until you look at the ear. The scene feels clear because the eyes move. A picture sharp from edge to edge is not one glance. Saturated color in a corner is a choice, not a transcript of a fixation.",
      ],
    },
    {
      id: "lightness",
      heading: "Lightness is a comparison",
      paragraphs: [
        "Step from noon into a hallway and the hall is briefly blind, then readable. Absolute intensity was a poor guide to the surfaces. The system adapts, and it discounts the illuminant: a white shirt looks white in both places. That is the same family as color constancy in the <a href=\"/guides/color-theory-physically\">color guide</a>. Edward Adelson’s checkershadow illusion (1995) makes the comparison hard to shrug off. Two squares printed with the same gray are seen as different lightnesses, because one is explained as a surface in shadow. A copyist who matches a patch in isolation and ignores the surround will get the ink and miss the picture.",
      ],
    },
    {
      id: "chiaroscuro",
      heading: "What painters worked out by looking",
      paragraphs: [
        "Chiaroscuro builds form by the passage from light to dark. It is a practice, not a law. Leonardo’s soft modeling and Caravaggio’s hard darks are both chiaroscuro, and they assume different sources. Sfumato is the smoky neighbor: form turns by value without a hard contour. The words are related, not synonyms. The studio version of the lesson is simple. Paint the fill, not a symbol for “shadow.” In a gallery, ask whether the lit sides agree, and whether the contact shadow under a foot is darker than the broad shade on the leg. <a href=\"/guides/perspective-and-optics#air\">Aerial perspective</a> asks the same kind of question about air.",
      ],
    },
    {
      id: "check",
      heading: "What you can check in the room",
      paragraphs: [
        "Keep two lights apart. The picture’s light is the one the painter arranged. Gallery light puts glare on varnish. Step sideways: if a highlight moves and the painted lights do not, you were studying the room. Then keep the claim small enough to lose. “The face is lit from the upper left and the book is not” is checkable. “The darkness expresses despair” may be serious, and it is a different sentence. <a href=\"/guides/how-to-look-at-a-painting\">How to look</a> is the habit of not swapping them.",
      ],
    },
  ],
  related: ["how-the-eye-sees-color", "sfumato-and-atmospheric-perspective", "color-theory-physically"],
  sources: [
    {
      title: "Edward H. Adelson, checkershadow illusion (1995).",
      detail: "Equal luminances seen as different lightnesses, because one patch is explained as shadow.",
    },
    {
      title: "Rods, cones, and the fovea.",
      detail: "Three cone classes in daylight; rods for dim light; sharp color vision concentrated centrally. Cone peaks lie near 420, 530, and 560 nanometers.",
    },
    {
      title: "Leonardo’s notes on light, shadow, and aerial perspective.",
      detail: "Workshop observation of gradation and of contrast lost with distance. Not a theory of the retina.",
    },
  ],
};

/** Guide. */
export const guide = {
  slug: "perspective-and-optics",
  title: "Perspective and optics",
  dek: "Linear perspective is a geometric model: one eye, held still, and a flat picture cutting the cone of rays. It matches some pictures. It is not the whole of seeing.",
  topic: "form-and-space",
  featured: false,
  definition: [
    "Linear perspective picks a point for the eye, draws the rays from that point to the scene, and marks where the rays cut a flat plane. In the usual one-point case, verticals stay vertical, the horizon sits at eye height, and parallels that recede from the viewer meet on that horizon. The assumptions are part of the model.",
  ],
  takeaways: [
    "The construction is one stationary eye and a flat picture plane. It is not two eyes, a moving head, or a curved retina.",
    "The flattened look blamed on telephoto lenses is mostly a fact about standing far away.",
    "Atmospheric perspective — lost contrast, softer edges, a shift toward the sky — is a different mechanism from converging lines.",
    "Orthographic and isometric drawings are not failed perspective. They keep the measurements their job needs.",
  ],
  sections: [
    {
      id: "picture-plane",
      heading: "The picture plane",
      paragraphs: [
        "Leon Battista Alberti’s <em>De pictura</em> (1435) writes the rule down: a visual pyramid with its apex at the eye, cut by a plane that becomes the picture. Filippo Brunelleschi’s Baptistery demonstration — a panel, a hole, a mirror — comes through Antonio Manetti’s biography, written decades later, so the anecdote is a later report, not a lab notebook. Once you accept one eye and one plane, the vanishing point is not a mystic center. It is where parallels receding from the viewer meet, on a horizon at eye height. Turn the object and you need a second point. Look up at a tower and the verticals converge. Same rule.",
      ],
    },
    {
      id: "one-eye",
      heading: "One eye, held still",
      paragraphs: [
        "You do not see this way for long. Two eyes give near objects two slightly different views, which a flat picture cannot reproduce. You move your head. Sharp vision is a small central patch, so a room is built from many glances rather than one frozen cone. A very wide perspective picture stretches at the edges, and a rectilinear wide-angle lens does too. That does not make the construction false. It makes it a model that states its eye point. Some icon traditions open parallels toward the viewer on purpose: a different model, not a failed Alberti.",
      ],
    },
    {
      id: "distance",
      heading: "Distance changes the picture more than the lens does",
      paragraphs: [
        "Stand close to a person in front of a building and the nose looms while the building shrinks. Step back until the person is the same size in the frame and the face flattens while the building grows. The change is the distance. A short lens up close and a long lens from far away are how a camera fills the frame with those two viewpoints. Blaming “compression” on the glass misses the geometry. The same choice sits inside drawn perspective: a near eye point gives violent convergence, a far one a calmer picture. Choosing it is composition, which is why it belongs with <a href=\"/guides/composition\">what composition is</a>.",
      ],
    },
    {
      id: "air",
      heading: "Air is a different kind of depth",
      paragraphs: [
        "Atmospheric perspective, also called aerial perspective, is not linear perspective with the lines rubbed out. Over distance, contrast drops, edges soften, and hues often shift toward the color of the sky, because the air scatters light. Leonardo described the effect. Blue hills can be a record of that scattering, or a recipe copied from other pictures. The check is whether the loss of contrast is orderly with distance. Light does the rest of the spatial work — what is lit, what is turned away — and that is <a href=\"/guides/light-shadow-and-the-eye\">another mechanism</a>, independent of whether the floorboards converge.",
      ],
    },
    {
      id: "other-projections",
      heading: "Other projections have other jobs",
      paragraphs: [
        "A plan is orthographic: the projectors are parallel, and a measured length stays a measured length. An isometric keeps parallels parallel so you can read three faces without a vanishing point eating the numbers. A map in linear perspective would sacrifice the distances the map is for. Calling these primitive because they are not Alberti confuses a window-picture with every picture. A rectilinear camera is the perspective model, plus a chosen distance and the lens’s own errors. Ask which eye point a painting uses, and which assumptions it kept. You can be wrong, and you can show the lines. The partner question is <a href=\"/guides/how-to-look-at-a-painting#light-in-the-picture\">the light inside the picture</a>.",
      ],
    },
  ],
  related: ["composition", "light-shadow-and-the-eye", "how-to-look-at-a-painting"],
  sources: [
    {
      title: "Leon Battista Alberti, De pictura (1435).",
      detail: "The visual pyramid and the intersection that becomes the picture. Della pittura is the Italian companion.",
    },
    {
      title: "Antonio Manetti’s life of Brunelleschi.",
      detail: "The later source for the Baptistery demonstration. The optical details are secondhand.",
    },
    {
      title: "Martin Kemp, The Science of Art (1990).",
      detail: "Perspective set among the other geometrical and optical tools used in the European tradition.",
    },
    {
      title: "Leonardo’s notes on aerial perspective.",
      detail: "Contrast and color shift with distance, treated as an effect of air, separate from converging lines.",
    },
  ],
};

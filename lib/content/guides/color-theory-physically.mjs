/** Guide. */
export const guide = {
  slug: "color-theory-physically",
  title: "Color theory, physically",
  dek: "Color is a perception that depends on a light, a surface, and a visual system. A pigment name is not a wavelength, and a color wheel is not a map of physics.",
  topic: "color-and-light",
  featured: true,
  definition: [
    "Color is what a visual system reports when light from a scene reaches it. Change the light, the surface, or the eye, and the report can change. Hue, saturation, and value are names for parts of that report, not three substances sitting in the paint.",
  ],
  takeaways: [
    "Light mixes by adding wavelengths. Paint mixes by subtracting them. The rules are not the same.",
    "Daytime color starts with three cone types, then opponent comparisons. Both accounts are real, at different stages.",
    "The color you see is not a readout of one wavelength. Surround, illuminant, and adaptation all move it.",
    "A painter’s wheel is a teaching diagram. A CIE coordinate is a measurement agreement. Neither is a law of beauty.",
  ],
  sections: [
    {
      id: "two-mixes",
      heading: "Light mixes one way. Paint mixes another.",
      paragraphs: [
        "Overlap beams of light and you add energy. Red and green light together look yellow, and the result is brighter than either beam. That is additive mixing, which is what a screen does. Paint does the opposite: a pigment absorbs some wavelengths and reflects the rest, so a mixture usually reflects less and looks darker. Printers’ cyan, magenta, and yellow are built for that subtractive game. The schoolroom wheel of red, yellow, and blue is a third thing — a diagram for a particular set of paints, not a map of the spectrum and not a map of printing. When a rule fails, you have usually changed games.",
      ],
    },
    {
      id: "three-terms",
      heading: "Hue, saturation, and value",
      paragraphs: [
        "Hue is the part that runs red, rather than green. Saturation, or chroma, is how far that hue sits from gray. Value, or lightness, is how light or dark it is. A color can be strongly saturated and still dark, which is why “bright” causes arguments: the word smears saturation and value together. Painters often say “tone” for value. The word is fine if you say which you mean. A picture can fail in value while the hues are right, and <a href=\"/guides/composition\">composition</a> usually depends more on that separation than on a favorite palette.",
      ],
    },
    {
      id: "the-eye",
      heading: "What the eye actually compares",
      paragraphs: [
        "In daylight, color starts with three cone types, sensitive to short, medium, and long wavelengths — peaks very roughly near 420, 530, and 560 nanometers. The long-wavelength cone is nicknamed “red.” Its peak is in the yellow-green. Thomas Young argued for three receptors in 1802; Helmholtz developed the account. Ewald Hering later described experience as opposed pairs: red against green, blue against yellow, light against dark. Both survived, because they are different stages. The cones are three. Further along, cells compare those signals. A wheel that pretends one stage is the whole story will contradict the other.",
      ],
    },
    {
      id: "appearance",
      heading: "Appearance is not the spectrum",
      paragraphs: [
        "The same patch shifts when the surround changes. A gray square looks lighter on black than on white: simultaneous contrast, and it is ordinary. The visual system also aims at color constancy, so a white shirt still looks white when you carry it from sun into shade. It is estimating a surface, not announcing the raw ray. Newton’s <em>Opticks</em> (1704) showed that sunlight spreads into a spectrum and can be recombined. That stands. Goethe’s <em>Theory of Colours</em> (1810) is sharp about appearance — afterimages, colored shadows — and wrong as a refutation of the physics. Keep both. The rest of the perceptual half is in <a href=\"/guides/light-shadow-and-the-eye\">light and the eye</a>.",
      ],
    },
    {
      id: "systems",
      heading: "Wheels, books, and systems that measure",
      paragraphs: [
        "Josef Albers’s <em>Interaction of Color</em> (1963) teaches how colors change each other in perception. It is useful in a studio and it is not optics. Munsell’s system and the CIE standards — the 1931 standard observer, and later spaces such as CIELAB — do a different job: they let two industries specify a color and agree. A coordinate is not a verdict on harmony. None of these will tell you which pair ought to move a stranger. They will stop you talking about paint as if it were light, or about a screen as if it were pigment. When the image leaves the room, the <a href=\"/guides/what-is-a-medium#digital\">medium</a> decides which game you are in.",
      ],
    },
  ],
  related: ["how-the-eye-sees-color", "pigment-and-light", "value-hue-saturation"],
  sources: [
    {
      title: "Isaac Newton, Opticks (1704).",
      detail: "Sunlight spread by a prism and recombined. Public domain.",
    },
    {
      title: "Thomas Young (1802) and Hermann von Helmholtz; Ewald Hering from the 1870s.",
      detail: "Three receptors, then opponent pairs. Modern accounts keep both, at different stages.",
    },
    {
      title: "CIE 1931 standard colorimetric observer.",
      detail: "A convention for matching colors, not a theory of taste.",
    },
    {
      title: "Josef Albers, Interaction of Color (1963).",
      detail: "Studio teaching about appearance. Not a substitute for the physics.",
    },
  ],
};

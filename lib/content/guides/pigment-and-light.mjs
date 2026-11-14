/** Guide. */
export const guide = {
  slug: "pigment-and-light",
  title: "Pigment and light",
  dek: "Red and green light can look yellow, and brighter than either beam. Red and green paint go toward mud, and darker. Same names. Different physics.",
  topic: "color-and-light",
  featured: false,
  definition: [
    "Additive mixture combines lights. The energies add, and the result can be brighter than either source. Subtractive mixture combines materials that absorb. Each pigment removes some wavelengths, so the mixture usually reflects less than either ingredient and looks darker. A screen is the first game. Paint, ink, and dye are the second. The school wheel of red, yellow, and blue is neither game. It is a diagram for a cabinet of paints.",
  ],
  takeaways: [
    "Light adds. Pigment subtracts. A rule that ignores which one you are in will fail on schedule.",
    "Red and green light look yellow because of the cones they drive, not because yellow photons appeared.",
    "Two spectra can match and still be different spectra. That match is a metamer.",
    "Real paints are messy absorbers. Ideal cyan, magenta, and yellow exist on a chalkboard more often than in a tube.",
    "The red–yellow–blue wheel is a teaching tool. It is not a map of the spectrum.",
  ],
  sections: [
    {
      id: "additive",
      heading: "Lights add",
      paragraphs: [
        "Overlap a red beam and a green beam and the patch looks yellow, brighter than either beam. You added energy. Newton’s <em>Opticks</em> (1704) showed the companion fact: a prism can spread sunlight, and the spread can be recombined into white. Hermann Grassmann, in 1853, wrote the rules of additive mixture colorimetry still uses. A monitor is this game. Yellow on the screen is usually the red and the green both on. No yellow subpixel is required. The cones that make the match possible are in <a href=\"/guides/how-the-eye-sees-color#three-cones\">how the eye sees color</a>.",
      ],
    },
    {
      id: "subtractive",
      heading: "Pigments remove",
      paragraphs: [
        "A pigment is a filter with extra steps. Light hits it, some wavelengths are absorbed, and the rest is reflected or passed through. Mix two pigments and you stack two filters. The mixture can reflect only what both allow, which is why it tends to go darker and duller. Printers’ cyan, magenta, and yellow are built for this. Cyan absorbs red, magenta absorbs green, yellow absorbs blue, in the ideal story. Real colorants miss the ideal. Their spectra have leaks and extra absorptions, so a mixture that a diagram calls “green” may be olive, and red mixed with green is the classic mud. The mud is not a moral failure. It is two filters doing their job. Oil, watercolor, and ink are all in this game. The binder changes the handling, which is <a href=\"/guides/what-is-a-medium#parts\">what a medium is</a>, not the direction of the mixture.",
      ],
    },
    {
      id: "metamers",
      heading: "A match is not a shared spectrum",
      paragraphs: [
        "A spectral yellow, a single band near 580 nanometers, and a mixture of red and green light can look identical to a trichromatic eye. The spectra are different. The cone responses match. That pair is a metamer. Change the illuminant, or change the observer’s cones, and the match can break. This is why a fabric that matched under the shop lights disagrees by the window. It is also why “the” color of a paint, written as three numbers, is always three numbers for a stated light and a stated observer. Wyszecki and Stiles’s <em>Color Science</em> is the measurement treatise. You do not need the treatise to stop saying a tube of yellow and a screen yellow are the same physical thing. They can be the same report. They are not the same ray.",
      ],
    },
    {
      id: "not-a-wheel",
      heading: "The wheel is a third object",
      paragraphs: [
        "Johannes Itten’s <em>The Art of Color</em> (1961) teaches contrasts with a red–yellow–blue wheel, in a Bauhaus studio tradition. The contrasts are useful exercises. The wheel is not what happens in a prism, and it is not the printer’s cyan–magenta–yellow set. When a classroom rule fails, you have usually changed games: from paint to a screen, or from one brand of red to another whose spectrum the wheel cannot see. Complementary pairs inherit the same problem. Which opposite you mean is the whole of <a href=\"/guides/why-complementary-colors-work#which-pair\">why complements work</a>. Keep the wheel if it helps you point. Do not ask it to be physics. The short version of this page already sits inside <a href=\"/guides/color-theory-physically#two-mixes\">color theory, physically</a>. The long version is the one that saves the mixture.",
      ],
    },
  ],
  related: ["color-theory-physically", "how-the-eye-sees-color", "what-is-a-medium"],
  sources: [
    {
      title: "Isaac Newton, Opticks (1704).",
      detail: "A prism spreads sunlight; the spread can be recombined. The spectrum is not a paint wheel.",
    },
    {
      title: "Hermann Grassmann, “Zur Theorie der Farbenmischung” (1853).",
      detail: "The linearity rules for mixing lights. They do not describe a pile of pigment.",
    },
    {
      title: "Günther Wyszecki and W. S. Stiles, Color Science.",
      detail: "The standard treatise on matching, metamers, and observers. A match is a cone match under a stated light.",
    },
    {
      title: "Johannes Itten, The Art of Color (1961).",
      detail: "A studio curriculum built on a red–yellow–blue wheel. Pedagogy, not a map of wavelengths.",
    },
  ],
};

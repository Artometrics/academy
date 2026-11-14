/** Guide. */
export const guide = {
  slug: "how-the-eye-sees-color",
  title: "How the eye sees color",
  dek: "Daylight color starts with three cone types whose peaks are not the crayon names. Dim light hands the job to rods, and rods do not report hue.",
  topic: "color-and-light",
  featured: false,
  definition: [
    "Seeing color, in daylight, begins when three kinds of cone cell respond to overlapping bands of wavelengths. The experience of hue is not those responses copied out. Cells further along compare them. In dim light the rods take over, and because they share one photopigment they cannot tell one wavelength from another. A color name is a report about this system, not a label printed on the ray.",
  ],
  takeaways: [
    "Three cone classes, short, medium, and long. The “red” cone peaks in the yellow-green.",
    "Rods handle dim light and do not supply hue once the cones have dropped out.",
    "Sharp color sits in a small central patch. The periphery is not a second fovea.",
    "Most “color blindness” is a shifted cone, not a world in grayscale.",
    "A color wheel is not a diagram of this retina.",
  ],
  sections: [
    {
      id: "rods-and-cones",
      heading: "Two kinds of cell, two jobs",
      paragraphs: [
        "Cones work in daylight and feed color. Rods work when the light is low. Textbook round figures put cones at about six million and rods on the order of a hundred million. The useful fact is the split, not the census. The center of the fovea, the patch you are pointing at the thing you want to see, is cone-rich and rod-free. Look slightly aside in the dark and a faint star often pops into view: the rods are off the center of gaze. Once the cones have dropped out, the report is colorless. A “true color of night” that you could name was either still bright enough for cones, or it was a hue you added. Sharpness follows the same geography, which is why <a href=\"/guides/light-shadow-and-the-eye#the-eye\">light and the eye</a> belongs next to this page.",
      ],
    },
    {
      id: "three-cones",
      heading: "Three cones, and a bad nickname",
      paragraphs: [
        "The three cone types are called short, medium, and long for the wavelengths they answer most. The peaks sit very roughly near 420, 530, and 560 nanometers. The long cone is nicknamed red. Its peak is not in the red. It is in the yellow-green, and it still responds, more weakly, out toward the long wavelengths we call red. Thomas Young argued in 1802 that three receptors could do the work. Helmholtz built the account. Modern cone fundamentals, the Stockman and Sharpe curves among them, measure it. Three numbers at this stage are why a screen can imitate so many colors with three lights, and why two different spectra can look the same. That second fact is <a href=\"/guides/pigment-and-light#metamers\">metamerism</a>. Three cones are not three paints.",
      ],
    },
    {
      id: "opponent",
      heading: "The comparison comes after",
      paragraphs: [
        "The retina does not hand the three cone signals forward unchanged. It compares them. One comparison is roughly long against medium, experienced as red against green. Another pits the short cones against the other two, experienced as blue against yellow. A third channel carries light against dark. Ewald Hering described the opposed pairs from experience in the 1870s. The fight with the three-receptor school lasted decades and ended as a truce: three receptors first, opponent comparisons after. You can feel the second stage. Stare at a saturated red and look at white paper. The afterimage is not red. It is the direction that channel rebounds. The rebound is a fact about <a href=\"/guides/why-complementary-colors-work#afterimage\">complements</a>. It is not a rule about which pair ought to be thought beautiful.",
      ],
    },
    {
      id: "limits",
      heading: "What this does not decide",
      paragraphs: [
        "Most so-called color blindness is not grayscale vision. The common red–green deficiencies are carried on the X chromosome, so the often-cited rate is about one man in twelve in many European-ancestry samples, and far lower in women. The rate is not the same in every population. The usual case is anomalous trichromacy: three cones, one of them shifted, so some pairs other people separate become hard. A missing cone class, true dichromacy, is rarer. None of this is a taste. It is common enough that red against green should not be your only difference between two signals. The rest of appearance — surround, constancy, the illuminant — is the subject of <a href=\"/guides/color-theory-physically#appearance\">color theory, physically</a>. This page stops at the cells that start the report.",
      ],
    },
  ],
  related: ["color-theory-physically", "why-complementary-colors-work", "pigment-and-light"],
  sources: [
    {
      title: "Thomas Young, Bakerian Lecture, “On the Theory of Light and Colours” (1802).",
      detail: "The argument that three receptors can account for color mixing. Helmholtz developed it.",
    },
    {
      title: "Ewald Hering, from the 1870s, on opponent colors.",
      detail: "Red against green, blue against yellow, light against dark, as a description of experience. Later physiology put the comparison after the cones.",
    },
    {
      title: "Andrew Stockman and Lindsay Sharpe, cone fundamentals.",
      detail: "The measured spectral curves used in color science. The round numbers near 420, 530, and 560 nanometers are a neighborhood of those curves, not crayon labels and not a single instrument reading.",
    },
    {
      title: "Brian Wandell, Foundations of Vision (1995).",
      detail: "A survey of rods, cones, the rod-free foveal center, and what three numbers at the cone stage do and do not fix.",
    },
  ],
};

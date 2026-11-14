/** Guide. */
export const guide = {
  slug: "how-perspective-geometry-works",
  title: "How perspective geometry works",
  dek: "One point for the eye, one flat plane for the picture, and similar triangles. The construction is exact inside those assumptions. It is not a description of walking around a room.",
  topic: "form-and-space",
  featured: false,
  definition: [
    "Linear perspective is a construction. Choose a point for the eye. Draw the straight ray from that point to a point in the scene. Mark where the ray cuts a flat picture plane. Do that for every point you care about, and the marks are the picture. In that construction, an upright object twice as far from the eye is drawn half as tall on a fixed plane, if the two objects are the same size. The triangles are similar. That is the rule.",
  ],
  takeaways: [
    "Image size, on a fixed plane, falls off with distance because the triangles stay similar.",
    "A vanishing point is where the ray parallel to a family of lines hits the plane. The lines never meet in the room. Their images do.",
    "The horizon of the construction is at eye height. It is not a synonym for the sea.",
    "One-point, two-point, and three-point are the same rule with the plane and the object turned.",
    "“Correct” means consistent with one eye point. It does not mean the picture is good, or that anyone stood there.",
  ],
  sections: [
    {
      id: "the-cut",
      heading: "A plane cutting a bundle of rays",
      paragraphs: [
        "Leon Battista Alberti’s <em>De pictura</em> (1435) calls the bundle a visual pyramid, apex at the eye, cut by the plane that becomes the picture. Piero della Francesca’s <em>De prospectiva pingendi</em> carries a plan and an elevation through that cut. You do not need their Latin to use the triangle. Hold the plane still and move an object farther along the same direction: the image shrinks in proportion to the distance. Halve the distance and the image doubles. Off to the side, and for a tilted form, drop the shortcut and follow the rays. The assumptions — one eye, held still, one plane — are the subject of <a href=\"/guides/perspective-and-optics#one-eye\">perspective and optics</a>.",
      ],
    },
    {
      id: "vanishing",
      heading: "Why parallels meet on the picture",
      paragraphs: [
        "Parallel lines do not meet in the scene. They share a direction. The ray from the eye in that direction hits the picture plane at one point, and every line in the family is drawn aimed at it. That point is the vanishing point. It is not a pin in the real room. Horizontal directions share one line, the horizon of the construction. On a vertical plane it sits at eye height. Raise the eye and it rises. A still life has a horizon too, often above the frame, which is why a tabletop can show its top with no sea in the picture. “Horizon” here is not the skyline. It meets the sea only when you are looking at the sea from that eye height.",
      ],
    },
    {
      id: "one-two-three",
      heading: "One point, two points, three",
      paragraphs: [
        "One-point perspective: one family of edges runs straight away from a vertical plane. Their vanishing point is where the perpendicular from the eye meets the plane. Turn the object so two horizontal families both recede, keep the plane vertical, and you have two vanishing points. The verticals stay parallel because the plane is still vertical. Tip the plane and the verticals converge. That is three-point. Pictures of towers often keep the verticals parallel anyway, which is a choice to draw as if the plane were vertical. A circle on the floor becomes an ellipse because the rays to its rim form a cone, and a plane cuts a cone in an ellipse. The ellipse is the cut, not a style.",
      ],
    },
    {
      id: "the-limit",
      heading: "Correct is a small word",
      paragraphs: [
        "A perspective picture is correct when its lines agree with one eye point and one plane. You can construct a consistent room you have never entered, then hang it where that eye point is impossible. The consistency is a fact about the drawing. Two eyes, a moving head, and a curved retina are outside the model, and so is the demand that every good picture use it. Icons that open toward the viewer are a different model. A measured plan is another, not a failed Alberti. Air — contrast lost with distance — is <a href=\"/guides/sfumato-and-atmospheric-perspective#air\">atmospheric perspective</a>, not a blurry version of these lines. Checking a picture against its own eye point is part of <a href=\"/guides/how-to-look-at-a-painting#light-in-the-picture\">how to look</a>.",
      ],
    },
  ],
  related: ["perspective-and-optics", "camera-obscura", "composition"],
  sources: [
    {
      title: "Leon Battista Alberti, De pictura (1435).",
      detail: "The visual pyramid and the plane that cuts it. The construction’s assumptions are stated there.",
    },
    {
      title: "Piero della Francesca, De prospectiva pingendi.",
      detail: "Workshop geometry: plan and elevation carried through the intersection. A manual of the construction, not a theory of binocular vision.",
    },
    {
      title: "Similar triangles, as the content of the rule.",
      detail: "On a fixed plane, image height scales with object height and inversely with distance from the eye. Off-axis and tilted cases follow the rays rather than that single ratio.",
    },
  ],
};

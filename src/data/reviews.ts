export interface Review {
  id: number;
  name: string;
  neighborhood: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "David M.",
    neighborhood: "Chula Vista",
    rating: 5,
    date: "2024-11-15",
    text: "Spring broke on a Saturday morning and the door wouldn't open with my car trapped inside. Mickey's sent someone within 90 minutes. Technician was professional, explained everything clearly, and had the spring replaced in under an hour. Reasonable price too.",
    service: "Spring Replacement",
  },
  {
    id: 2,
    name: "Sarah T.",
    neighborhood: "La Mesa",
    rating: 5,
    date: "2024-10-28",
    text: "Got three quotes for a new garage door and Mickey's was the most knowledgeable by far. They helped me pick the right insulated door for our attached garage, the installation was clean and fast. Really happy with the result.",
    service: "New Door Installation",
  },
  {
    id: 3,
    name: "James R.",
    neighborhood: "Encinitas",
    rating: 5,
    date: "2024-10-12",
    text: "Called about a broken cable — the door was hanging at an angle and we couldn't get the car out. They came out the same afternoon, fixed both cables (recommended replacing both which made sense), and lubricated everything. Door works perfectly now.",
    service: "Cable Repair",
  },
  {
    id: 4,
    name: "Maria L.",
    neighborhood: "El Cajon",
    rating: 5,
    date: "2024-09-30",
    text: "Very honest company. Tech came out, diagnosed the problem, and told me it was just a sensor misalignment that he fixed for free since it was so minor. Didn't try to upsell me on anything. Will definitely call them again.",
    service: "Garage Door Repair",
  },
  {
    id: 5,
    name: "Kevin B.",
    neighborhood: "Santee",
    rating: 5,
    date: "2024-09-18",
    text: "Replaced our 20-year-old opener with a new LiftMaster belt drive. Quiet as a library now — huge upgrade from the old chain drive. Technician was on time and walked me through the myQ app setup. Five stars.",
    service: "Opener Installation",
  },
  {
    id: 6,
    name: "Patricia N.",
    neighborhood: "San Diego",
    rating: 5,
    date: "2024-08-25",
    text: "Backed into my garage door panel — embarrassing but it happens. Mickey's matched the panel perfectly and you'd never know there was any damage. Price was fair and they came out within two days.",
    service: "Panel Replacement",
  },
  {
    id: 7,
    name: "Tom W.",
    neighborhood: "Escondido",
    rating: 5,
    date: "2024-08-10",
    text: "Called at 10pm because the garage door wouldn't close. The emergency line picked up right away, sent someone within two hours. Broken cable was the issue. Fixed on the spot. Worth every penny for the peace of mind.",
    service: "Emergency Repair",
  },
  {
    id: 8,
    name: "Angela C.",
    neighborhood: "National City",
    rating: 5,
    date: "2024-07-22",
    text: "Had a full tune-up and spring replacement done. Tech was thorough and showed me what was worn before replacing anything. Door is now faster, quieter, and I got a 1-year warranty. Highly recommended.",
    service: "Spring Replacement",
  },
  {
    id: 9,
    name: "Robert H.",
    neighborhood: "Lemon Grove",
    rating: 4,
    date: "2024-07-05",
    text: "Quick response, professional technician, and good pricing. Had to wait a day for a special part but they called to keep me updated. Overall a great experience.",
    service: "Garage Door Repair",
  },
];

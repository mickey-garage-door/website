export interface Location {
  slug: string;
  city: string;
  county: string;
  state: string;
  zip: string[];
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  description: string;
  neighborhoods: string[];
  localNote: string;
  landmarks: string[];
  faqs: { question: string; answer: string }[];
}

export const locations: Location[] = [
  {
    slug: "chula-vista",
    city: "Chula Vista",
    county: "San Diego",
    state: "CA",
    zip: ["91910", "91911", "91913", "91914", "91915"],
    metaTitle: "Garage Door Repair in Chula Vista, CA | Mickey's Garage Door",
    metaDescription:
      "Fast garage door repair and installation in Chula Vista, CA. Same-day service, licensed technicians. Mickey's Garage Door — call for a free estimate.",
    headline: "Garage Door Repair & Installation in Chula Vista",
    subheadline:
      "Serving Chula Vista homeowners with same-day service, honest pricing, and a 1-year warranty.",
    description:
      "Mickey's Garage Door proudly serves Chula Vista and all surrounding neighborhoods. Whether you're in Eastlake, Otay Ranch, or downtown Chula Vista, our technicians are nearby and ready for same-day service on repairs, spring replacements, new door installations, and more.",
    neighborhoods: ["Eastlake", "Otay Ranch", "Rolling Hills Ranch", "Bonita", "Rancho del Rey", "Heritage"],
    localNote:
      "Chula Vista's coastal proximity means garage door hardware — especially springs and cables — can corrode faster than inland areas. We recommend galvanized hardware and annual lubrication for homes within a few miles of the bay.",
    landmarks: ["Otay Ranch Town Center", "Eastlake Village Center", "Chula Vista Elite Athlete Training Center"],
    faqs: [
      {
        question: "Do you serve Otay Ranch and Eastlake in Chula Vista?",
        answer:
          "Yes. We regularly service all Chula Vista neighborhoods including Otay Ranch, Eastlake, Rolling Hills Ranch, and Heritage.",
      },
      {
        question: "How quickly can you respond to a service call in Chula Vista?",
        answer:
          "We typically arrive within 2–4 hours for standard service calls. For emergency situations, we aim for 1–2 hours.",
      },
    ],
  },
  {
    slug: "el-cajon",
    city: "El Cajon",
    county: "San Diego",
    state: "CA",
    zip: ["92019", "92020", "92021"],
    metaTitle: "Garage Door Repair in El Cajon, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in El Cajon, CA. Same-day service, licensed and insured. Mickey's Garage Door — call for a free estimate.",
    headline: "Garage Door Repair & Installation in El Cajon",
    subheadline:
      "Serving El Cajon homeowners with fast, reliable garage door service.",
    description:
      "Mickey's Garage Door serves El Cajon and surrounding East County communities with professional garage door repair and installation. From Fletcher Hills to Rancho San Diego, our technicians are familiar with the area and provide prompt, same-day service for all garage door issues.",
    neighborhoods: ["Fletcher Hills", "Rancho San Diego", "Bostonia", "Hacienda Heights", "Crest", "Dehesa"],
    localNote:
      "El Cajon's warmer, drier climate means garage door wood components and vinyl seals can become brittle over time. Annual maintenance helps prevent costly repairs.",
    landmarks: ["Parkway Plaza", "El Cajon Valley", "The Magnolia at El Cajon"],
    faqs: [
      {
        question: "Do you serve Rancho San Diego and Fletcher Hills?",
        answer:
          "Yes, we serve all El Cajon zip codes including 92019, 92020, and 92021, covering Rancho San Diego, Fletcher Hills, Bostonia, and all nearby communities.",
      },
      {
        question: "What's the most common garage door repair you see in El Cajon?",
        answer:
          "Spring replacement is the most common service call we get throughout East County. Torsion springs typically last 7–10 years and El Cajon homes built in the 1990s and early 2000s are now in that replacement window.",
      },
    ],
  },
  {
    slug: "la-mesa",
    city: "La Mesa",
    county: "San Diego",
    state: "CA",
    zip: ["91941", "91942", "91943", "91944"],
    metaTitle: "Garage Door Repair in La Mesa, CA | Mickey's Garage Door",
    metaDescription:
      "Professional garage door repair and installation in La Mesa, CA. Same-day service. Mickey's Garage Door — licensed, insured, free estimate.",
    headline: "Garage Door Repair & Installation in La Mesa",
    subheadline:
      "Your local La Mesa garage door specialists — same-day service, upfront pricing.",
    description:
      "La Mesa homeowners trust Mickey's Garage Door for fast, professional service. Whether you're near Lake Murray, Mount Helix, or in the heart of La Mesa Village, our technicians are available same-day for repairs, spring replacements, new installations, and opener service.",
    neighborhoods: ["Mount Helix", "Lake Murray", "La Mesa Village", "Casa de Oro", "Spring Valley"],
    localNote:
      "La Mesa's hillside homes often have steeper driveways, which can place additional stress on garage door springs. We calibrate spring tension to account for these conditions.",
    landmarks: ["Lake Murray Community Park", "La Mesa Village", "Mount Helix Park"],
    faqs: [
      {
        question: "Do you service Mount Helix and Lake Murray areas?",
        answer:
          "Yes. We service all La Mesa neighborhoods including Mount Helix, Lake Murray, La Mesa Village, and Casa de Oro.",
      },
      {
        question: "I have an older home in La Mesa with a wooden garage door. Can you repair it?",
        answer:
          "Yes. We work on all door materials including wood, steel, and composite. Older wooden doors sometimes need specialized hardware — we stock it and can advise on whether repair or replacement is more cost-effective.",
      },
    ],
  },
  {
    slug: "santee",
    city: "Santee",
    county: "San Diego",
    state: "CA",
    zip: ["92071"],
    metaTitle: "Garage Door Repair in Santee, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Santee, CA. Fast, reliable service from licensed technicians. Mickey's Garage Door — call for a free estimate.",
    headline: "Garage Door Repair & Installation in Santee",
    subheadline:
      "Santee's reliable choice for same-day garage door repairs and new installations.",
    description:
      "Mickey's Garage Door provides fast, professional garage door service throughout Santee. From Carlton Hills to Fanita Ranch, our technicians serve all Santee neighborhoods with same-day availability for repairs, spring replacement, opener installation, and emergency service.",
    neighborhoods: ["Carlton Hills", "Fanita Ranch", "Prospect Hills", "Mission Gorge"],
    localNote:
      "Santee's inland location means temperature swings between summer and winter can affect garage door spring tension and opener sensitivity. Annual tune-ups help keep everything running smoothly.",
    landmarks: ["Santee Lakes", "Carlton Hills Community Park", "Town Center Community Park"],
    faqs: [
      {
        question: "Do you provide emergency service in Santee?",
        answer:
          "Yes. We offer 24/7 emergency garage door service throughout Santee and East County.",
      },
      {
        question: "What areas of Santee do you serve?",
        answer:
          "We serve all of Santee (zip code 92071) including Carlton Hills, Fanita Ranch, Prospect Hills, and the Mission Gorge corridor.",
      },
    ],
  },
  {
    slug: "escondido",
    city: "Escondido",
    county: "San Diego",
    state: "CA",
    zip: ["92025", "92026", "92027", "92029"],
    metaTitle: "Garage Door Repair in Escondido, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Escondido, CA. Same-day service from licensed technicians. Call Mickey's Garage Door for a free estimate.",
    headline: "Garage Door Repair & Installation in Escondido",
    subheadline:
      "Serving Escondido and North County with fast, professional garage door service.",
    description:
      "Mickey's Garage Door serves Escondido homeowners throughout North County San Diego. From downtown Escondido to Hidden Meadows and beyond, we provide same-day service on all garage door repairs, spring replacements, new installations, and 24/7 emergency service.",
    neighborhoods: ["Hidden Meadows", "Bear Valley Parkway", "South Escondido", "Eureka", "Felicita"],
    localNote:
      "Many Escondido homes are on larger lots with multi-car garages. We're experienced with double-wide and heavy commercial-grade residential doors common in the area.",
    landmarks: ["Grape Day Park", "California Center for the Arts", "Lake Dixon"],
    faqs: [
      {
        question: "Do you serve Hidden Meadows and North Escondido?",
        answer:
          "Yes. We serve all Escondido zip codes: 92025, 92026, 92027, and 92029, including Hidden Meadows, South Escondido, Eureka, and surrounding areas.",
      },
      {
        question: "Is there a travel fee for Escondido?",
        answer:
          "No travel fee for service calls in Escondido. All estimates are free with no obligation.",
      },
    ],
  },
  {
    slug: "encinitas",
    city: "Encinitas",
    county: "San Diego",
    state: "CA",
    zip: ["92024"],
    metaTitle: "Garage Door Repair in Encinitas, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Encinitas, CA. Salt air and coastal conditions specialist. Mickey's Garage Door — call for a free estimate.",
    headline: "Garage Door Repair & Installation in Encinitas",
    subheadline:
      "Coastal-aware garage door service for Encinitas homeowners — from Cardiff to Leucadia.",
    description:
      "Encinitas homeowners deal with unique challenges from salt air and coastal humidity. Mickey's Garage Door uses corrosion-resistant hardware and marine-grade lubricants on all coastal service calls. We serve all Encinitas communities including Cardiff-by-the-Sea, Leucadia, Olivenhain, and Old Encinitas.",
    neighborhoods: ["Cardiff-by-the-Sea", "Leucadia", "Olivenhain", "Old Encinitas", "New Encinitas"],
    localNote:
      "Salt air accelerates corrosion on garage door springs, cables, and hinges. Coastal Encinitas homes should have their hardware inspected annually and treated with marine-grade lubricant to extend component life.",
    landmarks: ["Moonlight Beach", "San Elijo Lagoon", "Swami's Beach", "Encinitas Ranch"],
    faqs: [
      {
        question: "Does living near the ocean in Encinitas affect my garage door?",
        answer:
          "Yes. Salt air accelerates rust and corrosion on springs, cables, and hinges. We recommend galvanized springs and annual preventative maintenance for homes within 2 miles of the coast.",
      },
      {
        question: "Do you serve Cardiff, Leucadia, and Olivenhain?",
        answer:
          "Yes. We service all Encinitas communities including Cardiff-by-the-Sea, Leucadia, Olivenhain, and both Old and New Encinitas.",
      },
    ],
  },
  {
    slug: "national-city",
    city: "National City",
    county: "San Diego",
    state: "CA",
    zip: ["91950"],
    metaTitle: "Garage Door Repair in National City, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in National City, CA. Same-day service, licensed technicians. Mickey's Garage Door — free estimate.",
    headline: "Garage Door Repair & Installation in National City",
    subheadline:
      "Fast, professional garage door service for National City residents.",
    description:
      "Mickey's Garage Door provides reliable garage door repair and installation throughout National City. Our technicians service all National City neighborhoods with the same fast, professional service we provide across San Diego County.",
    neighborhoods: ["Las Palmas", "Highland", "Westside", "Bay Marina"],
    localNote:
      "National City's proximity to San Diego Bay means hardware can be exposed to salty marine air. We stock corrosion-resistant components and recommend marine-grade lubrication.",
    landmarks: ["Westfield Plaza Bonita", "National City Marine Terminal", "Paradise Creek"],
    faqs: [
      {
        question: "How fast can you get to National City?",
        answer:
          "National City is close to our service base in San Diego. We typically arrive within 1–3 hours for standard calls.",
      },
    ],
  },
  {
    slug: "lemon-grove",
    city: "Lemon Grove",
    county: "San Diego",
    state: "CA",
    zip: ["91945"],
    metaTitle: "Garage Door Repair in Lemon Grove, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Lemon Grove, CA. Same-day service. Mickey's Garage Door — licensed, insured, free estimate.",
    headline: "Garage Door Repair & Installation in Lemon Grove",
    subheadline:
      "Dependable garage door service for Lemon Grove homeowners — same day, every time.",
    description:
      "Mickey's Garage Door serves Lemon Grove with prompt, professional garage door repairs and installations. Whether you need a spring replacement, opener service, or a brand-new door, we're your local experts with same-day availability.",
    neighborhoods: ["Mount Miguel", "Skyline", "Casa de Oro"],
    localNote:
      "Lemon Grove has a mix of older and newer homes. We frequently service original hardware on homes from the 1960s–1980s and are experienced matching older door systems.",
    landmarks: ["Lemon Grove Community Park", "Miguel Costansó Park"],
    faqs: [
      {
        question: "Do you work on older garage doors in Lemon Grove?",
        answer:
          "Yes. We work on doors of all ages. Older doors may require harder-to-find hardware, but we stock a wide range of components and can special-order what we don't carry.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

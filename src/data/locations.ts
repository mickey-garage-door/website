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
  {
    slug: "san-diego",
    city: "San Diego",
    county: "San Diego",
    state: "CA",
    zip: ["92101", "92102", "92103", "92104", "92105", "92106", "92107", "92108", "92109", "92110", "92111", "92113", "92114", "92115", "92116", "92117", "92119", "92120", "92121", "92122", "92123", "92124", "92126", "92127", "92128", "92129", "92130", "92131"],
    metaTitle: "Garage Door Repair in San Diego, CA | Mickey's Garage Door",
    metaDescription:
      "San Diego's trusted garage door repair and installation company. Same-day service, licensed technicians, upfront pricing. Call Mickey's Garage Door now.",
    headline: "Garage Door Repair & Installation in San Diego",
    subheadline:
      "San Diego's trusted local garage door experts — same-day service, honest pricing, and a 1-year warranty.",
    description:
      "Mickey's Garage Door is San Diego's go-to company for fast, professional garage door service. From the beaches of Ocean Beach to the hills of Tierrasanta, our technicians serve every corner of the city with same-day availability for repairs, spring replacements, new installations, and opener service.",
    neighborhoods: ["Clairemont", "Mira Mesa", "Tierrasanta", "Scripps Ranch", "Rancho Bernardo", "Carmel Mountain", "University City", "Pacific Beach", "Ocean Beach", "Point Loma", "Hillcrest", "North Park"],
    localNote:
      "San Diego's diverse microclimates mean coastal homes face salt corrosion while inland neighborhoods deal with heat stress on garage door components. We tailor our hardware recommendations to your specific location.",
    landmarks: ["Balboa Park", "Petco Park", "San Diego Zoo", "Mission Bay"],
    faqs: [
      {
        question: "Do you serve all San Diego neighborhoods?",
        answer:
          "Yes. We serve every neighborhood in San Diego from Rancho Bernardo to Chula Vista and everywhere in between.",
      },
      {
        question: "How fast can you get to my San Diego home?",
        answer:
          "We typically arrive within 2–4 hours for standard service calls in San Diego. Emergency calls are prioritized for 1–2 hour response.",
      },
    ],
  },
  {
    slug: "poway",
    city: "Poway",
    county: "San Diego",
    state: "CA",
    zip: ["92064"],
    metaTitle: "Garage Door Repair in Poway, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Poway, CA. Same-day service, licensed technicians. Mickey's Garage Door — call for a free estimate.",
    headline: "Garage Door Repair & Installation in Poway",
    subheadline:
      "Poway's trusted choice for fast, reliable garage door service.",
    description:
      "Mickey's Garage Door serves Poway homeowners with professional garage door repair and installation. Known as 'The City in the Country,' Poway's larger homes often feature multi-car garages that require experienced technicians — and that's exactly what we provide.",
    neighborhoods: ["Poway Business Park", "Garden Road", "Old Poway", "South Poway", "Poway Estates"],
    localNote:
      "Poway homes tend to have larger, heavier garage doors on multi-car garages. These require properly rated springs and openers. We carry heavy-duty components for these installations.",
    landmarks: ["Old Poway Park", "Lake Poway", "Blue Sky Ecological Reserve"],
    faqs: [
      {
        question: "Do you service large multi-car garages in Poway?",
        answer:
          "Yes. We regularly work on double-wide and triple-car garage doors in Poway. We carry heavy-duty springs and commercial-grade hardware.",
      },
    ],
  },
  {
    slug: "vista",
    city: "Vista",
    county: "San Diego",
    state: "CA",
    zip: ["92081", "92083", "92084"],
    metaTitle: "Garage Door Repair in Vista, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Vista, CA. Same-day service from licensed technicians. Mickey's Garage Door — call for a free estimate.",
    headline: "Garage Door Repair & Installation in Vista",
    subheadline:
      "Serving Vista and North County with professional garage door service.",
    description:
      "Mickey's Garage Door provides fast, reliable service to Vista homeowners throughout North County San Diego. Whether you need a spring replacement, new door installation, or opener repair, our technicians are available same-day.",
    neighborhoods: ["Shadowridge", "Rancho Buena Vista", "Breeze Hill", "Vista Village"],
    localNote:
      "Vista's warm inland climate can cause rubber seals and weatherstripping on garage doors to dry out and crack. Annual seal replacement helps keep dust and pests out of your garage.",
    landmarks: ["Brengle Terrace Park", "Moonlight Amphitheatre", "Alta Vista Botanical Gardens"],
    faqs: [
      {
        question: "Do you serve Shadowridge and Rancho Buena Vista?",
        answer:
          "Yes. We serve all Vista neighborhoods including Shadowridge, Rancho Buena Vista, Breeze Hill, and Vista Village.",
      },
    ],
  },
  {
    slug: "bonita",
    city: "Bonita",
    county: "San Diego",
    state: "CA",
    zip: ["91902"],
    metaTitle: "Garage Door Repair in Bonita, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Bonita, CA. Same-day service, licensed and insured. Mickey's Garage Door — free estimate.",
    headline: "Garage Door Repair & Installation in Bonita",
    subheadline:
      "Professional garage door service for Bonita homeowners — fast and reliable.",
    description:
      "Mickey's Garage Door serves the Bonita community with prompt, professional garage door repairs and installations. Located between Chula Vista and National City, Bonita's residential neighborhoods rely on us for same-day service.",
    neighborhoods: ["Bonita Long Canyon", "Bonita Valley", "Sunnyside"],
    localNote:
      "Bonita's proximity to the Sweetwater Reservoir means slightly higher humidity levels that can affect metal garage door components. We recommend corrosion-resistant hardware for homes in this area.",
    landmarks: ["Sweetwater Regional Park", "Bonita Golf Course", "Rohr Park"],
    faqs: [
      {
        question: "How quickly can you get to Bonita?",
        answer:
          "Bonita is centrally located in our service area. We typically arrive within 1–3 hours for standard calls.",
      },
    ],
  },
  {
    slug: "carlsbad",
    city: "Carlsbad",
    county: "San Diego",
    state: "CA",
    zip: ["92008", "92009", "92010", "92011"],
    metaTitle: "Garage Door Repair in Carlsbad, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Carlsbad, CA. Coastal corrosion specialists. Mickey's Garage Door — call for a free estimate.",
    headline: "Garage Door Repair & Installation in Carlsbad",
    subheadline:
      "Coastal-aware garage door service for Carlsbad homeowners.",
    description:
      "Mickey's Garage Door serves Carlsbad with expertise in coastal garage door challenges. Salt air and ocean humidity accelerate wear on springs, cables, and hardware. We use corrosion-resistant components and marine-grade lubricants on all Carlsbad service calls.",
    neighborhoods: ["La Costa", "Bressi Ranch", "Aviara", "Carlsbad Village", "Calavera Hills"],
    localNote:
      "Carlsbad's coastal climate means garage door springs and cables corrode faster than inland areas. We recommend galvanized hardware and bi-annual maintenance for homes near the coast.",
    landmarks: ["LEGOLAND California", "Carlsbad Village", "Batiquitos Lagoon"],
    faqs: [
      {
        question: "Do you serve La Costa and Aviara in Carlsbad?",
        answer:
          "Yes. We serve all Carlsbad communities including La Costa, Aviara, Bressi Ranch, Carlsbad Village, and Calavera Hills.",
      },
    ],
  },
  {
    slug: "oceanside",
    city: "Oceanside",
    county: "San Diego",
    state: "CA",
    zip: ["92054", "92056", "92057", "92058"],
    metaTitle: "Garage Door Repair in Oceanside, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Oceanside, CA. Same-day service from licensed technicians. Mickey's Garage Door — free estimate.",
    headline: "Garage Door Repair & Installation in Oceanside",
    subheadline:
      "North County's trusted garage door service — from the coast to Camp Pendleton.",
    description:
      "Mickey's Garage Door provides professional garage door service throughout Oceanside. From coastal neighborhoods to inland communities near Camp Pendleton, we offer same-day repairs, spring replacements, new installations, and opener service.",
    neighborhoods: ["Fire Mountain", "South Oceanside", "Mission San Luis Rey", "Rancho Del Oro", "Morro Hills"],
    localNote:
      "Oceanside's marine environment requires extra care for garage door hardware. We stock stainless steel and galvanized components specifically for coastal installations.",
    landmarks: ["Oceanside Pier", "Mission San Luis Rey", "Harbor Beach"],
    faqs: [
      {
        question: "Do you serve areas near Camp Pendleton in Oceanside?",
        answer:
          "Yes. We serve all of Oceanside including neighborhoods near Camp Pendleton, Fire Mountain, Rancho Del Oro, and South Oceanside.",
      },
    ],
  },
  {
    slug: "san-marcos",
    city: "San Marcos",
    county: "San Diego",
    state: "CA",
    zip: ["92069", "92078"],
    metaTitle: "Garage Door Repair in San Marcos, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in San Marcos, CA. Same-day service. Mickey's Garage Door — licensed, insured, free estimate.",
    headline: "Garage Door Repair & Installation in San Marcos",
    subheadline:
      "Reliable garage door service for San Marcos homeowners — same-day availability.",
    description:
      "Mickey's Garage Door serves San Marcos with professional garage door repairs and installations. Our technicians are familiar with the area's newer developments and older neighborhoods alike, providing fast, reliable service with upfront pricing.",
    neighborhoods: ["Lake San Marcos", "Twin Oaks Valley", "Rancho Santa Fe Road", "San Elijo Hills"],
    localNote:
      "San Marcos has seen rapid growth with many new housing developments. We service both brand-new installations and older systems that need upgrading.",
    landmarks: ["Discovery Hills", "Lake San Marcos", "Cal State San Marcos"],
    faqs: [
      {
        question: "Do you serve Lake San Marcos and San Elijo Hills?",
        answer:
          "Yes. We serve all San Marcos communities including Lake San Marcos, San Elijo Hills, Twin Oaks Valley, and all surrounding areas.",
      },
    ],
  },
  {
    slug: "ramona",
    city: "Ramona",
    county: "San Diego",
    state: "CA",
    zip: ["92065"],
    metaTitle: "Garage Door Repair in Ramona, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Ramona, CA. Same-day service from licensed technicians. Mickey's Garage Door — free estimate.",
    headline: "Garage Door Repair & Installation in Ramona",
    subheadline:
      "Rural and residential garage door service for the Ramona community.",
    description:
      "Mickey's Garage Door serves Ramona with the same professional service we provide throughout San Diego County. Ramona's larger rural properties often have oversized or custom garage doors, and our technicians are experienced with all types and sizes.",
    neighborhoods: ["Ramona Oaks", "San Diego Country Estates", "Mussey Grade", "Ramona Trails"],
    localNote:
      "Ramona's rural setting means many homes have larger, heavier garage doors. We carry heavy-duty components for oversized doors and are experienced with ranch-style and agricultural garage door systems.",
    landmarks: ["Ramona Grasslands Preserve", "Guy B. Woodward Museum", "Mt. Woodson"],
    faqs: [
      {
        question: "Do you travel out to Ramona for service calls?",
        answer:
          "Yes. We serve Ramona and surrounding areas with no travel fee. Same-day service is available for most calls.",
      },
    ],
  },
  {
    slug: "del-mar",
    city: "Del Mar",
    county: "San Diego",
    state: "CA",
    zip: ["92014"],
    metaTitle: "Garage Door Repair in Del Mar, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Del Mar, CA. Coastal corrosion specialists. Mickey's Garage Door — licensed, insured, free estimate.",
    headline: "Garage Door Repair & Installation in Del Mar",
    subheadline:
      "Premium garage door service for Del Mar's coastal homes.",
    description:
      "Mickey's Garage Door provides expert garage door service to Del Mar homeowners. Del Mar's oceanfront and hillside homes require garage door systems that can withstand salt air and coastal conditions. We use premium, corrosion-resistant components on every Del Mar service call.",
    neighborhoods: ["Del Mar Heights", "Del Mar Mesa", "Torrey Hills", "Carmel Valley"],
    localNote:
      "Del Mar's premium homes often feature custom or designer garage doors. We service all brands and styles including carriage-house, full-view glass, and custom wood doors.",
    landmarks: ["Del Mar Racetrack", "Torrey Pines State Reserve", "Del Mar Beach"],
    faqs: [
      {
        question: "Do you work on custom and designer garage doors in Del Mar?",
        answer:
          "Yes. We service all types of garage doors including custom wood, carriage-house, full-view glass, and premium steel doors common in Del Mar.",
      },
    ],
  },
  {
    slug: "spring-valley",
    city: "Spring Valley",
    county: "San Diego",
    state: "CA",
    zip: ["91977", "91978"],
    metaTitle: "Garage Door Repair in Spring Valley, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Spring Valley, CA. Same-day service. Mickey's Garage Door — licensed, insured, free estimate.",
    headline: "Garage Door Repair & Installation in Spring Valley",
    subheadline:
      "Fast, reliable garage door service for Spring Valley homeowners.",
    description:
      "Mickey's Garage Door serves Spring Valley with prompt, professional garage door repairs and installations. Located in East County San Diego, Spring Valley residents can count on us for same-day service on all garage door issues.",
    neighborhoods: ["Casa de Oro", "Mount Miguel", "Dictionary Hill", "Bancroft"],
    localNote:
      "Spring Valley has a mix of older ranch-style homes and newer developments. We carry hardware for both vintage and modern garage door systems.",
    landmarks: ["Sweetwater Summit Regional Park", "Dictionary Hill Open Space"],
    faqs: [
      {
        question: "How fast can you get to Spring Valley?",
        answer:
          "Spring Valley is in our core service area. We typically arrive within 1–3 hours for standard calls.",
      },
    ],
  },
  {
    slug: "rancho-santa-fe",
    city: "Rancho Santa Fe",
    county: "San Diego",
    state: "CA",
    zip: ["92067"],
    metaTitle: "Garage Door Repair in Rancho Santa Fe, CA | Mickey's Garage Door",
    metaDescription:
      "Garage door repair and installation in Rancho Santa Fe, CA. Premium service for luxury homes. Mickey's Garage Door — free estimate.",
    headline: "Garage Door Repair & Installation in Rancho Santa Fe",
    subheadline:
      "Premium garage door service for Rancho Santa Fe's luxury estates.",
    description:
      "Mickey's Garage Door provides premium garage door service to Rancho Santa Fe homeowners. The community's luxury estates often feature custom, oversized, and designer garage doors that require specialized expertise. Our technicians are experienced with high-end installations and repairs.",
    neighborhoods: ["The Covenant", "The Bridges", "Fairbanks Ranch", "Cielo", "Morgan Run"],
    localNote:
      "Rancho Santa Fe homes frequently have oversized, multi-car garages with custom doors. We specialize in premium brands and can coordinate with architects and builders for new construction or renovation projects.",
    landmarks: ["Rancho Santa Fe Golf Club", "The Inn at Rancho Santa Fe", "Fairbanks Ranch Country Club"],
    faqs: [
      {
        question: "Do you work on custom and oversized garage doors?",
        answer:
          "Yes. We specialize in custom, designer, and oversized garage doors common in Rancho Santa Fe estates. We service all premium brands and styles.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  description: string;
  icon: string;
  heroImage: string;
  signs: string[];
  process: { step: string; description: string }[];
  priceRange: string;
  warranty: string;
  brands: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "garage-door-repair",
    title: "Garage Door Repair",
    shortTitle: "Door Repair",
    metaTitle: "Garage Door Repair in San Diego, CA | Same-Day Service",
    metaDescription:
      "Fast, reliable garage door repair in San Diego. Licensed technicians, same-day appointments, and upfront pricing. Call Mickey's Garage Door now.",
    headline: "Expert Garage Door Repair in San Diego",
    subheadline:
      "Fast diagnosis, honest pricing, and same-day repairs — backed by our satisfaction guarantee.",
    description:
      "A malfunctioning garage door is more than an inconvenience — it's a safety and security issue. Our licensed technicians diagnose and repair all makes and models of residential garage doors, getting your door working perfectly the same day in most cases.",
    icon: "🔧",
    heroImage: "/images/services/repair.jpg",
    signs: [
      "Door won't open or close completely",
      "Grinding, squeaking, or banging noises",
      "Door reverses before hitting the floor",
      "Door is off its tracks",
      "Visible damage to panels or hardware",
      "Remote control or keypad not responding",
      "Door moves unevenly or jerks",
    ],
    process: [
      {
        step: "Diagnosis",
        description:
          "Our technician arrives and performs a thorough inspection of your door, springs, cables, tracks, and opener.",
      },
      {
        step: "Transparent Quote",
        description:
          "We explain exactly what needs to be fixed and give you an upfront price before any work begins.",
      },
      {
        step: "Same-Day Repair",
        description:
          "With a fully stocked truck, we complete most repairs on the spot — no second visits needed.",
      },
      {
        step: "Quality Check",
        description:
          "We test the door through multiple cycles, balance it, and lubricate all moving parts before we leave.",
      },
    ],
    priceRange: "Most repairs range from $89–$350. Free on-site estimate.",
    warranty: "All parts and labor come with a 1-year warranty.",
    brands: ["LiftMaster", "Genie", "Chamberlain", "Craftsman", "Linear", "Wayne Dalton"],
    faqs: [
      {
        question: "How quickly can you repair my garage door?",
        answer:
          "In most cases we offer same-day service. Call before noon and we typically arrive that same afternoon. Emergency service is available 24/7.",
      },
      {
        question: "Do you charge for an estimate?",
        answer:
          "No. All on-site estimates are free with no obligation.",
      },
      {
        question: "What if my door needs a part you don't have on the truck?",
        answer:
          "Our trucks are stocked with the most common parts. In rare cases a special-order part is needed — we'll order it and schedule a follow-up at no additional service fee.",
      },
      {
        question: "Is it safe to operate a damaged garage door?",
        answer:
          "If your door is off-track, has a broken spring, or makes unusual noises, stop using it until it's inspected. An improperly working door can cause injury or further damage.",
      },
    ],
    relatedSlugs: ["spring-replacement", "opener-repair-installation", "cable-drum-repair"],
  },
  {
    slug: "spring-replacement",
    title: "Garage Door Spring Replacement",
    shortTitle: "Spring Replacement",
    metaTitle: "Garage Door Spring Replacement in San Diego | Mickey's Garage Door",
    metaDescription:
      "Broken garage door spring? Mickey's Garage Door offers same-day spring replacement in San Diego. Licensed, insured, upfront pricing. Call now.",
    headline: "Garage Door Spring Replacement in San Diego",
    subheadline:
      "Broken springs are the #1 cause of garage door failure. We replace them safely the same day.",
    description:
      "Garage door springs bear the full weight of your door and typically last 7–10 years or 10,000–15,000 cycles. When a spring breaks, the door becomes dangerous to operate manually and won't work with an automatic opener. Our technicians replace torsion and extension springs safely, using professional-grade parts with a lifetime warranty option.",
    icon: "⚙️",
    heroImage: "/images/services/spring.jpg",
    signs: [
      "Loud bang coming from the garage (spring snapped)",
      "Door only opens 6 inches then stops",
      "Visible gap in the torsion spring above the door",
      "Door feels extremely heavy when lifted manually",
      "Opener strains or disconnects from the door",
      "Cables hanging loosely on the sides of the door",
    ],
    process: [
      {
        step: "Safety Assessment",
        description:
          "We inspect both springs and all related hardware before touching a broken spring — safety is the priority.",
      },
      {
        step: "Spring Selection",
        description:
          "We calculate the correct spring size and tension based on your door's weight and height for optimal balance.",
      },
      {
        step: "Professional Replacement",
        description:
          "We replace springs using professional winding bars and torque tools — never improvised methods.",
      },
      {
        step: "Balance Test & Tune",
        description:
          "After installation, we balance the door, adjust tension, and lubricate all moving parts.",
      },
    ],
    priceRange: "Spring replacement typically ranges from $150–$350 depending on spring type and count.",
    warranty: "Springs come with a 1-year labor warranty. Lifetime spring warranty available.",
    brands: ["Wayne Dalton", "Amarr", "Clopay", "Overhead Door", "CHI"],
    faqs: [
      {
        question: "Should I replace one spring or both?",
        answer:
          "We recommend replacing both springs at the same time. If one broke, the other is at the same age and will likely fail soon. Replacing both saves on labor costs and prevents a second service call.",
      },
      {
        question: "Can I replace a garage door spring myself?",
        answer:
          "We strongly advise against it. Garage door springs are under extreme tension and can cause serious injury or death if handled improperly. This is a job for trained professionals with the right tools.",
      },
      {
        question: "How long does spring replacement take?",
        answer:
          "Most spring replacements take 45–90 minutes. We carry standard springs on our trucks for same-day completion.",
      },
      {
        question: "What type of springs does my door use?",
        answer:
          "Most residential doors use torsion springs (mounted above the door) or extension springs (mounted on the sides). Our technician will identify which type you have during the free estimate.",
      },
    ],
    relatedSlugs: ["cable-drum-repair", "garage-door-repair", "opener-repair-installation"],
  },
  {
    slug: "opener-repair-installation",
    title: "Garage Door Opener Repair & Installation",
    shortTitle: "Opener Service",
    metaTitle: "Garage Door Opener Repair & Installation San Diego | Mickey's Garage Door",
    metaDescription:
      "Garage door opener not working? Mickey's Garage Door repairs and installs all major brands in San Diego. Same-day service. Call for a free estimate.",
    headline: "Garage Door Opener Repair & Installation in San Diego",
    subheadline:
      "From a simple repair to a new smart opener — we handle all brands and models.",
    description:
      "Your garage door opener is the heart of daily convenience. Whether your current opener is failing, making noise, or you're ready to upgrade to a quieter belt-drive or a smart Wi-Fi model, our technicians handle repairs and full installations on all major brands.",
    icon: "📡",
    heroImage: "/images/services/opener.jpg",
    signs: [
      "Opener hums but door doesn't move",
      "Remote works inconsistently or not at all",
      "Door reverses immediately after touching the floor",
      "Motor runs but the door doesn't engage",
      "Opener is more than 10 years old and failing regularly",
      "No battery backup (important in San Diego power outages)",
      "You want smart home integration or keypad access",
    ],
    process: [
      {
        step: "Diagnosis",
        description:
          "We test the opener, sensors, remote, and wiring to identify exactly what's failing.",
      },
      {
        step: "Repair or Replace Recommendation",
        description:
          "We give honest advice — if a repair is cost-effective, we do it. If replacement makes more sense, we show you options.",
      },
      {
        step: "Installation",
        description:
          "New openers are installed, programmed, and tested. We set up all remotes, keypads, and app connectivity.",
      },
      {
        step: "Safety Sensor Calibration",
        description:
          "We align and test safety sensors to ensure the door reverses properly when an obstruction is detected.",
      },
    ],
    priceRange: "Repairs from $89. New opener installation from $250 (opener + labor).",
    warranty: "Installation labor covered for 1 year. Manufacturer warranty applies to all new openers.",
    brands: ["LiftMaster", "Chamberlain", "Genie", "Craftsman", "Ryobi", "Linear"],
    faqs: [
      {
        question: "What's the difference between chain, belt, and screw-drive openers?",
        answer:
          "Chain-drive openers are durable and affordable but louder. Belt-drive openers are quiet — ideal if your garage is attached to the house. Screw-drive openers require less maintenance but can be sensitive to temperature changes.",
      },
      {
        question: "Can you connect my new opener to my smartphone?",
        answer:
          "Yes. We install and configure Wi-Fi enabled openers from LiftMaster and Chamberlain that integrate with myQ, Apple HomeKit, and Google Home.",
      },
      {
        question: "My remote stopped working — do I need a new opener?",
        answer:
          "Not necessarily. Most remote issues are caused by dead batteries, signal interference, or a need to reprogram. We diagnose this for free before recommending any replacement.",
      },
      {
        question: "How long does an opener installation take?",
        answer:
          "A standard residential opener installation takes 2–3 hours including programming all remotes and keypads.",
      },
    ],
    relatedSlugs: ["garage-door-repair", "spring-replacement", "new-garage-door-installation"],
  },
  {
    slug: "cable-drum-repair",
    title: "Garage Door Cable & Drum Repair",
    shortTitle: "Cable & Drum",
    metaTitle: "Garage Door Cable Repair San Diego | Mickey's Garage Door",
    metaDescription:
      "Broken or frayed garage door cable in San Diego? Mickey's Garage Door repairs cables and drums same-day. Licensed & insured. Free estimate.",
    headline: "Garage Door Cable & Drum Repair in San Diego",
    subheadline:
      "Frayed or broken cables are a safety hazard. We repair and replace them the same day.",
    description:
      "Garage door cables work alongside springs to support the door's weight and guide it along the tracks. A broken or frayed cable will cause the door to hang unevenly, slam shut, or become completely inoperable. This is a repair that should never be delayed — a snapped cable under tension can cause serious injury.",
    icon: "🔗",
    heroImage: "/images/services/cable.jpg",
    signs: [
      "Door is hanging at an angle or off-center",
      "Visible fraying or kinking in the cable",
      "Cables have come off the drum",
      "Door only opens on one side",
      "Snapping or popping sound when operating the door",
      "Door falls quickly when closing",
    ],
    process: [
      {
        step: "Inspection",
        description:
          "We inspect both cables, drums, and pulleys to assess damage and identify root cause.",
      },
      {
        step: "Safe Disengagement",
        description:
          "We safely release spring tension before handling cables — this step is critical for safety.",
      },
      {
        step: "Cable & Drum Replacement",
        description:
          "We replace damaged cables with aircraft-grade steel cables and re-spool them correctly on the drums.",
      },
      {
        step: "Full System Check",
        description:
          "After repair we test balance, alignment, and full operation through multiple cycles.",
      },
    ],
    priceRange: "Cable repairs typically range from $120–$250.",
    warranty: "1-year warranty on parts and labor.",
    brands: ["Clopay", "Amarr", "Wayne Dalton", "CHI", "Overhead Door"],
    faqs: [
      {
        question: "Why do garage door cables break?",
        answer:
          "Cables wear over time from repeated use, corrosion (common near the coast in San Diego), improper tension, or when a spring breaks and the cable absorbs the sudden load.",
      },
      {
        question: "Can I still use my garage door with a broken cable?",
        answer:
          "No. Operating a door with a broken cable is dangerous and can cause the door to fall, damage your vehicle, or injure someone. Disconnect the opener and call us immediately.",
      },
      {
        question: "Do you replace both cables at once?",
        answer:
          "We recommend replacing both cables simultaneously since they experience the same wear. Replacing one and not the other often leads to the second cable failing within weeks.",
      },
    ],
    relatedSlugs: ["spring-replacement", "garage-door-repair", "panel-replacement"],
  },
  {
    slug: "panel-replacement",
    title: "Garage Door Panel Replacement",
    shortTitle: "Panel Replacement",
    metaTitle: "Garage Door Panel Replacement San Diego | Mickey's Garage Door",
    metaDescription:
      "Dented or damaged garage door panels in San Diego? Mickey's replaces individual panels to restore appearance and function. Free estimate — call now.",
    headline: "Garage Door Panel Replacement in San Diego",
    subheadline:
      "Restore your curb appeal and door function without replacing the entire door.",
    description:
      "A dented or damaged panel doesn't always mean you need a whole new door. In many cases, individual sections can be replaced to restore both the appearance and structural integrity of your garage door. We match panels to your existing door to maintain a consistent look.",
    icon: "🪟",
    heroImage: "/images/services/panel.jpg",
    signs: [
      "Visible dents from vehicle impact",
      "Cracked or warped panels",
      "Panels that are bent and preventing smooth operation",
      "Cosmetic damage affecting curb appeal",
      "Water damage or rust on steel panels",
    ],
    process: [
      {
        step: "Damage Assessment",
        description:
          "We evaluate whether individual panel replacement is feasible or if a full replacement makes more economic sense.",
      },
      {
        step: "Panel Matching",
        description:
          "We identify your door's manufacturer and model to source matching replacement panels.",
      },
      {
        step: "Panel Replacement",
        description:
          "Damaged sections are removed and new panels are installed, ensuring proper alignment and operation.",
      },
      {
        step: "Finish & Adjust",
        description:
          "We realign the door, test all hardware, and ensure smooth operation before completing the job.",
      },
    ],
    priceRange: "Single panel replacement typically ranges from $200–$600 depending on panel size and availability.",
    warranty: "1-year installation warranty on all panel replacements.",
    brands: ["Clopay", "Amarr", "Wayne Dalton", "CHI", "Raynor"],
    faqs: [
      {
        question: "Is it cheaper to replace panels or get a whole new door?",
        answer:
          "Panel replacement is typically less expensive when only 1–2 sections are damaged. If more than half the door is damaged, or the door is older than 15 years, a full replacement often makes more economic and aesthetic sense.",
      },
      {
        question: "Can you match the color and style of my existing panels?",
        answer:
          "In most cases yes, especially for popular brands. We recommend replacing sooner rather than later as discontinued models become harder to match over time.",
      },
      {
        question: "How long does panel replacement take?",
        answer:
          "Most single-panel replacements take 1–2 hours once the panel is available. We may need to order the panel if we don't carry your specific model.",
      },
    ],
    relatedSlugs: ["new-garage-door-installation", "garage-door-repair", "cable-drum-repair"],
  },
  {
    slug: "new-garage-door-installation",
    title: "New Garage Door Installation",
    shortTitle: "New Door Install",
    metaTitle: "New Garage Door Installation in San Diego | Mickey's Garage Door",
    metaDescription:
      "Install a new garage door in San Diego with Mickey's Garage Door. Wide selection of styles, materials, and brands. Professional installation — free estimate.",
    headline: "New Garage Door Installation in San Diego",
    subheadline:
      "Upgrade your home's curb appeal and security with a professionally installed new garage door.",
    description:
      "Whether you're replacing an aging door or adding a new one to a construction project, we offer a wide selection of residential garage doors in steel, wood composite, aluminum, and glass. Our installers handle everything from removal of your old door to complete installation and opener integration.",
    icon: "🏠",
    heroImage: "/images/services/installation.jpg",
    signs: [
      "Current door is more than 15–20 years old",
      "Repairs are becoming frequent and costly",
      "Door is structurally compromised",
      "You're building or renovating a home",
      "You want to upgrade to a modern, insulated door",
      "Your door no longer matches the home's style",
    ],
    process: [
      {
        step: "Free In-Home Estimate",
        description:
          "We measure your opening, discuss style and material options, and provide a detailed written quote.",
      },
      {
        step: "Door Selection",
        description:
          "We help you choose from our catalog of steel, wood, aluminum, and carriage-house doors in multiple colors and panel designs.",
      },
      {
        step: "Old Door Removal",
        description:
          "We remove and haul away your existing door and all hardware at no extra charge.",
      },
      {
        step: "Professional Installation",
        description:
          "New door, tracks, springs, hardware, and opener are installed and calibrated to factory specifications.",
      },
    ],
    priceRange: "New door installation starts at $900 (door + installation). Premium doors from $1,500+.",
    warranty: "Manufacturer warranty on door. 2-year installation warranty.",
    brands: ["Clopay", "Amarr", "Wayne Dalton", "CHI", "Doorlink"],
    faqs: [
      {
        question: "How long does a full door installation take?",
        answer:
          "A standard single-car door installation takes 3–4 hours. Double-car doors typically take 4–6 hours including old door removal.",
      },
      {
        question: "What materials do you offer?",
        answer:
          "We offer steel (most popular, low maintenance), wood composite (premium look without wood maintenance), aluminum (modern, lightweight), and full-view glass doors for a contemporary look.",
      },
      {
        question: "Should I also replace my opener when getting a new door?",
        answer:
          "Not always required, but if your opener is older than 10 years, installing a new one during the same visit saves on labor costs and ensures compatibility.",
      },
      {
        question: "Do you offer insulated doors?",
        answer:
          "Yes. Insulated doors (R-value 6–18) reduce noise, improve energy efficiency, and are more durable. We recommend insulated doors for any garage attached to a living space.",
      },
    ],
    relatedSlugs: ["opener-repair-installation", "panel-replacement", "garage-door-repair"],
  },
  {
    slug: "emergency-garage-door-repair",
    title: "Emergency Garage Door Repair",
    shortTitle: "Emergency Repair",
    metaTitle: "24/7 Emergency Garage Door Repair San Diego | Mickey's Garage Door",
    metaDescription:
      "24/7 emergency garage door repair in San Diego. Broken spring, stuck door, or security issue — Mickey's responds fast. Call now for immediate service.",
    headline: "24/7 Emergency Garage Door Repair in San Diego",
    subheadline:
      "Garage door won't close? We respond fast — day or night — to secure your home.",
    description:
      "A garage door that won't close is a security emergency. Whether it's a broken spring in the middle of the night, a door stuck open after a storm, or a door that came off its tracks, our emergency technicians are available around the clock. We prioritize same-hour response for situations that leave your home unsecured.",
    icon: "🚨",
    heroImage: "/images/services/emergency.jpg",
    signs: [
      "Door won't close and your home is unsecured",
      "Spring or cable snapped suddenly",
      "Door came completely off the tracks",
      "Opener failed and you can't access the manual release",
      "Door is jammed halfway open or closed",
      "Vehicle is trapped inside the garage",
    ],
    process: [
      {
        step: "Call Us Immediately",
        description:
          "Our emergency line is answered 24/7. We dispatch the nearest available technician to your location.",
      },
      {
        step: "Rapid Arrival",
        description:
          "We aim to arrive within 1–2 hours for emergency calls in San Diego County.",
      },
      {
        step: "Immediate Stabilization",
        description:
          "We first make the door safe — whether that means securing it closed or safely holding it in position.",
      },
      {
        step: "Full Repair",
        description:
          "Once stabilized, we diagnose and complete the full repair on the spot in most cases.",
      },
    ],
    priceRange: "Emergency service call from $119. Repair cost quoted on-site before work begins.",
    warranty: "All emergency repairs carry the same 1-year parts and labor warranty.",
    brands: ["LiftMaster", "Genie", "Chamberlain", "Clopay", "Wayne Dalton", "Amarr"],
    faqs: [
      {
        question: "Do you really respond at night and on weekends?",
        answer:
          "Yes. Our emergency line is staffed 24/7 including holidays. We understand a stuck door can't wait until Monday.",
      },
      {
        question: "Is there an extra charge for emergency or after-hours service?",
        answer:
          "There is a slightly higher service call fee for after-hours calls, but we always quote the total cost upfront before beginning any work.",
      },
      {
        question: "What should I do while waiting for the technician?",
        answer:
          "If the door is stuck open, do not leave the garage unattended. Pull your vehicle out if safe to do so and secure any valuables. Do not attempt to force the door manually — this can cause additional damage or injury.",
      },
    ],
    relatedSlugs: ["spring-replacement", "cable-drum-repair", "garage-door-repair"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}

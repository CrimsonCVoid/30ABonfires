export type FAQ = {
  question: string;
  answer: string;
};

export type AreaData = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  highlights: string[];
  nearbyAreas: string[];
  faqs: FAQ[];
  geo: { lat: number; lng: number };
  unsplashImage: string;
  vibe: string;
  bestFor: string[];
  thingsToDo: string[];
  bestTime: string;
};

export const areas: AreaData[] = [
  {
    slug: "inlet-beach",
    name: "Inlet Beach",
    headline: "Beach Bonfires in Inlet Beach",
    description:
      "Inlet Beach sits at the eastern gateway of Scenic Highway 30A, where sugar-white sand stretches wide and crowds thin out. This quiet community is one of 30A's best-kept secrets for a private beach bonfire—think open shoreline, stunning Gulf views, and enough space for your whole group to spread out under the stars.\n\nOur team arrives before sunset to build your bonfire, arrange Adirondack chairs in a circle, and set out everything you need for s'mores. Whether you're celebrating an anniversary, hosting a family reunion, or just want an unforgettable night on the beach, an Inlet Beach bonfire delivers the laid-back coastal magic that makes 30A special.\n\nThe beach at Inlet Beach is known for its wide, powdery sand and the distinctive turquoise water that defines Florida's Emerald Coast. The area remains refreshingly undeveloped compared to its western neighbors, offering a more authentic beach experience. With the sound of waves as your soundtrack and a crackling fire as your centerpiece, evenings here feel like a step back to a simpler time.",
    metaTitle: "Beach Bonfire Inlet Beach FL | Private Bonfire Setup on 30A",
    metaDescription:
      "Book a private beach bonfire in Inlet Beach on 30A. We set up chairs, s'mores, and a roaring fire on the sand. Full setup and cleanup included. Serving the eastern gateway of Scenic Highway 30A.",
    highlights: [
      "Wide, uncrowded beach with plenty of space for large groups",
      "Eastern 30A location—easy access from Panama City Beach and Rosemary Beach",
      "Stunning sunset views over the Gulf of Mexico",
      "Perfect for family reunions, proposals, and private celebrations",
      "Some of the most pristine, undeveloped shoreline along 30A",
    ],
    nearbyAreas: ["rosemary-beach", "seacrest-beach"],
    faqs: [
      {
        question: "Where exactly do you set up bonfires in Inlet Beach?",
        answer:
          "We set up on the public beach access points in Inlet Beach, typically near the main regional beach access. The exact spot depends on conditions and group size—we'll coordinate the best location with you before your event.",
      },
      {
        question: "Is Inlet Beach a good spot for a proposal bonfire?",
        answer:
          "Absolutely. Inlet Beach is one of the most private and romantic stretches of 30A. The wide beach and quieter atmosphere make it ideal for a surprise proposal bonfire. We can help coordinate timing around sunset for the perfect moment.",
      },
      {
        question: "How far is Inlet Beach from Rosemary Beach?",
        answer:
          "Inlet Beach is immediately west of the 30A/Highway 98 junction and just a few minutes' drive east of Rosemary Beach. If you're staying anywhere on eastern 30A, Inlet Beach is extremely convenient.",
      },
    ],
    geo: { lat: 30.2827, lng: -86.0047 },
    unsplashImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    vibe: "Quiet & Secluded",
    bestFor: ["Proposals", "Family Reunions", "Intimate Gatherings"],
    thingsToDo: [
      "Walk the nature trails along the coastal dune lakes",
      "Browse the shops and restaurants at Inlet Beach town center",
      "Paddleboard on Camp Creek Lake",
      "Visit the Inlet Beach Regional Access for miles of open sand",
    ],
    bestTime: "Sunset is especially stunning from Inlet Beach due to the wide, open horizon. We recommend arriving 30 minutes before sunset to settle in.",
  },
  {
    slug: "rosemary-beach",
    name: "Rosemary Beach",
    headline: "Beach Bonfires in Rosemary Beach",
    description:
      "Rosemary Beach is one of the most iconic planned communities along 30A, known for its European-inspired architecture, cobblestone streets, and beautifully maintained beach walkovers. A beach bonfire here feels like the perfect ending to a day spent browsing boutique shops and dining at world-class restaurants.\n\nWe bring everything to the beach so you don't have to lift a finger. Our crew handles the fire, the seating, the s'mores station, and the cleanup. You just show up, settle into your chair, and watch the flames dance against a backdrop of emerald water and fading sunlight.\n\nRosemary Beach has cultivated a reputation as one of the Gulf Coast's premier luxury destinations. The town's Caribbean-colonial and Bermuda-influenced architecture creates a distinctly upscale atmosphere, while the beach itself remains accessible and welcoming. After dinner at one of Rosemary's acclaimed restaurants, there's nothing better than an evening spent fireside on the sand.",
    metaTitle: "Beach Bonfire Rosemary Beach FL | Private 30A Bonfire Setup",
    metaDescription:
      "Private beach bonfires in Rosemary Beach, FL on 30A. Luxury bonfire experience with chairs, s'mores, and fire. Perfect end to a day in Rosemary Beach. Book your 30A bonfire today.",
    highlights: [
      "Upscale 30A community with gorgeous beach walkovers",
      "Perfect add-on to a dinner at Rosemary Beach restaurants",
      "Great for couples' getaways and small group celebrations",
      "European-village charm meets barefoot beach bonfire culture",
      "Walkable town center with world-class dining and shopping",
    ],
    nearbyAreas: ["inlet-beach", "alys-beach", "seacrest-beach"],
    faqs: [
      {
        question: "Can we have a bonfire directly on Rosemary Beach?",
        answer:
          "Yes! We set up bonfires on the beach near Rosemary Beach's public access points. Our team manages all permits and local requirements so you can enjoy the evening worry-free.",
      },
      {
        question: "What's the best time for a bonfire in Rosemary Beach?",
        answer:
          "We recommend starting 30–45 minutes before sunset. This gives you time to settle in, enjoy the golden hour, and then experience the bonfire as the sky transitions from sunset to starlight.",
      },
      {
        question: "Do you offer bonfires for wedding parties at Rosemary Beach?",
        answer:
          "We do. Beach bonfires are a popular choice for rehearsal dinners, post-ceremony celebrations, and bachelor/bachelorette parties in Rosemary Beach. Contact us for group pricing.",
      },
    ],
    geo: { lat: 30.2780, lng: -86.0176 },
    unsplashImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
    vibe: "Upscale & Charming",
    bestFor: ["Date Nights", "Wedding Parties", "Couples' Getaways"],
    thingsToDo: [
      "Dine at award-winning restaurants like Edward's and La Crema",
      "Stroll the cobblestone streets and browse boutique shops",
      "Catch live music at the town green",
      "Walk or bike along the 30A multi-use path",
    ],
    bestTime: "Golden hour in Rosemary Beach is magical. Start your bonfire 30–45 minutes before sunset to catch the full transition from daylight to starlight.",
  },
  {
    slug: "alys-beach",
    name: "Alys Beach",
    headline: "Beach Bonfires in Alys Beach",
    description:
      "Alys Beach is 30A's most architecturally striking community—white-walled courtyards, lush green spaces, and a pristine stretch of Gulf shoreline. A bonfire here pairs perfectly with the community's refined yet relaxed atmosphere.\n\nWhether you're staying in one of the luxury vacation homes or visiting for the evening, our bonfire service transforms the beach into your private gathering space. We set up Adirondack chairs around a crackling fire, lay out a full s'mores spread, and handle every detail from start to finish.\n\nThe Bermuda-meets-Antigua design aesthetic of Alys Beach creates a stunning visual contrast with the natural beauty of the Gulf shoreline. This community hosts the annual 30A Wine Festival and Digital Graffiti art festival, cementing its reputation as a cultural destination. A beach bonfire here adds a touch of elemental simplicity to one of 30A's most sophisticated settings.",
    metaTitle: "Beach Bonfire Alys Beach FL | Luxury 30A Bonfire Experience",
    metaDescription:
      "Book a beach bonfire in Alys Beach on 30A. Luxury bonfire experience with chairs, s'mores, and full setup. We handle everything in this architectural gem of the Emerald Coast.",
    highlights: [
      "30A's most distinctive architectural community",
      "Pristine white-sand beach with a refined atmosphere",
      "Popular for luxury vacation celebrations and special occasions",
      "Steps from Alys Beach restaurants, shops, and the amphitheater",
      "Home to the 30A Wine Festival and Digital Graffiti festival",
    ],
    nearbyAreas: ["rosemary-beach", "seacrest-beach"],
    faqs: [
      {
        question: "Are bonfires allowed on Alys Beach?",
        answer:
          "We coordinate with local regulations to host bonfires on approved beach areas near Alys Beach. Our team handles all logistics—you just enjoy the fire.",
      },
      {
        question: "Can you set up a bonfire for a corporate retreat at Alys Beach?",
        answer:
          "Absolutely. Alys Beach is a popular corporate retreat destination, and a beach bonfire is a great team-building activity. We can accommodate groups of all sizes.",
      },
      {
        question: "What makes Alys Beach bonfires special?",
        answer:
          "The combination of Alys Beach's luxury atmosphere with a classic beach bonfire creates a unique contrast—refined coastal living meets barefoot relaxation around the fire.",
      },
    ],
    geo: { lat: 30.2752, lng: -86.0332 },
    unsplashImage: "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1200&q=80",
    vibe: "Luxury & Artistic",
    bestFor: ["Corporate Retreats", "Special Occasions", "Luxury Celebrations"],
    thingsToDo: [
      "Explore the iconic white-walled architecture and courtyards",
      "Dine at George's at Alys Beach or Neat Bottle Shop",
      "Attend seasonal festivals like Digital Graffiti and 30A Wine Festival",
      "Relax at the Alys Beach pool and fitness center",
    ],
    bestTime: "Evening bonfires at Alys Beach are best paired with a sunset walk along the beach. The white architecture glows beautifully in golden hour light.",
  },
  {
    slug: "seacrest-beach",
    name: "Seacrest Beach",
    headline: "Beach Bonfires in Seacrest Beach",
    description:
      "Seacrest Beach offers a quieter, more residential feel along 30A with easy beach access and a family-friendly vibe. The community sits between Rosemary Beach and Watersound, giving you a central location along the eastern stretch of the highway.\n\nA bonfire at Seacrest Beach is the kind of low-key, memorable experience that families come back for year after year. Kids roast marshmallows, parents relax in Adirondack chairs, and the Gulf breeze keeps everything comfortable. We do all the setup and teardown—you just bring your crew.\n\nSeacrest Beach is anchored by a vibrant town center with restaurants, an outdoor amphitheater, and shops. The community's signature lagoon-style pool is one of the largest along 30A. When the sun sets and the beach quiets down, a bonfire on Seacrest's wide shoreline becomes the highlight of any vacation.",
    metaTitle: "Beach Bonfire Seacrest Beach FL | Family-Friendly 30A Bonfires",
    metaDescription:
      "Family-friendly beach bonfires in Seacrest Beach on 30A. Full setup with chairs, fire, and s'mores on the quiet eastern stretch of Scenic Highway 30A. Book your night on the beach.",
    highlights: [
      "Quiet, family-friendly stretch of 30A",
      "Central location between Rosemary Beach and Watersound",
      "Easy beach access with less foot traffic",
      "Ideal for family vacations and multi-generational gatherings",
      "Vibrant town center with dining and entertainment",
    ],
    nearbyAreas: ["rosemary-beach", "alys-beach", "watersound"],
    faqs: [
      {
        question: "Is Seacrest Beach good for a family bonfire?",
        answer:
          "It's one of the best spots on 30A for families. The beach is less crowded, the access points are easy, and children love roasting s'mores by the fire.",
      },
      {
        question: "How do we find you on the beach at Seacrest?",
        answer:
          "We'll send you the exact beach access point and GPS pin before your event. Our setup is easy to spot—look for the glow of the fire and the circle of Adirondack chairs.",
      },
      {
        question: "Can we bring our own food to the bonfire?",
        answer:
          "Of course. Many families bring snacks, drinks, or even catered food to enjoy alongside our s'mores setup. We just ask that you help us keep the beach clean.",
      },
    ],
    geo: { lat: 30.2770, lng: -86.0430 },
    unsplashImage: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1200&q=80",
    vibe: "Family-Friendly & Relaxed",
    bestFor: ["Family Vacations", "Kids' S'mores Nights", "Multi-Generational Trips"],
    thingsToDo: [
      "Swim at the resort-style community pool",
      "Walk to Seacrest Beach town center for dining",
      "Bike the 30A path to neighboring Rosemary Beach",
      "Catch a sunset from the beach walkovers",
    ],
    bestTime: "Late afternoon arrivals work perfectly. Get settled, enjoy the sunset, and roast marshmallows as the stars come out.",
  },
  {
    slug: "watersound",
    name: "Watersound",
    headline: "Beach Bonfires in Watersound",
    description:
      "Watersound is one of 30A's most naturally beautiful communities, with towering dunes, coastal dune lakes, and a shoreline that feels untouched. A bonfire here puts you right in the heart of what makes the Emerald Coast so special—raw, natural beauty.\n\nOur team navigates the boardwalks and beach paths to set up your bonfire in a prime spot. Chairs arranged, fire blazing, s'mores ready. It's the kind of evening where you put your phone away and just listen to the waves.\n\nWatersound's towering sand dunes are some of the tallest along the Gulf Coast, creating a dramatic backdrop for your bonfire experience. The community is surrounded by rare coastal dune lake ecosystems, making it an ecologically unique destination. The beach here feels wild and untamed—a perfect counterpoint to the warmth and comfort of a crackling fire.",
    metaTitle: "Beach Bonfire Watersound FL | Private Bonfires on 30A's Pristine Shore",
    metaDescription:
      "Beach bonfire service in Watersound on 30A. Enjoy a private bonfire with chairs and s'mores on one of 30A's most beautiful stretches of pristine, natural shoreline.",
    highlights: [
      "Towering natural dunes and pristine shoreline",
      "Coastal dune lakes add unique natural beauty",
      "Secluded feel—perfect for intimate gatherings",
      "One of 30A's most photographed stretches of beach",
      "Dramatic sand dunes create a private, sheltered setting",
    ],
    nearbyAreas: ["seacrest-beach", "seagrove-beach"],
    faqs: [
      {
        question: "Is the beach at Watersound hard to access for a bonfire?",
        answer:
          "Not at all. We use the public beach access points in the Watersound area and handle all the hauling and setup. You just walk down to the beach and enjoy.",
      },
      {
        question: "Are Watersound bonfires more private than other 30A locations?",
        answer:
          "Generally, yes. Watersound's natural dune system creates a more secluded feel. It's a popular choice for couples and smaller groups who want a quieter experience.",
      },
      {
        question: "Can we do a bonfire near a dune lake?",
        answer:
          "Bonfires are set up on the Gulf-side beach, not near the dune lakes (which are protected ecosystems). But you'll still enjoy the incredible natural setting that makes Watersound unique.",
      },
    ],
    geo: { lat: 30.2843, lng: -86.0598 },
    unsplashImage: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&q=80",
    vibe: "Natural & Secluded",
    bestFor: ["Couples' Retreats", "Photography Sessions", "Nature Lovers"],
    thingsToDo: [
      "Hike the nature trails through the coastal dune forest",
      "Explore the rare coastal dune lake ecosystems",
      "Photograph the towering sand dunes at golden hour",
      "Relax at the Watersound Beach Club",
    ],
    bestTime: "Watersound sunsets are among 30A's best. The tall dunes create beautiful shadow play during golden hour, making it an ideal pre-bonfire photo opportunity.",
  },
  {
    slug: "seagrove-beach",
    name: "Seagrove Beach",
    headline: "Beach Bonfires in Seagrove Beach",
    description:
      "Seagrove Beach is old-school 30A—the kind of place where beach cottages sit under moss-draped oaks and the pace of life slows way down. It's one of the original beach communities along the highway, and a bonfire here feels like stepping back in time to a simpler version of coastal Florida.\n\nWe set up your bonfire on the wide, sandy shore near Seagrove's beach accesses. The natural beauty is hard to beat: emerald-green water, sugar-white sand, and a sky full of stars once the sun goes down.\n\nSeagrove Beach has maintained its old-Florida character through the years, with towering oaks and magnolias lining quiet residential streets. The community's laid-back atmosphere is exactly what draws visitors back season after season. Adjacent to Seaside, Seagrove offers the best of both worlds—proximity to restaurants and shops with the peace of a quieter shoreline.",
    metaTitle: "Beach Bonfire Seagrove Beach FL | Old-Florida 30A Bonfire Experience",
    metaDescription:
      "Book a beach bonfire in Seagrove Beach on 30A. Classic old-Florida charm meets a crackling fire on the sand. Full bonfire setup and cleanup included near Seaside.",
    highlights: [
      "Classic old-Florida beach community on 30A",
      "Wide sandy beach ideal for bonfire setups",
      "Quiet, uncommercialized stretch of coastline",
      "Adjacent to Seaside—great for dinner-and-bonfire combos",
      "Towering live oaks and natural coastal vegetation",
    ],
    nearbyAreas: ["watersound", "seaside"],
    faqs: [
      {
        question: "What's the beach like at Seagrove?",
        answer:
          "Seagrove has a wide, flat beach with soft white sand—perfect for setting up a bonfire with plenty of room. It's less developed than neighboring Seaside, giving it a more natural feel.",
      },
      {
        question: "Can we walk to a bonfire from Seaside?",
        answer:
          "Yes! Seagrove Beach is right next to Seaside. Many guests dine in Seaside and then walk east along the beach to their bonfire in Seagrove. It's a great combination.",
      },
      {
        question: "Is Seagrove Beach a good spot for a birthday bonfire?",
        answer:
          "It's a fantastic choice. The wide beach gives us room for larger groups, and the relaxed atmosphere makes it feel like a true celebration.",
      },
    ],
    geo: { lat: 30.2918, lng: -86.0918 },
    unsplashImage: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?w=1200&q=80",
    vibe: "Classic & Laid-Back",
    bestFor: ["Birthday Celebrations", "Dinner & Bonfire Combos", "Large Groups"],
    thingsToDo: [
      "Walk along the beach to Seaside for dinner or ice cream",
      "Explore the old-Florida cottages and oak-lined streets",
      "Visit the Seagrove Village Market for local goods",
      "Bike the scenic 30A trail to neighboring communities",
    ],
    bestTime: "Evenings in Seagrove are magical year-round. The wide beach catches beautiful light, and the proximity to Seaside's dining makes pre-bonfire dinners easy.",
  },
  {
    slug: "seaside",
    name: "Seaside",
    headline: "Beach Bonfires in Seaside",
    description:
      "Seaside is the town that put 30A on the map. Famous for its pastel-colored cottages, town square with food trucks, and the beach pavilion featured in The Truman Show, Seaside draws visitors from around the world. A beach bonfire here adds a layer of magic to an already unforgettable destination.\n\nAfter browsing the shops, grabbing dinner at Bud & Alley's, or catching a sunset from the amphitheater, head down to the beach where we'll have your bonfire ready and waiting. Chairs, fire, s'mores, and the sound of the Gulf—that's the Seaside experience.\n\nAs America's first New Urbanist community, Seaside has been featured in architectural textbooks and travel magazines worldwide. The town's distinctive pastel palette, white picket fences, and walkable design have inspired countless communities. Its central location on 30A makes it the cultural heart of the highway, and a bonfire on its iconic beach is the quintessential Emerald Coast experience.",
    metaTitle: "Beach Bonfire Seaside FL | Bonfires Near the Iconic 30A Town",
    metaDescription:
      "Beach bonfires in Seaside, FL on 30A. Private bonfire setup with chairs and s'mores near the famous Seaside pavilion from The Truman Show. Book your iconic 30A experience now.",
    highlights: [
      "30A's most famous town—home of The Truman Show",
      "Steps from Seaside's shops, restaurants, and food trucks",
      "Iconic beach pavilion makes a stunning bonfire backdrop",
      "Perfect after-dinner activity for vacationing families and couples",
      "Central 30A location—the cultural heart of the highway",
    ],
    nearbyAreas: ["seagrove-beach", "watercolor"],
    faqs: [
      {
        question: "Can you set up a bonfire right by the Seaside pavilion?",
        answer:
          "We set up near Seaside's public beach access areas. The exact location varies based on conditions and availability, but we always aim for a spot with great views and a convenient walk from town.",
      },
      {
        question: "Is Seaside too crowded for a beach bonfire?",
        answer:
          "Seaside's beach is popular during the day, but evenings are much quieter. By the time we light the fire around sunset, most beachgoers have headed home. It's surprisingly peaceful.",
      },
      {
        question: "What should we do in Seaside before our bonfire?",
        answer:
          "Grab dinner at one of Seaside's restaurants, browse the shops around the town square, or pick up dessert from one of the Airstream food trucks. Then head to the beach for your bonfire—it's the perfect end to a 30A day.",
      },
    ],
    geo: { lat: 30.3203, lng: -86.1447 },
    unsplashImage: "https://images.unsplash.com/photo-1520942702018-0862200e6873?w=1200&q=80",
    vibe: "Iconic & Vibrant",
    bestFor: ["After-Dinner Bonfires", "Family Vacations", "Romantic Evenings"],
    thingsToDo: [
      "Eat at the famous Airstream food trucks in the town square",
      "Visit the Seaside REP Theatre for live performances",
      "Watch the sunset from the iconic Seaside pavilion",
      "Browse the unique boutiques along Ruskin Place",
    ],
    bestTime: "Time your bonfire to start at sunset. Walk through town, grab food truck treats, and head to the beach as the sky turns golden.",
  },
  {
    slug: "watercolor",
    name: "WaterColor",
    headline: "Beach Bonfires in WaterColor",
    description:
      "WaterColor is a premier 30A resort community known for its luxury homes, the WaterColor Inn, and direct access to Western Lake—one of the rare coastal dune lakes in the world. A bonfire here puts you on a beautiful stretch of Gulf beach backed by towering pines and natural dunes.\n\nOur bonfire service is popular with WaterColor guests celebrating special occasions: birthdays, anniversaries, family trips, and everything in between. We set up on the sand, arrange comfortable seating, and have your s'mores supplies ready when you arrive.\n\nWaterColor's distinct natural beauty stems from its position between the Gulf of Mexico and Western Lake, creating a landscape of rare ecological diversity. The community's upscale amenities—including the WaterColor Inn & Resort, boathouse, and marina—make it a destination where luxury meets nature. A bonfire on WaterColor's beach is the perfect way to experience both.",
    metaTitle: "Beach Bonfire WaterColor FL | Luxury 30A Resort Bonfire Service",
    metaDescription:
      "Private beach bonfire in WaterColor on 30A. Luxury bonfire experience at this premier resort community with Adirondack chairs, fire, and s'mores. Full setup and cleanup.",
    highlights: [
      "Luxury resort community with WaterColor Inn",
      "Access to Western Lake—a rare coastal dune lake",
      "Beautiful Gulf beach backed by natural dunes and pines",
      "Popular for special occasion bonfires and resort guest experiences",
      "Pristine natural setting with upscale amenities",
    ],
    nearbyAreas: ["seaside", "grayton-beach"],
    faqs: [
      {
        question: "Do I need to be a WaterColor guest to book a bonfire?",
        answer:
          "No. While many of our WaterColor bonfire bookings come from resort guests, anyone can book. We use public beach access points in the area.",
      },
      {
        question: "Can you set up near Western Lake?",
        answer:
          "Our bonfires are set up on the Gulf beach, not near Western Lake. The dune lake area is a protected ecosystem. However, the Gulf beach near WaterColor is spectacular.",
      },
      {
        question: "Is WaterColor a good spot for anniversary bonfires?",
        answer:
          "Absolutely. WaterColor's upscale atmosphere and beautiful beach make it one of our most popular locations for couples celebrating milestones.",
      },
    ],
    geo: { lat: 30.3165, lng: -86.1535 },
    unsplashImage: "https://images.unsplash.com/photo-1500259571355-332da5cb07aa?w=1200&q=80",
    vibe: "Luxury & Natural",
    bestFor: ["Anniversary Celebrations", "Resort Guests", "Special Occasions"],
    thingsToDo: [
      "Kayak or paddleboard on Western Lake",
      "Dine at the WaterColor Inn restaurant",
      "Walk the nature trails through the coastal pine forest",
      "Visit nearby Seaside for shopping and food trucks",
    ],
    bestTime: "WaterColor sunsets over the Gulf are spectacular. Schedule your bonfire to start at golden hour for the full experience.",
  },
  {
    slug: "grayton-beach",
    name: "Grayton Beach",
    headline: "Beach Bonfires in Grayton Beach",
    description:
      "Grayton Beach is the free-spirited heart of 30A. This funky, artsy community has been called one of the best beaches in America, and for good reason: the sand is impossibly white, the water glows emerald, and Grayton's vibe is unapologetically chill. If any town on 30A was made for a beach bonfire, it's this one.\n\nWe set up your fire near Grayton Beach State Park's stunning shoreline. After the flames are lit and the chairs are arranged, you're in for a night that feels authentically 30A—no pretense, just good company and great beach.\n\nGrayton Beach has been ranked as the #1 beach in America by Dr. Beach and has appeared on virtually every \"best beaches\" list in the country. The town itself is a delightful mix of funky art galleries, legendary restaurants like The Red Bar, and a community that values authenticity above all else. A bonfire here feels like the most natural thing in the world.",
    metaTitle: "Beach Bonfire Grayton Beach FL | #1 Beach in America 30A Bonfires",
    metaDescription:
      "Beach bonfires in Grayton Beach on 30A—rated one of America's best beaches. Private bonfire with chairs, s'mores, and full setup on this funky, artsy stretch of the Emerald Coast.",
    highlights: [
      "Repeatedly rated one of the best beaches in America",
      "Funky, artsy community with live music and local restaurants",
      "Grayton Beach State Park offers stunning natural scenery",
      "Laid-back atmosphere that's perfect for bonfire culture",
      "Home to The Red Bar and other legendary 30A dining spots",
    ],
    nearbyAreas: ["watercolor", "blue-mountain-beach"],
    faqs: [
      {
        question: "Can we have a bonfire on Grayton Beach State Park?",
        answer:
          "Bonfires inside the state park require specific permits and coordination. We typically set up on public beach areas near Grayton Beach. Contact us and we'll find the best spot.",
      },
      {
        question: "Why is Grayton Beach famous?",
        answer:
          "Grayton Beach has been ranked among the best beaches in America by Dr. Beach and travel publications. It's known for its emerald water, white sand, and the rare coastal dune lake (Western Lake) at its western edge.",
      },
      {
        question: "Are there restaurants near the Grayton Beach bonfire area?",
        answer:
          "Yes! The Red Bar, Chiringo, and other local favorites are a short walk from the beach. Many guests grab dinner in Grayton and then head to their bonfire.",
      },
    ],
    geo: { lat: 30.3230, lng: -86.1684 },
    unsplashImage: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=1200&q=80",
    vibe: "Artsy & Free-Spirited",
    bestFor: ["Group Gatherings", "Post-Dinner Bonfires", "Beach Lovers"],
    thingsToDo: [
      "Dine at The Red Bar—a 30A institution with live music",
      "Hike the trails at Grayton Beach State Park",
      "Browse local art galleries and studios",
      "Paddleboard on Western Lake at sunset",
    ],
    bestTime: "Start with dinner at The Red Bar, then head to the beach for your bonfire. Grayton evenings are laid-back and magical any time of year.",
  },
  {
    slug: "blue-mountain-beach",
    name: "Blue Mountain Beach",
    headline: "Beach Bonfires in Blue Mountain Beach",
    description:
      "Blue Mountain Beach is named for the blue lupine wildflowers that once blanketed its dunes—and for having the highest elevation of any beach on the Gulf of Mexico. This quiet residential community sits between Grayton Beach and Santa Rosa Beach, offering elevated views and a peaceful shoreline.\n\nA bonfire at Blue Mountain Beach is a low-key, beautiful experience. The slightly elevated terrain means you get unique vantage points of the Gulf, and the absence of large resort developments keeps the crowd down. We handle everything so you can focus on the view.\n\nAt 64 feet above sea level, Blue Mountain Beach holds the distinction of being the highest point on the entire Gulf of Mexico coastline. This unique geography creates dramatic beach approaches and stunning panoramic views that you won't find anywhere else on 30A. The community's quiet, residential character makes it feel like your own private beach paradise.",
    metaTitle: "Beach Bonfire Blue Mountain Beach FL | Highest Gulf Beach on 30A",
    metaDescription:
      "Private beach bonfire at Blue Mountain Beach—the highest point on the Gulf of Mexico. Chairs, fire, s'mores, and full cleanup on this quiet 30A gem. Book your elevated bonfire experience.",
    highlights: [
      "Highest elevation of any Gulf of Mexico beach (64 feet)",
      "Named for the blue lupine wildflowers on its dunes",
      "Quiet, residential community with minimal commercial development",
      "Unique elevated views of the Gulf coastline",
      "One of 30A's most peaceful and private beach settings",
    ],
    nearbyAreas: ["grayton-beach", "santa-rosa-beach"],
    faqs: [
      {
        question: "What makes Blue Mountain Beach different from other 30A beaches?",
        answer:
          "Blue Mountain Beach has the highest elevation point on the Gulf of Mexico, reaching about 64 feet above sea level. This gives the area a unique topography with elevated views you won't find elsewhere on 30A.",
      },
      {
        question: "Is Blue Mountain Beach hard to access for a bonfire?",
        answer:
          "Not at all. There are several public beach access points in Blue Mountain Beach. We handle all the hauling and setup—you just walk down to the sand.",
      },
      {
        question: "Is this area good for a quiet, private bonfire?",
        answer:
          "Blue Mountain Beach is one of the quietest stretches of 30A, making it excellent for intimate gatherings, date nights, or small family bonfires.",
      },
    ],
    geo: { lat: 30.3340, lng: -86.2008 },
    unsplashImage: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1200&q=80",
    vibe: "Quiet & Elevated",
    bestFor: ["Intimate Gatherings", "Date Nights", "Small Family Bonfires"],
    thingsToDo: [
      "Hike to the highest point on the Gulf of Mexico",
      "Visit Blue Mountain Creamery for artisan ice cream",
      "Bike the 30A trail between Grayton and Santa Rosa Beach",
      "Enjoy the panoramic Gulf views from the elevated dunes",
    ],
    bestTime: "The elevated vantage point makes sunset viewing extraordinary. Arrive early to soak in the panoramic views before your bonfire begins.",
  },
  {
    slug: "santa-rosa-beach",
    name: "Santa Rosa Beach",
    headline: "Beach Bonfires in Santa Rosa Beach",
    description:
      "Santa Rosa Beach is the largest community along 30A and serves as the unofficial hub of South Walton. With Gulf Place, Ed Walline Beach, and miles of coastline, there's no shortage of great spots for a beach bonfire. It's also home to some of 30A's best restaurants, shops, and the popular 30Avenue dining and entertainment district.\n\nWhether you're a local or visiting for the week, a bonfire on Santa Rosa Beach is the quintessential 30A experience. We bring the fire, the chairs, and the s'mores. You bring the people you love and a willingness to stay up past sunset.\n\nAs the hub of South Walton County, Santa Rosa Beach offers the widest variety of dining, shopping, and entertainment options along 30A. The 30Avenue complex features acclaimed restaurants and live music, while Gulf Place provides a walkable town center right on the beach. This central location makes Santa Rosa Beach bonfires convenient for guests staying anywhere along the highway.",
    metaTitle: "Beach Bonfire Santa Rosa Beach FL | Hub of 30A Bonfire Service",
    metaDescription:
      "Beach bonfire service in Santa Rosa Beach—the heart of South Walton and 30A. Full bonfire setup with chairs, s'mores, and cleanup. Multiple beach locations available.",
    highlights: [
      "Largest 30A community—the hub of South Walton",
      "Multiple beach access points for flexible bonfire locations",
      "Home to Gulf Place and the 30Avenue district",
      "Great for locals and visitors alike",
      "Most dining and entertainment options along 30A",
    ],
    nearbyAreas: ["blue-mountain-beach", "gulf-place", "dune-allen-beach"],
    faqs: [
      {
        question: "Where in Santa Rosa Beach do you set up bonfires?",
        answer:
          "We have several options along Santa Rosa Beach's coastline, including near Gulf Place and Ed Walline Beach Park. We'll coordinate the best spot based on your group size and preferences.",
      },
      {
        question: "Can I book a bonfire for a large group in Santa Rosa Beach?",
        answer:
          "Yes. Santa Rosa Beach has wide stretches of sand that are ideal for larger gatherings. We can accommodate birthday parties, corporate events, and family reunions.",
      },
      {
        question: "Is Santa Rosa Beach convenient for people staying outside 30A?",
        answer:
          "Very. Santa Rosa Beach is centrally located with easy access from Highway 98, making it convenient for guests staying in Destin, Miramar Beach, or further east along 30A.",
      },
    ],
    geo: { lat: 30.3540, lng: -86.2315 },
    unsplashImage: "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1200&q=80",
    vibe: "Central & Versatile",
    bestFor: ["Large Gatherings", "Corporate Events", "Locals' Night Out"],
    thingsToDo: [
      "Dine at the 30Avenue complex's acclaimed restaurants",
      "Shop and eat at Gulf Place on the beach",
      "Visit the Coastal Dune Lakes along the shoreline",
      "Catch live music at venues along 30A",
    ],
    bestTime: "Santa Rosa Beach's central location and multiple access points mean flexibility. We can time your bonfire to match sunset perfectly.",
  },
  {
    slug: "gulf-place",
    name: "Gulf Place",
    headline: "Beach Bonfires at Gulf Place",
    description:
      "Gulf Place is a lively mixed-use community on 30A with shops, restaurants, an amphitheater, and one of the area's most popular beach access points. Ed Walline Beach Park is right here, offering ample parking and an easy walk to the sand. It's where locals and visitors converge for good food, live music, and Gulf views.\n\nA bonfire at Gulf Place combines convenience with atmosphere. Grab dinner at a nearby restaurant, catch a sunset from the beach, and then settle into your bonfire setup as the stars come out. We take care of every detail.\n\nGulf Place has evolved into one of 30A's most beloved gathering spots, with a mix of local shops, art galleries, and restaurants surrounding a central green space and amphitheater. The Ed Walline Beach Park provides one of the easiest beach access points along the highway, with spacious parking and a short walk to the sand. It's the perfect launchpad for a bonfire evening.",
    metaTitle: "Beach Bonfire Gulf Place 30A | Easy Beach Access Bonfire Setup",
    metaDescription:
      "Beach bonfires at Gulf Place on 30A. Steps from shops, restaurants, and Ed Walline Beach Park. Full bonfire setup with Adirondack chairs and s'mores. Easy parking and access.",
    highlights: [
      "Popular shopping and dining destination on 30A",
      "Ed Walline Beach Park offers easy access and parking",
      "Live music and events at the Gulf Place amphitheater",
      "Convenient for combining dinner, shopping, and a bonfire",
      "One of the easiest beach access points on 30A",
    ],
    nearbyAreas: ["santa-rosa-beach", "dune-allen-beach"],
    faqs: [
      {
        question: "Is there parking near the Gulf Place bonfire area?",
        answer:
          "Yes. Ed Walline Beach Park at Gulf Place has a public parking lot with good availability, especially in the evening hours when our bonfires take place.",
      },
      {
        question: "Can we walk to Gulf Place restaurants after our bonfire?",
        answer:
          "Absolutely. Gulf Place has several restaurants and shops within walking distance of the beach. It's one of the most convenient locations for a dinner-and-bonfire combination.",
      },
      {
        question: "Is Gulf Place good for a date night bonfire?",
        answer:
          "It's a great choice. Start with dinner at one of Gulf Place's restaurants, walk down to the beach for your private bonfire, and end the night with live music at the amphitheater if there's an event.",
      },
    ],
    geo: { lat: 30.3535, lng: -86.2293 },
    unsplashImage: "https://images.unsplash.com/photo-1533760881669-80db4d7b341c?w=1200&q=80",
    vibe: "Lively & Convenient",
    bestFor: ["Date Nights", "Dinner & Bonfire Combos", "Easy Access"],
    thingsToDo: [
      "Browse the eclectic shops and art galleries at Gulf Place",
      "Eat at the restaurants surrounding the town green",
      "Catch live music at the Gulf Place amphitheater",
      "Walk Ed Walline Beach Park at sunset",
    ],
    bestTime: "Gulf Place is perfect for an evening that starts with dinner and ends with fire. Plan to arrive for sunset—the amphitheater area often has live music during season.",
  },
  {
    slug: "dune-allen-beach",
    name: "Dune Allen Beach",
    headline: "Beach Bonfires in Dune Allen Beach",
    description:
      "Dune Allen Beach is a small, quiet community on the western end of 30A, sitting between Gulf Place and Miramar Beach. It's flanked by two rare coastal dune lakes—Allen Lake and Stallworth Lake—which create a unique and beautiful setting. This is one of 30A's most peaceful stretches of shoreline.\n\nIf you're looking for a bonfire experience that feels truly secluded and natural, Dune Allen Beach is hard to beat. The beach is wide, the crowd is thin, and the scenery is pure coastal Florida. We set up your fire, chairs, and s'mores, and you enjoy the kind of quiet night that's getting harder to find.\n\nThe two coastal dune lakes flanking Dune Allen Beach are part of a rare geological phenomenon found in only a handful of places worldwide. These freshwater lakes, separated from the Gulf by just a thin strip of sand dunes, create an incredibly diverse ecosystem. The result is a beach setting that feels wild, natural, and untouched—exactly what a bonfire evening should feel like.",
    metaTitle: "Beach Bonfire Dune Allen Beach FL | Secluded 30A Bonfire Between Dune Lakes",
    metaDescription:
      "Private beach bonfire in Dune Allen Beach on 30A. Secluded beach between two rare coastal dune lakes. Full bonfire setup and cleanup on one of 30A's most peaceful shores.",
    highlights: [
      "Flanked by Allen Lake and Stallworth Lake (rare coastal dune lakes)",
      "One of the most peaceful and secluded stretches of 30A",
      "Wide beach with minimal development",
      "Western 30A location—close to Miramar Beach and Destin",
      "Rare geological features create a one-of-a-kind setting",
    ],
    nearbyAreas: ["gulf-place", "santa-rosa-beach", "miramar-beach"],
    faqs: [
      {
        question: "What are the dune lakes at Dune Allen Beach?",
        answer:
          "Allen Lake and Stallworth Lake are coastal dune lakes—rare geological features found in only a few places worldwide. They create a stunning backdrop for bonfires, though our fires are set up on the Gulf beach, not near the lakes themselves.",
      },
      {
        question: "Is Dune Allen Beach hard to find?",
        answer:
          "It's a small community, but we provide exact directions and a GPS pin for your bonfire location. The beach accesses are well-marked.",
      },
      {
        question: "How secluded is a Dune Allen Beach bonfire?",
        answer:
          "Very. This is one of the least-trafficked beaches on 30A, especially in the evening. If privacy is a priority, Dune Allen Beach is an excellent choice.",
      },
    ],
    geo: { lat: 30.3605, lng: -86.2575 },
    unsplashImage: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80",
    vibe: "Secluded & Wild",
    bestFor: ["Privacy Seekers", "Nature Lovers", "Romantic Evenings"],
    thingsToDo: [
      "Explore Allen Lake and Stallworth Lake",
      "Paddleboard on the calm dune lake waters",
      "Birdwatch along the coastal dune lake shores",
      "Walk the quiet, undeveloped shoreline at sunset",
    ],
    bestTime: "Dune Allen Beach is beautiful at any time, but the quiet shoreline and rare dune lakes make it particularly magical as the sun sets and the beach empties.",
  },
  {
    slug: "miramar-beach",
    name: "Miramar Beach",
    headline: "Beach Bonfires in Miramar Beach",
    description:
      "Miramar Beach sits at the western gateway of 30A, bridging the Scenic Highway with the Destin area. It's home to Silver Sands Premium Outlets, a lively restaurant scene, and beautiful Gulf-front beaches. Miramar Beach draws a mix of families, couples, and groups looking for the best of both worlds: 30A's natural beauty and Destin's energy.\n\nA bonfire on Miramar Beach is easy to get to and hard to forget. The wide shoreline gives us plenty of room for your setup, and the western-facing beach means you'll get some of the most vivid sunsets on the Emerald Coast right before your fire gets going.\n\nMiramar Beach's position at the intersection of 30A and the Destin corridor gives it unique advantages: easy access from Highway 98, proximity to world-class dining and shopping, and some of the widest beach frontage along the coast. The area's famous emerald-green water and white sand create a stunning setting for any bonfire evening.",
    metaTitle: "Beach Bonfire Miramar Beach FL | Gateway to 30A Near Destin",
    metaDescription:
      "Beach bonfire service in Miramar Beach near 30A and Destin. Private bonfire with chairs, s'mores, and full setup on wide Gulf-front beach. Perfect for Destin area visitors.",
    highlights: [
      "Western 30A gateway—minutes from Destin",
      "Wide beaches with spectacular sunset views",
      "Close to Silver Sands Premium Outlets and top restaurants",
      "Great for guests splitting time between 30A and Destin",
      "Easy Highway 98 access from anywhere on the Emerald Coast",
    ],
    nearbyAreas: ["dune-allen-beach", "sandestin"],
    faqs: [
      {
        question: "Is Miramar Beach considered part of 30A?",
        answer:
          "Miramar Beach is at the western end of the 30A corridor and is generally considered part of the greater South Walton/30A area. It bridges 30A's scenic communities with the Destin entertainment district.",
      },
      {
        question: "Can I book a bonfire if I'm staying in Destin?",
        answer:
          "Absolutely. Miramar Beach is the closest 30A bonfire location to Destin—typically a 10–15 minute drive. It's a popular choice for Destin vacationers who want a beach bonfire experience.",
      },
      {
        question: "What's the sunset like at Miramar Beach?",
        answer:
          "Spectacular. The western orientation of Miramar Beach means you get a direct sunset view over the Gulf. We time our bonfire setups so you can watch the sunset and then enjoy the fire as darkness falls.",
      },
    ],
    geo: { lat: 30.3808, lng: -86.3538 },
    unsplashImage: "https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?w=1200&q=80",
    vibe: "Vibrant & Accessible",
    bestFor: ["Destin Area Visitors", "Sunset Bonfires", "Group Events"],
    thingsToDo: [
      "Shop at Silver Sands Premium Outlets",
      "Dine at Pompano Joe's or other beachfront restaurants",
      "Watch the spectacular western-facing sunsets",
      "Visit nearby Destin for deep-sea fishing or water parks",
    ],
    bestTime: "Miramar Beach faces west, producing some of the most vivid sunset displays on the Emerald Coast. Time your bonfire to catch the full show.",
  },
  {
    slug: "sandestin",
    name: "Sandestin",
    headline: "Beach Bonfires Near Sandestin",
    description:
      "Sandestin Golf and Beach Resort is one of the largest resort communities on the Emerald Coast, spanning over 2,400 acres with multiple neighborhoods, golf courses, a marina, and the Baytowne Wharf entertainment village. Guests here have access to miles of Gulf-front beach—prime territory for a beach bonfire.\n\nWhether you're at Sandestin for a golf trip, family vacation, or corporate event, our bonfire service adds a memorable evening activity. We set up near the resort's beach areas with everything you need: a roaring fire, comfortable seating, and a full s'mores station.\n\nSandestin is essentially a self-contained vacation city, with four championship golf courses, a full-service marina, tennis courts, and the Village of Baytowne Wharf—a waterfront entertainment complex with shops, restaurants, and nightlife. Adding a beach bonfire to a Sandestin stay elevates the resort experience with something uniquely coastal and unforgettable.",
    metaTitle: "Beach Bonfire Sandestin Resort FL | Resort Bonfire Service on 30A",
    metaDescription:
      "Beach bonfire near Sandestin Golf and Beach Resort on the Emerald Coast. Private fire setup with chairs and s'mores for resort guests and visitors. Full setup and cleanup included.",
    highlights: [
      "2,400-acre resort with golf, marina, and Baytowne Wharf",
      "Miles of Gulf-front beach for bonfire setups",
      "Popular for corporate events, golf trips, and family vacations",
      "Western 30A location with easy Highway 98 access",
      "Full resort amenities complement the bonfire experience",
    ],
    nearbyAreas: ["miramar-beach", "dune-allen-beach"],
    faqs: [
      {
        question: "Do I need to be a Sandestin guest to book a bonfire?",
        answer:
          "No. While many bookings come from resort guests, we can arrange bonfires on public beach areas near Sandestin for anyone. Contact us and we'll coordinate the best location.",
      },
      {
        question: "Can you set up a bonfire for a Sandestin corporate event?",
        answer:
          "Yes. Beach bonfires are a popular addition to corporate retreats and team outings at Sandestin. We can accommodate large groups and customize the setup for your event.",
      },
      {
        question: "How far is Sandestin from 30A?",
        answer:
          "Sandestin is at the western end of the 30A corridor, right where Highway 98 meets the Scenic Highway. It's technically in the Miramar Beach area but is closely connected to the 30A community.",
      },
    ],
    geo: { lat: 30.3900, lng: -86.3265 },
    unsplashImage: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
    vibe: "Resort & Full-Service",
    bestFor: ["Corporate Events", "Golf Trip Add-Ons", "Resort Guests"],
    thingsToDo: [
      "Play a round at one of four championship golf courses",
      "Explore the Village of Baytowne Wharf shops and restaurants",
      "Take a boat out from the Sandestin marina",
      "Enjoy water sports on the Choctawhatchee Bay",
    ],
    bestTime: "Sandestin's expansive beach means plenty of room for any size group. Evening bonfires pair perfectly with a day of golf or resort activities.",
  },
];

export function getAreaBySlug(slug: string): AreaData | undefined {
  return areas.find((area) => area.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return areas.map((area) => area.slug);
}

export function getAreasBySlug(slugs: string[]): AreaData[] {
  return slugs
    .map((slug) => areas.find((area) => area.slug === slug))
    .filter((area): area is AreaData => area !== undefined);
}

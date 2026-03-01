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
};

export const areas: AreaData[] = [
  {
    slug: "inlet-beach",
    name: "Inlet Beach",
    headline: "Beach Bonfires in Inlet Beach",
    description:
      "Inlet Beach sits at the eastern gateway of Scenic Highway 30A, where sugar-white sand stretches wide and crowds thin out. This quiet community is one of 30A's best-kept secrets for a private beach bonfire—think open shoreline, stunning Gulf views, and enough space for your whole group to spread out under the stars.\n\nOur team arrives before sunset to build your bonfire, arrange Adirondack chairs in a circle, and set out everything you need for s'mores. Whether you're celebrating an anniversary, hosting a family reunion, or just want an unforgettable night on the beach, an Inlet Beach bonfire delivers the laid-back coastal magic that makes 30A special.",
    metaTitle: "Beach Bonfire Inlet Beach | 30A Bonfire Service",
    metaDescription:
      "Book a private beach bonfire in Inlet Beach on 30A. We set up chairs, s'mores, and a roaring fire on the sand. Full setup and cleanup included.",
    highlights: [
      "Wide, uncrowded beach with plenty of space for large groups",
      "Eastern 30A location—easy access from Panama City Beach and Rosemary Beach",
      "Stunning sunset views over the Gulf of Mexico",
      "Perfect for family reunions, proposals, and private celebrations",
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
  },
  {
    slug: "rosemary-beach",
    name: "Rosemary Beach",
    headline: "Beach Bonfires in Rosemary Beach",
    description:
      "Rosemary Beach is one of the most iconic planned communities along 30A, known for its European-inspired architecture, cobblestone streets, and beautifully maintained beach walkovers. A beach bonfire here feels like the perfect ending to a day spent browsing boutique shops and dining at world-class restaurants.\n\nWe bring everything to the beach so you don't have to lift a finger. Our crew handles the fire, the seating, the s'mores station, and the cleanup. You just show up, settle into your chair, and watch the flames dance against a backdrop of emerald water and fading sunlight.",
    metaTitle: "Beach Bonfire Rosemary Beach | 30A Bonfire Service",
    metaDescription:
      "Private beach bonfires in Rosemary Beach, FL. Full setup with chairs, s'mores, and fire. Book your 30A bonfire experience today.",
    highlights: [
      "Upscale 30A community with gorgeous beach walkovers",
      "Perfect add-on to a dinner at Rosemary Beach restaurants",
      "Great for couples' getaways and small group celebrations",
      "European-village charm meets barefoot beach bonfire culture",
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
  },
  {
    slug: "alys-beach",
    name: "Alys Beach",
    headline: "Beach Bonfires in Alys Beach",
    description:
      "Alys Beach is 30A's most architecturally striking community—white-walled courtyards, lush green spaces, and a pristine stretch of Gulf shoreline. A bonfire here pairs perfectly with the community's refined yet relaxed atmosphere.\n\nWhether you're staying in one of the luxury vacation homes or visiting for the evening, our bonfire service transforms the beach into your private gathering space. We set up Adirondack chairs around a crackling fire, lay out a full s'mores spread, and handle every detail from start to finish.",
    metaTitle: "Beach Bonfire Alys Beach | 30A Bonfire Service",
    metaDescription:
      "Book a beach bonfire in Alys Beach on 30A. Luxury bonfire experience with chairs, s'mores, and full setup. We handle everything.",
    highlights: [
      "30A's most distinctive architectural community",
      "Pristine white-sand beach with a refined atmosphere",
      "Popular for luxury vacation celebrations and special occasions",
      "Steps from Alys Beach restaurants, shops, and the amphitheater",
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
  },
  {
    slug: "seacrest-beach",
    name: "Seacrest Beach",
    headline: "Beach Bonfires in Seacrest Beach",
    description:
      "Seacrest Beach offers a quieter, more residential feel along 30A with easy beach access and a family-friendly vibe. The community sits between Rosemary Beach and Watersound, giving you a central location along the eastern stretch of the highway.\n\nA bonfire at Seacrest Beach is the kind of low-key, memorable experience that families come back for year after year. Kids roast marshmallows, parents relax in Adirondack chairs, and the Gulf breeze keeps everything comfortable. We do all the setup and teardown—you just bring your crew.",
    metaTitle: "Beach Bonfire Seacrest Beach | 30A Bonfire Service",
    metaDescription:
      "Family-friendly beach bonfires in Seacrest Beach on 30A. Full setup with chairs, fire, and s'mores. Book your night on the beach.",
    highlights: [
      "Quiet, family-friendly stretch of 30A",
      "Central location between Rosemary Beach and Watersound",
      "Easy beach access with less foot traffic",
      "Ideal for family vacations and multi-generational gatherings",
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
  },
  {
    slug: "watersound",
    name: "Watersound",
    headline: "Beach Bonfires in Watersound",
    description:
      "Watersound is one of 30A's most naturally beautiful communities, with towering dunes, coastal dune lakes, and a shoreline that feels untouched. A bonfire here puts you right in the heart of what makes the Emerald Coast so special—raw, natural beauty.\n\nOur team navigates the boardwalks and beach paths to set up your bonfire in a prime spot. Chairs arranged, fire blazing, s'mores ready. It's the kind of evening where you put your phone away and just listen to the waves.",
    metaTitle: "Beach Bonfire Watersound FL | 30A Bonfire Service",
    metaDescription:
      "Beach bonfire service in Watersound on 30A. Enjoy a private bonfire with chairs and s'mores on one of 30A's most beautiful stretches of beach.",
    highlights: [
      "Towering natural dunes and pristine shoreline",
      "Coastal dune lakes add unique natural beauty",
      "Secluded feel—perfect for intimate gatherings",
      "One of 30A's most photographed stretches of beach",
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
  },
  {
    slug: "seagrove-beach",
    name: "Seagrove Beach",
    headline: "Beach Bonfires in Seagrove Beach",
    description:
      "Seagrove Beach is old-school 30A—the kind of place where beach cottages sit under moss-draped oaks and the pace of life slows way down. It's one of the original beach communities along the highway, and a bonfire here feels like stepping back in time to a simpler version of coastal Florida.\n\nWe set up your bonfire on the wide, sandy shore near Seagrove's beach accesses. The natural beauty is hard to beat: emerald-green water, sugar-white sand, and a sky full of stars once the sun goes down.",
    metaTitle: "Beach Bonfire Seagrove Beach | 30A Bonfire Service",
    metaDescription:
      "Book a beach bonfire in Seagrove Beach on 30A. Old-Florida charm meets a crackling fire on the sand. Full setup and cleanup included.",
    highlights: [
      "Classic old-Florida beach community on 30A",
      "Wide sandy beach ideal for bonfire setups",
      "Quiet, uncommercialized stretch of coastline",
      "Adjacent to Seaside—great for dinner-and-bonfire combos",
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
  },
  {
    slug: "seaside",
    name: "Seaside",
    headline: "Beach Bonfires in Seaside",
    description:
      "Seaside is the town that put 30A on the map. Famous for its pastel-colored cottages, town square with food trucks, and the beach pavilion featured in The Truman Show, Seaside draws visitors from around the world. A beach bonfire here adds a layer of magic to an already unforgettable destination.\n\nAfter browsing the shops, grabbing dinner at Bud & Alley's, or catching a sunset from the amphitheater, head down to the beach where we'll have your bonfire ready and waiting. Chairs, fire, s'mores, and the sound of the Gulf—that's the Seaside experience.",
    metaTitle: "Beach Bonfire Seaside FL | 30A Bonfire Service",
    metaDescription:
      "Beach bonfires in Seaside, FL on 30A. Private bonfire setup with chairs and s'mores near the famous Seaside pavilion. Book now.",
    highlights: [
      "30A's most famous town—home of The Truman Show",
      "Steps from Seaside's shops, restaurants, and food trucks",
      "Iconic beach pavilion makes a stunning bonfire backdrop",
      "Perfect after-dinner activity for vacationing families and couples",
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
  },
  {
    slug: "watercolor",
    name: "WaterColor",
    headline: "Beach Bonfires in WaterColor",
    description:
      "WaterColor is a premier 30A resort community known for its luxury homes, the WaterColor Inn, and direct access to Western Lake—one of the rare coastal dune lakes in the world. A bonfire here puts you on a beautiful stretch of Gulf beach backed by towering pines and natural dunes.\n\nOur bonfire service is popular with WaterColor guests celebrating special occasions: birthdays, anniversaries, family trips, and everything in between. We set up on the sand, arrange comfortable seating, and have your s'mores supplies ready when you arrive.",
    metaTitle: "Beach Bonfire WaterColor FL | 30A Bonfire Service",
    metaDescription:
      "Private beach bonfire in WaterColor on 30A. Luxury bonfire experience with Adirondack chairs, fire, and s'mores. Full setup and cleanup.",
    highlights: [
      "Luxury resort community with WaterColor Inn",
      "Access to Western Lake—a rare coastal dune lake",
      "Beautiful Gulf beach backed by natural dunes and pines",
      "Popular for special occasion bonfires and resort guest experiences",
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
  },
  {
    slug: "grayton-beach",
    name: "Grayton Beach",
    headline: "Beach Bonfires in Grayton Beach",
    description:
      "Grayton Beach is the free-spirited heart of 30A. This funky, artsy community has been called one of the best beaches in America, and for good reason: the sand is impossibly white, the water glows emerald, and Grayton's vibe is unapologetically chill. If any town on 30A was made for a beach bonfire, it's this one.\n\nWe set up your fire near Grayton Beach State Park's stunning shoreline. After the flames are lit and the chairs are arranged, you're in for a night that feels authentically 30A—no pretense, just good company and great beach.",
    metaTitle: "Beach Bonfire Grayton Beach | 30A Bonfire Service",
    metaDescription:
      "Beach bonfires in Grayton Beach on 30A. Rated one of America's best beaches. Private bonfire with chairs, s'mores, and full setup.",
    highlights: [
      "Repeatedly rated one of the best beaches in America",
      "Funky, artsy community with live music and local restaurants",
      "Grayton Beach State Park offers stunning natural scenery",
      "Laid-back atmosphere that's perfect for bonfire culture",
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
  },
  {
    slug: "blue-mountain-beach",
    name: "Blue Mountain Beach",
    headline: "Beach Bonfires in Blue Mountain Beach",
    description:
      "Blue Mountain Beach is named for the blue lupine wildflowers that once blanketed its dunes—and for having the highest elevation of any beach on the Gulf of Mexico. This quiet residential community sits between Grayton Beach and Santa Rosa Beach, offering elevated views and a peaceful shoreline.\n\nA bonfire at Blue Mountain Beach is a low-key, beautiful experience. The slightly elevated terrain means you get unique vantage points of the Gulf, and the absence of large resort developments keeps the crowd down. We handle everything so you can focus on the view.",
    metaTitle: "Beach Bonfire Blue Mountain Beach | 30A Bonfire Service",
    metaDescription:
      "Private beach bonfire in Blue Mountain Beach on 30A. The highest point on the Gulf coast. Chairs, fire, s'mores, and full cleanup included.",
    highlights: [
      "Highest elevation of any Gulf of Mexico beach",
      "Named for the blue lupine wildflowers on its dunes",
      "Quiet, residential community with minimal commercial development",
      "Unique elevated views of the Gulf coastline",
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
  },
  {
    slug: "santa-rosa-beach",
    name: "Santa Rosa Beach",
    headline: "Beach Bonfires in Santa Rosa Beach",
    description:
      "Santa Rosa Beach is the largest community along 30A and serves as the unofficial hub of South Walton. With Gulf Place, Ed Walline Beach, and miles of coastline, there's no shortage of great spots for a beach bonfire. It's also home to some of 30A's best restaurants, shops, and the popular 30Avenue dining and entertainment district.\n\nWhether you're a local or visiting for the week, a bonfire on Santa Rosa Beach is the quintessential 30A experience. We bring the fire, the chairs, and the s'mores. You bring the people you love and a willingness to stay up past sunset.",
    metaTitle: "Beach Bonfire Santa Rosa Beach | 30A Bonfire Service",
    metaDescription:
      "Beach bonfire service in Santa Rosa Beach on 30A. The heart of South Walton. Full bonfire setup with chairs, s'mores, and cleanup.",
    highlights: [
      "Largest 30A community—the hub of South Walton",
      "Multiple beach access points for flexible bonfire locations",
      "Home to Gulf Place and the 30Avenue district",
      "Great for locals and visitors alike",
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
  },
  {
    slug: "gulf-place",
    name: "Gulf Place",
    headline: "Beach Bonfires at Gulf Place",
    description:
      "Gulf Place is a lively mixed-use community on 30A with shops, restaurants, an amphitheater, and one of the area's most popular beach access points. Ed Walline Beach Park is right here, offering ample parking and an easy walk to the sand. It's where locals and visitors converge for good food, live music, and Gulf views.\n\nA bonfire at Gulf Place combines convenience with atmosphere. Grab dinner at a nearby restaurant, catch a sunset from the beach, and then settle into your bonfire setup as the stars come out. We take care of every detail.",
    metaTitle: "Beach Bonfire Gulf Place 30A | 30A Bonfire Service",
    metaDescription:
      "Beach bonfires at Gulf Place on 30A. Steps from shops and restaurants. Full bonfire setup with Adirondack chairs and s'mores.",
    highlights: [
      "Popular shopping and dining destination on 30A",
      "Ed Walline Beach Park offers easy access and parking",
      "Live music and events at the Gulf Place amphitheater",
      "Convenient for combining dinner, shopping, and a bonfire",
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
  },
  {
    slug: "dune-allen-beach",
    name: "Dune Allen Beach",
    headline: "Beach Bonfires in Dune Allen Beach",
    description:
      "Dune Allen Beach is a small, quiet community on the western end of 30A, sitting between Gulf Place and Miramar Beach. It's flanked by two rare coastal dune lakes—Allen Lake and Stallworth Lake—which create a unique and beautiful setting. This is one of 30A's most peaceful stretches of shoreline.\n\nIf you're looking for a bonfire experience that feels truly secluded and natural, Dune Allen Beach is hard to beat. The beach is wide, the crowd is thin, and the scenery is pure coastal Florida. We set up your fire, chairs, and s'mores, and you enjoy the kind of quiet night that's getting harder to find.",
    metaTitle: "Beach Bonfire Dune Allen Beach | 30A Bonfire Service",
    metaDescription:
      "Private beach bonfire in Dune Allen Beach on 30A. Secluded beach between two rare dune lakes. Full bonfire setup and cleanup.",
    highlights: [
      "Flanked by Allen Lake and Stallworth Lake (rare coastal dune lakes)",
      "One of the most peaceful and secluded stretches of 30A",
      "Wide beach with minimal development",
      "Western 30A location—close to Miramar Beach and Destin",
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
  },
  {
    slug: "miramar-beach",
    name: "Miramar Beach",
    headline: "Beach Bonfires in Miramar Beach",
    description:
      "Miramar Beach sits at the western gateway of 30A, bridging the Scenic Highway with the Destin area. It's home to Silver Sands Premium Outlets, a lively restaurant scene, and beautiful Gulf-front beaches. Miramar Beach draws a mix of families, couples, and groups looking for the best of both worlds: 30A's natural beauty and Destin's energy.\n\nA bonfire on Miramar Beach is easy to get to and hard to forget. The wide shoreline gives us plenty of room for your setup, and the western-facing beach means you'll get some of the most vivid sunsets on the Emerald Coast right before your fire gets going.",
    metaTitle: "Beach Bonfire Miramar Beach | 30A Bonfire Service",
    metaDescription:
      "Beach bonfire service in Miramar Beach near 30A and Destin. Private bonfire with chairs, s'mores, and full setup. Book today.",
    highlights: [
      "Western 30A gateway—minutes from Destin",
      "Wide beaches with spectacular sunset views",
      "Close to Silver Sands Premium Outlets and top restaurants",
      "Great for guests splitting time between 30A and Destin",
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
  },
  {
    slug: "sandestin",
    name: "Sandestin",
    headline: "Beach Bonfires Near Sandestin",
    description:
      "Sandestin Golf and Beach Resort is one of the largest resort communities on the Emerald Coast, spanning over 2,400 acres with multiple neighborhoods, golf courses, a marina, and the Baytowne Wharf entertainment village. Guests here have access to miles of Gulf-front beach—prime territory for a beach bonfire.\n\nWhether you're at Sandestin for a golf trip, family vacation, or corporate event, our bonfire service adds a memorable evening activity. We set up near the resort's beach areas with everything you need: a roaring fire, comfortable seating, and a full s'mores station.",
    metaTitle: "Beach Bonfire Sandestin Resort | 30A Bonfire Service",
    metaDescription:
      "Beach bonfire near Sandestin Golf and Beach Resort. Private fire setup with chairs and s'mores for resort guests and visitors. Book now.",
    highlights: [
      "2,400-acre resort with golf, marina, and Baytowne Wharf",
      "Miles of Gulf-front beach for bonfire setups",
      "Popular for corporate events, golf trips, and family vacations",
      "Western 30A location with easy Highway 98 access",
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

export type GalleryCategory =
  | "all"
  | "events"
  | "setups"
  | "details";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: GalleryCategory;
};

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All Photos" },
  { value: "events", label: "Events" },
  { value: "setups", label: "Setups" },
  { value: "details", label: "Details" },
];

export const galleryImages: GalleryImage[] = [
  // --- Events (decorated beach setups with dining, flowers, candles) ---
  {
    src: "/images/gallery/IMG_2683.JPG",
    alt: "Elegant beach event with decorated table, floral arrangements, candles, cushion seating, and bonfire chairs on white sand",
    width: 800,
    height: 1000,
    category: "events",
  },
  {
    src: "/images/gallery/IMG_2685.JPG",
    alt: "Overhead view of a curated beach dining setup with pink floral centerpieces and place settings on 30A",
    width: 800,
    height: 1000,
    category: "events",
  },
  {
    src: "/images/gallery/IMG_2687.JPG",
    alt: "Beach chairs draped in pink blankets around a fire pit with a decorated dining area and ocean view at dusk",
    width: 800,
    height: 1000,
    category: "events",
  },
  {
    src: "/images/gallery/IMG_2688.JPG",
    alt: "Candlelit beach table with floral arrangements and champagne glasses overlooking the Gulf at twilight",
    width: 800,
    height: 1000,
    category: "events",
  },
  {
    src: "/images/gallery/IMG_2690.JPG",
    alt: "Full beach bonfire event setup with cushion lounge, decorated dining table, chairs, and fire pit on 30A",
    width: 800,
    height: 1000,
    category: "events",
  },

  // --- Setups (chairs, fire pit circles, large group arrangements) ---
  {
    src: "/images/gallery/IMG_8397.JPG",
    alt: "Rows of blue beach chairs arranged in a semi-circle for a bonfire event with 30A homes in the background",
    width: 800,
    height: 533,
    category: "setups",
  },
  {
    src: "/images/gallery/IMG_8398.JPG",
    alt: "Large bonfire setup with blue beach chairs arranged around a fire pit and lanterns on white sand beach",
    width: 800,
    height: 533,
    category: "setups",
  },
  {
    src: "/images/gallery/IMG_8403.JPG",
    alt: "Guests gathering for a beach bonfire event with chairs circled around the fire pit as the sun sets over the Gulf",
    width: 800,
    height: 533,
    category: "setups",
  },
  {
    src: "/images/gallery/IMG_8401.JPG",
    alt: "Blue and red beach chairs lined up in rows on the white sand with the ocean in the background",
    width: 800,
    height: 533,
    category: "setups",
  },

  // --- Details (close-ups, individual elements, atmosphere) ---
  {
    src: "/images/gallery/IMG_8399.JPG",
    alt: "People playing cornhole on the white sand beach near bonfire setup on 30A",
    width: 800,
    height: 1200,
    category: "details",
  },
  {
    src: "/images/gallery/IMG_8400.JPG",
    alt: "Decorative teal lantern on a stake with blue beach chairs in the background on 30A",
    width: 800,
    height: 1200,
    category: "details",
  },
  {
    src: "/images/gallery/IMG_8410.JPG",
    alt: "Close-up of marshmallow roasting on a stick over glowing bonfire coals in a fire pit on the beach",
    width: 800,
    height: 1200,
    category: "details",
  },
  {
    src: "/images/gallery/IMG_8414.JPG",
    alt: "Blue beach chairs lined up facing the Gulf with a decorative lantern at sunset on 30A",
    width: 800,
    height: 1200,
    category: "details",
  },
];

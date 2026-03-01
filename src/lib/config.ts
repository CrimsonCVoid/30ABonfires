export const siteConfig = {
  name: "30A Bonfire Service",
  legalName: "Destin Bonfire Company LLC",
  tagline: "Beach Bonfires Along Scenic Highway 30A",
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://30abonfireservice.com",
  fareharborUrl:
    process.env.NEXT_PUBLIC_FAREHARBOR_CHECKOUT_URL ||
    "https://fareharbor.com/embeds/book/PLACEHOLDER",
  phone: "(850) 555-0130", // TODO: Replace with real phone
  email: "hello@30abonfires.com", // TODO: Replace with real email
  address: {
    street: "123 Scenic Hwy 30A", // TODO: Replace
    city: "Santa Rosa Beach",
    state: "FL",
    zip: "32459",
  },
  hours: "Mon–Sun: 4:00 PM – 10:00 PM (Seasonal)",
  social: {
    instagram: "https://instagram.com/30abonfires", // TODO: Replace
    facebook: "https://facebook.com/30abonfires", // TODO: Replace
  },
  serviceArea: "Scenic Highway 30A, South Walton, Florida",
  geo: {
    latitude: 30.2833,
    longitude: -86.0667,
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const towns = [
  "Inlet Beach",
  "Rosemary Beach",
  "Alys Beach",
  "Seacrest Beach",
  "Watersound",
  "Seagrove Beach",
  "Seaside",
  "Watercolor",
  "Grayton Beach",
  "Blue Mountain Beach",
  "Santa Rosa Beach",
  "Gulf Place",
  "Dune Allen Beach",
  "Miramar Beach",
  "Sandestin",
] as const;

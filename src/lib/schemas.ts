import { siteConfig } from "./config";
import type { FAQ } from "./areas-data";

export function generateLocalBusinessSchema(options?: {
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description:
      "Professional beach bonfire setup service along Scenic Highway 30A in South Walton, Florida. We provide everything for a perfect beach bonfire: fire, Adirondack chairs, s'mores, and full cleanup.",
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHours: "Mo-Su 16:00-22:00",
    priceRange: "$$",
    image: `${siteConfig.url}/images/og-default.jpg`,
    areaServed: options?.areaServed
      ? {
          "@type": "Place",
          name: options.areaServed,
        }
      : {
          "@type": "Place",
          name: siteConfig.serviceArea,
        },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Beach Bonfire Setup Service",
    description:
      "Full-service beach bonfire experience along Scenic Highway 30A. Includes bonfire setup, Adirondack chairs, s'mores station, and complete cleanup. Serving all 30A communities from Inlet Beach to Sandestin.",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
    },
    serviceType: "Beach Bonfire Rental and Setup",
    areaServed: {
      "@type": "Place",
      name: siteConfig.serviceArea,
    },
    offers: {
      "@type": "Offer",
      url: siteConfig.fareharborUrl,
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      // TODO: Replace with actual price
      price: "0",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        // TODO: Add real pricing
      },
    },
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateAggregateRatingSchema() {
  // TODO: Replace with real review data
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah M.",
        },
        datePublished: "2025-07-15",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Best bonfire experience on 30A! Everything was set up perfectly when we arrived. The s'mores were a hit with the kids.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Jake T.",
        },
        datePublished: "2025-08-22",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Used 30A Bonfire Service for a proposal on Rosemary Beach. They helped make it absolutely perfect. She said yes!",
      },
    ],
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

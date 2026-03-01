import type { Metadata } from "next";
import { siteConfig } from "./config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = "/images/og-default.jpg",
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

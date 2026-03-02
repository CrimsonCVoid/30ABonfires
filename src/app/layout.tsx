import type { Metadata } from "next";
import Script from "next/script";
import { Oswald, Raleway } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingProvider } from "@/components/BookingProvider";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "30A Bonfire Service | Beach Bonfires Along Scenic Highway 30A",
    template: "%s | 30A Bonfire Service",
  },
  description:
    "Book a private beach bonfire along Scenic Highway 30A. We handle setup, chairs, s'mores, and cleanup. Serving Rosemary Beach, Seaside, Grayton Beach, and all 30A communities.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "30A Bonfire Service | Beach Bonfires Along Scenic Highway 30A",
    description:
      "Book a private beach bonfire along Scenic Highway 30A. We handle setup, chairs, s'mores, and cleanup.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Beach bonfire at sunset on 30A",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "30A Bonfire Service | Beach Bonfires Along Scenic Highway 30A",
    description:
      "Book a private beach bonfire along Scenic Highway 30A. We handle setup, chairs, s'mores, and cleanup.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <BookingProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </BookingProvider>
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

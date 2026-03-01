import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { CTAButtons } from "@/components/CTAButtons";
import { FAQSection } from "@/components/FAQSection";
import { AreaCard } from "@/components/AreaCard";
import { JsonLd } from "@/components/JsonLd";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { areas, getAreaBySlug, getAreasBySlug, getAllAreaSlugs } from "@/lib/areas-data";
import { siteConfig } from "@/lib/config";
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/schemas";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return { title: "Not Found" };

  const url = `${siteConfig.url}/areas/${area.slug}`;

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: "/images/og-default.jpg",
          width: 1200,
          height: 630,
          alt: area.headline,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: ["/images/og-default.jpg"],
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const nearbyAreas = getAreasBySlug(area.nearbyAreas);

  return (
    <>
      <JsonLd
        data={generateLocalBusinessSchema({
          areaServed: `${area.name}, Scenic Highway 30A, Florida`,
        })}
      />
      <JsonLd data={generateServiceSchema()} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Areas", url: `${siteConfig.url}/areas` },
          { name: area.name, url: `${siteConfig.url}/areas/${area.slug}` },
        ])}
      />

      <HeroSection
        title={area.headline}
        subtitle={`Professional beach bonfire setup in ${area.name} on Scenic Highway 30A. We bring the fire, chairs, and s'mores — you bring the good times.`}
        backgroundImage="/images/gallery/IMG_8400.JPG"
      >
        <CTAButtons variant="hero" className="justify-center" />
      </HeroSection>

      {/* Description */}
      <section className="py-24 sm:py-32 bg-ash-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal"><h2
            className="text-4xl sm:text-5xl font-bold text-ash-100 mb-8 tracking-tight"
          >
            Beach Bonfires in {area.name}
          </h2>
          <div className="prose prose-invert prose-lg max-w-none prose-p:text-ash-200/70 prose-p:font-light prose-p:leading-relaxed">
            {area.description.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div></AnimateOnScroll>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 sm:py-32 bg-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-right">
            <h2 className="text-4xl sm:text-5xl font-bold text-ash-100 mb-10 tracking-tight">
              Why {area.name}?
            </h2>
          </AnimateOnScroll>
          <ul className="space-y-5">
            {area.highlights.map((highlight, i) => (
              <AnimateOnScroll key={i} animation="fade-left" delay={i * 100}>
                <li className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-fire-500 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-ash-200/70 text-lg font-light">{highlight}</span>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="mt-10">
              <CTAButtons variant="primary" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What's Included — with background image */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <Image
          src="/images/gallery/IMG_8398.JPG"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ash-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ash-950/95 to-ash-950/60" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl font-bold text-ash-100 mb-8 tracking-tight">
              What&apos;s Included
            </h2>
            <p className="text-ash-200/60 text-lg mb-8 font-light">
              Every bonfire package in {area.name} includes the same full-service
              experience we deliver across all of 30A:
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Large beach bonfire with seasoned firewood",
              "Adirondack chairs arranged around the fire",
              "Full s'mores station with roasting sticks",
              "Complete setup and cleanup by our team",
              "All permits and regulations handled",
              "Weather-related rescheduling at no cost",
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                <div className="glass-card rounded-lg p-4 flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-fire-500 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-ash-200/70 font-light">{item}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll animation="fade-up" delay={500}>
            <div className="mt-8">
              <Link
                href="/services"
                className="text-fire-400 hover:text-fire-300 font-semibold uppercase tracking-wider text-sm group inline-flex items-center"
              >
                View All Packages
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-warm">
        <FAQSection
          faqs={area.faqs}
          title={`${area.name} Bonfire FAQs`}
        />
      </div>

      {/* Nearby Areas */}
      {nearbyAreas.length > 0 && (
        <section className="py-24 sm:py-32 bg-ash-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="reveal">
              <h2 className="text-4xl sm:text-5xl font-bold text-ash-100 text-center mb-12 tracking-tight">
                Nearby Locations
              </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {nearbyAreas.map((nearby) => (
                <AreaCard
                  key={nearby.slug}
                  slug={nearby.slug}
                  name={nearby.name}
                  headline={nearby.headline}
                />
              ))}
            </div>
            <AnimateOnScroll animation="fade-up" delay={300}>
              <p className="text-center mt-8">
                <Link
                  href="/"
                  className="text-fire-400 hover:text-fire-300 font-semibold uppercase tracking-wider text-sm"
                >
                  View All 30A Bonfire Locations
                </Link>
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="py-12 bg-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ash-200/40 text-sm uppercase tracking-wider space-x-4">
            <Link href="/services" className="text-fire-400/70 hover:text-fire-400 hover:underline">
              Packages
            </Link>
            <span>&middot;</span>
            <Link href="/gallery" className="text-fire-400/70 hover:text-fire-400 hover:underline">
              Gallery
            </Link>
            <span>&middot;</span>
            <Link href="/about" className="text-fire-400/70 hover:text-fire-400 hover:underline">
              About
            </Link>
            <span>&middot;</span>
            <Link href="/contact" className="text-fire-400/70 hover:text-fire-400 hover:underline">
              Contact
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 sm:py-36 text-white text-center overflow-hidden">
        <Image
          src="/images/gallery/IMG_2687.JPG"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ash-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-fire-900/40 via-transparent to-transparent" />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-10 left-[20%] w-2 h-2 bg-fire-400 rounded-full animate-ember-rise opacity-0" />
          <div className="absolute bottom-10 right-1/4 w-2.5 h-2.5 bg-ember-400 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-10 left-1/3 w-1.5 h-1.5 bg-fire-300 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "4s" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-fire-100 via-ember-300 to-fire-200 bg-clip-text text-transparent">
                Book Your {area.name} Bonfire
              </span>
            </h2>
            <p className="text-ash-100/80 text-xl mb-10 font-light">
              Spots fill up fast during season. Reserve your evening on the beach
              in {area.name} today.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-up" delay={200}>
            <CTAButtons variant="hero" className="justify-center" />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={400}>
            <p className="mt-8 text-ash-200/50 text-sm tracking-wide">
              Questions? Call{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="text-fire-400 hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <Link href="/contact" className="text-fire-400 hover:underline">
                send a message
              </Link>
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

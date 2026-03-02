import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { CTAButtons } from "@/components/CTAButtons";
import { FAQSection } from "@/components/FAQSection";
import { AreaCard } from "@/components/AreaCard";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { JsonLd } from "@/components/JsonLd";
import { AnimateOnScroll, StaggerChildren } from "@/components/AnimateOnScroll";
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
          url: area.unsplashImage,
          width: 1200,
          height: 630,
          alt: `Beach bonfire in ${area.name} on 30A`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: [area.unsplashImage],
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

      {/* Hero */}
      <HeroSection
        title={area.headline}
        subtitle={`Professional beach bonfire setup in ${area.name} on Scenic Highway 30A. We bring the fire, chairs, and s'mores — you bring the good times.`}
        backgroundImage="/images/gallery/IMG_8400.JPG"
      >
        <CTAButtons variant="hero" className="justify-center" />
      </HeroSection>

      {/* Colorful Divider */}
      <div className="h-1 divider-gradient" />

      {/* Quick Info Bar */}
      <section className="py-8 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-stone-600 text-sm font-light">Scenic Highway 30A</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-fire-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
              </svg>
              <span className="text-stone-600 text-sm font-light">Full-Service Bonfire Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <span className="text-stone-600 text-sm font-light">{area.vibe}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sunset-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-stone-600 text-sm font-light">Sunset – Late Evening</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Image + Description */}
      <section className="py-24 sm:py-32 bg-white bg-navy-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <AnimateOnScroll animation="fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200">
                <div className="aspect-[4/3]">
                  <Image
                    src={area.unsplashImage}
                    alt={`${area.name} beach on Scenic Highway 30A, Florida`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ash-950/80 to-transparent p-6">
                  <div className="flex flex-wrap gap-2">
                    {area.bestFor.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-fire-500/20 text-fire-300 border border-fire-500/30 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Description */}
            <div>
              <AnimateOnScroll animation="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-fire-500/50" />
                  <span className="text-fire-600 text-sm uppercase tracking-[0.2em] font-medium">About This Location</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-8 tracking-tight">
                  Beach Bonfires in {area.name}
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="prose prose-lg max-w-none prose-p:text-stone-500 prose-p:font-light prose-p:leading-relaxed">
                  {area.description.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={400}>
                <div className="mt-8">
                  <CTAButtons variant="primary" />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Location - Highlights */}
      <section className="py-24 sm:py-32 bg-warm bg-sunset-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <AnimateOnScroll animation="fade-right">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-navy-500/50" />
                  <span className="text-navy-600 text-sm uppercase tracking-[0.2em] font-medium">Location Highlights</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-10 tracking-tight">
                  Why {area.name}?
                </h2>
              </AnimateOnScroll>
              <ul className="space-y-5">
                {area.highlights.map((highlight, i) => (
                  <AnimateOnScroll key={i} animation="fade-left" delay={i * 100}>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-fire-500/15 to-navy-500/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-fire-500/20">
                        <svg
                          className="w-4 h-4 text-fire-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-stone-600 text-lg font-light">{highlight}</span>
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>
            </div>

            {/* Best Time & Things to Do */}
            <div className="space-y-8">
              <AnimateOnScroll animation="fade-up">
                <div className="glass-card rounded-2xl p-8 border border-ember-400/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-ember-500/15 rounded-full flex items-center justify-center border border-ember-400/20">
                      <svg className="w-5 h-5 text-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wide">Best Time to Visit</h3>
                  </div>
                  <p className="text-stone-500 font-light leading-relaxed">{area.bestTime}</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="glass-card rounded-2xl p-8 border border-navy-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-navy-600/15 rounded-full flex items-center justify-center border border-navy-500/20">
                      <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wide">Things to Do Nearby</h3>
                  </div>
                  <ul className="space-y-3">
                    {area.thingsToDo.map((thing, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-500 font-light">
                        <span className="text-navy-600 mt-1.5 flex-shrink-0">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </span>
                        {thing}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 sm:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-ember-400/50" />
              <span className="text-ember-500 text-sm uppercase tracking-[0.2em] font-medium">Full-Service Experience</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-8 tracking-tight">
              What&apos;s Included
            </h2>
            <p className="text-stone-500 text-lg mb-8 font-light max-w-2xl">
              Every bonfire package in {area.name} includes the same full-service
              experience we deliver across all of 30A:
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Large beach bonfire with seasoned firewood", color: "text-fire-600 bg-fire-600/10 border-fire-500/30" },
              { label: "Adirondack chairs arranged around the fire", color: "text-navy-600 bg-navy-600/10 border-navy-500/30" },
              { label: "Full s'mores station with roasting sticks", color: "text-ember-500 bg-ember-500/10 border-ember-400/30" },
              { label: "Complete setup and cleanup by our team", color: "text-sunset-500 bg-sunset-500/10 border-sunset-400/30" },
              { label: "All permits and regulations handled", color: "text-navy-600 bg-navy-600/10 border-navy-400/30" },
              { label: "Weather-related rescheduling at no cost", color: "text-sand-600 bg-sand-300/20 border-sand-300/30" },
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                <div className="glass-card rounded-lg p-4 flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border ${item.color}`}>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-stone-600 font-light">{item.label}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll animation="fade-up" delay={500}>
            <div className="mt-8">
              <Link
                href="/services"
                className="text-fire-600 hover:text-fire-500 font-semibold uppercase tracking-wider text-sm group inline-flex items-center"
              >
                View All Packages & Pricing
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-24 sm:py-32 bg-white bg-navy-glow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-navy-500/50" />
              <span className="text-navy-600 text-sm uppercase tracking-[0.2em] font-medium">Find Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
              {area.name} on the Map
            </h2>
            <p className="text-stone-500 text-lg mb-10 font-light max-w-2xl">
              Located on Scenic Highway 30A in South Walton, Florida. We&apos;ll send you the exact beach access point and GPS pin before your event.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <GoogleMapEmbed
              lat={area.geo.lat}
              lng={area.geo.lng}
              name={area.name}
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-warm bg-sunset-glow">
        <FAQSection
          faqs={area.faqs}
          title={`${area.name} Bonfire FAQs`}
        />
      </div>

      {/* Nearby Areas */}
      {nearbyAreas.length > 0 && (
        <section className="py-24 sm:py-32 bg-white bg-ember-glow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-fire-500/50" />
                <span className="text-fire-600 text-sm uppercase tracking-[0.2em] font-medium">Explore More</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-fire-500/50" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 text-center mb-12 tracking-tight">
                Nearby Locations
              </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {nearbyAreas.map((nearby) => (
                <AreaCard
                  key={nearby.slug}
                  slug={nearby.slug}
                  name={nearby.name}
                  headline={nearby.headline}
                  unsplashImage={nearby.unsplashImage}
                  vibe={nearby.vibe}
                />
              ))}
            </div>
            <AnimateOnScroll animation="fade-up" delay={300}>
              <p className="text-center mt-8">
                <Link
                  href="/"
                  className="text-fire-600 hover:text-fire-500 font-semibold uppercase tracking-wider text-sm inline-flex items-center group"
                >
                  View All 30A Bonfire Locations
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="py-12 bg-stone-50 border-y border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-400 text-sm uppercase tracking-wider space-x-4">
            <Link href="/services" className="text-fire-600/70 hover:text-fire-600 hover:underline">
              Packages
            </Link>
            <span>&middot;</span>
            <Link href="/gallery" className="text-navy-600/70 hover:text-navy-600 hover:underline">
              Gallery
            </Link>
            <span>&middot;</span>
            <Link href="/about" className="text-ember-500/70 hover:text-ember-500 hover:underline">
              About
            </Link>
            <span>&middot;</span>
            <Link href="/contact" className="text-sunset-500/70 hover:text-sunset-500 hover:underline">
              Contact
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 sm:py-36 text-center overflow-hidden">
        <Image
          src="/images/gallery/IMG_2687.JPG"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-fire-900/20 via-transparent to-white/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-fire-600 via-ember-500 to-fire-500 bg-clip-text text-transparent">
                Book Your {area.name} Bonfire
              </span>
            </h2>
            <p className="text-stone-600 text-xl mb-10 font-light">
              Spots fill up fast during season. Reserve your evening on the beach
              in {area.name} today.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-up" delay={200}>
            <CTAButtons variant="hero" className="justify-center" />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={400}>
            <p className="mt-8 text-stone-500 text-sm tracking-wide">
              Questions? Call{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="text-fire-600 hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <Link href="/contact" className="text-fire-600 hover:underline">
                send a message
              </Link>
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

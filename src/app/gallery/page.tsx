import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { CTAButtons } from "@/components/CTAButtons";
import { FilterableGallery } from "@/components/FilterableGallery";
import { JsonLd } from "@/components/JsonLd";
import { AnimateOnScroll, StaggerChildren } from "@/components/AnimateOnScroll";
import { galleryImages } from "@/lib/gallery-data";
import { siteConfig } from "@/lib/config";
import { generatePageMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema } from "@/lib/schemas";

export const metadata: Metadata = generatePageMetadata({
  title: "Beach Bonfire Gallery",
  description:
    "See photos of our beach bonfire setups along 30A. Sunset bonfires, family gatherings, proposals, group events, and s'mores on the beach.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "30A Bonfire Service Photo Gallery",
          description:
            "Photos of beach bonfire setups along Scenic Highway 30A including sunset bonfires, family gatherings, proposals, and group events.",
          url: `${siteConfig.url}/gallery`,
          image: galleryImages.map((img) => `${siteConfig.url}${img.src}`),
        }}
      />

      <HeroSection
        title="Gallery"
        subtitle="See what a beach bonfire on 30A looks like. Sunsets, s'mores, and smiles."
        backgroundImage="/images/gallery/IMG_2690.JPG"
      />

      {/* Filterable Gallery with Lightbox */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <FilterableGallery images={galleryImages} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-24 sm:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 text-center mb-16 tracking-tight">
              Perfect for Every Occasion
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StaggerChildren animation="slide-up" staggerMs={120}>
              {[
                {
                  title: "Family Vacations",
                  desc: "Kids roasting marshmallows, parents relaxing in Adirondack chairs, and the Gulf as your backdrop.",
                },
                {
                  title: "Romantic Evenings",
                  desc: "A private bonfire for two on the beach at sunset. Popular for anniversaries and date nights along 30A.",
                },
                {
                  title: "Proposals",
                  desc: "We've helped create dozens of 'she said yes' moments on 30A beaches. Let us plan the perfect proposal.",
                },
                {
                  title: "Birthday Celebrations",
                  desc: "Skip the restaurant. Celebrate your birthday around a beach bonfire with your closest friends and family.",
                },
                {
                  title: "Group Events",
                  desc: "Corporate retreats, family reunions, bachelor and bachelorette parties — we accommodate groups of all sizes.",
                },
                {
                  title: "Just Because",
                  desc: "You don't need a reason. Sometimes the best bonfires are the ones where you just wanted a fire on the beach.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-8 hover:border-fire-500/40 transition-all duration-500 group"
                >
                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-fire-600 transition-colors uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 sm:py-36 text-center overflow-hidden">
        <Image
          src="/images/gallery/IMG_8398.JPG"
          alt=""
          fill
          className="object-cover animate-[ken-burns_25s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-fire-900/20 via-transparent to-white/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-fire-600 via-ember-500 to-fire-500 bg-clip-text text-transparent">
                Want This for Your Night on 30A?
              </span>
            </h2>
            <p className="text-stone-600 text-xl mb-10 font-light">
              Book your beach bonfire and create your own memories by the fire.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-up" delay={200}>
            <CTAButtons variant="hero" className="justify-center" />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { CTAButtons } from "@/components/CTAButtons";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { AreaCard } from "@/components/AreaCard";
import { JsonLd } from "@/components/JsonLd";
import { AnimateOnScroll, StaggerChildren } from "@/components/AnimateOnScroll";
import { areas } from "@/lib/areas-data";
import { globalFaqs } from "@/lib/faqs-data";
import { testimonials } from "@/lib/testimonials-data";
import { siteConfig } from "@/lib/config";
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateAggregateRatingSchema,
} from "@/lib/schemas";

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateServiceSchema()} />
      <JsonLd data={generateAggregateRatingSchema()} />

      {/* Hero — Full Viewport */}
      <HeroSection
        title="Beach Bonfires on 30A"
        subtitle="We set up a private beach bonfire with Adirondack chairs, s'mores, and everything you need for an unforgettable evening on the Emerald Coast."
        backgroundImage="/images/gallery/IMG_8403.JPG"
        fullHeight
      >
        <CTAButtons variant="hero" className="justify-center" />
      </HeroSection>

      {/* How It Works */}
      <section className="py-24 sm:py-32 bg-ash-950 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ash-100 text-center mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-ash-200/50 text-center max-w-2xl mx-auto mb-16 text-lg font-light tracking-wide">
              Booking a beach bonfire on 30A takes less than five minutes.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StaggerChildren animation="slide-up" staggerMs={200}>
              {[
                {
                  step: "01",
                  title: "Pick Your Date",
                  desc: "Choose an evening and one of 15 beach communities along Scenic Highway 30A. We serve everything from Inlet Beach to Sandestin.",
                },
                {
                  step: "02",
                  title: "We Set Up",
                  desc: "Our crew arrives early to build your bonfire, arrange Adirondack chairs, and lay out a full s'mores station.",
                },
                {
                  step: "03",
                  title: "Show Up & Enjoy",
                  desc: "Walk down to the beach, settle into your chair, and watch the sunset. We come back to handle cleanup.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center group">
                  <div className="text-6xl sm:text-7xl font-bold text-fire-500/20 mb-4 tracking-tighter group-hover:text-fire-500/40 transition-colors duration-500">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-ash-100 mb-3 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-ash-200/50 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
          <AnimateOnScroll animation="fade-up" delay={500}>
            <div className="text-center mt-14">
              <CTAButtons variant="primary" className="justify-center" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Full-Bleed Photo Break */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/gallery/IMG_2690.JPG"
          alt="Full beach bonfire event setup along 30A coastline"
          fill
          className="object-cover animate-[ken-burns_30s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ash-950 via-transparent to-ash-950" />
        <div className="absolute inset-0 bg-ash-950/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white text-fire-shadow uppercase tracking-wide px-4">
              The 30A Experience
            </h2>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="py-24 sm:py-32 bg-ash-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/gallery/IMG_8398.JPG", alt: "Beach bonfire chairs setup with fire pit on 30A" },
              { src: "/images/gallery/IMG_8410.JPG", alt: "Marshmallow roasting over bonfire on the beach" },
              { src: "/images/gallery/IMG_2683.JPG", alt: "Elegant beach event setup with bonfire and decorations" },
              { src: "/images/gallery/IMG_8414.JPG", alt: "Beach chairs lined up along the shore on 30A" },
            ].map((photo, i) => (
              <AnimateOnScroll key={i} animation="zoom-in" delay={i * 150}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-115"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ash-950/60 via-transparent to-transparent group-hover:from-fire-900/40 transition-all duration-500" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll animation="fade-up" delay={600}>
            <div className="text-center mt-10">
              <a
                href="/gallery"
                className="inline-flex items-center text-fire-400 hover:text-fire-300 font-semibold transition-colors uppercase tracking-[0.15em] text-sm group"
              >
                View Full Gallery
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What's Included — Full-Bleed Image Background */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <Image
          src="/images/gallery/IMG_8403.JPG"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ash-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ash-950/95 via-ash-950/70 to-ash-950/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-right">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ash-100 mb-16 tracking-tight">
              What&apos;s Included
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <StaggerChildren animation="fade-right" staggerMs={150}>
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.545 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                    </svg>
                  ),
                  title: "Beach Bonfire",
                  desc: "A large, safely built bonfire on the sand using seasoned firewood. We handle permits and regulations.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  ),
                  title: "Adirondack Chairs",
                  desc: "Comfortable chairs arranged in a circle around the fire — up to 20 guests in our standard package.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1012 10.125 2.625 2.625 0 0012 4.875z" />
                    </svg>
                  ),
                  title: "S'mores Station",
                  desc: "Marshmallows, chocolate, graham crackers, and roasting sticks. Ready to go.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Full Setup & Cleanup",
                  desc: "We arrive early to set up and return after you leave to clean everything up. Leave no trace.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-6 flex gap-5">
                  <div className="w-14 h-14 bg-fire-600/20 rounded-lg flex items-center justify-center text-fire-400 flex-shrink-0 border border-fire-500/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ash-100 mb-1 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-ash-200/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Where We Serve */}
      <section className="py-24 sm:py-32 bg-ash-950 bg-ember-glow section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ash-100 text-center mb-4 tracking-tight">
              Where We Serve
            </h2>
            <p className="text-ash-200/50 text-center max-w-2xl mx-auto mb-16 text-lg font-light">
              Beach bonfire service in every community along Scenic Highway 30A.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StaggerChildren animation="fade-up" staggerMs={60}>
              {areas.map((area) => (
                <AreaCard
                  key={area.slug}
                  slug={area.slug}
                  name={area.name}
                  headline={area.headline}
                />
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Full-Bleed Photo Break — S'mores Close-Up */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/gallery/IMG_8410.JPG"
          alt="Marshmallow roasting over bonfire coals"
          fill
          className="object-cover animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ash-950 via-transparent to-ash-950" />
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ash-100 text-center mb-4 tracking-tight">
              What Our Guests Say
            </h2>
            <p className="text-ash-200/50 text-center max-w-xl mx-auto mb-16 text-lg font-light">
              Hundreds of families, couples, and groups have trusted us with their beach bonfire nights.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={200}>
            <TestimonialCarousel testimonials={testimonials} />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="text-center mt-14">
              <CTAButtons variant="primary" className="justify-center" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <AnimateOnScroll animation="fade-up">
        <div className="bg-ash-950">
          <FAQSection faqs={globalFaqs} />
        </div>
      </AnimateOnScroll>

      {/* Final CTA — Full-Bleed */}
      <section className="relative py-32 sm:py-40 text-white text-center overflow-hidden">
        <Image
          src="/images/gallery/IMG_2687.JPG"
          alt=""
          fill
          className="object-cover animate-[ken-burns_25s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ash-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-fire-900/40 via-transparent to-ash-950/80" />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-10 left-[20%] w-2 h-2 bg-fire-400 rounded-full animate-ember-rise opacity-0" />
          <div className="absolute bottom-10 right-1/4 w-2.5 h-2.5 bg-ember-400 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-10 left-1/3 w-1.5 h-1.5 bg-fire-300 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "4s" }} />
          <div className="absolute bottom-10 right-1/3 w-2 h-2 bg-ember-500 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "6s" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-fire-100 via-ember-300 to-fire-200 bg-clip-text text-transparent">
                Ready for a Night on the Beach?
              </span>
            </h2>
            <p className="text-ash-100/80 text-xl sm:text-2xl mb-10 font-light max-w-2xl mx-auto">
              Book your 30A beach bonfire today. We&apos;ll bring the fire, the chairs, and the s&apos;mores.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-up" delay={300}>
            <CTAButtons variant="hero" className="justify-center" />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={500}>
            <p className="mt-8 text-ash-200/50 text-sm tracking-wide">
              Questions? Call{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="text-fire-400 hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <a href="/contact" className="text-fire-400 hover:underline">
                send us a message
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

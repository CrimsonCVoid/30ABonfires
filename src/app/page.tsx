import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { CTAButtons } from "@/components/CTAButtons";
import { FAQSection } from "@/components/FAQSection";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ServiceCard } from "@/components/ServiceCard";
import { AreaCard } from "@/components/AreaCard";
import { JsonLd } from "@/components/JsonLd";
import { AnimateOnScroll, StaggerChildren } from "@/components/AnimateOnScroll";
import { areas } from "@/lib/areas-data";
import { globalFaqs } from "@/lib/faqs-data";
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
        backgroundVideo="/videos/hero-1.mp4"
        fullHeight
      >
        <CTAButtons variant="hero" className="justify-center" />
        <a
          href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white mt-6 text-lg font-light tracking-wide transition-colors"
          aria-label={`Call us at ${siteConfig.phone}`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {siteConfig.phone}
        </a>
      </HeroSection>

      {/* Google Reviews — First thing after scroll */}
      <section className="py-24 sm:py-32 bg-warm bg-sunset-glow section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-ember-400/50" />
              <span className="text-ember-500 text-sm uppercase tracking-[0.2em] font-medium">Google Reviews</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-ember-400/50" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 text-center mb-4 tracking-tight">
              What Our Guests Say
            </h2>
            <p className="text-stone-500 text-center max-w-xl mx-auto mb-16 text-lg font-light">
              Real reviews from families, couples, and groups who&apos;ve experienced a beach bonfire on 30A.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={200}>
            <GoogleReviews />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-24 sm:py-32 bg-white bg-navy-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-fire-500/50" />
              <span className="text-fire-600 text-sm uppercase tracking-[0.2em] font-medium">Packages & Pricing</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-fire-500/50" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 text-center mb-4 tracking-tight">
              Our Bonfire Packages
            </h2>
            <p className="text-stone-500 text-center max-w-2xl mx-auto mb-4 text-lg font-light">
              Every package includes s&apos;mores, tiki torches, a table with tablecloth, Bluetooth speaker, cornhole, and a dedicated bonfire attendant.
            </p>
            <p className="text-stone-400 text-center text-sm mb-16">
              All packages include a $157 non-refundable permit fee. Call <a href="tel:8507061325" className="text-fire-600 hover:underline">(850) 706-1325</a> for groups larger than 30.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnScroll animation="slide-up" delay={0}><ServiceCard
              name="Up to 6 People"
              description="Perfect for families and couples looking for a relaxed evening on the beach."
              price="$429"
              features={[
                "2-hour fire",
                "Up to 6 chairs",
                "Tiki torches",
                "Table with tablecloth",
                "Bluetooth speaker",
                "Cornhole",
                "S'mores included",
                "Bonfire attendant",
              ]}
            /></AnimateOnScroll>
            <AnimateOnScroll animation="slide-up" delay={150}><ServiceCard
              name="7 to 12 People"
              description="Great for friend groups and family gatherings around the fire."
              price="$529"
              highlighted
              features={[
                "2-hour fire",
                "Up to 12 chairs",
                "Tiki torches",
                "Table with tablecloth",
                "Bluetooth speaker",
                "Cornhole",
                "S'mores included",
                "Bonfire attendant",
              ]}
            /></AnimateOnScroll>
            <AnimateOnScroll animation="slide-up" delay={300}><ServiceCard
              name="13 to 20 People"
              description="Ideal for larger groups, celebrations, and special occasions on 30A."
              price="$729"
              features={[
                "3-hour fire",
                "Up to 20 chairs",
                "Tiki torches",
                "Table with tablecloth",
                "Bluetooth speaker",
                "Cornhole",
                "S'mores included",
                "Bonfire attendant",
              ]}
            /></AnimateOnScroll>
            <AnimateOnScroll animation="slide-up" delay={450}><ServiceCard
              name="21 to 29 People"
              description="For big groups, reunions, corporate events, and large celebrations."
              price="$829"
              features={[
                "3-hour fire",
                "Up to 29 chairs",
                "Tiki torches",
                "Table with tablecloth",
                "Bluetooth speaker",
                "Cornhole",
                "S'mores included",
                "Bonfire attendant",
              ]}
            /></AnimateOnScroll>
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
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-white" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-stone-900 uppercase tracking-wide px-4 drop-shadow-[0_2px_12px_rgba(255,255,255,0.8)]">
              The 30A Experience
            </h2>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 sm:py-32 bg-white bg-navy-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-navy-500/50" />
              <span className="text-navy-600 text-sm uppercase tracking-[0.2em] font-medium">Simple as 1-2-3</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-navy-500/50" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 text-center mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-stone-500 text-center max-w-2xl mx-auto mb-16 text-lg font-light tracking-wide">
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
                  color: "text-fire-500/30 group-hover:text-fire-500/60",
                },
                {
                  step: "02",
                  title: "We Set Up",
                  desc: "Our crew arrives early to build your bonfire, arrange Adirondack chairs, and lay out a full s'mores station.",
                  color: "text-navy-500/30 group-hover:text-navy-500/60",
                },
                {
                  step: "03",
                  title: "Show Up & Enjoy",
                  desc: "Walk down to the beach, settle into your chair, and watch the sunset. We come back to handle cleanup.",
                  color: "text-ember-400/30 group-hover:text-ember-400/60",
                },
              ].map((item) => (
                <div key={item.step} className="text-center group">
                  <div className={`text-6xl sm:text-7xl font-bold ${item.color} mb-4 tracking-tighter transition-colors duration-500`}>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 sm:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-right">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-ember-400/50" />
              <span className="text-ember-500 text-sm uppercase tracking-[0.2em] font-medium">Everything You Need</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-ember-400/50" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 text-center mb-16 tracking-tight">
              What&apos;s Included
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  accent: "bg-fire-600/10 border-fire-500/30 text-fire-600",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  ),
                  title: "Adirondack Chairs",
                  desc: "Comfortable chairs arranged in a circle around the fire — up to 20 guests in our standard package.",
                  accent: "bg-navy-600/10 border-navy-500/30 text-navy-600",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1012 10.125 2.625 2.625 0 0012 4.875z" />
                    </svg>
                  ),
                  title: "S'mores Station",
                  desc: "Marshmallows, chocolate, graham crackers, and roasting sticks. Ready to go.",
                  accent: "bg-ember-500/10 border-ember-400/30 text-ember-500",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Full Setup & Cleanup",
                  desc: "We arrive early to set up and return after you leave to clean everything up. Leave no trace.",
                  accent: "bg-sunset-500/10 border-sunset-400/30 text-sunset-500",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-6 flex gap-5 hover:border-fire-500/30 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 border ${item.accent}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-1 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="py-24 sm:py-32 bg-stone-50 bg-sunset-glow overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-sunset-400/50" />
              <span className="text-sunset-500 text-sm uppercase tracking-[0.2em] font-medium">Captured Moments</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-sunset-400/50" />
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/gallery/IMG_8398.JPG", alt: "Beach bonfire chairs setup with fire pit on 30A" },
              { src: "/images/gallery/IMG_8410.JPG", alt: "Marshmallow roasting over bonfire on the beach" },
              { src: "/images/gallery/IMG_2683.JPG", alt: "Elegant beach event setup with bonfire and decorations" },
              { src: "/images/gallery/IMG_8414.JPG", alt: "Beach chairs lined up along the shore on 30A" },
            ].map((photo, i) => (
              <AnimateOnScroll key={i} animation="zoom-in" delay={i * 150}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer shadow-md">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-115"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent group-hover:from-fire-600/20 transition-all duration-500" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll animation="fade-up" delay={600}>
            <div className="text-center mt-10">
              <a
                href="/gallery"
                className="inline-flex items-center text-fire-600 hover:text-fire-500 font-semibold transition-colors uppercase tracking-[0.15em] text-sm group"
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

      {/* Where We Serve */}
      <section className="py-24 sm:py-32 bg-white bg-ember-glow section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-fire-500/50" />
              <span className="text-fire-600 text-sm uppercase tracking-[0.2em] font-medium">15 Beach Communities</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-fire-500/50" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 text-center mb-4 tracking-tight">
              Where We Serve
            </h2>
            <p className="text-stone-500 text-center max-w-2xl mx-auto mb-16 text-lg font-light">
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
                  unsplashImage={area.unsplashImage}
                  vibe={area.vibe}
                />
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <AnimateOnScroll animation="fade-up">
        <div className="bg-warm">
          <FAQSection faqs={globalFaqs} />
        </div>
      </AnimateOnScroll>

      {/* Final CTA — Full-Bleed */}
      <section className="relative py-32 sm:py-40 text-center overflow-hidden">
        <Image
          src="/images/gallery/IMG_2687.JPG"
          alt=""
          fill
          className="object-cover animate-[ken-burns_25s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-fire-900/30 via-transparent to-white/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-fire-100 via-ember-300 to-sunset-300 bg-clip-text text-transparent">
                Ready for a Night on the Beach?
              </span>
            </h2>
            <p className="text-stone-600 text-xl sm:text-2xl mb-10 font-light max-w-2xl mx-auto">
              Book your 30A beach bonfire today. We&apos;ll bring the fire, the chairs, and the s&apos;mores.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-up" delay={300}>
            <CTAButtons variant="hero" className="justify-center" />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={500}>
            <p className="mt-8 text-stone-500 text-sm tracking-wide">
              Questions? Call{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="text-fire-600 hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <a href="/contact" className="text-fire-600 hover:underline">
                send us a message
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

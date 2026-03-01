import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { CTAButtons } from "@/components/CTAButtons";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { servicesFaqs } from "@/lib/faqs-data";
import { siteConfig } from "@/lib/config";
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateServiceSchema,
  generateLocalBusinessSchema,
} from "@/lib/schemas";

export const metadata: Metadata = generatePageMetadata({
  title: "Beach Bonfire Packages & Pricing",
  description:
    "View our 30A beach bonfire packages. Every package includes a bonfire, Adirondack chairs, s'mores, and full setup and cleanup. Serving all 30A communities.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={generateServiceSchema()} />
      <JsonLd data={generateLocalBusinessSchema()} />

      <HeroSection
        title="Our Bonfire Packages"
        subtitle="Every package includes a beach bonfire, Adirondack chairs, a full s'mores station, and complete setup and cleanup."
        backgroundImage="/images/gallery/IMG_8397.JPG"
      />

      {/* Packages */}
      <section className="py-24 sm:py-32 bg-ash-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="slide-up" delay={0}><ServiceCard
              name="Classic Bonfire"
              description="Our signature package. Perfect for families, couples, and small groups looking for a relaxed evening on the beach."
              price="Contact for Pricing"
              features={[
                "Beach bonfire with seasoned firewood",
                "Up to 10 Adirondack chairs",
                "Full s'mores station",
                "Setup and cleanup included",
                "2–3 hour burn time",
              ]}
            /></AnimateOnScroll>
            <AnimateOnScroll animation="slide-up" delay={200}><ServiceCard
              name="Premium Bonfire"
              description="Everything in the Classic, plus extra seating and a longer burn for larger groups and special occasions."
              price="Contact for Pricing"
              highlighted
              features={[
                "Everything in Classic, plus:",
                "Up to 20 Adirondack chairs",
                "Extended burn time (3+ hours)",
                "Bluetooth speaker provided",
                "Blankets for cooler evenings",
                "Priority sunset timing",
              ]}
            /></AnimateOnScroll>
            <AnimateOnScroll animation="slide-up" delay={400}><ServiceCard
              name="Event Bonfire"
              description="For weddings, corporate events, reunions, and large celebrations. Fully customizable to your needs."
              price="Custom Quote"
              features={[
                "Everything in Premium, plus:",
                "20+ guests accommodated",
                "Multiple fire pits available",
                "Custom seating arrangements",
                "Coordination with event planners",
                "Personalized decorations available",
              ]}
            /></AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Full-Bleed Photo Break */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/gallery/IMG_2688.JPG"
          alt="Candlelit table with flowers overlooking the Gulf at twilight"
          fill
          className="object-cover animate-[ken-burns_25s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ash-950 via-transparent to-ash-950" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white text-fire-shadow uppercase tracking-wide px-4">
              Every Detail Handled
            </h2>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What's Included Detail */}
      <section className="py-24 sm:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal"><h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ash-100 text-center mb-4 tracking-tight"
          >
            What You Get
          </h2>
          <p className="text-ash-200/50 text-center max-w-2xl mx-auto mb-16 text-lg font-light">
            No hidden fees, no surprises. Here&apos;s exactly what our team delivers.
          </p></AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Professional Fire Setup",
                desc: "We build a safe, contained bonfire using seasoned firewood. Our team follows all local beach fire regulations and manages any required permits along 30A.",
              },
              {
                title: "Comfortable Seating",
                desc: "Adirondack chairs arranged in a circle around the fire. No sitting on sandy towels — real chairs that you can lean back in and relax.",
              },
              {
                title: "Complete S'mores Station",
                desc: "Marshmallows, Hershey's chocolate, honey graham crackers, and roasting sticks for every guest.",
              },
              {
                title: "Full Cleanup Service",
                desc: "After your evening, our team returns to fully extinguish the fire, remove all equipment, and leave the beach exactly how we found it.",
              },
              {
                title: "Flexible Locations",
                desc: "We serve every beach community along 30A — from Inlet Beach to Sandestin. Choose the location closest to where you're staying.",
              },
              {
                title: "Weather Flexibility",
                desc: "If weather forces a cancellation, we'll work with you to reschedule at no additional cost. We monitor conditions proactively.",
              },
            ].map((item) => (
              <AnimateOnScroll key={item.title} animation="fade-up">
                <div className="glass-card rounded-xl p-6 flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-fire-600/20 text-fire-400 rounded-full flex items-center justify-center mt-1 border border-fire-500/20">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ash-100 mb-1 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-ash-200/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section className="py-24 sm:py-32 bg-ash-950 bg-ember-glow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ash-100 mb-4 tracking-tight">
              Ready to Book?
            </h2>
            <p className="text-ash-200/50 text-lg mb-10 font-light">
              Select your preferred date and package. Availability is limited during peak season.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-up" delay={200}>
            <CTAButtons variant="hero" className="justify-center" />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={400}>
            <p className="mt-8 text-ash-200/40 text-sm">
              Need a custom quote for a large event?{" "}
              <a href="/contact" className="text-fire-400 hover:underline font-medium">
                Contact us directly
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-warm">
        <FAQSection faqs={servicesFaqs} title="Service FAQs" />
      </div>

      {/* CTA */}
      <section className="relative py-28 sm:py-36 text-white text-center overflow-hidden">
        <Image
          src="/images/gallery/IMG_8401.JPG"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ash-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-fire-900/30 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-fire-100 via-ember-300 to-fire-200 bg-clip-text text-transparent">
                Don&apos;t Just Watch the Sunset
              </span>
            </h2>
            <p className="text-ash-100/80 text-xl mb-10 font-light">
              Sit around a fire. A 30A beach bonfire is the highlight of any vacation.
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

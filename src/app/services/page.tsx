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
        subtitle="Every package includes s'mores, tiki torches, a table with tablecloth, Bluetooth speaker, cornhole, and a dedicated bonfire attendant."
        backgroundImage="/images/gallery/IMG_8397.JPG"
      />

      {/* Packages */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <p className="text-stone-400 text-center text-sm mb-12">
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
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-white" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-stone-900 uppercase tracking-wide px-4 drop-shadow-[0_2px_12px_rgba(255,255,255,0.8)]">
              Every Detail Handled
            </h2>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What's Included Detail */}
      <section className="py-24 sm:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal"><h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 text-center mb-4 tracking-tight"
          >
            What You Get
          </h2>
          <p className="text-stone-500 text-center max-w-2xl mx-auto mb-16 text-lg font-light">
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
                  <div className="flex-shrink-0 w-10 h-10 bg-fire-600/15 text-fire-500 rounded-full flex items-center justify-center mt-1 border border-fire-500/20">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-1 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section className="py-24 sm:py-32 bg-white bg-ember-glow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 tracking-tight">
              Ready to Book?
            </h2>
            <p className="text-stone-500 text-lg mb-10 font-light">
              Select your preferred date and package. Availability is limited during peak season.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-up" delay={200}>
            <CTAButtons variant="hero" className="justify-center" />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={400}>
            <p className="mt-8 text-stone-400 text-sm">
              Need a custom quote for a large event?{" "}
              <a href="/contact" className="text-fire-600 hover:underline font-medium">
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
      <section className="relative py-28 sm:py-36 text-center overflow-hidden">
        <Image
          src="/images/gallery/IMG_8401.JPG"
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
                Don&apos;t Just Watch the Sunset
              </span>
            </h2>
            <p className="text-stone-600 text-xl mb-10 font-light">
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

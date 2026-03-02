import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { CTAButtons } from "@/components/CTAButtons";
import { JsonLd } from "@/components/JsonLd";
import { AnimateOnScroll, StaggerChildren } from "@/components/AnimateOnScroll";
import { siteConfig } from "@/lib/config";
import { generatePageMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema } from "@/lib/schemas";

export const metadata: Metadata = generatePageMetadata({
  title: "About 30A Bonfire Service",
  description:
    "Learn about 30A Bonfire Service, a division of Destin Bonfire Company. We've been setting up beach bonfires along Scenic Highway 30A for families, couples, and groups.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          legalName: siteConfig.legalName,
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
          sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
        }}
      />

      <HeroSection
        title="About Us"
        subtitle="A division of Destin Bonfire Company, built on a simple idea: beach bonfires should be effortless for you and unforgettable for everyone."
        backgroundImage="/images/gallery/IMG_8414.JPG"
      />

      {/* Our Story */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal"><h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-8 tracking-tight"
          >
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none prose-p:text-stone-500 prose-p:font-light prose-p:leading-relaxed">
            <p>
              30A Bonfire Service started because we believed one of the best things about
              the Emerald Coast — sitting around a fire on the beach — shouldn&apos;t require
              hauling wood, worrying about permits, or spending your vacation cleaning up
              ash.
            </p>
            <p>
              We&apos;re a service division of <strong className="text-fire-600 font-semibold">Destin Bonfire Company</strong>,
              which has been providing beach bonfire experiences along the Northwest Florida
              coast. As demand grew from vacationers and locals along Scenic Highway 30A,
              we created a dedicated service focused exclusively on the 30A corridor.
            </p>
            <p>
              Today we set up bonfires in every community along 30A — from Inlet Beach on the
              east end to Sandestin on the west. Whether it&apos;s a Tuesday night family
              marshmallow roast in Seaside or a Saturday proposal setup in Rosemary Beach,
              our team handles everything so you can focus on what matters: the people around
              the fire.
            </p>
          </div></AnimateOnScroll>
        </div>
      </section>

      {/* Full-Bleed Photo Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/gallery/IMG_2683.JPG"
          alt="Elegant beach event setup with pink decorations, flowers, and fire pit"
          fill
          className="object-cover animate-[ken-burns_25s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white text-fire-shadow uppercase tracking-wide px-4">
              Memories by the Fire
            </h2>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 sm:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 text-center mb-16 tracking-tight">
              What We Believe
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerChildren animation="slide-up" staggerMs={200}>{[
              {
                title: "Effortless for You",
                desc: "You shouldn't have to Google 'beach fire regulations South Walton' on your vacation. We handle the logistics — permits, setup, firewood, cleanup — so the only thing on your to-do list is showing up.",
              },
              {
                title: "Leave No Trace",
                desc: "30A's beaches are beautiful because people take care of them. We follow strict leave-no-trace practices: every fire is fully extinguished, every piece of equipment is removed, and the sand is left clean.",
              },
              {
                title: "Make It Memorable",
                desc: "A bonfire on the beach is already special. We make it better with comfortable seating, a proper s'mores station, and attention to the details that turn a good night into a great one.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-8 hover:border-fire-500/40 transition-all duration-500"
              >
                <h3 className="text-2xl font-bold text-stone-900 mb-4 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-stone-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}</StaggerChildren>
          </div>
        </div>
      </section>

      {/* Where We Serve */}
      <section className="py-24 sm:py-32 bg-white bg-ember-glow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-right">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-8 tracking-tight">
              Where We Serve
            </h2>
            <p className="text-stone-500 text-lg mb-8 font-light">
              Our service area covers the entire Scenic Highway 30A corridor in South Walton
              County, Florida. We set up bonfires in all 15 beach communities:
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Inlet Beach",
              "Rosemary Beach",
              "Alys Beach",
              "Seacrest Beach",
              "Watersound",
              "Seagrove Beach",
              "Seaside",
              "WaterColor",
              "Grayton Beach",
              "Blue Mountain Beach",
              "Santa Rosa Beach",
              "Gulf Place",
              "Dune Allen Beach",
              "Miramar Beach",
              "Sandestin",
            ].map((town) => (
              <a
                key={town}
                href={`/areas/${town.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-fire-600 hover:text-fire-500 hover:underline font-medium tracking-wide text-sm uppercase"
              >
                {town}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Rain Policy */}
      <section className="py-24 sm:py-32 bg-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-8 tracking-tight">
              What If It Rains?
            </h2>
            <p className="text-stone-500 text-lg mb-6 font-light">
              Gulf Coast weather can change quickly, and we get it — you don&apos;t want to
              stress about a forecast.
            </p>
          </AnimateOnScroll>
          <ul className="space-y-5 text-stone-600">
            {[
              { num: "01", bold: "We monitor the weather", text: "leading up to your bonfire and will contact you if conditions look unfavorable." },
              { num: "02", bold: "Free rescheduling", text: "for any weather-related cancellation. No fees, no hassle." },
              { num: "03", bold: "If rain starts during your bonfire,", text: "we'll work with you to either wait it out (Gulf storms often pass quickly) or reschedule." },
            ].map((item) => (
              <AnimateOnScroll key={item.num} animation="fade-left">
                <li className="flex items-start gap-5">
                  <span className="text-3xl font-bold text-fire-500/30 tracking-tighter">{item.num}</span>
                  <span className="font-light">
                    <strong className="text-stone-900 font-semibold">{item.bold}</strong> {item.text}
                  </span>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
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
                Let Us Build Your Bonfire
              </span>
            </h2>
            <p className="text-stone-600 text-xl mb-10 font-light">
              Whether it&apos;s a quiet evening for two or a celebration for twenty.
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

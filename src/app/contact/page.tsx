import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { CTAButtons } from "@/components/CTAButtons";
import { FAQSection } from "@/components/FAQSection";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { contactFaqs } from "@/lib/faqs-data";
import { siteConfig } from "@/lib/config";
import { generatePageMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema } from "@/lib/schemas";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | Book a Beach Bonfire",
  description:
    "Contact 30A Bonfire Service to book a beach bonfire or ask a question. Call, email, or use our contact form. Serving all 30A communities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          ...generateLocalBusinessSchema(),
          contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            email: siteConfig.email,
            contactType: "customer service",
            availableLanguage: "English",
          },
        }}
      />

      <HeroSection
        title="Contact Us"
        subtitle="Have a question or want to plan your bonfire? Reach out and we'll get back to you quickly."
        backgroundImage="/images/gallery/IMG_2685.JPG"
      />

      {/* Contact Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimateOnScroll animation="fade-right"><div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-8 uppercase tracking-wide">
                Send Us a Message
              </h2>
              <ContactForm sourcePage="contact" />
            </div></AnimateOnScroll>

            {/* Contact Info + Book Now */}
            <AnimateOnScroll animation="fade-left" delay={200}><div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-8 uppercase tracking-wide">
                Get In Touch
              </h2>

              <div className="space-y-8 mb-10">
                <div>
                  <h3 className="font-bold mb-1 uppercase tracking-wider text-sm text-fire-600">Phone</h3>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className="text-stone-600 hover:text-fire-600 transition-colors text-2xl font-light"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div>
                  <h3 className="font-bold mb-1 uppercase tracking-wider text-sm text-fire-600">Email</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-stone-600 hover:text-fire-600 transition-colors text-lg font-light"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-bold mb-1 uppercase tracking-wider text-sm text-fire-600">Address</h3>
                  <address className="not-italic text-stone-500 font-light">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.zip}
                  </address>
                </div>
                <div>
                  <h3 className="font-bold mb-1 uppercase tracking-wider text-sm text-fire-600">Hours</h3>
                  <p className="text-stone-500 font-light">{siteConfig.hours}</p>
                </div>
                <div>
                  <h3 className="font-bold mb-1 uppercase tracking-wider text-sm text-fire-600">
                    Service Area
                  </h3>
                  <p className="text-stone-500 font-light">{siteConfig.serviceArea}</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-4 uppercase tracking-wide">
                  Ready to Book Now?
                </h3>
                <p className="text-stone-500 mb-6 font-light">
                  Skip the form — book your beach bonfire directly through our
                  online booking system.
                </p>
                <CTAButtons variant="primary" />
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-bold text-fire-600 mb-4 uppercase tracking-[0.2em]">
                  Follow Us
                </h3>
                <div className="flex gap-6">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-500 hover:text-fire-600 font-medium transition-colors text-sm uppercase tracking-wider"
                    aria-label="Follow us on Instagram"
                  >
                    Instagram
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-500 hover:text-fire-600 font-medium transition-colors text-sm uppercase tracking-wider"
                    aria-label="Follow us on Facebook"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div></AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-warm">
        <FAQSection faqs={contactFaqs} title="Booking & Contact FAQs" />
      </div>

      {/* CTA */}
      <section className="relative py-28 sm:py-36 text-center overflow-hidden">
        <Image
          src="/images/gallery/IMG_2690.JPG"
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
                Your Beach Bonfire Awaits
              </span>
            </h2>
            <p className="text-stone-600 text-xl mb-10 font-light">
              Book online for the fastest response, or use the form above and
              we&apos;ll get back to you within a few hours.
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

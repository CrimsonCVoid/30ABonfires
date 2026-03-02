"use client";

import { useState, useEffect, useCallback } from "react";

type Testimonial = {
  name: string;
  rating: number;
  text: string;
  location?: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
  autoPlayMs?: number;
};

export function TestimonialCarousel({
  testimonials,
  autoPlayMs = 5000,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, testimonials.length, goTo]);

  useEffect(() => {
    if (autoPlayMs <= 0) return;
    const timer = setInterval(next, autoPlayMs);
    return () => clearInterval(timer);
  }, [next, autoPlayMs]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(current + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="relative">
      {/* Desktop: show 3 cards */}
      <div
        className={`hidden md:grid md:grid-cols-3 gap-6 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {visibleTestimonials.map((t, i) => (
          <TestimonialSlide key={`${current}-${i}`} testimonial={t} />
        ))}
      </div>

      {/* Mobile: show 1 card */}
      <div
        className={`md:hidden transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <TestimonialSlide testimonial={testimonials[current]} />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "bg-fire-500 w-8"
                : "bg-stone-300 hover:bg-fire-400 w-2"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() =>
          goTo((current - 1 + testimonials.length) % testimonials.length)
        }
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden lg:flex items-center justify-center w-12 h-12 rounded-full glass-card text-stone-400 hover:text-fire-600 hover:border-fire-500/50 hover:shadow-lg hover:shadow-fire-600/10 transition-all duration-300"
        aria-label="Previous testimonials"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden lg:flex items-center justify-center w-12 h-12 rounded-full glass-card text-stone-400 hover:text-fire-600 hover:border-fire-500/50 hover:shadow-lg hover:shadow-fire-600/10 transition-all duration-300"
        aria-label="Next testimonials"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function TestimonialSlide({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="glass-card rounded-2xl p-8 flex flex-col h-full hover:border-fire-500/30 transition-all duration-500">
      <div className="flex items-center gap-1 mb-5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? "text-ember-400" : "text-stone-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-stone-600 leading-relaxed flex-1 font-light text-lg italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-5 pt-5 border-t border-stone-200 text-sm">
        <span className="font-bold text-stone-900 uppercase tracking-wider">{testimonial.name}</span>
        {testimonial.location && (
          <span className="text-stone-400 ml-2"> &mdash; {testimonial.location}</span>
        )}
      </div>
    </div>
  );
}

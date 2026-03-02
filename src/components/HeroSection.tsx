"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  children?: React.ReactNode;
  fullHeight?: boolean;
};

export function HeroSection({ title, subtitle, backgroundImage, backgroundVideo, children, fullHeight = false }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className={`relative text-white overflow-hidden bg-ash-950 ${fullHeight ? "min-h-screen flex items-center justify-center" : "py-36 sm:py-44 lg:py-56"}`}>
      {/* Background video */}
      {backgroundVideo && (
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Background image fallback (only if no video) */}
      {backgroundImage && !backgroundVideo && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover animate-[ken-burns_25s_ease-in-out_infinite_alternate]"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Dark overlay */}
      {(backgroundImage || backgroundVideo) && (
        <div className="absolute inset-0 bg-ash-950/55" />
      )}

      {/* Layered fire gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ash-950/90 via-transparent to-ash-950/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-fire-900/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(249,115,22,0.30)_0%,transparent_55%)]" />

      {/* Side vignettes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(12,10,9,0.6)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,rgba(12,10,9,0.6)_0%,transparent_50%)]" />

      {/* Floating ember particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-10 left-[10%] w-2.5 h-2.5 bg-fire-400 rounded-full animate-ember-rise opacity-0" />
        <div className="absolute bottom-10 left-[25%] w-2 h-2 bg-ember-400 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-10 left-[40%] w-3 h-3 bg-fire-500 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-10 left-[55%] w-1.5 h-1.5 bg-ember-300 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-10 left-[70%] w-2 h-2 bg-fire-400 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-10 left-[85%] w-2.5 h-2.5 bg-ember-500 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "5s" }} />
        <div className="absolute bottom-10 left-[15%] w-1.5 h-1.5 bg-fire-300 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "6s" }} />
        <div className="absolute bottom-10 left-[50%] w-2 h-2 bg-ember-400 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "7s" }} />
        <div className="absolute bottom-10 left-[35%] w-3 h-3 bg-fire-400/80 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-10 left-[65%] w-1 h-1 bg-ember-300 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "3.5s" }} />
        <div className="absolute bottom-10 left-[80%] w-2 h-2 bg-fire-500/70 rounded-full animate-ember-rise opacity-0" style={{ animationDelay: "5.5s" }} />

        {/* Floating ambient glows */}
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-fire-500/15 rounded-full animate-float blur-md" />
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-ember-400/10 rounded-full animate-float blur-lg" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/4 right-1/5 w-4 h-4 bg-fire-400/15 rounded-full animate-float blur-md" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-fire-600/8 rounded-full animate-float blur-xl" style={{ animationDelay: "1s" }} />
      </div>

      {/* Bottom fire glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-fire-600/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight transition-all duration-[1200ms] ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="bg-gradient-to-r from-fire-100 via-fire-200 to-ember-300 bg-clip-text text-transparent drop-shadow-lg animate-[text-glow_4s_ease-in-out_infinite] text-fire-shadow">
            {title}
          </span>
        </h1>

        {/* Decorative line under title */}
        <div
          className={`mx-auto mb-8 transition-all duration-[1200ms] ease-out delay-300 ${
            mounted ? "opacity-100 w-24" : "opacity-0 w-0"
          }`}
        >
          <div className="h-1 bg-gradient-to-r from-transparent via-fire-500 to-transparent rounded-full" />
        </div>

        {subtitle && (
          <p
            className={`text-lg sm:text-xl md:text-2xl text-ash-100/90 max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide transition-all duration-[1200ms] ease-out delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {subtitle}
          </p>
        )}
        <div
          className={`transition-all duration-[1200ms] ease-out delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {children}
        </div>

        {/* Scroll indicator for full-height heroes */}
        {fullHeight && (
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1500ms] ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="scroll-indicator text-ash-200/50">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useBooking } from "@/components/BookingProvider";

type CTAButtonsProps = {
  variant?: "primary" | "secondary" | "hero";
  className?: string;
};

export function CTAButtons({
  variant = "primary",
  className = "",
}: CTAButtonsProps) {
  const { openBooking } = useBooking();

  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white uppercase tracking-[0.12em] cursor-pointer";

  const variants = {
    primary:
      "btn-fire text-white px-10 py-4 text-base focus:ring-fire-500 shadow-lg shadow-fire-600/20 hover:shadow-xl hover:shadow-fire-500/30",
    secondary:
      "bg-transparent text-fire-600 border-2 border-fire-500/60 px-10 py-4 text-base hover:bg-fire-500/10 hover:border-fire-500 focus:ring-fire-500",
    hero: "btn-fire text-white px-12 py-5 text-xl focus:ring-fire-400 shadow-xl shadow-fire-600/30 hover:shadow-2xl hover:shadow-fire-500/40",
  };

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <button
        type="button"
        onClick={() => openBooking()}
        className={`${baseStyles} ${variants[variant]}`}
        aria-label="Book your beach bonfire now"
      >
        Book Your Bonfire
      </button>
      {variant === "hero" && (
        <a
          href="/services"
          className={`${baseStyles} ${variants.secondary}`}
          aria-label="View our bonfire service packages"
        >
          View Packages
        </a>
      )}
    </div>
  );
}

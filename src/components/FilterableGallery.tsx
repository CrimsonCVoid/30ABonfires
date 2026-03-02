"use client";

import { useState } from "react";
import { LightboxGallery } from "./Lightbox";
import type { GalleryImage, GalleryCategory } from "@/lib/gallery-data";
import { galleryCategories } from "@/lib/gallery-data";

type FilterableGalleryProps = {
  images: GalleryImage[];
};

export function FilterableGallery({ images }: FilterableGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");

  const filtered =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {galleryCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 uppercase tracking-[0.12em] ${
              activeCategory === cat.value
                ? "btn-fire text-white shadow-lg shadow-fire-600/20 scale-105"
                : "glass-card text-stone-500 hover:border-fire-500/50 hover:text-fire-600"
            }`}
          >
            {cat.label}
            {cat.value !== "all" && (
              <span className="ml-1.5 text-xs opacity-50">
                ({images.filter((img) => img.category === cat.value).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Gallery with lightbox */}
      <div
        key={activeCategory}
        className="animate-fade-in"
      >
        <LightboxGallery images={filtered} />
      </div>

      <p className="text-center text-stone-400 mt-10 text-sm tracking-wide uppercase">
        Showing {filtered.length} of {images.length} photos
        {activeCategory !== "all" && (
          <>
            {" "}&middot;{" "}
            <button
              onClick={() => setActiveCategory("all")}
              className="text-fire-600 hover:underline"
            >
              Show All
            </button>
          </>
        )}
      </p>
    </div>
  );
}

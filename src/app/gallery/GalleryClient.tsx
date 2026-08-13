"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

const filters = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "interior", label: "Interior" },
  { id: "restaurant", label: "Restaurant" }
];

export function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages = galleryImages.filter(
    (img) => activeFilter === "all" || img.category === activeFilter
  );

  return (
    <div className="container mx-auto px-4 pb-32">
      {/* Category Filter */}
      <div className="flex justify-center gap-6 md:gap-8 mb-16 overflow-x-auto hide-scrollbar pb-4">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`text-sm uppercase tracking-widest transition-colors whitespace-nowrap ${
              activeFilter === filter.id ? "text-accent" : "text-muted hover:text-foreground"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid (Desktop) / Stack (Mobile) */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
        {filteredImages.map((img) => (
          <div 
            key={img.id} 
            className={`relative w-full overflow-hidden break-inside-avoid group ${
              img.featured && activeFilter === "all" ? "aspect-[3/4]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {img.isPlaceholder && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 text-foreground text-xs uppercase tracking-widest backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Placeholder
              </div>
            )}
          </div>
        ))}
      </div>
      
      {filteredImages.length === 0 && (
        <div className="text-center py-24 text-muted">
          No images found for this category.
        </div>
      )}
    </div>
  );
}

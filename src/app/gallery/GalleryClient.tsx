"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryImages } from "@/data/gallery";
import { TextReveal } from "@/components/animations/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const filters = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "interior", label: "Interior" },
  { id: "restaurant", label: "Restaurant" }
];

export function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const filteredImages = galleryImages.filter(
    (img) => activeFilter === "all" || img.category === activeFilter
  );

  useGSAP(() => {
    // Only apply horizontal scroll on desktop, if reduced motion is false
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !isDesktop || !filmstripRef.current || !containerRef.current) return;

    // Wait for a tick so layout is calculated
    const ctx = gsap.context(() => {
      const filmstrip = filmstripRef.current;
      if (!filmstrip) return;
      
      const scrollWidth = filmstrip.scrollWidth - window.innerWidth;
      
      if (scrollWidth > 0) {
        gsap.to(filmstrip, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });
      }
    });

    return () => ctx.revert();
  }, { scope: containerRef, dependencies: [isDesktop, activeFilter] });

  return (
    <div className="w-full pt-12 pb-24 md:pb-0 relative overflow-hidden" ref={containerRef}>
      
      {/* Header & Filters - Always at top of DOM, pinned during scroll on desktop */}
      <div className="container mx-auto px-4 z-20 relative lg:absolute lg:top-12 lg:left-0 lg:right-0 lg:pointer-events-none">
        
        <div className="text-center mb-12 pointer-events-auto">
          <TextReveal>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
              THE GALLERY
            </h1>
          </TextReveal>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-8 md:gap-12 mb-16 overflow-x-auto hide-scrollbar pb-4 pointer-events-auto max-w-2xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-500 relative pb-2 ${
                activeFilter === filter.id ? "text-accent" : "text-muted hover:text-foreground"
              }`}
            >
              {filter.label}
              {activeFilter === filter.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent" />
              )}
            </button>
          ))}
        </div>
        
      </div>

      {/* Desktop Filmstrip / Mobile Stack */}
      <div className="lg:h-screen lg:flex lg:items-center lg:pt-32 relative z-10 w-full lg:overflow-hidden">
        
        <div 
          ref={filmstripRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 lg:px-[10vw] w-full lg:w-fit"
        >
          {filteredImages.map((img, index) => {
            const aspectClass = img.featured ? "aspect-[3/4] lg:aspect-[4/5] w-full lg:w-[45vw] lg:max-w-[700px]" : "aspect-[4/3] lg:aspect-[16/9] w-full lg:w-[60vw] lg:max-w-[900px]";
            
            return (
              <div 
                key={`${img.id}-${index}`} 
                className={`relative overflow-hidden group flex-shrink-0 ${aspectClass}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover lg:group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-background/10 lg:group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {filteredImages.length === 0 && (
          <div className="w-full text-center py-24 text-muted font-display tracking-widest uppercase">
            No images found.
          </div>
        )}
      </div>

    </div>
  );
}

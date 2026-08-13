"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { menuCategories } from "@/data/menu";
import { TextReveal, ImageReveal } from "@/components/animations/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function MenuClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const listRef = useRef<HTMLDivElement>(null);
  
  // Handle cinematic transition between categories
  const handleCategoryChange = (categoryId: string) => {
    if (activeCategory === categoryId) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setActiveCategory(categoryId);
      return;
    }

    // Fade out current content, change state, fade back in
    if (listRef.current) {
      gsap.to(listRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setActiveCategory(categoryId);
          // ScrollTrigger.refresh(); is often needed after layout changes, but we'll do it on state update
        }
      });
    }
  };

  // Run when activeCategory changes to animate in
  useEffect(() => {
    if (listRef.current) {
      gsap.to(listRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        onComplete: () => {
          ScrollTrigger.refresh();
        }
      });
    }
  }, [activeCategory]);

  return (
    <div className="container mx-auto px-4 pb-32 pt-12">
      <div className="text-center mb-16">
        <TextReveal>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
            THE MENU
          </h1>
        </TextReveal>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-24 z-40 bg-background/95 backdrop-blur-md py-6 mb-16 border-b border-border/50 hide-scrollbar overflow-x-auto">
        <div className="flex justify-center gap-8 md:gap-12 min-w-max px-4">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-500 relative pb-2 ${
              activeCategory === "all" ? "text-accent" : "text-muted hover:text-foreground"
            }`}
          >
            All
            {activeCategory === "all" && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent" />
            )}
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-500 relative pb-2 ${
                activeCategory === cat.id ? "text-accent" : "text-muted hover:text-foreground"
              }`}
            >
              {cat.name}
              {activeCategory === cat.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div ref={listRef} className="space-y-32 max-w-5xl mx-auto">
        {menuCategories
          .filter((cat) => activeCategory === "all" || activeCategory === cat.id)
          .map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-40">
              <TextReveal>
                <h2 className="font-display text-4xl md:text-5xl text-accent mb-12 border-b border-border/30 pb-6 text-center md:text-left">
                  {category.name}
                </h2>
              </TextReveal>
              
              <div className="flex flex-col gap-12 md:gap-16">
                {category.items.map((item, idx) => (
                  <div key={item.id} className="flex justify-between items-start gap-8 group">
                    {item.image && (
                      <div className="hidden sm:block w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                        <ImageReveal delay={0.1}>
                          <div className="w-full h-full relative overflow-hidden border border-border/30 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        </ImageReveal>
                      </div>
                    )}
                    <div className="flex-1 pt-2">
                      <TextReveal delay={0.1}>
                        <div className="flex items-baseline justify-between mb-4 gap-4">
                          <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors duration-500">
                            {item.name}
                          </h3>
                          {/* Cinematic minimal separator */}
                          <div className="hidden md:block flex-1 border-b border-border/30 mx-4 opacity-50" />
                          <span className="text-foreground/80 tracking-widest font-body whitespace-nowrap">
                            {item.price ? item.price : "—"}
                          </span>
                        </div>
                      </TextReveal>
                      
                      <TextReveal delay={0.2}>
                        <p className="text-foreground-secondary text-sm md:text-base leading-relaxed font-light max-w-2xl">
                          {item.description}
                        </p>
                      </TextReveal>
                      
                      {item.image && (
                        <div className="sm:hidden relative w-full aspect-[4/3] mt-6 flex-shrink-0 overflow-hidden border border-border/30">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

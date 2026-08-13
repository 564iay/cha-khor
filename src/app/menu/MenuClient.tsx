"use client";

import { useState } from "react";
import Image from "next/image";
import { menuCategories } from "@/data/menu";

export function MenuClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  return (
    <div className="container mx-auto px-4 pb-32">
      {/* Category Navigation */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-md py-4 mb-12 border-b border-border hide-scrollbar overflow-x-auto">
        <div className="flex gap-6 md:gap-8 min-w-max">
          <button
            onClick={() => setActiveCategory("all")}
            className={`text-sm uppercase tracking-widest transition-colors ${
              activeCategory === "all" ? "text-accent" : "text-muted hover:text-foreground"
            }`}
          >
            All
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-sm uppercase tracking-widest transition-colors ${
                activeCategory === cat.id ? "text-accent" : "text-muted hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="space-y-24 max-w-4xl mx-auto">
        {menuCategories
          .filter((cat) => activeCategory === "all" || activeCategory === cat.id)
          .map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-40">
              <h2 className="font-display text-3xl md:text-4xl text-accent mb-8 border-b border-border/50 pb-4">
                {category.name}
              </h2>
              
              <div className="flex flex-col gap-8">
                {category.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start gap-6 group">
                    {item.image && (
                      <div className="hidden sm:block relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden border border-border/50">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-2 gap-4">
                        <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors">
                          {item.name}
                        </h3>
                        {/* Decorative dotted line for desktop */}
                        <div className="hidden md:block flex-1 border-b border-dotted border-border/50 mx-4" />
                        <span className="text-foreground tracking-wider font-medium whitespace-nowrap">
                          {item.price ? item.price : "—"}
                        </span>
                      </div>
                      <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
                        {item.description}
                      </p>
                      {item.image && (
                        <div className="sm:hidden relative w-full aspect-video flex-shrink-0 overflow-hidden border border-border/50">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
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

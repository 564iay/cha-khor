"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { menuCategories, signatureItems } from "@/data/menu";
import { TextReveal, ImageReveal, MagneticButton } from "@/components/animations/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function SignatureDishes() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Flatten all items and find the signature ones
  const allItems = menuCategories.flatMap(c => c.items);
  const items = signatureItems.map(id => allItems.find(item => item.id === id)).filter((item): item is NonNullable<typeof item> => Boolean(item));

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Animate the gold accent lines
    const lines = gsap.utils.toArray<HTMLElement>('.signature-line');
    lines.forEach(line => {
      gsap.fromTo(line, 
        { scaleX: 0 }, 
        { 
          scaleX: 1, 
          duration: 1.5, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          }
        }
      );
    });

    // Subtly parallax the food images on desktop
    const images = gsap.utils.toArray<HTMLElement>('.signature-image');
    images.forEach(img => {
      gsap.to(img, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-32">
          <TextReveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-6 block">
              The Menu
            </span>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
              SIGNATURE SELECTION
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="text-foreground-secondary md:text-lg max-w-md mx-auto italic font-display">
              The dishes that define us. Crafted with care and served with pride.
            </p>
          </TextReveal>
        </div>

        {/* Vertical Cinematic Sequence */}
        <div className="space-y-32 md:space-y-48">
          {items.map((item, index) => (
            <div key={item.id} className="group relative">
              <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                
                {/* Image (Alternating sides on desktop) */}
                <div className={`w-full md:col-span-7 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <ImageReveal>
                    <div className="aspect-[4/5] md:aspect-square w-full bg-background relative p-2 border border-accent/40 shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] group-hover:border-accent/60 transition-all duration-700">
                      <div className="w-full h-full relative overflow-hidden border border-accent/30">
                        {item.image && (
                          <div className="w-full h-[120%] -top-[10%] relative signature-image">
                            <Image 
                              src={item.image} 
                              alt={item.name} 
                              fill 
                              className="object-cover" 
                            />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-1000 pointer-events-none" />
                      </div>
                    </div>
                  </ImageReveal>
                </div>
                
                {/* Text Content */}
                <div className={`w-full md:col-span-5 flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <TextReveal>
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent/80 block mb-4">
                      {String(index + 1).padStart(2, '0')} / SIGNATURE
                    </span>
                  </TextReveal>
                  
                  <TextReveal delay={0.1}>
                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                      {item.name}
                    </h3>
                  </TextReveal>
                  
                  <div className="signature-line w-full h-[1px] bg-accent/30 mb-6 origin-left" />
                  
                  <TextReveal delay={0.2}>
                    <p className="text-foreground-secondary text-lg leading-relaxed font-light mb-8">
                      {item.description}
                    </p>
                  </TextReveal>
                  
                  {item.price && (
                    <TextReveal delay={0.3}>
                      <span className="font-body text-xl text-foreground/80 tracking-wider">
                        {item.price}
                      </span>
                    </TextReveal>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <MagneticButton>
            <Link 
              href="/menu" 
              className="inline-block border border-accent text-accent px-12 py-5 uppercase tracking-[0.2em] text-sm hover:bg-accent hover:text-background transition-colors duration-500"
            >
              View Full Menu
            </Link>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}

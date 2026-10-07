"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "@/data/gallery";
import { TextReveal, ImageReveal } from "@/components/animations/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageParallaxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.to(imageParallaxRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-48 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <TextReveal>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
              COME FOR THE FOOD.<br />
              STAY FOR THE MOMENT.
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.2}>
            <div className="w-12 h-[1px] bg-accent mx-auto mb-8" />
          </TextReveal>
          
          <TextReveal delay={0.3}>
            <p className="text-foreground-secondary md:text-lg lg:text-xl font-light tracking-wide leading-relaxed">
              A warm, inviting atmosphere designed for family gatherings, quiet dinners, and everything in between. We provide a space where every meal feels like a special occasion.
            </p>
          </TextReveal>
        </div>

        <div className="w-full aspect-[4/3] md:aspect-[21/9] relative">
          <ImageReveal>
            <div ref={imageParallaxRef} className="w-full h-[120%] -top-[10%] relative">
              <Image 
                src={images.experience.src}
                alt={images.experience.alt}
                fill
                className="object-cover object-center"
              />
            </div>
          </ImageReveal>
          <div className="absolute inset-0 bg-background/10 mix-blend-overlay pointer-events-none" />
        </div>

      </div>
    </section>
  );
}

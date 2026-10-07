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

export function Introduction() {
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
    <section ref={sectionRef} className="py-32 md:py-48 bg-background relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Left: Typography */}
          <div className="flex-1 text-center lg:text-left">
            <TextReveal>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-12">
                A TABLE<br />FOR EVERY<br />MOOD.
              </h2>
            </TextReveal>
            
            <TextReveal delay={0.2}>
              <div className="w-12 h-[1px] bg-accent mx-auto lg:mx-0 mb-12" />
            </TextReveal>
            
            <div className="space-y-8 text-foreground-secondary md:text-lg max-w-xl mx-auto lg:mx-0 font-body font-light tracking-wide leading-relaxed">
              <TextReveal delay={0.3}>
                <p>
                  Holiday Restaurant brings together good food and a welcoming atmosphere in the heart of Tehatta.
                </p>
              </TextReveal>
              <TextReveal delay={0.4}>
                <p>
                  Whether you&apos;re stopping by for a meal or spending time with family and friends, Holiday is designed to make every visit comfortable and enjoyable.
                </p>
              </TextReveal>
            </div>
          </div>

          {/* Right: Editorial Image */}
          <div className="flex-1 w-full relative">
            <div className="aspect-[3/4] w-full max-w-lg mx-auto relative">
              <ImageReveal>
                <div ref={imageParallaxRef} className="w-full h-[115%] -top-[7.5%] relative">
                  <Image 
                    src={images.introSide.src}
                    alt={images.introSide.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </ImageReveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

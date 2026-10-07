"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/gallery";
import { TextReveal, MagneticButton } from "@/components/animations/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.to(imageRef.current, {
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
    <section ref={sectionRef} className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden border-t border-border/30">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          ref={imageRef}
          src={images.finalCta.src}
          alt={images.finalCta.alt}
          fill
          className="object-cover object-center opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <TextReveal>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-12 md:mb-16 tracking-tight text-foreground leading-none">
            YOUR TABLE<br />AWAITS.
          </h2>
        </TextReveal>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-4 sm:px-0">
          <TextReveal delay={0.2}>
            <MagneticButton>
              <Button asChild size="lg" className="w-full sm:w-auto tracking-[0.2em] uppercase bg-accent text-background hover:bg-accent/90 px-6 py-6 md:px-10 md:py-6 text-xs md:text-sm">
                <Link href="/menu">View Menu</Link>
              </Button>
            </MagneticButton>
          </TextReveal>
          
          <TextReveal delay={0.3}>
            <MagneticButton>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto tracking-[0.2em] uppercase border-border hover:border-accent hover:text-accent hover:bg-transparent px-6 py-6 md:px-10 md:py-6 text-xs md:text-sm">
                <Link href="/visit">Get Directions</Link>
              </Button>
            </MagneticButton>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}

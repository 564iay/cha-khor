"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/gallery";
import { restaurant } from "@/data/restaurant";
import { MagneticButton } from "@/components/animations/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  // Text elements
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  
  // Parallax wrapper
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // --- 1. OPENING SHOT TIMELINE ---
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial setup
    gsap.set(imageRef.current, { scale: 1.08, filter: "blur(10px)" });
    gsap.set(overlayRef.current, { opacity: 0.8 });
    gsap.set(eyebrowRef.current, { opacity: 0, y: 20 });
    gsap.set(titleRef.current, { y: "100%" });
    gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
    gsap.set(ctaRef.current, { opacity: 0, y: 20 });
    gsap.set(scrollIndicatorRef.current, { opacity: 0 });

    tl.to(imageRef.current, {
      scale: 1,
      filter: "blur(0px)",
      duration: 2.5,
      ease: "power2.out"
    }, 0.2)
    .to(overlayRef.current, {
      opacity: 0.4, // Lifts the darkness
      duration: 2,
    }, "<")
    .to(eyebrowRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    }, "-=1.5")
    .to(titleRef.current, {
      y: "0%",
      duration: 1.2,
      ease: "power4.out"
    }, "-=0.8")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    }, "-=0.8")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    }, "-=0.6")
    .to(scrollIndicatorRef.current, {
      opacity: 1,
      duration: 1
    }, "-=0.2");

    // --- 2. SCROLL PARALLAX ---
    gsap.to(imageRef.current, {
      yPercent: 20, // Background moves slower
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(contentWrapperRef.current, {
      yPercent: 40, // Foreground moves faster
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          ref={imageRef}
          src={images.homeHero.src}
          alt={images.homeHero.alt}
          fill
          priority
          className="object-cover object-center"
        />
        <div ref={overlayRef} className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>

      {/* Content */}
      <div ref={contentWrapperRef} className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <span ref={eyebrowRef} className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-6">
          {restaurant.city} • {restaurant.district}
        </span>
        
        <div ref={titleWrapperRef} className="overflow-hidden pb-2 mb-4">
          <h1 ref={titleRef} className="font-display text-5xl md:text-7xl lg:text-9xl tracking-tight text-foreground leading-[1.1]">
            {restaurant.name.toUpperCase()}
          </h1>
        </div>
        
        <p ref={subtitleRef} className="font-display text-xl md:text-2xl lg:text-3xl text-foreground-secondary max-w-2xl mb-12 italic">
          A welcoming dining destination in Tehatta for memorable meals and good moments.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6">
          <MagneticButton>
            <Button asChild size="lg" className="tracking-widest uppercase bg-accent text-background hover:bg-accent/90 transition-colors">
              <Link href="/menu">View Menu</Link>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button asChild variant="outline" size="lg" className="tracking-widest uppercase hover:bg-accent hover:text-background hover:border-accent transition-all duration-500 border-border">
              <a href="tel:+917014024672">Call Now</a>
            </Button>
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted">Scroll to Discover</span>
        <div className="w-[1px] h-8 bg-muted/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
}

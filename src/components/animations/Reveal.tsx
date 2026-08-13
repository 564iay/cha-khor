"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  triggerOnScroll?: boolean;
}

export function TextReveal({ children, delay = 0, className = "", triggerOnScroll = true }: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current || !containerRef.current) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.set(textRef.current, { y: "110%", opacity: 0 });

    const anim = gsap.to(textRef.current, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      delay: triggerOnScroll ? 0 : delay,
      scrollTrigger: triggerOnScroll ? {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none"
      } : undefined
    });

    return () => {
      anim.kill();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={textRef}>
        {children}
      </div>
    </div>
  );
}

export function ImageReveal({ children, delay = 0, className = "" }: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageWrapperRef.current) return;
    
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Start with the container clipped and the image slightly scaled
    gsap.set(containerRef.current, { clipPath: "inset(100% 0% 0% 0%)" });
    const img = imageWrapperRef.current.querySelector("img");
    if (img) gsap.set(img, { scale: 1.08 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      delay
    });

    tl.to(containerRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.2,
      ease: "power3.inOut"
    });

    if (img) {
      tl.to(img, {
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
      }, "<0.2");
    }

    return () => {
      tl.kill();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div ref={imageWrapperRef} className="w-full h-full">
        {children}
      </div>
    </div>
  );
}

export function MagneticButton({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const btn = buttonRef.current;
    if (!btn) return;
    
    // Respect prefers-reduced-motion and touch devices
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (prefersReducedMotion || isTouch) return;

    const xTo = gsap.quickTo(btn, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(btn, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = btn.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      // Move slightly (e.g. 20% of distance)
      xTo(x * 0.2);
      yTo(y * 0.2);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: buttonRef });

  return (
    <div ref={buttonRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}

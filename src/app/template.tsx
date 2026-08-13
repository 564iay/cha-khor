"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !overlayRef.current) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline();

    tl.to(overlayRef.current, {
      duration: 0.5,
      opacity: 0,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(overlayRef.current, { display: "none" });
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Cinematic Transition Overlay */}
      <div 
        ref={overlayRef} 
        className="fixed inset-0 z-[100] bg-background pointer-events-none"
      />
      
      {/* Content wrapper */}
      <div>
        {children}
      </div>
    </div>
  );
}

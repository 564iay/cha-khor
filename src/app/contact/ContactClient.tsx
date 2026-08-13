"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal, MagneticButton } from "@/components/animations/Reveal";
import { restaurant } from "@/data/restaurant";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ContactClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // any complex page-load animations if needed
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full pt-12 pb-24 md:pb-32">
      
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-24">
        <TextReveal>
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-6 block">
            Get in Touch
          </span>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
            CONTACT US
          </h1>
        </TextReveal>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col space-y-12">
            
            <div className="space-y-8">
              <TextReveal>
                <h2 className="font-display text-3xl md:text-4xl text-accent border-b border-border/30 pb-4">
                  Reservations & Inquiries
                </h2>
              </TextReveal>
              
              <TextReveal delay={0.1}>
                <p className="text-foreground-secondary text-lg leading-relaxed font-light">
                  Whether you&apos;re planning a family celebration, a quiet dinner, or have a question about our menu, our team is here to assist you. 
                </p>
              </TextReveal>
            </div>

            <div className="space-y-6">
              <TextReveal delay={0.2}>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Phone</span>
                  <a href={`tel:${restaurant.phone.replace(/\s+/g, '')}`} className="font-display text-2xl md:text-3xl text-foreground hover:text-accent transition-colors">
                    {restaurant.phone}
                  </a>
                </div>
              </TextReveal>

              {restaurant.whatsapp && (
                <TextReveal delay={0.3}>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted mb-2">WhatsApp</span>
                    <a href={`https://wa.me/${(restaurant.whatsapp as string).replace(/\D/g, '')}`} className="font-display text-2xl md:text-3xl text-foreground hover:text-accent transition-colors">
                      {restaurant.whatsapp}
                    </a>
                  </div>
                </TextReveal>
              )}

              {restaurant.email && (
                <TextReveal delay={0.4}>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Email</span>
                    <a href={`mailto:${restaurant.email}`} className="font-display text-2xl md:text-3xl text-foreground hover:text-accent transition-colors">
                      {restaurant.email}
                    </a>
                  </div>
                </TextReveal>
              )}
            </div>

            <TextReveal delay={0.5}>
              <div className="p-8 border border-border/50 bg-background-secondary/30">
                <h3 className="font-display text-2xl text-foreground mb-4">Opening Hours</h3>
                <p className="text-muted text-lg">Monday – Sunday<br />{restaurant.hours}</p>
              </div>
            </TextReveal>

          </div>

          {/* Right: Contact Form */}
          <div className="w-full">
            <TextReveal delay={0.2}>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-background border-b border-border/50 py-4 text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-[0.2em] text-muted">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-background border-b border-border/50 py-4 text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-background border-b border-border/50 py-4 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="pt-4">
                  <MagneticButton>
                    <button 
                      type="submit" 
                      className="w-full md:w-auto border border-accent text-accent px-12 py-5 uppercase tracking-[0.2em] text-sm hover:bg-accent hover:text-background transition-colors duration-500"
                    >
                      Send Message
                    </button>
                  </MagneticButton>
                </div>

              </form>
            </TextReveal>
          </div>

        </div>
      </div>
    </div>
  );
}

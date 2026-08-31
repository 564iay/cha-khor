import Image from "next/image";

import { restaurant } from "@/data/restaurant";
import { TextReveal, ImageReveal, MagneticButton } from "@/components/animations/Reveal";

export default function VisitPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <TextReveal>
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-6 block">
              Location & Hours
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground max-w-4xl mx-auto">
              PLAN YOUR VISIT.
            </h1>
          </TextReveal>
        </div>
      </section>

      {/* Information Grid */}
      <section className="pb-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left: Details */}
            <div className="flex flex-col justify-center space-y-12">
              
              {/* Address */}
              <div>
                <TextReveal>
                  <h2 className="font-display text-2xl md:text-3xl text-accent mb-4 border-b border-border/50 pb-4">
                    Find Us
                  </h2>
                </TextReveal>
                <TextReveal delay={0.1}>
                  <p className="text-foreground text-lg md:text-xl leading-relaxed font-medium">
                    {restaurant.name}
                  </p>
                </TextReveal>
                <TextReveal delay={0.2}>
                  <p className="text-muted text-lg leading-relaxed mt-2 whitespace-pre-line">
                    {restaurant.address}
                  </p>
                </TextReveal>
              </div>

              {/* Hours */}
              <div>
                <TextReveal delay={0.3}>
                  <h2 className="font-display text-2xl md:text-3xl text-accent mb-4 border-b border-border/50 pb-4">
                    Opening Hours
                  </h2>
                </TextReveal>
                <TextReveal delay={0.4}>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-lg">
                      <span className="text-muted">Monday – Sunday</span>
                      <span className="text-foreground font-medium">{restaurant.hours}</span>
                    </div>
                  </div>
                </TextReveal>
              </div>

              {/* Contact */}
              <div>
                <TextReveal delay={0.5}>
                  <h2 className="font-display text-2xl md:text-3xl text-accent mb-4 border-b border-border/50 pb-4">
                    Contact
                  </h2>
                </TextReveal>
                <div className="flex flex-col sm:flex-row gap-6 mt-6">
                  <TextReveal delay={0.6}>
                    <MagneticButton>
                      <a 
                        href={`tel:${restaurant.phone.replace(/\s+/g, '')}`}
                        className="inline-block text-center py-4 px-8 bg-foreground text-background font-semibold uppercase tracking-widest text-sm hover:bg-muted transition-colors"
                      >
                        Call {restaurant.phone}
                      </a>
                    </MagneticButton>
                  </TextReveal>
                  {restaurant.whatsapp && (
                    <TextReveal delay={0.7}>
                      <MagneticButton>
                        <a 
                          href={`https://wa.me/${(restaurant.whatsapp as string).replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-center py-4 px-8 border border-border text-foreground font-semibold uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-colors"
                        >
                          WhatsApp Us
                        </a>
                      </MagneticButton>
                    </TextReveal>
                  )}
                </div>
              </div>

            </div>

            {/* Right: Map / Visual */}
            <ImageReveal delay={0.2}>
              <div className="relative w-full aspect-square lg:aspect-auto lg:h-full min-h-[500px] group overflow-hidden border border-border/50">
                <Image
                  src="/images/5.-exterior/images.jpg"
                  alt="The Cha Khor Exterior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a 
                    href={restaurant.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/90 backdrop-blur-md text-foreground px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:text-accent transition-colors border border-border/50"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </ImageReveal>

          </div>
        </div>
      </section>
    </>
  );
}

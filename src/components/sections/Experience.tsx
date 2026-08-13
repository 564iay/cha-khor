import Image from "next/image";
import { images } from "@/data/gallery";

export function Experience() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            COME FOR THE FOOD.<br />
            STAY FOR THE MOMENT.
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mb-6" />
          <p className="text-muted md:text-lg">
            A warm, inviting atmosphere designed for family gatherings, quiet dinners, and everything in between. We provide a space where every meal feels like a special occasion.
          </p>
        </div>

        <div className="w-full aspect-video md:aspect-[21/9] relative overflow-hidden">
          <Image 
            src={images.experience.src}
            alt={images.experience.alt}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 border border-border/40 mix-blend-overlay" />
        </div>

      </div>
    </section>
  );
}

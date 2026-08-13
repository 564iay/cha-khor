import Image from "next/image";
import { images } from "@/data/gallery";

export function Introduction() {
  return (
    <section className="py-24 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left: Typography */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-8">
              A TABLE FOR EVERY MOOD.
            </h2>
            <div className="w-12 h-px bg-accent mx-auto lg:mx-0 mb-8" />
            <div className="space-y-6 text-muted md:text-lg max-w-xl mx-auto lg:mx-0">
              <p>
                Welcome to The Cha Khor, a place where local flavors meet contemporary comfort. Whether you're gathering with family for a celebratory feast or dropping by for a quick, satisfying bite, our doors are open.
              </p>
              <p>
                We believe in serving honest, flavorful food crafted with care. From our signature biryanis to our comforting Indo-Chinese selections, every dish is prepared to bring people together.
              </p>
            </div>
          </div>

          {/* Right: Editorial Image */}
          <div className="flex-1 w-full relative">
            <div className="aspect-[3/4] w-full max-w-md mx-auto relative overflow-hidden rounded-sm">
              <Image 
                src={images.introSide.src}
                alt={images.introSide.alt}
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/20 z-[-1] hidden md:block" />
          </div>

        </div>
      </div>
    </section>
  );
}

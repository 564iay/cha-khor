import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/gallery";
import { restaurant } from "@/data/restaurant";

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.homeHero.src}
          alt={images.homeHero.alt}
          fill
          priority
          className="object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-6">
          {restaurant.city} • {restaurant.district}
        </span>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl mb-6 tracking-tight text-foreground">
          {restaurant.name.toUpperCase()}
        </h1>
        
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-foreground/90 max-w-2xl mb-12 italic">
          Family dining, crafted for every craving.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <Button asChild size="lg" className="tracking-widest uppercase">
            <Link href="/menu">Explore Menu</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="tracking-widest uppercase">
            <Link href="/visit">Visit Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

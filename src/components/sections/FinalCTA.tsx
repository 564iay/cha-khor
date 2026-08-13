import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/gallery";

export function FinalCTA() {
  return (
    <section className="relative w-full py-32 md:py-48 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.finalCta.src}
          alt={images.finalCta.alt}
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-12 tracking-tight text-foreground">
          YOUR TABLE AWAITS.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <Button asChild size="lg" className="tracking-widest uppercase">
            <Link href="/menu">Explore Menu</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="tracking-widest uppercase bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-background">
            <Link href="/visit">Get Directions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

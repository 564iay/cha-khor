import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/data/gallery";
import { Button } from "@/components/ui/Button";

export function GalleryPreview() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-foreground text-center">
          A GLIMPSE INSIDE
        </h2>
      </div>

      {/* Horizontal Image Sequence */}
      <div className="flex gap-4 md:gap-8 overflow-x-auto pb-8 px-4 md:px-8 snap-x snap-mandatory hide-scrollbar">
        {galleryImages.map((img) => (
          <div 
            key={img.id} 
            className="relative w-[85vw] md:w-[60vw] lg:w-[40vw] aspect-[4/3] flex-shrink-0 snap-center overflow-hidden"
          >
            <Image 
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
            {img.isPlaceholder && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 text-foreground text-xs uppercase tracking-widest backdrop-blur-sm">
                Placeholder Image
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center mt-8">
        <Button asChild variant="outline" className="tracking-widest uppercase">
          <Link href="/gallery">Explore Gallery</Link>
        </Button>
      </div>
    </section>
  );
}

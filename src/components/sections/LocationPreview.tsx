
import { Button } from "@/components/ui/Button";
import { restaurant } from "@/data/restaurant";

export function LocationPreview() {
  return (
    <section className="py-24 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-12">
          {restaurant.name.toUpperCase()}
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mb-12">
          
          <div className="flex flex-col gap-4">
            <span className="text-sm tracking-widest text-accent uppercase">Address</span>
            <p className="text-foreground max-w-xs mx-auto">
              {restaurant.address}
            </p>
          </div>

          <div className="hidden md:block w-px h-24 bg-border" />
          <div className="block md:hidden w-24 h-px bg-border" />

          <div className="flex flex-col gap-4">
            <span className="text-sm tracking-widest text-accent uppercase">Hours</span>
            <p className="text-foreground">
              {restaurant.hours}
            </p>
          </div>

          <div className="hidden md:block w-px h-24 bg-border" />
          <div className="block md:hidden w-24 h-px bg-border" />

          <div className="flex flex-col gap-4">
            <span className="text-sm tracking-widest text-accent uppercase">Phone</span>
            <p className="text-foreground">
              {restaurant.phone}
            </p>
          </div>

        </div>

        <Button asChild size="lg" className="tracking-widest uppercase">
          <a href={restaurant.mapLink} target="_blank" rel="noopener noreferrer">
            Get Directions
          </a>
        </Button>
      </div>
    </section>
  );
}

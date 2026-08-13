import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function MenuPreview() {
  return (
    <section className="py-24 bg-background-secondary border-y border-border text-center">
      <div className="container mx-auto px-4">
        <span className="text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
          Discover
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-16">
          THE MENU
        </h2>
        
        <div className="flex flex-col items-center justify-center gap-8 mb-16">
          <div className="text-2xl md:text-3xl font-display text-foreground/80 hover:text-accent transition-colors cursor-pointer">
            RICE & BIRYANI
          </div>
          <div className="text-2xl md:text-3xl font-display text-foreground/80 hover:text-accent transition-colors cursor-pointer">
            MAIN COURSE
          </div>
          <div className="text-2xl md:text-3xl font-display text-foreground/80 hover:text-accent transition-colors cursor-pointer">
            INDO-CHINESE
          </div>
          <div className="text-2xl md:text-3xl font-display text-foreground/80 hover:text-accent transition-colors cursor-pointer">
            STARTERS & QUICK BITES
          </div>
        </div>

        <Button asChild size="lg" variant="outline" className="tracking-widest uppercase">
          <Link href="/menu">View Full Menu</Link>
        </Button>
      </div>
    </section>
  );
}

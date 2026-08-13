import Link from "next/link";
import { menuCategories } from "@/data/menu";

export function SignatureDishes() {
  const signatureCategory = menuCategories.find(c => c.id === "signature");
  const items = signatureCategory?.items || [];

  return (
    <section className="py-24 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              SIGNATURE SELECTION
            </h2>
            <p className="text-muted max-w-md">
              The dishes that define us. Crafted with care and served with pride.
            </p>
          </div>
          <Link 
            href="/menu" 
            className="text-accent uppercase tracking-widest text-sm hover:text-foreground transition-colors whitespace-nowrap"
          >
            View Full Menu →
          </Link>
        </div>

        {/* Mobile: Horizontal Swipe, Desktop: Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className="min-w-[85%] md:min-w-0 flex-shrink-0 snap-start flex flex-col group cursor-pointer"
            >
              {/* Image Placeholder Frame */}
              <div className="aspect-[4/3] w-full bg-background relative overflow-hidden mb-6 border border-border/50">
                <div className="absolute inset-0 flex items-center justify-center text-muted/30 text-sm font-display tracking-widest uppercase bg-background group-hover:scale-105 transition-transform duration-700">
                  {item.name} Image
                </div>
              </div>
              
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="font-display text-2xl text-foreground">{item.name}</h3>
                {item.price && (
                  <span className="text-accent tracking-wider whitespace-nowrap">{item.price}</span>
                )}
              </div>
              <p className="text-muted line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

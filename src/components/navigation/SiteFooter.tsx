import Link from "next/link";
import { restaurant } from "@/data/restaurant";

export function SiteFooter() {
  return (
    <footer className="bg-background-secondary border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl tracking-wider uppercase text-foreground mb-4">
              {restaurant.name}
            </h3>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              {restaurant.address}
            </p>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">Contact</h4>
            <p className="text-muted text-sm mb-2">{restaurant.phone}</p>
            <p className="text-muted text-sm">{restaurant.hours}</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted">
          <p>© 2026 {restaurant.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

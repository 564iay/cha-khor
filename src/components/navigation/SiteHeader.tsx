import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Our Story", href: "/our-story" },
  { name: "Gallery", href: "/gallery" },
  { name: "Visit Us", href: "/visit" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Toggle (Placeholder) */}
        <div className="md:hidden">
          <button aria-label="Menu" className="p-2 -ml-2 text-foreground">
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {/* Logo/Brand */}
        <Link href="/" className="font-display text-2xl md:text-3xl tracking-wider uppercase text-foreground">
          The Cha Khor
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-muted hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact CTA */}
        <div className="hidden md:block">
          <Button asChild variant="outline" size="sm" className="tracking-widest uppercase">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
        
        {/* Mobile Placeholder right side to balance flex-between */}
        <div className="md:hidden w-10"></div>
      </div>
    </header>
  );
}

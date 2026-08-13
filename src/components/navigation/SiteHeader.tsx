"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/animations/Reveal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Our Story", href: "/our-story" },
  { name: "Gallery", href: "/gallery" },
  { name: "Visit Us", href: "/visit" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-border py-4" 
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            aria-label="Menu" 
            className="p-3 -ml-3 text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Logo/Brand */}
        <Link href="/" className="font-display text-2xl md:text-3xl tracking-wider uppercase text-foreground">
          The Cha Khor
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors py-2"
              >
                {link.name}
                {/* Champagne Gold Underline */}
                <span 
                  className={`absolute bottom-0 left-0 h-[1px] bg-accent transition-all duration-500 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} 
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Contact CTA */}
        <div className="hidden md:block">
          <MagneticButton>
            <Button asChild variant="outline" size="sm" className="tracking-widest uppercase hover:bg-accent hover:text-background hover:border-accent transition-all duration-500">
              <Link href="/visit">Book A Table</Link>
            </Button>
          </MagneticButton>
        </div>
        
        {/* Mobile Placeholder right side to balance flex-between */}
        <div className="md:hidden w-10"></div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-[100] transition-all duration-500 md:hidden flex flex-col ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-border/20">
          <span className="font-display text-2xl tracking-wider uppercase text-foreground">The Cha Khor</span>
          <button 
            aria-label="Close Menu" 
            className="p-3 -mr-3 text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 gap-8 pb-20">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl uppercase tracking-widest transition-colors ${
                  isActive ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Button asChild variant="outline" size="lg" className="mt-4 tracking-widest uppercase hover:bg-accent hover:text-background hover:border-accent transition-all duration-500 border-border">
            <Link href="/visit" onClick={() => setIsMobileMenuOpen(false)}>Book A Table</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

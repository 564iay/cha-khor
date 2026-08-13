import Link from "next/link";

export function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 w-full z-50 bg-background border-t border-border pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        <Link href="/menu" className="flex flex-col items-center justify-center w-full h-full text-xs uppercase tracking-wider text-muted hover:text-accent transition-colors">
          Menu
        </Link>
        <div className="w-px h-8 bg-border" />
        <Link href="/contact" className="flex flex-col items-center justify-center w-full h-full text-xs uppercase tracking-wider text-muted hover:text-accent transition-colors">
          Call
        </Link>
        <div className="w-px h-8 bg-border" />
        {/* Placeholder for WhatsApp until verified */}
        <span className="flex flex-col items-center justify-center w-full h-full text-xs uppercase tracking-wider text-muted/50 cursor-not-allowed">
          WA
        </span>
        <div className="w-px h-8 bg-border" />
        <Link href="/visit" className="flex flex-col items-center justify-center w-full h-full text-xs uppercase tracking-wider text-muted hover:text-accent transition-colors">
          Directions
        </Link>
      </div>
    </div>
  );
}

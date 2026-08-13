import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <span className="text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
        Error 404
      </span>
      <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
        PAGE NOT FOUND.
      </h1>
      <p className="text-muted max-w-md mx-auto mb-12">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        href="/" 
        className="px-8 py-4 bg-accent text-background font-semibold uppercase tracking-widest text-sm hover:bg-accent-light transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}

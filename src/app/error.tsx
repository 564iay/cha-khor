"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <span className="text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
        Error 500
      </span>
      <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
        SOMETHING WENT WRONG.
      </h1>
      <p className="text-muted max-w-md mx-auto mb-12">
        We apologize for the inconvenience. Our team has been notified.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-8 py-4 border border-border text-foreground font-semibold uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-colors"
        >
          Try Again
        </button>
        <Link 
          href="/" 
          className="px-8 py-4 bg-accent text-background font-semibold uppercase tracking-widest text-sm hover:bg-accent-light transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

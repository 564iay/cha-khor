"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

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
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h2 className="font-display text-4xl mb-4 text-accent">Something went wrong!</h2>
      <p className="text-muted mb-8 max-w-md">
        We apologize for the inconvenience. Our team has been notified.
      </p>
      <Button onClick={() => reset()} variant="outline">
        Try again
      </Button>
    </div>
  );
}

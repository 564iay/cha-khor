import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h2 className="font-display text-4xl md:text-6xl mb-4 text-accent">Page Not Found</h2>
      <p className="text-muted mb-8 max-w-md">
        We couldn't find the page you were looking for. It might have been moved or doesn't exist.
      </p>
      <Button asChild variant="outline">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}

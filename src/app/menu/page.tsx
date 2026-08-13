import { MenuClient } from "./MenuClient";

export default function MenuPage() {
  return (
    <>
      {/* Menu Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 text-center">
        <div className="container mx-auto px-4">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-6 block">
            The Menu
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground max-w-4xl mx-auto">
            SOMETHING FOR EVERY CRAVING.
          </h1>
        </div>
      </section>

      {/* Interactive Menu List */}
      <MenuClient />
    </>
  );
}

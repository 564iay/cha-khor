import Image from "next/image";
import Link from "next/link";

export default function OurStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-6 block">
            Our Story
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground max-w-4xl mx-auto mb-8">
            ROOTED IN TEHATTA.
          </h1>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] w-full border border-border/50 overflow-hidden group">
              <Image
                src="/images/0.-home/interior-room.jpg"
                alt="The Cha Khor Interior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
                A NEW STANDARD FOR FAMILY DINING.
              </h2>
              <div className="space-y-6 text-muted leading-relaxed text-lg">
                <p>
                  The Cha Khor was born from a simple belief: Tehatta deserved a dining experience that combined uncompromising quality with the warmth of true hospitality.
                </p>
                <p>
                  We didn&apos;t set out to reinvent the wheel. We set out to perfect the classics. From our fragrant biryanis to our bold Indo-Chinese woks, every dish is prepared with fresh ingredients, precise technique, and a deep respect for flavor.
                </p>
                <p>
                  Whether you are gathering for a family celebration or stepping in for a quick, comforting meal, our doors are open. This is not just a restaurant; it is a space designed for our community to connect over great food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-background-secondary border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-foreground mb-4">WHAT WE STAND FOR</h2>
            <p className="text-muted max-w-2xl mx-auto">The principles that guide our kitchen and our service every single day.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Value 1 */}
            <div className="p-8 border border-border/50 bg-background flex flex-col items-center text-center group hover:border-accent transition-colors duration-500">
              <div className="w-12 h-12 rounded-full border border-accent/50 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-500">
                01
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">Uncompromising Quality</h3>
              <p className="text-muted">
                No shortcuts. We source fresh ingredients and prepare our dishes with the attention to detail they deserve.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-8 border border-border/50 bg-background flex flex-col items-center text-center group hover:border-accent transition-colors duration-500">
              <div className="w-12 h-12 rounded-full border border-accent/50 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-500">
                02
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">Authentic Flavors</h3>
              <p className="text-muted">
                Honest recipes that respect tradition while delivering the bold, satisfying tastes our guests love.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-8 border border-border/50 bg-background flex flex-col items-center text-center group hover:border-accent transition-colors duration-500">
              <div className="w-12 h-12 rounded-full border border-accent/50 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-500">
                03
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">Community First</h3>
              <p className="text-muted">
                A welcoming atmosphere designed to make every family, group, and individual in Tehatta feel right at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
            EXPERIENCE IT YOURSELF.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/menu" 
              className="px-8 py-4 bg-accent text-background font-semibold uppercase tracking-widest text-sm hover:bg-accent-light transition-colors"
            >
              Explore Our Menu
            </Link>
            <Link 
              href="/visit" 
              className="px-8 py-4 border border-border text-foreground font-semibold uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

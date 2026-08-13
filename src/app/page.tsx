import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { Experience } from "@/components/sections/Experience";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { LocationPreview } from "@/components/sections/LocationPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <SignatureDishes />
      <Experience />
      <MenuPreview />
      <GalleryPreview />
      <LocationPreview />
      <FinalCTA />
    </>
  );
}

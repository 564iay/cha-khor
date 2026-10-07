export const images = {
  homeHero: {
    src: "/images/0.-home/interior-room.jpg",
    alt: "Holiday Restaurant interior",
    isPlaceholder: false,
  },
  introSide: {
    src: "/images/0.-home/people-full.jpg",
    alt: "People enjoying at Holiday Restaurant",
    isPlaceholder: false,
  },
  experience: {
    src: "/images/0.-home/interior-room.jpg", // Fallback to interior since experience dir is empty
    alt: "Warm, inviting restaurant atmosphere",
    isPlaceholder: false,
  },
  finalCta: {
    src: "/images/1.-signature-food/chicken-biriyani.jpg",
    alt: "Close-up of premium food presentation",
    isPlaceholder: false,
  },
};

export const galleryImages = [
  // Signature Food
  { id: "gal-sig-1", src: "/images/1.-signature-food/chicken-biriyani.jpg", category: "food", alt: "Chicken Biryani", isPlaceholder: false, featured: true },
  { id: "gal-sig-2", src: "/images/1.-signature-food/chicken-chowmin.jpg", category: "food", alt: "Chicken Chowmein", isPlaceholder: false, featured: false },
  { id: "gal-sig-3", src: "/images/1.-signature-food/chicken-roll.jpg", category: "food", alt: "Chicken Roll", isPlaceholder: false, featured: false },
  
  // Food Gallery
  { id: "gal-food-1", src: "/images/2.-food-gallery/crispy-chicken.jpg", category: "food", alt: "Crispy Chicken", isPlaceholder: false, featured: true },
  { id: "gal-food-2", src: "/images/2.-food-gallery/chicken-manchurian.jpg", category: "food", alt: "Chicken Manchurian", isPlaceholder: false, featured: false },
  { id: "gal-food-3", src: "/images/2.-food-gallery/paneer-65.jpg", category: "food", alt: "Paneer 65", isPlaceholder: false, featured: false },
  { id: "gal-food-4", src: "/images/2.-food-gallery/fish-fry.jpg", category: "food", alt: "Fish Fry", isPlaceholder: false, featured: false },
  { id: "gal-food-5", src: "/images/2.-food-gallery/cheese-papad.jpg", category: "food", alt: "Cheese Papad", isPlaceholder: false, featured: false },
  { id: "gal-food-6", src: "/images/2.-food-gallery/kachumbar-salad.jpg", category: "food", alt: "Kachumbar Salad", isPlaceholder: false, featured: false },
  { id: "gal-food-7", src: "/images/2.-food-gallery/green-salad.jpg", category: "food", alt: "Green Salad", isPlaceholder: false, featured: false },
  { id: "gal-food-8", src: "/images/2.-food-gallery/mushroom-chilli.jpg", category: "food", alt: "Mushroom Chilli", isPlaceholder: false, featured: false },
  
  // Tea or Drink
  { id: "gal-drink-1", src: "/images/4.-tea-or-drink/adrak-chai.jpg", category: "food", alt: "Adrak Chai", isPlaceholder: false, featured: false },
  { id: "gal-drink-2", src: "/images/4.-tea-or-drink/elaichi-tea.jpg", category: "food", alt: "Elaichi Tea", isPlaceholder: false, featured: false },
  
  // Interior / Restaurant
  { id: "gal-int-1", src: "/images/0.-home/interior-room.jpg", category: "interior", alt: "Interior Room", isPlaceholder: false, featured: true },
  { id: "gal-int-2", src: "/images/0.-home/people-full.jpg", category: "restaurant", alt: "People Dining", isPlaceholder: false, featured: false },
  
  // Exterior
  { id: "gal-ext-1", src: "/images/5.-exterior/images.jpg", category: "restaurant", alt: "Exterior", isPlaceholder: false, featured: false },
];

// Needs owner verification before prices can be displayed.
export const menuCategories = [
  {
    id: "starters",
    name: "Starters",
    items: [
      { id: "crispy-chicken", name: "Crispy Chicken", description: "Crispy and golden outside, juicy inside.", price: null, image: "/images/2. food gallery/crispy chicken.webp" },
      { id: "fish-fry", name: "Fish Fry", description: "Crispy fried fish.", price: null, image: "/images/2. food gallery/fish fry.webp" },
      { id: "paneer-65", name: "Paneer 65", description: "Spicy and tangy fried paneer.", price: null, image: "/images/2. food gallery/paneer 65.jfif" },
      { id: "cheese-papad", name: "Cheese Papad", description: "Crispy papad loaded with cheese.", price: null, image: "/images/2. food gallery/cheese papad.jfif" },
      { id: "soup", name: "Soup", description: "Warm and comforting.", price: null },
    ]
  },
  {
    id: "indo-chinese",
    name: "Indo-Chinese",
    items: [
      { id: "chicken-chow-mein", name: "Chicken Chow Mein", description: "Stir-fried noodles with chicken, vegetables, and savory sauce.", price: null, image: "/images/1. signature food/chicken chowmin.jfif" },
      { id: "chicken-manchurian", name: "Chicken Manchurian", description: "Chicken tossed in dark soy sauce and spices.", price: null, image: "/images/2. food gallery/chicken manchurian.jfif" },
      { id: "mushroom-chilli", name: "Mushroom Chilli", description: "Spicy Indo-Chinese style mushrooms.", price: null, image: "/images/2. food gallery/mushroom chilli.jfif" },
    ]
  },
  {
    id: "rice",
    name: "Rice & Biryani",
    items: [
      { id: "chicken-biryani", name: "Chicken Biryani", description: "Fragrant rice with tender chicken and aromatic spices.", price: null, image: "/images/1. signature food/chicken biriyani.jfif" },
      { id: "chicken-fried-rice", name: "Chicken Fried Rice", description: "Classic fried rice tossed with chicken.", price: null },
    ]
  },
  {
    id: "salads",
    name: "Salads",
    items: [
      { id: "kachumbar-salad", name: "Kachumbar Salad", description: "Fresh chopped vegetable salad.", price: null, image: "/images/2. food gallery/kachumbar salad.jpg" },
      { id: "green-salad", name: "Green Salad", description: "Fresh green salad.", price: null, image: "/images/2. food gallery/green salad.jfif" },
    ]
  },
  {
    id: "rolls",
    name: "Rolls & Quick Bites",
    items: [
      { id: "chicken-roll", name: "Chicken Roll", description: "Flaky paratha wrapped around spiced chicken filling.", price: null, image: "/images/1. signature food/chicken roll.jfif" },
    ]
  },
  {
    id: "beverages",
    name: "Beverages",
    items: [
      { id: "adrak-chai", name: "Adrak Chai", description: "Freshly brewed ginger tea.", price: null, image: "/images/4. tea or drink/adrak chai.jfif" },
      { id: "elaichi-tea", name: "Elaichi Tea", description: "Aromatic cardamom tea.", price: null, image: "/images/4. tea or drink/elaichi tea.avif" },
      { id: "tea", name: "Tea", description: "Classic tea.", price: null, image: "/images/4. tea or drink/tea.jfif" },
      { id: "coffee", name: "Coffee", description: "Hot coffee.", price: null, image: "/images/4. tea or drink/coffee.jfif" },
    ]
  }
];

// Signature category created dynamically for the home page highlight
export const signatureItems = [
  "chicken-biryani",
  "chicken-chow-mein",
  "chicken-roll",
  "crispy-chicken",
];

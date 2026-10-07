import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { MobileActionBar } from "@/components/navigation/MobileActionBar";
import { restaurant } from "@/data/restaurant";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourrestaurant.com"),
  title: {
    template: "%s | Holiday Restaurant",
    default: "Holiday Restaurant | Premium Dining in Tehatta",
  },
  description: "Holiday Restaurant in Tehatta, West Bengal. Discover a welcoming local dining destination on Tehatta Road.",
  keywords: ["Holiday Restaurant Tehatta", "restaurant in Tehatta", "Tehatta restaurant", "family restaurant Tehatta", "restaurants near Tehatta"],
  openGraph: {
    title: "Holiday Restaurant | Family Restaurant",
    description: "Holiday Restaurant in Tehatta, West Bengal. Discover a welcoming local dining destination on Tehatta Road.",
    url: "https://yourrestaurant.com",
    siteName: "Holiday Restaurant",
    images: [
      {
        url: "/images/0.-home/interior-room.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": restaurant.name,
    "image": "https://yourrestaurant.com/images/0.-home/interior-room.jpg",
    "@id": "https://yourrestaurant.com",
    "url": "https://yourrestaurant.com",
    "telephone": restaurant.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tehatta Road",
      "addressLocality": restaurant.city,
      "addressRegion": restaurant.state,
      "postalCode": restaurant.pinCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 0.0000, // Replace with your latitude
      "longitude": 0.0000 // Replace with your longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "23:00"
    },
    "servesCuisine": ["Indian", "Indo-Chinese"]
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${karla.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
        <SiteHeader />
        <main className="pt-20 pb-16 md:pb-0 min-h-[calc(100vh-5rem)]">
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}

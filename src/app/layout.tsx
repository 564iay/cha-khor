import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import { SiteHeader } from "@/components/navigation/SiteHeader";
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
  metadataBase: new URL("https://thechakhor.com"),
  title: {
    template: "%s | The Cha Khor",
    default: "The Cha Khor | Premium Family Restaurant in Tehatta",
  },
  description: "Experience Tehatta's premier dining destination. Authentic Indian flavors, vibrant Indo-Chinese dishes, and an unforgettable family atmosphere.",
  keywords: ["Restaurant in Tehatta", "Best Biryani Tehatta", "The Cha Khor", "Family Dining", "Tehatta Food", "Indo-Chinese"],
  openGraph: {
    title: "The Cha Khor | Family Restaurant",
    description: "Experience Tehatta's premier dining destination.",
    url: "https://thechakhor.com",
    siteName: "The Cha Khor",
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
    "image": "https://thechakhor.com/images/0.-home/interior-room.jpg",
    "@id": "https://thechakhor.com",
    "url": "https://thechakhor.com",
    "telephone": restaurant.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tehatta",
      "addressLocality": restaurant.city,
      "addressRegion": restaurant.state,
      "postalCode": restaurant.pinCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.7226, // Approximate for Tehatta
      "longitude": 88.5284
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
        <MobileActionBar />
      </body>
    </html>
  );
}

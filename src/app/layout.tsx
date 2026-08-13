import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { MobileActionBar } from "@/components/navigation/MobileActionBar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
        url: "/images/0. home/interior room.jfif",
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
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
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

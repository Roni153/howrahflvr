import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Howrah Flavors | Authentic Indian Dining in Howrah",
  description:
    "Howrah Flavors offers authentic Indian cuisine in a warm, elegant setting. Reserve your table and explore our daily curated menu.",
  openGraph: {
    title: "Howrah Flavors",
    description:
      "Authentic Flavors from the Heart of Howrah. Explore our menu and reserve your table today.",
    url: "https://howrah-flavors.example.com",
    siteName: "Howrah Flavors",
    images: [
      {
        url: "https://images.unsplash.com/photo-1604908176997-125188f2c3b5",
        width: 1200,
        height: 630,
        alt: "Howrah Flavors Restaurant"
      }
    ],
    type: "website"
  },
  metadataBase: new URL("https://howrah-flavors.example.com")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-brand-dark">
        <AppRouterCacheProvider>
          <Providers>
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

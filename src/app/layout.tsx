import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FavoritesProvider } from '@/context/FavoritesContext';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elo - Run The Game",
  description: "Premium athletic wear for the modern athlete.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-black`}
      >
        <FavoritesProvider>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </FavoritesProvider>
        <Footer />
      </body>
    </html>
  );
}

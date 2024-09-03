import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CartProvider from "@/components/cart/cart-provider";
import { Inconsolata } from "next/font/google";

export const metadata: Metadata = {
  title: "george's junk",
  description:
    "website to sell items/products that geroge doesn't want anymore",
};

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} flex flex-col justify-between min-h-screen text-black`}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

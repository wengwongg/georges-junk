import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CartProvider from "@/cart-provider";
import { generateRandomKey } from "@/utils";

export const metadata: Metadata = {
  title: "george's junk",
  description:
    "website to sell items/products that geroge doesn't want anymore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between min-h-screen text-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

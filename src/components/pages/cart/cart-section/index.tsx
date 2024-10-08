"use client";

import { useCart } from "@/components/cart/cart-context";
import { Product, ProductImage } from "@prisma/client";
import { useEffect, useState } from "react";
import CartItem from "../cart-item";
import { getCldImageUrl } from "next-cloudinary";
import ClearCartButton from "../clear-cart-button";
import CheckoutButton from "../checkout-button";
import { ProductWithImages } from "@/types";

export default function CartSection() {
  const { cartItems } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCartItemEntitiesFromDb() {
      try {
        const fetchedProducts = await Promise.all(
          cartItems.map(async (id) => {
            const response = await fetch(`/api/product/${id}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch data for product of id ${id}.`);
            }
            const data = await response.json();
            return data.data as ProductWithImages;
          })
        );

        // get preview images for each product too.
        const fetchedPreviewImages = fetchedProducts.map((product) => {
          const images = product.images as ProductImage[];

          if (images.length > 0) {
            return getCldImageUrl({ src: images[0].publicId });
          } else {
            return "/notavailable.png";
          }
        });

        setProducts(fetchedProducts);
        setPreviewImages(fetchedPreviewImages);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCartItemEntitiesFromDb();
  }, [cartItems]);

  if (loading) {
    return (
      <div className="flex flex-col items-center">
        <span>fetching your items</span>
        <div className="loading loading-dots loading-lg animate-rainbow-text"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const total = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="flex flex-col gap-5">
      {products.length !== 0 ? (
        <>
          <div className="ml-auto">
            <ClearCartButton />
          </div>
          <div className="flex flex-col gap-5">
            {products.map((product, index) => (
              <CartItem
                key={product.id}
                text={product.name}
                image={previewImages[index]}
                price={product.price}
                id={product.id}
              />
            ))}
          </div>
          <div className="flex flex-col">
            <p className="text-right text-lg">
              <b>total:</b> £{total}
            </p>
            <CheckoutButton priceId={"price_1Pwj0cP4iyIrotyiomZ8coVn"} />
          </div>
        </>
      ) : (
        "you have no items in your cart :("
      )}
    </div>
  );
}

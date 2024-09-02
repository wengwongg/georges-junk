"use client";

import ShopItem from "@/components/shop-item";
import { Product } from "@prisma/client";
import { getCldImageUrl } from "next-cloudinary";
import { useEffect, useState } from "react";

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productImages, setProductImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.data);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchProductImages() {
      const responses = await Promise.all(
        products.map((product) =>
          fetch(`/api/product-images?productId=${product.id}`)
        )
      );

      const data = await Promise.all(
        responses.map((response) => response.json())
      );

      const fetchedImagesArray = data.map((data) => data.data);

      const previewImages = fetchedImagesArray.map((fetchedImages) =>
        fetchedImages.length > 0
          ? getCldImageUrl({ src: fetchedImages[0].publicId })
          : "/notavailable.png"
      );

      setProductImages(previewImages);
      setLoading(false);
    }

    if (products.length > 0) fetchProductImages();
  }, [products]);

  return (
    <main className="mb-auto px-5">
      <div className="flex gap-4 flex-wrap justify-center">
        {loading ? (
          <>
            <span className="loading loading-spinner loading-sm"></span>
          </>
        ) : (
          products.map((product, index) => (
            <ShopItem
              key={product.id}
              name={product.name}
              id={product.id}
              price={product.price}
              image={productImages[index]}
            />
          ))
        )}
      </div>
    </main>
  );
}

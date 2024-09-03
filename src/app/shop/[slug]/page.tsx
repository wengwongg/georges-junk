"use client";

import CarouselButton from "@/components/carousel-button";
import { getCldImageUrl } from "next-cloudinary";
import { convertNumberTo2Dp, replaceSpaceWithDashes } from "@/utils";
import PrimaryButton from "@/components/primary-button";
import SecondaryButton from "@/components/secondary-button";
import { Product, ProductImage } from "@prisma/client";
import { useEffect, useState } from "react";
import { useCart } from "@/cart-context";
import Modal from "@/components/modal";

export default function ShopItemPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const { addToCart, cartItems } = useCart();

  const slug = params.slug;
  const productId = Number(slug);

  function handleAddToCart() {
    const modal = document.getElementById(
      "cart-action-modal"
    ) as HTMLDialogElement;
    modal?.showModal();

    setTimeout(() => {
      addToCart(productId);
    }, 1000);
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`/api/product/${productId}`);
      const data = await response.json();
      setProduct(data.data);
    }

    fetchProduct();
  }, []);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        `/api/product-images?productId=${productId}`
      );
      const data = await response.json();
      const fetchedImages = data.data;

      const imageUrls =
        fetchedImages.length > 0
          ? fetchedImages.map((image: ProductImage) =>
              getCldImageUrl({ src: image.publicId })
            )
          : ["/notavailable.png"];

      setImages(imageUrls);
      setLoading(false);
    }

    fetchImages();
  }, [product]);

  const productNameWithDashes = replaceSpaceWithDashes(
    product?.name ?? "Product name not available."
  );

  const productPoints = product?.description.split(";") ?? [];

  if (loading) {
    return (
      <main className="mb-auto px-5">
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      </main>
    );
  }

  return (
    <main className="my-auto px-5 flex justify-center items-center sm:items-start flex-col sm:flex-row gap-2 sm:gap-5 md:gap-8">
      <div className="w-max">
        <div className="carousel snap-none w-[22rem] h-[30rem] rounded border border-gray-700">
          {images.map((image, index) => (
            <div
              key={index}
              id={`${productNameWithDashes}-item${index + 1}`}
              className={`carousel-item w-full bg-cover bg-center`}
              style={{
                backgroundImage: `url('${image}')`,
              }}
            ></div>
          ))}
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          {images.map((_, index) => (
            <CarouselButton
              key={index}
              index={index}
              productName={productNameWithDashes}
            />
          ))}
        </div>
      </div>

      <div className="w-full sm:w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {product?.name ?? "Product name not available."}
          </h2>
          <span className="font-semibold text-green-500 text-xl">
            £
            {product?.price !== undefined
              ? convertNumberTo2Dp(product?.price)
              : "Price not available."}
          </span>
        </div>
        <ul className="list-image-[url('/sparkle.svg')] list-outside mb-8 ml-4 space-y-4">
          {productPoints?.map((point, index) => (
            <li key={index} className="pl-1">
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <PrimaryButton text="add to cart" onClick={handleAddToCart} />
          <SecondaryButton text="ask about this" />
        </div>
      </div>
      {!cartItems.includes(productId) ? (
        <Modal
          id="cart-action-modal"
          heading="Item added to cart"
          message="You have successfully added this item to your cart."
        />
      ) : (
        <Modal
          id="cart-action-modal"
          heading="Item already in cart"
          message="This item is already in your cart."
        />
      )}
    </main>
  );
}

"use client";

import { useCart } from "@/components/cart/cart-context";
import PrimaryButton from "@/components/layout/primary-button";

interface Props {
  productId: number;
  modalId: string;
}

export default function AddToCartButton({ productId, modalId }: Props) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    modal?.showModal();

    setTimeout(() => {
      addToCart(productId);
    }, 1000);
  }

  return <PrimaryButton onClick={handleAddToCart} text={"add to cart"} />;
}

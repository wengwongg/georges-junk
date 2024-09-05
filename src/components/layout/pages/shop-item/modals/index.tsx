"use client";

import { useCart } from "@/components/cart/cart-context";
import Modal from "@/components/modal";
import { useEffect, useState } from "react";

interface Props {
  productId: number;
}

export default function Modals({ productId }: Props) {
  const { cartItems } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const [modalCloseWasClicked, setModalCloseWasClicked] = useState(false);

  // at first render, make sure that we know if the product is in the cart.
  useEffect(() => {
    setIsInCart(cartItems.includes(productId));
  }, []);

  // after first render, when the modal get closed, change the isInCart state.
  useEffect(() => {
    if (modalCloseWasClicked) {
      setTimeout(() => setIsInCart(cartItems.includes(productId)), 500);
    }
  }, [modalCloseWasClicked]);

  return (
    <Modal
      id="cart-action-modal"
      heading={isInCart ? "Item already in cart" : "Item added to cart"}
      message={
        isInCart
          ? "You already added this item to your cart."
          : "You have successfully added this item to your cart."
      }
      onClose={() => setModalCloseWasClicked(true)}
    />
  );
}

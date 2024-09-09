"use client";

import { useCart } from "@/components/cart/cart-context";
import NeutralButton from "@/components/neutral-button";

export default function ClearCartButton() {
  const { clearCart } = useCart();

  return (
    <NeutralButton text="clear cart" onClick={() => clearCart()} size="sm" />
  );
}

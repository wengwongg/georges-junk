"use client";

import { useCart } from "@/components/cart/cart-context";

export default function ClearCartButton() {
  const { clearCart } = useCart();

  return (
    <button
      className="btn btn-sm btn-ghost border-gray-700 hover:border-gray-700 shadow"
      onClick={() => clearCart()}
    >
      clear cart
    </button>
  );
}

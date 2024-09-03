"use client";

import { createContext, useContext } from "react";

export type CartContextType = {
  cartItems: number[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

function noop() {}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: noop,
  removeFromCart: noop,
  clearCart: noop,
});

export function useCart() {
  return useContext(CartContext);
}

export default CartContext;

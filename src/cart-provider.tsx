"use client";

import React, { useEffect, useState } from "react";
import CartContext, { CartContextType } from "./cart-context";

interface Props {
  storeKey: string;
  children: React.ReactNode;
}

const CartProvider: React.FC<Props> = ({ children, storeKey }) => {
  const [cartItems, setCartItems] = useState<number[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem(`cart_${storeKey}`);
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, [storeKey]);

  useEffect(() => {
    localStorage.setItem(`cart_${storeKey}`, JSON.stringify(cartItems));
  }, [cartItems, storeKey]);

  const addToCart = (id: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item === id);

      if (!existingItem) {
        return [...prevItems, id];
      } else {
        return prevItems;
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartContextValue: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

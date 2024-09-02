"use client";

import React, { useEffect, useState } from "react";
import CartContext, { CartContextType } from "./cart-context";

interface Props {
  children: React.ReactNode;
}

const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<number[]>(() => {
    const storedCartItems = localStorage.getItem("cart");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

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

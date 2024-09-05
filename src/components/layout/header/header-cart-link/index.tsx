"use client";

import { useCart } from "@/components/cart/cart-context";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderCartLink() {
  const { cartItems } = useCart();
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    setCartLength(cartItems.length);
  }, [cartItems]);

  return (
    <Link className="hover:underline" href="/cart">
      cart ({cartLength})
    </Link>
  );
}

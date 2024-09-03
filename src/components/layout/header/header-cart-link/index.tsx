"use client";

import { useCart } from "@/components/cart/cart-context";
import Link from "next/link";

export default function HeaderCartLink() {
  const { cartItems } = useCart();

  return (
    <Link className="hover:underline" href="/cart">
      cart ({cartItems.length})
    </Link>
  );
}

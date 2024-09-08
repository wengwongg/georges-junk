"use client";

import PrimaryButton from "@/components/primary-button";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

interface Props {
  priceId: string;
}

export default function CheckoutButton({ priceId }: Props) {
  const handleCheckout = async () => {
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
    );

    if (!stripe) {
      return;
    }

    try {
      const response = await axios.post("/api/stripe/checkout", {
        priceId: priceId,
      });
      const data = response.data;
      if (!data.ok) throw new Error("Something went wrong with checking out");

      await stripe.redirectToCheckout({
        sessionId: data.result.id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return <PrimaryButton text="checkout" onClick={handleCheckout} />;
}

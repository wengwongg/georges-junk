import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
  try {
    const incomingData = await request.json();
    const priceId = incomingData.priceId;

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.NEXT_BASE_URL}`,
        cancel_url: `${process.env.NEXT_BASE_URL}`,
        metadata: {
          priceId,
        },
      });

    return NextResponse.json({ result: checkoutSession, ok: true });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

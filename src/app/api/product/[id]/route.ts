import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId = params.id;

  if (!productId) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(productId),
      },
    });

    if (!product) {
      return NextResponse.json(
        { error: `Product with ID ${Number(productId)} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "ok", data: product }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Unable to fetch product" },
      { status: 500 }
    );
  }
}

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("productId");

  if (!productId) {
    return NextResponse.json(
      { error: "productId is required" },
      { status: 400 }
    );
  }

  try {
    const images = await prisma.productImage.findMany({
      where: {
        productId: Number(productId),
      },
    });
    return NextResponse.json({ message: "ok", data: images }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: `Unable to fetch images associated to product id ${Number(
          productId
        )}`,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  const incomingData = await req.json();

  try {
    await prisma.productImage.create({ data: incomingData });
    return NextResponse.json(
      { message: "created product image record" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error creating product image record: ${error}` },
      { status: 500 }
    );
  }
}

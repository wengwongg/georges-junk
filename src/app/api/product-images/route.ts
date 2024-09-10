import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const productImages = await prisma.productImage.findMany();
    return NextResponse.json(
      { message: "ok", data: productImages },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error fetching product images: ${error}` },
      { status: 500 }
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

export async function PUT(req: NextRequest) {
  const incomingData = await req.json();
  console.log(incomingData);

  try {
    await prisma.productImage.update({
      where: { id: incomingData.id },
      data: {
        productId: incomingData.productId,
      },
    });
    return NextResponse.json(
      { message: "updated product image record" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error updating product image record: ${error}` },
      { status: 500 }
    );
  }
}

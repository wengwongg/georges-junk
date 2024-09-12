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
      include: {
        images: true,
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

export async function DELETE(
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
    const product = await prisma.product.delete({
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
      { message: "Unable to delete product" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId = Number(params.id);

  if (!productId) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  const incomingData = await req.json();

  try {
    // first update the product record itself
    await prisma.product.update({
      where: { id: productId },
      data: {
        name: incomingData.name,
        description: incomingData.description,
        price: incomingData.price,
        purchased: incomingData.purchased,
      },
    });

    // then update the product image records
    await prisma.productImage.updateMany({
      where: { productId },
      data: {
        productId: null,
      },
    });

    await prisma.productImage.updateMany({
      where: {
        id: { in: incomingData.imageIds.map((id: string) => Number(id)) },
      },
      data: {
        productId,
      },
    });

    return NextResponse.json(
      { message: "updated product record" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error updating product record: ${error}` },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/client";

export async function GET(req: NextRequest) {
  const result = await prisma.product.findMany();
  return NextResponse.json({ message: "ok", data: result }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const incomingData = await req.json();

  try {
    const createdProduct = await prisma.product.create({ data: incomingData });
    return NextResponse.json(
      { message: "created product record", data: { id: createdProduct.id } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error creating product record: ${error}` },
      { status: 500 }
    );
  }
}

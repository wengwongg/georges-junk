import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const result = await prisma.product.findMany();
  return NextResponse.json({ message: "ok", data: result }, { status: 200 });
}

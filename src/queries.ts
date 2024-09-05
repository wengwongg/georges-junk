import { prisma } from "@/client";

export async function getProducts() {
  return await prisma.product.findMany();
}

export async function getProductImagesByProductId(productId: number) {
  return await prisma.productImage.findMany({ where: { productId } });
}

export async function getProductById(productId: number) {
  return await prisma.product.findUnique({ where: { id: productId } });
}

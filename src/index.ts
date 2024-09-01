import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllProducts() {
  try {
    const allProducts = await prisma.product.findMany();
    return allProducts;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getProductImagesByProductId(productId: number) {
  try {
    const images = await prisma.productImage.findMany({
      where: {
        productId,
      },
    });
    return images;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

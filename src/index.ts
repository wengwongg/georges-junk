import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const allProducts = await prisma.product.findMany();
  console.dir(allProducts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

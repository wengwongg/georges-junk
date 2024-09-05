import PageWrapper from "@/components/layout/page-wrapper";
import TemplateSection from "@/components/section";
import ShopItem from "@/components/shop-item";
import { Product, ProductImage } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { getCldImageUrl } from "next-cloudinary";

const prisma = new PrismaClient();

export default async function ShopPage() {
  // fetch data
  const products: Product[] = await prisma.product.findMany();
  const productImages: ProductImage[][] = await Promise.all(
    products.map((product: Product) =>
      prisma.productImage.findMany({ where: { productId: product.id } })
    )
  );
  const previewImages: string[] = productImages.map(
    (productImagesForAProduct) =>
      productImagesForAProduct.length > 0
        ? getCldImageUrl({ src: productImagesForAProduct[0].publicId })
        : "/notavailable.png"
  );

  return (
    <PageWrapper>
      <TemplateSection>
        <div className="flex gap-4 flex-wrap justify-center">
          {products.map((product, index) => (
            <ShopItem
              key={product.id}
              name={product.name}
              id={product.id}
              price={product.price}
              image={previewImages[index]}
              sold={product.purchased}
            />
          ))}
        </div>
      </TemplateSection>
    </PageWrapper>
  );
}

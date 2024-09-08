import PageWrapper from "@/components/layout/page-wrapper";
import TemplateSection from "@/components/template-section";
import ShopItem from "@/components/shop-item";
import { getProductImagesByProductId, getProducts } from "@/queries";
import { Product, ProductImage } from "@prisma/client";
import { getCldImageUrl } from "next-cloudinary";

export default async function ShopPage() {
  const products: Product[] = await getProducts();
  const productImages: ProductImage[][] = await Promise.all(
    products.map((product: Product) => getProductImagesByProductId(product.id))
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

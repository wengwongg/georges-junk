import ShopItem from "@/components/shop-item";
import { getAllProducts, getProductImagesByProductId } from "@/index";
import { getCldImageUrl } from "next-cloudinary";

export default async function ShopPage() {
  const products = await getAllProducts();
  const productImages = await Promise.all(
    products.map((product) => getProductImagesByProductId(product.id))
  );
  const previewImages = productImages.map((images) => images[0].publicId);

  return (
    <main className="mb-auto px-5">
      <div className="flex gap-4 flex-wrap justify-center">
        {products.map((product, index) => (
          <ShopItem
            key={product.id}
            name={product.name}
            id={product.id}
            price={product.price}
            image={getCldImageUrl({ src: previewImages[index] })}
          />
        ))}
      </div>
    </main>
  );
}

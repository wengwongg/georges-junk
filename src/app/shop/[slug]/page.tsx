import CarouselButton from "@/components/carousel-button";
import { getCldImageUrl } from "next-cloudinary";
import { convertNumberTo2Dp } from "@/utils";
import AddToCartButton from "@/components/pages/shop-item/add-to-cart-button";
import { getProductById, getProductImagesByProductId } from "@/queries";
import PageWrapper from "@/components/layout/page-wrapper";
import Modal from "@/components/modal";
import Carousel from "@/components/pages/shop-item/carousel-tracker";

export default async function ShopItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const productId = Number(params.slug);
  const product = await getProductById(productId);
  let productImages = (await getProductImagesByProductId(productId)).map(
    (productImage) => getCldImageUrl({ src: productImage.publicId })
  );
  if (productImages.length === 0) {
    productImages = ["/notavailable.png"];
  }

  const productPoints = product?.description.split(";") ?? [];

  return (
    <PageWrapper center>
      <section className="w-full flex justify-center py-10">
        <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:items-start gap-2 sm:gap-5 md:gap-8 mx-4">
          <div className="w-full sm:max-w-sm">
            <Carousel images={productImages} />
          </div>

          <div className="w-full sm:max-w-sm text-left">
            <div className="flex justify-between items-center mb-4 gap-8">
              <h2 className="text-2xl font-bold">
                {product?.name ?? "product name unknown."}
              </h2>
              <span className="font-semibold text-green-500 text-xl">
                £
                {product?.price !== undefined
                  ? convertNumberTo2Dp(product.price)
                  : "price unknown."}
              </span>
            </div>
            <ul className="list-image-[url('/sparkle.svg')] list-outside mb-8 ml-6 space-y-4">
              {productPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="flex gap-3">
              <AddToCartButton
                productId={productId}
                modalId="cart-action-modal"
              />
            </div>
          </div>
        </div>
      </section>

      <Modal
        id="cart-action-modal"
        heading="the item is in your cart."
        message="feel free to look around some more or checkout :)"
      />
    </PageWrapper>
  );
}

import CarouselButton from "@/components/carousel-button";
import { getProductByProductId, getProductImagesByProductId } from "@/index";
import { getCldImageUrl } from "next-cloudinary";
import { useParams } from "next/navigation";

export default async function ShopItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const product = await getProductByProductId(Number(slug));
  const images = await getProductImagesByProductId(Number(slug));
  const imagePublicIds = images.map((images) => images.publicId);
  const productNameWithDashes = product?.name.replace(" ", "-");

  const productPoints = product?.description.split(";");

  return (
    <main className="my-auto px-5 flex justify-center items-center sm:items-start flex-col sm:flex-row gap-2 sm:gap-5 md:gap-8">
      <div className="w-max">
        <div className="carousel snap-none w-[22rem] h-[30rem] rounded border border-gray-500">
          {imagePublicIds.map((publicId, index) => (
            <div
              key={index}
              id={`${productNameWithDashes}-item${index + 1}`}
              className={`carousel-item w-full bg-cover`}
              style={{
                backgroundImage: `url('${getCldImageUrl({ src: publicId })}')`,
              }}
            ></div>
          ))}
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          {imagePublicIds.map((_, index) => (
            <CarouselButton
              key={index}
              index={index}
              productName={productNameWithDashes ?? ""}
            />
          ))}
        </div>
      </div>

      <div className="w-full sm:w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{product?.name}</h2>
          <span className="font-semibold text-green-500 text-xl">
            £{product?.price}
          </span>
        </div>
        <ul className="list-image-[url('/sparkle.svg')] list-outside mb-8 ml-4 space-y-4">
          {productPoints?.map((point, index) => (
            <li key={index} className="pl-1">
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <button className="btn btn-primary">add to cart</button>
          <button className="btn btn-secondary">inquire</button>
        </div>
      </div>
    </main>
  );
}

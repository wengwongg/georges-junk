import Link from "next/link";

interface Props {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ShopItem({ id, name, price, image }: Props) {
  return (
    <div className="w-[15rem] text-center transition-all lg:hover:scale-[1.025]">
      <Link href={`/shop/${id}`}>
        <div
          className={`w-full h-72 rounded mb-2 shadow-lg bg-cover border border-gray-500`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </Link>
      <h3 className="font-bold">{name}</h3>
      <h4>£{price}</h4>
    </div>
  );
}

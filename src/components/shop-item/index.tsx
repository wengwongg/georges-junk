import { convertNumberTo2Dp } from "@/utils";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  price: number;
  image: string;
  sold: boolean;
}

export default function ShopItem({ id, name, price, image, sold }: Props) {
  return (
    <div className="w-[15rem] text-center transition-all lg:hover:scale-[1.025]">
      <Link href={!sold ? `/shop/${id}` : ""}>
        <div
          className={`relative w-full h-72 rounded mb-2 shadow-lg bg-cover border border-gray-700 bg-center`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {sold && (
            <div className="absolute inset-0 bg-black opacity-75 flex items-center justify-center">
              <div className="text-red-600 text-3xl font-bold">
                {"SOLD!".split("").map((char, index) => (
                  <span
                    key={index}
                    className="relative animate-wavy"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Link>
      <h3 className={`font-bold ${sold && "line-through"}`}>{name}</h3>
      <h4 className={sold ? "line-through" : ""}>
        £{convertNumberTo2Dp(price)}
      </h4>
    </div>
  );
}

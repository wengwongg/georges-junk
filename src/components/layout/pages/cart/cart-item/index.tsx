import { useCart } from "@/components/cart/cart-context";
import SecondaryButton from "@/components/secondary-button";
import { convertNumberTo2Dp } from "@/utils";

interface Props {
  text: string;
  image: string;
  price: number;
  id: number;
}

export default function CartItem({ text, image, price, id }: Props) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between gap-3 sm:gap-6 flex-col sm:flex-row">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
        <div
          className={`min-w-40 h-52 bg-cover border border-gray-700 rounded shadow`}
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="sm:text-left w-full max-w-sm">
          <h3 className="font-bold">{text}</h3>
          <p>Price: ${convertNumberTo2Dp(price)}</p>
        </div>
      </div>

      <SecondaryButton text="remove" onClick={() => removeFromCart(id)} />
    </div>
  );
}

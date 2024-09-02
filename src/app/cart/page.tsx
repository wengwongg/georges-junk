import CartItem from "@/components/cart-item";

export default function CartPage() {
  return (
    <main className="mb-auto flex items-center flex-col">
      <h2 className="font-bold text-xl mb-3">Cart</h2>
      <CartItem />
    </main>
  );
}

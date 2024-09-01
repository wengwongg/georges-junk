import ShopItem from "@/components/shop-item";

export default function ShopPage() {
  return (
    <main className="mb-auto px-5">
      <div className="flex gap-4 flex-wrap justify-center">
        <ShopItem
          name="adidas sambas"
          id={1}
          price={50}
          image="/sambas1.jpeg"
        />
        <ShopItem
          name="carharrt jacket"
          id={2}
          price={200}
          image="/carrhart.jpeg"
        />
        <ShopItem
          name="mechanical keyboard"
          id={2}
          price={200}
          image="/keyboard.jpeg"
        />
      </div>
    </main>
  );
}

import ShopItem from "@/components/shop-item";

export default function ShopPage() {
  return (
    <main className="mb-auto">
      <div className="flex gap-4 flex-wrap justify-center px-2">
        <ShopItem name="adidas sambas" id={1} price={50} image="/sambas.jpeg" />
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

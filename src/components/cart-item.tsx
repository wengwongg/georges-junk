export default function CartItem() {
  return (
    <div className="flex gap-3 items-center">
      <div
        className={`w-20 h-28 bg-cover border border-gray-700 rounded`}
        style={{ backgroundImage: `url('/sambas1.jpeg')` }}
      ></div>
      <div>
        <h3 className="font-bold">Item Name</h3>
        <p>Price: $50</p>
      </div>
    </div>
  );
}

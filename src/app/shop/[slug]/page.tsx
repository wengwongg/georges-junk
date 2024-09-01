"use client";

export default function ShopItemPage() {
  return (
    <main className="my-auto px-5 flex justify-center items-center sm:items-start flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8">
      <div className="w-max">
        <div className="carousel snap-none w-[22rem] h-[30rem] rounded border border-gray-500">
          <div
            id="item1"
            className={`carousel-item w-full bg-cover`}
            style={{ backgroundImage: `url('/sambas1.jpeg')` }}
          ></div>
          <div
            id="item2"
            className={`carousel-item w-full bg-cover`}
            style={{ backgroundImage: `url('/sambas2.jpeg')` }}
          ></div>
          <div
            id="item3"
            className={`carousel-item w-full bg-cover`}
            style={{ backgroundImage: `url('/sambas3.jpeg')` }}
          ></div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <button
            onClick={() =>
              document
                ?.getElementById("item1")
                ?.scrollIntoView({ behavior: "smooth", block: "nearest" })
            }
            className="btn btn-xs btn-ghost border border-gray-500"
          >
            1
          </button>
          <button
            onClick={() =>
              document
                ?.getElementById("item2")
                ?.scrollIntoView({ behavior: "smooth", block: "nearest" })
            }
            className="btn btn-xs btn-ghost border border-gray-500"
          >
            2
          </button>
          <button
            onClick={() =>
              document
                ?.getElementById("item3")
                ?.scrollIntoView({ behavior: "smooth", block: "nearest" })
            }
            className="btn btn-xs btn-ghost border border-gray-500"
          >
            3
          </button>
        </div>
      </div>

      <div className="w-full sm:w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">adidas sambas</h2>
          <span className="font-semibold text-green-500 text-xl">$200</span>
        </div>
        <ul className="list-image-[url('/sparkle.svg')] list-inside mb-8">
          <li>
            <span className="ml-1">this is a very good shoe</span>
          </li>
          <li>
            <span className="ml-1">this is a very good shoe</span>
          </li>
          <li>
            <span className="ml-1">this is a very good shoe</span>
          </li>
        </ul>
        <div className="flex gap-3">
          <button className="btn btn-primary">add to cart</button>
          <button className="btn btn-secondary">inquire</button>
        </div>
      </div>
    </main>
  );
}

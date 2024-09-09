"use client";

import NeutralButton from "@/components/neutral-button";
import PrimaryButton from "@/components/primary-button";
import SecondaryButton from "@/components/secondary-button";
import { chunkArray, convertNumberTo2Dp, truncateString } from "@/utils";
import { Product } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminProductsPage() {
  const [currentBatch, setCurrentBatch] = useState(0);
  const [chunkedProducts, setChunkedProducts] = useState<Product[][]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products data from endpoint.");
        }
        const data = await response.json();
        const productsData = data.data as Product[];
        setChunkedProducts(chunkArray(productsData, 8));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const flattenedProducts = chunkedProducts.flat();
  const filteredProducts = flattenedProducts.filter((product) =>
    product.name.includes(searchValue)
  );

  const productRow = (product: Product) => (
    <tr key={product.id} className="border border-gray-600">
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{truncateString(product.description, 65)}</td>
      <td>{convertNumberTo2Dp(product.price)}</td>
      <td>{product.purchased ? "yes" : "no"}</td>
      <td className="text-right">
        <NeutralButton text="edit/view" size="sm" />
      </td>
    </tr>
  );

  if (isLoading) {
    return (
      <div className="flex flex-col items-center">
        <span>fetching products from db</span>
        <div className="loading loading-dots loading-lg animate-rainbow-text"></div>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">all products</h2>
      <div className="flex flex-row items-center justify-between w-[60rem] mx-auto mb-3">
        <div className="flex gap-2">
          <input
            id="search"
            type="text"
            placeholder="search product name"
            className="input w-full max-w-lg input-sm"
          />
          <PrimaryButton
            text="search"
            size="sm"
            onClick={() =>
              setSearchValue(() => {
                const search = document.getElementById(
                  "search"
                ) as HTMLInputElement;
                return search.value;
              })
            }
          />
          <SecondaryButton
            text="clear"
            size="sm"
            onClick={() => setSearchValue("")}
          />
        </div>
        <div className="w-max">
          <Link href="/admin/products/create">
            <NeutralButton text="create new product" size="sm" />
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto mb-3">
        <table className="table border border-gray-600 w-[60rem] mx-auto">
          <thead>
            <tr className="border border-gray-600">
              <th>id</th>
              <th>name</th>
              <th>description</th>
              <th>price</th>
              <th>purchased?</th>
              <th className="text-right">actions</th>
            </tr>
          </thead>
          <tbody>
            {searchValue !== ""
              ? filteredProducts.map((product) => productRow(product))
              : chunkedProducts[currentBatch].map((product) =>
                  productRow(product)
                )}
          </tbody>
        </table>
      </div>
      <div className="mb-10 space-x-2">
        {chunkedProducts.map((_, index) => (
          <button
            key={index}
            className={`${
              index === currentBatch && "btn-active"
            } btn btn-ghost border-gray-700 btn-sm`}
            onClick={() => setCurrentBatch(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

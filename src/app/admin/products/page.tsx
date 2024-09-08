import NeutralButton from "@/components/neutral-button";
import { getProducts } from "@/queries";
import { convertNumberTo2Dp, truncateString } from "@/utils";
import Link from "next/link";

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">all products</h2>
      <div className="w-max mx-auto mb-3">
        <Link href="/admin/products/create">
          <NeutralButton text="create new product" size="sm" />
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table border border-gray-600 w-max mx-auto">
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
            {products.map((product) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

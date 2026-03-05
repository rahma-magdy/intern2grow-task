import Link from "next/link";
import { Image } from "next/image";

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();
  const products = data.products || [];
  console.log(products);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 m-2">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <Link href={`/products/${product.id}`} className="text-blue-500 ">
              <h2 className="text-lg font-semibold mt-2 ">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Brand: {product.brand}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

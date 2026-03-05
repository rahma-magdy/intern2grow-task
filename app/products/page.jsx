import Link from "next/link";
import { Image } from "next/image";

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();
  console.log(data);
  const products = data.products || [];
  console.log(products);
  //Retrieve and display 8 products only
  const limitedProducts = products.slice(0, 8);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center mt-2 ">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-9 m-7 text-center p-2 ">
        {limitedProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 ">
            <Link href={`/products/${product.id}`} className="text-blue-500  ">
              <h2 className="text-lg font-semibold mt-2 ">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Brand: {product.brand}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

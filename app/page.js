import Link from "next/link";
import Image from "next/image";

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products?limit=8", {
    cache: "force-cache",
  });
  const data = await res.json();
  const products = data.products || [];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center mt-2 ">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
          >
            <Link
              href={`/products/${product.id}`}
              className="relative w-full h-56 bg-gray-50 shrink-0"
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain p-4 mix-blend-multiply"
              />
            </Link>
            <div className="p-5 flex flex-col grow text-left">
              <Link href={`/products/${product.id}`}>
                <h2 className="text-lg font-bold text-gray-900 mb-2 truncate">
                  {product.title}
                </h2>
              </Link>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-4">
                <p className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </p>
                <Link href={`/products/${product.id}`}>
                  <button className="px-5 py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

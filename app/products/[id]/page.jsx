import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const req = await fetch("https://dummyjson.com/products?limit=8");
  const data = await req.json();

  return data.products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const req = await fetch(`https://dummyjson.com/products/${id}`);
  const res = await req.json();

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 pt-8 min-h-screen">
      {/* breadcrumb */}
      <nav className="flex text-sm font-medium text-gray-500 mb-8">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li>
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900 line-clamp-1">{res.title}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-6 md:p-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] bg-gray-50 rounded-xl overflow-hidden shrink-0">
          <Image
            src={res.thumbnail}
            alt={res.title}
            fill
            className="object-contain p-6 mix-blend-multiply"
            priority
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
            {res.brand || "Unbranded"}
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {res.title}
          </h1>

          <div className="mb-6 inline-flex">
            <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              {res.category}
            </span>
          </div>

          <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
            {res.description}
          </p>

          <div className="mt-auto pt-6 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
              Price
            </p>
            <p className="text-4xl lg:text-5xl font-bold text-gray-900">
              ${res.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const req = await fetch(`https://dummyjson.com/products/${id}`);
  const res = await req.json();
  console.log(res);
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-2xl font-bold mb-4">{res.title}</h1>

      <p className="mb-2 text-center p-4 pr-5 max-w-xl mx-auto">
        {res.description}
      </p>
      <p className="mb-2">Price: ${res.price}</p>
      <p className="mb-2">Brand: {res.brand}</p>
      <p className="mb-2">Category: {res.category}</p>
      <Link
        href="/products"
        className="text-blue-500  rounded-2xl border-2 border-blue-500 px-4 py-2 mt-4"
      >
        Back to Products
      </Link>
    </div>
  );
}

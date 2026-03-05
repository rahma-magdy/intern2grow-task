import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <Link href="/products" className="text-blue-500 hover:underline">
        View Products
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Go back home
        </button>
      </Link>
    </div>
  );
}

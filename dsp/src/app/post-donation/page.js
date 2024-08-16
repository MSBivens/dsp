import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Thank You for Your Donation!</h1>
      <p className="text-lg mb-8">
        Your generosity helps us continue our mission and make a difference.
      </p>
      <p className="text-center mb-8">
        We appreciate your support and commitment to our cause.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Return to Home
        </button>
      </Link>
      <Link href="/news" className="text-blue-500 hover:underline mt-4">
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
          Catch Up on Our Latest News
        </button>
      </Link>
    </div>
  );
}

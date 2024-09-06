import Link from "next/link";

export default function ThankYou() {
  return (
    <section className="px-4 mx-auto max-w-screen-xl text-center lg:px-12">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">
          Thank You for Your Donation!
        </h1>
        <p className="text-lg mb-8">
          Your generosity helps us continue our mission and make a difference.
        </p>
        <p className="text-center mb-8">
          We appreciate your support and commitment to our cause.
        </p>
        <Link href="/">
          <button className="cta-button px-4 py-2 rounded-lg ">
            Return to Home
          </button>
        </Link>
        <Link href="/news" className="mt-4">
          <button className="cta-button px-4 py-2 rounded-lg">
            Catch Up on Our Latest News
          </button>
        </Link>
      </div>
    </section>
  );
}

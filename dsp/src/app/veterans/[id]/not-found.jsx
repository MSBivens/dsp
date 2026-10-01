import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function VeteranNotFound() {
  return (
    <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
      <div className="text-center">
        <Shield className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Veteran Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The veteran story you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/veteran-stories"
          className="inline-flex items-center gap-2 px-6 py-3 bg-nile-green text-white rounded-lg font-medium hover:bg-nile-green-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Veterans
        </Link>
      </div>
    </div>
  );
}

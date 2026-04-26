"use client";

import Link from "next/link";
import { MoveLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        {/* Subtle 404 text */}
        <p className="text-sm font-bold text-purple-600 uppercase tracking-widest">
          404 Error
        </p>

        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for. But don&apos;t
          worry, even the best developers get lost sometimes.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* Main Button */}
          <Link
            href="/"
            className="rounded-md bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-all"
          >
            Go back home
          </Link>

          {/* Secondary Link */}
          <button
            onClick={() => window.history.back()}
            className="text-sm font-semibold text-gray-900 flex items-center gap-2 hover:text-purple-600 transition-colors"
          >
            <MoveLeft size={16} />
            Go back
          </button>
        </div>

        {/* Support Section */}
        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <Link
              href="/contact"
              className="font-semibold text-purple-600 hover:text-purple-500"
            >
              Contact support &rarr;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

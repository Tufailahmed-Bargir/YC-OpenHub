"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Open Source YC Showcase </span>
              <svg
                className="h-10 w-auto text-indigo-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link
                href="#companies"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Companies
              </Link>
              <Link
                href="#about"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            {session.data ? (
              <Link
                href=""
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                <button
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link
                href="/login"
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Login
              </Link>
            )}
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <Link
            href="#companies"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Companies
          </Link>
          <Link
            href="#about"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

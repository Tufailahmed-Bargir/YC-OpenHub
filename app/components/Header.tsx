"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/ycc.png"
                alt="YC Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-[#111111] hover:text-[#ff6b00] transition-colors">
                YC OpenHub
              </span>
            </Link>
          </div>
          <div className="ml-10 space-x-8 flex items-center">
            <Link
              href="/Dash"
              className="text-base font-medium text-[#111111] hover:text-[#ff6b00] transition-colors"
            >
              Companies
            </Link>
            <Button
              variant="default"
              className="bg-[#ff6b00] hover:bg-[#ff5500] text-white transition-colors"
              asChild
            >
              <Link href="https://www.ycombinator.com/companies" target="_blank">
                YC Companies
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

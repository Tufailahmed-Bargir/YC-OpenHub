import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-[#ffffff] overflow-hidden py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-[#ffffff] sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-5xl tracking-tight font-bold text-[#111111] sm:text-6xl md:text-7xl">
                <span className="block">Open Source</span>
                <span className="block text-[#ff6b00] font-extrabold">
                  YC Companies
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                Discover and contribute to innovative open-source projects from Y Combinator companies. 
                Shape the future of technology.
              </p>
              <div className="mt-10 flex gap-4 justify-center">
                <Link
                  href="/Dash"
                  className="px-8 py-4 bg-[#ff6b00] text-white text-lg font-semibold rounded hover:bg-[#ff5500] transition-colors"
                >
                  Browse Projects
                </Link>
                <Link
                  href="#"
                  className="px-8 py-4 bg-[#111111] text-white text-lg font-semibold rounded hover:bg-[#2d2d2d] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

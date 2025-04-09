import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-[#111111]">
      <div className="max-w-4xl mx-auto text-center py-20 px-4 sm:py-28 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          <span className="block">Ready to Shape the Future?</span>
          <span className="block text-[#ff6b00] mt-2">Join the YC Open Source Community</span>
        </h2>
        <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
          Connect with innovative YC companies, contribute to groundbreaking projects, 
          and be part of the next generation of technology.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/Dash"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded bg-[#ff6b00] text-white hover:bg-[#ff5500] transition-colors"
          >
            Start Contributing
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded border-2 border-white text-white hover:bg-white hover:text-[#111111] transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

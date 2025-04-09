import { data } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function CompanyGrid() {
  return (
    <div className="bg-[#fafafa]" id="companies">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#111111] sm:text-4xl mb-4">
            Featured Companies
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Join the community of innovators contributing to YC-backed open source projects
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.slice(0, 6).map((company) => (
              <Link
                href={`/companies/${company.name.toLowerCase().replace(/\s+/g, '-')}`}
                key={company.name}
                className="group transform hover:-translate-y-1 transition-all duration-200"
              >
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 h-full border border-gray-100">
                  <div className="flex items-center space-x-4">
                    {/* <div className="flex-shrink-0">
                      {/* <Image
                        src={company.small_logo_thumb_url || "/placeholder.svg"}
                        alt={company.name}
                        width={48}
                        height={48}
                        className="rounded-md"
                      /> 
                    </div> */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#111111] group-hover:text-[#ff6b00] transition-colors">
                        {company.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 line-clamp-3">
                    {company.one_liner}
                  </p>
                  <div className="mt-6 flex items-center text-sm text-[#ff6b00]">
                    View Projects
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

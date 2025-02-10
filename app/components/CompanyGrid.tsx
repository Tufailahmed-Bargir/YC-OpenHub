import { data } from "@/lib/data"
import Image from "next/image"

const companies = [
  { name: "Company 1", logo: "/placeholder.svg", description: "Open-source project description" },
  { name: "Company 2", logo: "/placeholder.svg", description: "Open-source project description" },
  { name: "Company 3", logo: "/placeholder.svg", description: "Open-source project description" },
  { name: "Company 4", logo: "/placeholder.svg", description: "Open-source project description" },
  { name: "Company 5", logo: "/placeholder.svg", description: "Open-source project description" },
  { name: "Company 6", logo: "/placeholder.svg", description: "Open-source project description" },
]

export default function CompanyGrid() {
  return (
    <div className="bg-white" id="companies">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:text-center">
          <h2 className=" font-bold  text-6xl text-indigo-600  tracking-wide uppercase">Open Source YC Companies</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Innovate with the Best
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explore and contribute to groundbreaking open-source projects from Y Combinator companies.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.slice(0,6).map((company) => (
              <div key={company.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3  rounded-md shadow-lg">
                        <Image
                          src={company.small_logo_thumb_url || "/placeholder.svg"}
                          alt={company.name}
                          width={32}
                          height={32}
                          className="h-8 w-8 text-white"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{company.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{company.one_liner}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


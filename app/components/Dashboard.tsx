import { Search } from "lucide-react";
// import StartupGrid from "./StartupGrid"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-indigo-500">YC Startups</h1>
            <Button
              variant="outline"
              className="text-indigo-500 border-indigo-500 hover:bg-indigo-50"
            >
              Clear all filters
            </Button>
          </div>
        </div>
      </header>

      {/* Notification Banner */}
      <div className="bg-indigo-50 border-b border-indigo-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-indigo-800">
            Applications for YC Summer 2024 are now open. You can apply{" "}
            <a href="#" className="font-medium underline hover:text-indigo-900">
              here
            </a>
            .
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h2 className="font-semibold text-gray-900 mb-4">Filters</h2>
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search filters"
                  className="pl-9"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <div className="mt-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-600">Active (1000+)</span>
                </label>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h2 className="font-semibold text-gray-900 mb-4">Batch</h2>
              <div className="space-y-2">
                {["S23", "W23", "S22", "W22", "S21"].map((batch) => (
                  <label key={batch} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                    />
                    <span className="text-sm text-gray-600">{batch}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h2 className="font-semibold text-gray-900 mb-4">Industries</h2>
              <div className="space-y-2">
                {["B2B", "SaaS", "AI", "FinTech", "Healthcare"].map(
                  (industry) => (
                    <label
                      key={industry}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-600">{industry}</span>
                    </label>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="relative flex-1 max-w-2xl">
                <Input
                  type="search"
                  placeholder="Search startups..."
                  className="pl-9"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <span className="ml-4 text-sm text-gray-500">1000+ results</span>
            </div>
            {/* <StartupGrid /> */}
          </div>
        </div>
      </main>
    </div>
  );
}

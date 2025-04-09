"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardComponent from "@/app/components/CardComp";
import { data } from "@/lib/data";

const ITEMS_PER_PAGE = 8;

export default function Page() {
  const [selectedBatches, setSelectedBatches] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBatches, selectedIndustries, searchQuery]);

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [currentPage, selectedBatches, selectedIndustries, searchQuery]);

  const toggleSelection = (
    value: string,
    setFunction: Function,
    currentValues: string[],
  ) => {
    setFunction(
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value],
    );
  };

  const clearFilters = () => {
    setSelectedBatches([]);
    setSelectedIndustries([]);
    setSearchQuery("");
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesBatch =
        selectedBatches.length === 0 || selectedBatches.includes(item.batch);
      const matchesIndustry =
        selectedIndustries.length === 0 ||
        selectedIndustries.includes(item.industry);
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesBatch && matchesIndustry && matchesSearch;
    });
  }, [selectedBatches, selectedIndustries, searchQuery]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate visible page numbers
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-indigo-600">
              YC Open-Source Startups
            </h1>
            <Button
              variant="outline"
              className="text-indigo-500 border-indigo-500 hover:bg-indigo-50"
              onClick={clearFilters}
            >
              Clear all filters
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-64 space-y-6 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h2 className="font-semibold text-gray-900 mb-4">Filters</h2>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search filters"
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h2 className="font-semibold text-gray-900 mb-4">Batch</h2>
              <div className="space-y-2">
                {["S23", "W23", "S22", "W22", "S21"].map((batch) => (
                  <label key={batch} className="flex items-center space-x-2 hover:bg-gray-50 p-1 rounded cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                      checked={selectedBatches.includes(batch)}
                      onChange={() => toggleSelection(batch, setSelectedBatches, selectedBatches)}
                    />
                    <span className="text-sm text-gray-600">{batch}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h2 className="font-semibold text-gray-900 mb-4">Industries</h2>
              <div className="space-y-2">
                {["B2B", "SaaS", "AI", "FinTech", "Healthcare"].map((industry) => (
                  <label key={industry} className="flex items-center space-x-2 hover:bg-gray-50 p-1 rounded cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                      checked={selectedIndustries.includes(industry)}
                      onChange={() => toggleSelection(industry, setSelectedIndustries, selectedIndustries)}
                    />
                    <span className="text-sm text-gray-600">{industry}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 max-w-2xl">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search startups..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <span className="ml-4 text-sm font-medium text-gray-700">
                  {filteredData.length} results
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-[600px]">
                {isLoading ? (
                  Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                    <div
                      key={index}
                      className="h-48 bg-gray-100 rounded-lg animate-pulse"
                    />
                  ))
                ) : paginatedData.length > 0 ? (
                  paginatedData.map((items) => (
                    <CardComponent
                      key={items.id}
                      {...items}
                    />
                  ))
                ) : (
                  <div className="col-span-2 flex flex-col items-center justify-center py-12">
                    <p className="text-gray-500 text-lg mb-4">No startups found</p>
                    <Button variant="outline" onClick={clearFilters}>
                      Clear all filters
                    </Button>
                  </div>
                )}
              </div>

              {totalPages > 1 && (
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-4">
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1 || isLoading}
                    className="w-full sm:w-auto flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {getVisiblePages().map((page, index) => (
                      typeof page === 'number' ? (
                        <Button
                          key={index}
                          variant={currentPage === page ? "default" : "outline"}
                          className={`w-10 h-10 ${
                            currentPage === page
                              ? "bg-indigo-600 text-white"
                              : "text-gray-600"
                          }`}
                          onClick={() => handlePageChange(page)}
                          disabled={isLoading}
                        >
                          {page}
                        </Button>
                      ) : (
                        <span key={index} className="px-2 flex items-center text-gray-400">
                          {page}
                        </span>
                      )
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || isLoading}
                    className="w-full sm:w-auto flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

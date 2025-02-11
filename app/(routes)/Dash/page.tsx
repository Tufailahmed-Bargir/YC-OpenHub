 
"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardComponent from "@/app/components/CardComp"; // Ensure correct import
import { data } from "@/lib/data";

// Dummy data (Replace with real data source)
 

export default function Page() {
  const [selectedBatches, setSelectedBatches] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSelection = (value: string, setFunction: Function, currentValues: string[]) => {
    setFunction(currentValues.includes(value) 
      ? currentValues.filter(item => item !== value) 
      : [...currentValues, value]);
  };

  const clearFilters = () => {
    setSelectedBatches([]);
    setSelectedIndustries([]);
    setSearchQuery("");
  };

  // Filtering logic
  const filteredData = data.filter((item) => {
    const matchesBatch = selectedBatches.length === 0 || selectedBatches.includes(item.batch);
    const matchesIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(item.industry);
    const matchesSearch = searchQuery === "" || item.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesBatch && matchesIndustry && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-indigo-600">YC Open-Source Startups</h1>
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

     

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 space-y-6">
            {/* Filters */}
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

            {/* Batch Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h2 className="font-semibold text-gray-900 mb-4">Batch</h2>
              <div className="space-y-2">
                {["S23", "W23", "S22", "W22", "S21"].map((batch) => (
                  <label key={batch} className="flex items-center space-x-2">
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

            {/* Industry Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h2 className="font-semibold text-gray-900 mb-4">Industries</h2>
              <div className="space-y-2">
                {["B2B", "SaaS", "AI", "FinTech", "Healthcare"].map((industry) => (
                  <label key={industry} className="flex items-center space-x-2">
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

          {/* Main Grid */}
          <div className="flex-1">
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
              <span className="ml-4 text-sm text-gray-500">{filteredData.length} results</span>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
              {filteredData.length > 0 ? (
                filteredData.map((items) => (
                  <CardComponent
                    key={items.id}
                    id={items.id}
                    name={items.name}
                    one_liner={items.one_liner}
                    small_logo_thumb_url={items.small_logo_thumb_url}
                    all_locations={items.all_locations}
                    industry={items.industry}
                    website={items.website}
                    team_size={items.team_size || 1}
                    subindustry={items.subindustry}
                  />
                ))
              ) : (
                <p className="text-gray-500 text-center w-full">No startups found</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

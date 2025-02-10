// import { Search } from "lucide-react"
// // import StartupGrid from "./components/StartupGrid"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// export default function Filter() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <h1 className="text-2xl font-bold text-orange-500">YC Startups</h1>
//             <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
//               Clear all filters
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Notification Banner */}
//       <div className="bg-orange-50 border-b border-orange-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//           <p className="text-orange-800">
//             Applications for YC Summer 2024 are now open. You can apply{" "}
//             <a href="#" className="font-medium underline hover:text-orange-900">
//               here
//             </a>
//             .
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar */}
//           <div className="w-full lg:w-64 space-y-6">
//             <div className="bg-white p-4 rounded-lg shadow-sm border">
//               <h2 className="font-semibold text-gray-900 mb-4">Filters</h2>
//               <div className="relative">
//                 <Input type="search" placeholder="Search filters" className="pl-9" />
//                 <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
//               </div>
//               <div className="mt-4">
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
//                   <span className="text-sm text-gray-600">Active (1000+)</span>
//                 </label>
//               </div>
//             </div>

//             <div className="bg-white p-4 rounded-lg shadow-sm border">
//               <h2 className="font-semibold text-gray-900 mb-4">Batch</h2>
//               <div className="space-y-2">
//                 {["S23", "W23", "S22", "W22", "S21"].map((batch) => (
//                   <label key={batch} className="flex items-center space-x-2">
//                     <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
//                     <span className="text-sm text-gray-600">{batch}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white p-4 rounded-lg shadow-sm border">
//               <h2 className="font-semibold text-gray-900 mb-4">Industries</h2>
//               <div className="space-y-2">
//                 {["B2B", "SaaS", "AI", "FinTech", "Healthcare"].map((industry) => (
//                   <label key={industry} className="flex items-center space-x-2">
//                     <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
//                     <span className="text-sm text-gray-600">{industry}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Main Grid */}
//           <div className="flex-1">
//             <div className="flex items-center justify-between mb-6">
//               <div className="relative flex-1 max-w-2xl">
//                 <Input type="search" placeholder="Search startups..." className="pl-9" />
//                 <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
//               </div>
//               <span className="ml-4 text-sm text-gray-500">1000+ results</span>
//             </div>
//             {/* <StartupGrid /> */}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }



"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Filter() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-orange-500">YC Startups</h1>
            <Button 
              variant="outline" 
              className="text-orange-500 border-orange-500 hover:bg-orange-50"
              onClick={clearFilters}
            >
              Clear all filters
            </Button>
          </div>
        </div>
      </header>

      {/* Notification Banner */}
      <div className="bg-orange-50 border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-orange-800">
            Applications for YC Summer 2024 are now open. You can apply{" "}
            <a href="#" className="font-medium underline hover:text-orange-900">
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
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
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
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
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
              <span className="ml-4 text-sm text-gray-500">1000+ results</span>
            </div>
            {/* <StartupGrid selectedBatches={selectedBatches} selectedIndustries={selectedIndustries} /> */}
          </div>
        </div>
      </main>
    </div>
  );
}

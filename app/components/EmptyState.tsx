"use client";

import { SearchX, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onReset: () => void;
  isFiltered: boolean;
}

export function EmptyState({ onReset, isFiltered }: EmptyStateProps) {
  return (
    <div className="col-span-full text-center py-16">
      <div className="flex justify-center mb-6">
        {isFiltered ? (
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
            <SlidersHorizontal className="h-6 w-6 text-gray-500" />
          </div>
        ) : (
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
            <SearchX className="h-6 w-6 text-gray-500" />
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {isFiltered ? "No matching companies" : "No companies found"}
      </h3>
      <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
        {isFiltered 
          ? "Try adjusting your filters or search criteria to find more companies"
          : "We couldn't find any companies matching your search. Try using different keywords"}
      </p>
      {isFiltered && (
        <Button
          variant="outline"
          onClick={onReset}
          className="gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Reset filters
        </Button>
      )}
    </div>
  );
}
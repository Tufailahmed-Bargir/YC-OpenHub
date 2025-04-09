"use client";

import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

interface KeyboardShortcutsProps {
  onSearch?: () => void;
  onOpenFilters?: () => void;
  onClearFilters?: () => void;
  onNextPage?: () => void;
  onPrevPage?: () => void;
  canChangePage?: boolean;
}

export function KeyboardShortcuts({
  onSearch,
  onOpenFilters,
  onClearFilters,
  onNextPage,
  onPrevPage,
  canChangePage,
}: KeyboardShortcutsProps) {
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if we're in an input field
      if (event.target instanceof HTMLInputElement || 
          event.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Command/Ctrl + K for search
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        onSearch?.();
      }

      // Command/Ctrl + F for filters
      if ((event.metaKey || event.ctrlKey) && event.key === "f") {
        event.preventDefault();
        onOpenFilters?.();
      }

      // Command/Ctrl + X to clear filters
      if ((event.metaKey || event.ctrlKey) && event.key === "x") {
        event.preventDefault();
        onClearFilters?.();
      }

      // Left arrow for previous page
      if (event.key === "ArrowLeft" && canChangePage) {
        event.preventDefault();
        onPrevPage?.();
      }

      // Right arrow for next page
      if (event.key === "ArrowRight" && canChangePage) {
        event.preventDefault();
        onNextPage?.();
      }

      // ? to show keyboard shortcuts help
      if (event.key === "?") {
        event.preventDefault();
        toast({
          title: "Keyboard Shortcuts",
          description: (
            <div className="grid gap-2 mt-2">
              <div className="grid grid-cols-2 items-center">
                <span className="font-mono">⌘/Ctrl + K</span>
                <span>Focus search</span>
              </div>
              <div className="grid grid-cols-2 items-center">
                <span className="font-mono">⌘/Ctrl + F</span>
                <span>Open filters</span>
              </div>
              <div className="grid grid-cols-2 items-center">
                <span className="font-mono">⌘/Ctrl + X</span>
                <span>Clear filters</span>
              </div>
              <div className="grid grid-cols-2 items-center">
                <span className="font-mono">←/→</span>
                <span>Navigate pages</span>
              </div>
              <div className="grid grid-cols-2 items-center">
                <span className="font-mono">?</span>
                <span>Show this help</span>
              </div>
            </div>
          ),
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSearch, onOpenFilters, onClearFilters, onNextPage, onPrevPage, canChangePage, toast]);

  return null;
}
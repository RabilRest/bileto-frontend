"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  page: number;
  totalPages: number;
  handleNext: () => void;
  handlePrevious: () => void;
  showing: number;
  total: number;
}

export function OrderPagination({
  page,
  totalPages,
  handleNext,
  handlePrevious,
  showing,
  total,
}: Props) {
  return (
    <div className="flex items-center justify-between py-4 text-sm text-muted-foreground">
      <span>
        Showing {showing} of {total} row(s).
      </span>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrevious}
          disabled={page === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        <span>
          Page {page} of {totalPages || 1}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={handleNext}
          disabled={page === totalPages || totalPages === 0}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}

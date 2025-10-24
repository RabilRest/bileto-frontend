"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Columns, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  setPage: (page: number) => void;
}

export function OrderFilter({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  setPage,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="w-40 sm:w-64"
      />

      {/* Column Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Columns className="h-4 w-4" />
            Columns
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Event</DropdownMenuItem>
          <DropdownMenuItem>Email</DropdownMenuItem>
          <DropdownMenuItem>Payment Method</DropdownMenuItem>
          <DropdownMenuItem>Qty</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Filter Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {["All", "Paid", "Pending", "Cancelled"].map((status) => (
            <DropdownMenuItem
              key={status}
              onClick={() => {
                setStatusFilter(status);
                setPage(1);
              }}
              className={cn(
                "cursor-pointer",
                statusFilter === status && "font-semibold text-primary"
              )}
            >
              {status}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

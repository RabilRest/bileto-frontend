"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Clock, XCircle } from "lucide-react";

const statusBadge = (status: string) => {
  switch (status) {
    case "Paid":
      return (
        <span className="flex items-center gap-1 text-green-500 font-medium">
          <CheckCircle className="w-4 h-4" /> Paid
        </span>
      );
    case "Pending":
      return (
        <span className="flex items-center gap-1 text-yellow-500 font-medium">
          <Clock className="w-4 h-4" /> Pending
        </span>
      );
    case "Cancelled":
      return (
        <span className="flex items-center gap-1 text-red-500 font-medium">
          <XCircle className="w-4 h-4" /> Cancelled
        </span>
      );
    default:
      return status;
  }
};

export function EventTable({ data }: { data: any[] }) {
  return (
    <div className="rounded-md border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]">
              <Checkbox />
            </TableHead>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End date</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={10}
                className="text-center py-10 text-muted-foreground"
              >
                No results.
              </TableCell>
            </TableRow>
          ) : (
            data.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{order.Thumbnail}</TableCell>
                <TableCell>{order.Title}</TableCell>
                <TableCell>{order.Status}</TableCell>
                <TableCell>{order.Location}</TableCell>
                <TableCell>{order.StartDate}</TableCell>
                <TableCell>{order.EndDate}</TableCell>
                <TableCell>{order.StartTime}</TableCell>
                <TableCell>{order.EndTime}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

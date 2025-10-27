"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { orders } from "./data/orders";
import { OrderTable } from "@/components/order/OrderTable";
import { OrderFilter } from "@/components/order/OrderFilter";
import { OrderPagination } from "@/components/order/OrderPagination";

export default function OrderHistoryPage() {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [statusFilter, setStatusFilter] = React.useState("All");

  const rowsPerPage = 4;

  const filteredData = orders.filter((order) => {
    const matchSearch =
      order.event.toLowerCase().includes(search.toLowerCase()) ||
      order.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      statusFilter === "All" ? true : order.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleNext = () => page < totalPages && setPage((p) => p + 1);
  const handlePrevious = () => page > 1 && setPage((p) => p - 1);

  return (
    <div className="space-y-6 p-6">
      <Card className="bg-card border-border shadow-sm">
        <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-xl font-semibold">Order History</CardTitle>
          <OrderFilter
            search={search}
            setSearch={setSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            setPage={setPage}
          />
        </CardHeader>

        <CardContent>
          <OrderTable data={paginatedData} />
          <OrderPagination
            page={page}
            totalPages={totalPages}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            showing={paginatedData.length}
            total={filteredData.length}
          />
        </CardContent>
      </Card>
    </div>
  );
}

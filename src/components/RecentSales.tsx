// components/RecentSales.tsx
"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";

const sales: Array<{
  id: string;
  title: string;
  date: string;
  amount: string;
}> = [];

export default function RecentSales() {
  return (
    <Card className="bg-slate-900/60 border border-slate-800">
      <CardHeader className="px-4 py-3">
        <h3 className="text-lg font-medium">Recent Sales</h3>
        <p className="text-sm text-slate-400">
          You have made {sales.length} sales so far.
        </p>
      </CardHeader>

      <CardContent>
        {sales.length === 0 ? (
          <div className="h-[260px] flex items-center justify-center text-slate-400">
            You have made 0 sales so far.
          </div>
        ) : (
          <ul className="space-y-3">
            {sales.map((s) => (
              <li key={s.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{s.title}</p>
                  <p className="text-sm text-slate-400">{s.date}</p>
                </div>
                <div className="text-sm text-slate-200">{s.amount}</div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

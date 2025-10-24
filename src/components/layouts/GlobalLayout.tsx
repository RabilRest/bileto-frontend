"use client";

import React from "react";
import { AppSidebar } from "@/components/app-sidebar";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground">
      {/* Sidebar */}
      <AppSidebar />
    </div>
  );
}

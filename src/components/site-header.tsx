"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export function SiteHeader() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean).slice(1); // buang 'dashboard' kalau fix prefix

  const formatSegment = (seg: string) =>
    seg
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) px-4 lg:px-6 pt-3">
      <div className="flex w-full items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />

          <Breadcrumb>
            <BreadcrumbList>
              {/* Item pertama: Dashboard */}
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {/* Loop sisa segment */}
              {segments.map((seg, idx) => {
                const href = `/dashboard/${segments
                  .slice(0, idx + 1)
                  .join("/")}`;
                const label = formatSegment(seg);
                const isLast = idx === segments.length - 1;

                return (
                  <React.Fragment key={href}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {!isLast ? (
                        <BreadcrumbLink asChild>
                          <Link href={href}>{label}</Link>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage>{label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="ml-auto flex items-center gap-2"></div>
      </div>
    </header>
  );
}

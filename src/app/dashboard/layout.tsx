"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden bg-background text-foreground">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto">
          <SiteHeader />
          <div className="p-4 sm:p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}

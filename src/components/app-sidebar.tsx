"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import {
  IconDashboard,
  IconCurrencyDollar,
  IconConfetti,
  IconTicket,
  IconPercentage,
  IconSettings,
  IconChevronRight,
  IconChevronDown,
} from "@tabler/icons-react";
import { Sun, Moon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "@/components/nav-user";
import { ThemeToggle } from "./theme-toggle";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "Dashboard", url: "/dashboard", icon: IconDashboard },
    {
      title: "Orders",
      url: "/dashboard/orders",
      icon: IconCurrencyDollar,
      items: [
        { title: "Order History", url: "/dashboard/orders" },
        { title: "Manual Payment", url: "/dashboard/orders/manual-pay" },
      ],
    },
    {
      title: "Events",
      url: "/dashboard/events",
      icon: IconConfetti,
      items: [
        { title: "My Events", url: "/dashboard/events/" },
        { title: "Create Event", url: "/dashboard/events/create" },
      ],
    },
    {
      title: "Tickets",
      url: "/dashboard/tickets",
      icon: IconTicket,
      items: [
        { title: "My Tickets", url: "/dashboard/tickets" },
        { title: "Create Ticket", url: "/dashboard/tickets/create" },
      ],
    },
    {
      title: "Vouchers",
      url: "/dashboard/vouchers",
      icon: IconPercentage,
      items: [
        { title: "My Vouchers", url: "/dashboard/vouchers" },
        { title: "Create Voucher", url: "/dashboard/vouchers/create" },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
      items: [
        { title: "Edit Profile", url: "/dashboard/settings" },
        { title: "Bank Details", url: "/dashboard/settings/bank-details" },
        {
          title: "Change Password",
          url: "/dashboard/settings/change-password",
        },
      ],
    },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const [open, setOpen] = React.useState<string | null>(null);
  useTheme();
  const toggleDropdown = (title: string) =>
    setOpen(open === title ? null : title);

  return (
    <Sidebar
      className="fixed left-0 top-0 h-full w-64 bg-background border-r border-border p-4 flex flex-col"
      collapsible="offcanvas"
      {...props}
    >
      {/* Header */}
      <SidebarHeader className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-blue-500- dark:text-gray-200">
            Bileto<span className="text-blue-500">.Id</span>
          </span>
          <ThemeToggle />
        </div>

        {/* Pakai komponen reusable */}
      </SidebarHeader>

      {/* Menu */}
      <SidebarContent className="px-3">
        <div className="text-sm mb-2 mt-1 text-gray-600 dark:text-gray-400">
          Platform
        </div>
        <SidebarMenu className="space-y-1">
          {data.navMain.map((item) => (
            <div key={item.title}>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => item.items && toggleDropdown(item.title)}
                  className="flex w-full items-center px-2 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {item.items ? (
                    <div className="flex w-full items-center gap-3">
                      <item.icon className="size-5" />
                      <span className="text-[15px]">{item.title}</span>
                      {open === item.title ? (
                        <IconChevronDown className="size-4 ml-auto" />
                      ) : (
                        <IconChevronRight className="size-4 ml-auto" />
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.url}
                      className="flex items-center gap-3 w-full"
                    >
                      <item.icon className="size-5" />
                      <span className="text-[15px]">{item.title}</span>
                    </Link>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>

              {item.items && (
                <div
                  className={`ml-4 pl-3 border-l border-black/20 dark:border-white/20 flex flex-col gap-2 overflow-hidden transition-all duration-300 ${
                    open === item.title ? "max-h-40 py-2" : "max-h-0"
                  }`}
                >
                  {item.items.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.url}
                      className="text-[14px] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t mt-3 border-black/10 dark:border-white/10">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

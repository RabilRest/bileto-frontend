"use client";

import * as React from "react";
import {
  IconDashboard,
  IconCurrencyDollar,
  IconConfetti,
  IconTicket,
  IconPercentage,
  IconSettings,
  IconChevronRight,
  IconChevronDown,
  IconCreditCard,
} from "@tabler/icons-react";

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

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Orders",
      url: "#",
      icon: IconCurrencyDollar,
      items: [{ title: "Manual Payments", url: "#" }],
    },
    {
      title: "All Events",
      url: "#",
      icon: IconConfetti,
      items: [{ title: "Create Event", url: "#" }],
    },
    {
      title: "Tickets",
      url: "#",
      icon: IconTicket,
      items: [{ title: "Create Ticket", url: "#" }],
    },
    {
      title: "Vouchers",
      url: "#",
      icon: IconPercentage,
      items: [{ title: "Create Voucher", url: "#" }],
    },
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
      items: [
        { title: "Bank Details", url: "#" },
        { title: "Change Password", url: "#" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [open, setOpen] = React.useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setOpen(open === title ? null : title);
  };

  return (
    <Sidebar
      className="bg-white text-black border-none transition-colors duration-300"
      collapsible="offcanvas"
      {...props}
    >
      {/* Header */}
      <SidebarHeader className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white rounded-lg p-1">
            <IconTicket className="size-5" />
          </div>
          <span className="text-lg font-bold text-gray-400">
            Bileto<span className="text-blue-500">.Id</span>
          </span>
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="px-3">
        <div className="text-sm mb-2 mt-1 text-gray-600">Platform</div>

        <SidebarMenu className="space-y-1">
          {data.navMain.map((item) => (
            <div key={item.title}>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild={!item.items}
                  onClick={() => item.items && toggleDropdown(item.title)}
                  className="flex w-full items-center px-2 py-2 rounded-md transition hover:bg-black/5 hover:text-black"
                >
                  {item.items ? (
                    <button
                      type="button"
                      className="flex w-full items-center justify-start gap-3"
                    >
                      <item.icon className="size-5" />
                      <span className="text-[15px]">{item.title}</span>
                      {open === item.title ? (
                        <IconChevronDown className="size-4 ml-auto" />
                      ) : (
                        <IconChevronRight className="size-4 ml-auto" />
                      )}
                    </button>
                  ) : (
                    <a
                      href={item.url}
                      className="flex items-center gap-3 justify-start"
                    >
                      <item.icon className="size-5" />
                      <span className="text-[15px]">{item.title}</span>
                    </a>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Submenu */}
              {item.items && (
                <div
                  className={`ml-4 pl-3 border-l border-black/20 flex flex-col gap-2 overflow-hidden transition-all duration-300 ${
                    open === item.title ? "max-h-40 py-2" : "max-h-0"
                  }`}
                >
                  {item.items.map((sub) => (
                    <a
                      key={sub.title}
                      href={sub.url}
                      className="text-[14px] font-normal text-gray-700 hover:text-black transition-colors"
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t mt-3 border-black/10">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

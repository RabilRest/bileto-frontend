"use client";

import React from "react";
import {
  IconCalendar,
  IconMoneybag,
  IconTicket,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";

import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export function SectionCards() {
  const [showRevenue, setShowRevenue] = React.useState(true);

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {/* Total Revenue */}
      <Card className="@container/card relative">
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl flex items-center gap-2">
            {showRevenue ? "$1,250.00" : "•••••••"}
            <button
              onClick={() => setShowRevenue((prev) => !prev)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle revenue visibility"
            >
              {showRevenue ? <IconEye size={18} /> : <IconEyeOff size={18} />}
            </button>
          </CardTitle>
          <CardAction>
            <IconMoneybag />
          </CardAction>
        </CardHeader>
      </Card>

      {/* Total Events */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Events</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,234
          </CardTitle>
          <CardAction>
            <IconCalendar />
          </CardAction>
        </CardHeader>
      </Card>

      {/* Total Tickets */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Tickets</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            45,678
          </CardTitle>
          <CardAction>
            <IconTicket />
          </CardAction>
        </CardHeader>
      </Card>

      {/* Total Vouchers */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Vouchers</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4.5%
          </CardTitle>
          <CardAction>
            <IconTicket />
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  );
}

"use client";

import React from "react";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function VoucherEventSelect() {
  return (
    <div className="flex flex-col space-y-2">
      <Label>
        Event <span className="text-destructive">*</span>
      </Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an event" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="event1">Event 1</SelectItem>
          <SelectItem value="event2">Event 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

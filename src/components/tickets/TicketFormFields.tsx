"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function TicketFormFields() {
  return (
    <div className="space-y-5">
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium">
          Title
        </Label>
        <Input id="title" placeholder="Enter ticket title" />
      </div>

      {/* Event */}
      <div className="flex flex-col space-y-2">
        <Label htmlFor="event">Event</Label>
        <Select>
          <SelectTrigger id="event" className="w-full">
            <SelectValue placeholder="Select event" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="event1">Event 1</SelectItem>
            <SelectItem value="event2">Event 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium">
          Description
        </Label>
        <Textarea
          id="description"
          placeholder="Enter description"
          className="min-h-[100px]"
        />
      </div>

      {/* Price & Limit */}
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="price" className="text-sm font-medium">
            Price
          </Label>
          <Input id="price" type="number" placeholder="Enter price" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="limit" className="text-sm font-medium">
            Limit
          </Label>
          <Input id="limit" type="number" placeholder="Enter limit" />
        </div>
      </div>
    </div>
  );
}

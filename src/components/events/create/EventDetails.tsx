"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/Button";
import { CalendarIcon } from "lucide-react";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export function EventDetails() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [location, setLocation] = React.useState("");

  return (
    <Card className="w-full shadow-sm border rounded-2xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Create Event</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* TITLE */}
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            placeholder="Enter your event title"
            className="w-full"
          />
        </div>

        {/* CATEGORY */}
        <div className="space-y-2">
          <Label htmlFor="category">Category *</Label>
          <Select>
            <SelectTrigger id="category" className="w-full">
              <SelectValue placeholder="Select event category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
              <SelectItem value="festival">Festival</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">
            Locations <span className="text-red-500">*</span>
          </Label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full border-none bg-background ">
              <SelectValue placeholder="Select locations" />
            </SelectTrigger>
            <SelectContent className="bg-background ">
              <SelectItem value="jakarta">Jakarta</SelectItem>
              <SelectItem value="bandung">Bandung</SelectItem>
              <SelectItem value="surabaya">Surabaya</SelectItem>
              <SelectItem value="bali">Bali</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* DATE RANGE */}
        <div className="space-y-2">
          <Label className="mb-2 block">Select date range *</Label>
          <div className="max-w-md">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date?.from && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pilih tanggal</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

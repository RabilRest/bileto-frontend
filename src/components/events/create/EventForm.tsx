"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { EventDetails } from "@/components/events/create/EventDetails";
import { EventSchedule } from "./EventSchedule";
import { EventThumbnail } from "./EventThumbnail";
import { EventDescription } from "./EventDescription";

export function EventForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: kumpulkan data dari refs / state dan kirim ke API
    alert("Submit form (implement API call)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <EventDetails />
          <EventSchedule />
        </div>

        <div className="space-y-6">
          <EventThumbnail />
          <EventDescription />
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          className="rounded-lg bg-blue-600 hover:bg-blue-700"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

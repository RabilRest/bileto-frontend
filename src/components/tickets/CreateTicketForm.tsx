"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import TicketFormFields from "./TicketFormFields";

export function TicketForm() {
  return (
    <Card className="w-full h-full mx-auto bg-background border border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Create Ticket</CardTitle>
      </CardHeader>

      <CardContent>
        <TicketFormFields />
      </CardContent>

      <CardFooter className="flex justify-end pt-2">
        <Button type="submit" className="px-6">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}

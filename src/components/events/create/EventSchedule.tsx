import React from "react";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";

export function EventSchedule() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <Label className="mb-2">Start time *</Label>
        <div className="flex gap-3">
          <Input className="w-20 text-center" placeholder="00" />
          <Input className="w-20 text-center" placeholder="00" />
          <Input className="w-20 text-center" placeholder="00" />
        </div>
      </div>

      <div>
        <Label className="mb-2">End time *</Label>
        <div className="flex gap-3">
          <Input className="w-20 text-center" placeholder="00" />
          <Input className="w-20 text-center" placeholder="00" />
          <Input className="w-20 text-center" placeholder="00" />
        </div>
      </div>
    </div>
  );
}

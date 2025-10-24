"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function VoucherValueInput() {
  return (
    <div className="flex flex-col space-y-2">
      <Label>
        Value <span className="text-destructive">*</span>
      </Label>
      <Input placeholder="Value" />
    </div>
  );
}

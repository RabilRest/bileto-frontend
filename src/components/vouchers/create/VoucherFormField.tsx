"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";

export default function VoucherCodeField() {
  return (
    <div className="flex flex-col space-y-2">
      <Label>
        Code <span className="text-destructive">*</span>
      </Label>
      <div className="flex gap-2">
        <Input placeholder="Code" />
        <Button
          variant="secondary"
          className="px-4 bg-blue-500 hover:bg-blue-700 "
        >
          Generate
        </Button>
      </div>
    </div>
  );
}

"use client";

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function VoucherLimitInput() {
  return (
    <div className="space-y-2 w-full">
      <Label htmlFor="limit">Batas *</Label>
      <Input
        id="limit"
        type="number"
        placeholder="Batas"
        className="w-full appearance-none"
      />
    </div>
  );
}

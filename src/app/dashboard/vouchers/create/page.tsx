"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { VoucherEventSelect } from "@/components/vouchers/create/VoucherEventSelect";
import { VoucherValueInput } from "@/components/vouchers/create/VoucherValueInput";
import { VoucherLimitInput } from "@/components/vouchers/create/VoucherLimitInput";
import VoucherFormField from "@/components/vouchers/create/VoucherFormField";

export default function CreateVoucherPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Voucher created!");
  };

  return (
    <div className="p-6">
      <Card className="bg-background border-border shadow-sm">
        <CardHeader>
          <CardTitle>Create Voucher</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Left column */}
            <div className="space-y-6">
              <VoucherEventSelect />
              <VoucherFormField />
            </div>

            {/* Right column */}
            <div className="space-y-6 w-full">
              <VoucherValueInput />
              <VoucherLimitInput />
            </div>

            {/* Submit button full width */}
            <div className="col-span-full flex justify-end ">
              <Button
                type="submit"
                className="px-6 bg-blue-500 hover:bg-blue-700"
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

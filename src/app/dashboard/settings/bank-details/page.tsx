"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function BankDetailsPage() {
  const [bank, setBank] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ bank, accountName, accountNumber });
  };

  return (
    <div className="w-full flex justify-center items-start p-6 bg-background">
      <Card className="w-full bg-card border-border shadow-md">
        <CardHeader>
          <CardTitle>Bank Details</CardTitle>
          <p className="text-sm text-muted-foreground">
            Manage your bank details settings.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Bank Name */}
            <div className="space-y-2">
              <Label>Bank Name</Label>
              <Select onValueChange={setBank}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bca">BCA</SelectItem>
                  <SelectItem value="bni">BNI</SelectItem>
                  <SelectItem value="bri">BRI</SelectItem>
                  <SelectItem value="mandiri">Mandiri</SelectItem>
                </SelectContent>
              </Select>

              <p className="text-xs text-muted-foreground">
                You can edit your bank here.
              </p>
            </div>

            {/* Account Name */}
            <div className="space-y-2">
              <Label>Account Name</Label>
              <Input
                placeholder="Account name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                You can edit your account name here.
              </p>
            </div>

            {/* Account Number */}
            <div className="space-y-2">
              <Label>Account Number</Label>
              <Input
                placeholder="Account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                You can edit your account number here.
              </p>
            </div>

            {/* Save Button */}
            <div>
              <Button type="submit" className="rounded-md px-8">
                Save
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

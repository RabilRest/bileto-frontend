"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";

export function ProfileForm() {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" defaultValue="rara" />
        <p className="text-xs text-muted-foreground mt-1">
          You can edit your full name here.
        </p>
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" value="rara@gmail.com" disabled />
        <p className="text-xs text-muted-foreground mt-1">
          This field is not editable.
        </p>
      </div>

      <div>
        <Label htmlFor="role">Role</Label>
        <Input id="role" value="ORGANIZER" disabled />
        <p className="text-xs text-muted-foreground mt-1">
          This field is not editable.
        </p>
      </div>

      <Button className="mt-2 bg-blue-500 hover:bg-blue-700">Save</Button>
    </div>
  );
}

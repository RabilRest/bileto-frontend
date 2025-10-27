"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { useTheme } from "next-themes";
import { ProfileForm } from "@/components/settings/ProfileForm";
import { ProfilePicture } from "@/components/settings/ProfilePicture";

export default function ProfilePage() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex justify-center p-8 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-background text-foreground"
          : "bg-background text-foreground"
      }`}
    >
      <Card className="w-full border-border shadow-md">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <p className="text-sm text-muted-foreground">
            Manage your profile settings.
          </p>
        </CardHeader>

        <CardContent className="grid md:grid-cols-2 gap-10">
          <ProfileForm />
          <ProfilePicture />
        </CardContent>
      </Card>
    </div>
  );
}

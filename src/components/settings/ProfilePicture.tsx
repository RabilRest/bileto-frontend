"use client";

import React, { useState } from "react";
import { User, Upload } from "lucide-react";

export function ProfilePicture() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border border-border transition-all duration-300"
          />
        ) : (
          <div className="w-40 h-40 rounded-full bg-muted flex items-center justify-center border border-border">
            <User className="w-16 h-16 text-muted-foreground" />
          </div>
        )}
        <label
          htmlFor="upload"
          className="absolute bottom-2 right-2 bg-primary text-primary-foreground p-2 rounded-full cursor-pointer hover:opacity-90 transition"
        >
          <Upload className="w-4 h-4" />
        </label>
        <input
          id="upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>
      <p className="text-sm text-muted-foreground">
        You can edit your profile picture here.
      </p>
    </div>
  );
}

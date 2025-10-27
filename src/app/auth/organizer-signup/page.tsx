"use client";
import React from "react";
import OrganizerSignupForm from "@/components/forms/OrganizerSignup";
import AuthTransitionWrapper from "@/components/layouts/AuthTransitionWrapper";
import { ThemeToggle } from "@/components/theme-toggle";

export default function OrganizerSignupPage() {
  return (
    <AuthTransitionWrapper>
      <div className="flex min-h-screen w-full bg-black text-white">
        {/* Left Side (Image) */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="/bileto.png"
            alt="Organizer signup illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Right Side (Form) */}
        <div className="flex w-full md:w-1/2 items-center justify-center p-8">
          <div className="w-full max-w-md space-y-6">
            {/* Logo */}
            <div className="w-full flex justify-start mb-10">
              <span className="text-2xl font-bold text-white">
                Bileto<span className="text-blue-500">.id</span>
              </span>
              <ThemeToggle />
            </div>

            <h2 className="text-2xl font-semibold mb-2">
              Organizer Registration
            </h2>

            <OrganizerSignupForm />
          </div>
        </div>
      </div>
    </AuthTransitionWrapper>
  );
}

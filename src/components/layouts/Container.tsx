"use client";

import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

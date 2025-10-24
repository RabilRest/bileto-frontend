"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      storageKey="bileto-theme" // 👈 tambahkan ini
      attribute="class"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}

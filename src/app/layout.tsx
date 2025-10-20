import "./globals.css";
import React from "react";

export const metadata = {
  title: "Bileto.id - Auth",
  description: "Authentication demo - Bileto.id"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
          {children}
        </div>
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import "./globals.css";
import React from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bileto.id - Auth",
  description: "Authentication demo - Bileto.id"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <div className="w-full ml-0">
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}

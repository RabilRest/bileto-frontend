"use client";
import React from "react";
import { useAuthStore } from "@/lib/zustand/useAuthStore";
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Landingpage from "@/components/Landingpage";
import Footer from "@/components/Footer";

export default function Home() {
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <div className="w-full">
      
      <Landingpage/>
      {/* <Card>
        <h1 className="text-2xl font-bold mb-4">Bileto.id — Demo</h1>

        {isAuthenticated ? (
          <div>
            <p>
              Selamat datang, <strong>{user?.name}</strong> ({user?.email})
            </p>
            <div className="mt-4">
              <Button variant="destructive" onClick={() => logout()}>
                Logout
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link href="/auth/signin">
              <Button>Masuk</Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="ghost">Daftar</Button>
            </Link>
             <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
          </div>
        )}
      </Card> */}
      
      </div>
   
  );
}

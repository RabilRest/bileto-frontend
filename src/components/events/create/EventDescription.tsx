"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/Label";

// NOTE: we use react-quill for richer editor. Jika belum install, jalankan:
// npm i react-quill

let ReactQuill: any = null;
try {
  // dynamic import akan gagal saat build jika package nggak ada; try/catch aman di dev
  // Jika kamu pakai Next.js App Router dan ingin SSR-safe, gunakan dynamic import tanpa SSR.
  // Example: const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
  ReactQuill = require("react-quill");
} catch (e) {
  ReactQuill = null;
}

export function EventDescription() {
  const [value, setValue] = useState("");

  return (
    <div>
      <Label className="mb-2">Description *</Label>

      <div className="border rounded-md">
        {/* Toolbar mockup di screenshot. Jika ReactQuill tersedia, gunakan; jika tidak fallback textarea */}
        {ReactQuill ? (
          // @ts-ignore
          <ReactQuill value={value} onChange={setValue} theme="snow" />
        ) : (
          <textarea
            className="w-full h-48 p-3 bg-transparent outline-none"
            placeholder="Write your event details..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

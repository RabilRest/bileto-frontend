"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const LOCATIONS = ["all", "jakarta", "bandung", "medan", "semarang"] as const;
type Location = typeof LOCATIONS[number];

export default function Navbar() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [location, setLocation] = useState<Location>("all");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (location !== "all") params.set("location", location);
    router.push(`/events${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <header className="sticky  top-0 z-0 bg-white border-b border-gray-200 w-full">
      <nav className="w-full px-4 py-3 flex  gap-4">
        {/* Left: Logo */}
        <Link href="/" className="shrink-0">
          <span className="text-2xl font-extrabold tracking-tight text-[#1E63F6]">
            Bileto<span className="text-[#1E63F6]">.id</span>
          </span>
        </Link>

        {/* Middle: Search + Location */}
        <form onSubmit={onSubmit} className="flex flex-1 items-center gap-3">
          <div className="flex-1">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search events…"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E63F6]/20"
            />
          </div>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value as Location)}
            className="w-48 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E63F6]/20"
          >
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc === "all" ? "All locations" : loc[0].toUpperCase() + loc.slice(1)}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="rounded-xl bg-[#1E63F6] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
          >
            Search
          </button>
        </form>

        {/* Right: Auth */}
        <div className="ml-2 flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-xl border border-[#1E63F6] px-4 py-2 text-sm font-medium text-[#1E63F6] hover:bg-[#1E63F6]/5"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-xl bg-[#1E63F6] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
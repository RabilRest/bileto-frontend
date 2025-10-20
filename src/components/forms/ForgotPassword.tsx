"use client";
import React, { useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle your logic here (send reset email, etc.)
    console.log("Reset link sent to:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md bg-transparent border border-gray-700 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}

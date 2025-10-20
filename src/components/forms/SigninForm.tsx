"use client";
import React, { JSX, useState } from "react";
import Link from "next/link";

const SigninForm: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle sign-in logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
      {/* Email */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-300">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 text-white rounded-md placeholder-gray-500 focus:outline-none focus:border-orange-500"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <label htmlFor="password" className="text-sm font-medium text-gray-300">
            Password <span className="text-red-500">*</span>
          </label>
          <Link
            href="/auth/forgot-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 text-white rounded-md placeholder-gray-500 focus:outline-none focus:border-orange-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition"
      >
        Login
      </button>
    </form>
  );
};

export default SigninForm;

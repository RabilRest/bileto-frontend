"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Github, MessageSquare } from "lucide-react";

export default function OrganizerSignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <form className="space-y-5">
      {/* Full Name */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="fullName" className="text-sm font-medium text-gray-300">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="full name"
          className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-300">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="example@mail.com"
          className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-300">
          Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="password"
            className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 pr-10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 text-white py-2 font-medium hover:bg-blue-700 transition-colors"
      >
        Register as Organizer
      </button>

      {/* Divider */}
      <div className="flex items-center justify-center space-x-2">
        <div className="h-px w-1/4 bg-gray-700" />
        <span className="text-sm text-gray-400">Or continue with</span>
        <div className="h-px w-1/4 bg-gray-700" />
      </div>

      {/* Social Buttons */}
      <div className="flex justify-center space-x-3">
        <button
          type="button"
          className="flex items-center justify-center w-1/2 rounded-md border border-gray-700 bg-gray-900 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors"
        >
          <Github className="w-4 h-4 mr-2" /> GitHub
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-1/2 rounded-md border border-gray-700 bg-gray-900 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors"
        >
          <MessageSquare className="w-4 h-4 mr-2" /> Discord
        </button>
      </div>
    </form>
  );
}

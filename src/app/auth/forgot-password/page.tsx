"use client";
import React from "react";
import ForgotPasswordForm from "@/components/forms/ForgotPassword";
import AuthTransitionWrapper from "@/components/layouts/AuthTransitionWrapper";

export default function ForgotPasswordPage() {
  return (
    <AuthTransitionWrapper>
      <div className="flex min-h-screen w-full bg-black text-white">
        {/* Left side (Image) */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="/bileto.png"
            alt="Forgot Password Illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Right side (Form) */}
        <div className="flex w-full md:w-1/2 items-center justify-center p-8">
          <div className="w-full max-w-md space-y-6">
            {/* Logo */}
            {/* Logo */}
            <div className="w-full flex justify-start mb-10">
              <span className="text-2xl font-bold text-white">
                Bileto<span className="text-blue-500">.id</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-center">
              Forgot Password
            </h2>
            <p className="text-center text-gray-400 text-sm">
              Don’t have an account?{" "}
              <a
                href="/auth/signup"
                className="text-blue-400 hover:underline"
              >
                Sign up
              </a>
            </p>

            {/* Forgot password form */}
            <ForgotPasswordForm />

            {/* Divider */}
            <div className="flex items-center justify-center my-4">
              <div className="h-px w-1/4 bg-gray-700" />
              <span className="text-sm text-gray-500 mx-2">Or</span>
              <div className="h-px w-1/4 bg-gray-700" />
            </div>

            {/* Sign in button */}
            <a
              href="/auth/signin"
              className="block text-center w-full border border-gray-600 rounded-md py-2 hover:bg-gray-800 transition"
            >
              <span className="inline-flex items-center gap-2 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12H3m0 0l4 4m-4-4l4-4m8 8h4a2 2 0 002-2V6a2 2 0 00-2-2h-4"
                  />
                </svg>
                Sign In
              </span>
            </a>
          </div>
        </div>
      </div>
    </AuthTransitionWrapper>
  );
}

"use client";
import React, { JSX } from "react";
import SigninForm from "@/components/forms/SigninForm";
import AuthTransitionWrapper from "@/components/layouts/AuthTransitionWrapper";
import Link from "next/link";
import { Github, MessageSquare } from "lucide-react";

const SigninPage: React.FC = (): JSX.Element => {
  return (
    <AuthTransitionWrapper>
      <div className="relative min-h-screen w-full flex items-stretch justify-stretch">
        {/* Left side - Background image */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="/bileto.png"
            alt="Concert crowd with confetti"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Right side - Login section */}
        <div className="flex w-full md:w-1/2 bg-[#0D0D0D] text-white items-center justify-center">
          <div className="flex flex-col justify-center items-center w-full max-w-md p-8">
            {/* Logo */}
            <div className="w-full flex justify-start mb-10">
              <span className="text-2xl font-bold text-white">
                Bileto<span className="text-blue-500">.id</span>
              </span>
            </div>

            {/* Title & description */}
            <div className="w-full text-left mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                Login to your account
              </h2>
              <p className="text-gray-400 text-sm">
                Enter your email below to login to your account
              </p>
            </div>

            {/* Form */}
            <div className="w-full">
              <SigninForm />
            </div>

            {/* Divider */}
            <div className="flex items-center w-full my-6">
              <div className="flex-grow h-px bg-gray-700"></div>
              <span className="mx-3 text-gray-400 text-sm">
                Or continue with
              </span>
              <div className="flex-grow h-px bg-gray-700"></div>
            </div>

            {/* Social login */}
            <div className="flex w-full gap-4 mb-6">
              <button className="flex items-center justify-center w-1/2 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </button>
              <button className="flex items-center justify-center w-1/2 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition">
                <MessageSquare className="mr-2 h-4 w-4" /> Discord
              </button>
            </div>

            {/* Footer text */}
            <p className="text-center text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-white hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthTransitionWrapper>
  );
};

export default SigninPage;

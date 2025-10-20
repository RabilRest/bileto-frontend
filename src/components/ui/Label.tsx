"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Label({ children, className }: Props) {
  return <label className={`block text-sm font-medium ${className || ""}`}>{children}</label>;
}

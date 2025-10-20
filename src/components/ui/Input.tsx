"use client";
import React from "react";
import clsx from "clsx";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: Props) {
  return (
    <input
      {...props}
      className={clsx(
        "w-full rounded-md border px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300",
        className
      )}
    />
  );
}

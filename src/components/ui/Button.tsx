'use client'

import React from 'react'

export default function Button({ children, variant = 'default', ...props }: any) {
  const base =
    'px-4 py-2 rounded-md font-medium transition-colors duration-200'

  const variants: Record<string, string> = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  return (
    <button className={`${base} ${variants[variant] || variants.default}`} {...props}>
      {children}
    </button>
  )
}

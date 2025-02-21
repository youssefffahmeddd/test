"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
}

export function GradientButton({ children, className, variant = "default", ...props }: GradientButtonProps) {
  return (
    <motion.button
      className={cn(
        "relative px-6 py-3 rounded-full font-semibold overflow-hidden transition-all duration-300",
        variant === "default"
          ? "bg-gradient-to-r from-apple-green via-emerald-600 to-apple-green text-white hover:shadow-lg"
          : "border-2 border-apple-green text-apple-green hover:bg-apple-green/10",
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-apple-green via-emerald-600 to-apple-green opacity-0 hover:opacity-20 transition-opacity duration-300" />
    </motion.button>
  )
}


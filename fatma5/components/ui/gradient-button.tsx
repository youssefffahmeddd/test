"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends ButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  className,
  variant = "default",
  asChild,
  ...props
}) => {
  const buttonContent = (
    <motion.div
      className="relative z-10 flex items-center justify-center w-full h-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )

  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        variant === "default"
          ? "bg-gradient-to-r from-apple-green via-emerald-600 to-apple-green text-white hover:shadow-lg"
          : "border-2 border-apple-green text-apple-green hover:bg-apple-green/10",
        className,
      )}
      asChild={asChild}
      {...props}
    >
      {asChild ? children : buttonContent}
    </Button>
  )
}


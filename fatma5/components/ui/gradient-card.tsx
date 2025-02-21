"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientCardProps {
  children?: ReactNode
  className?: string
}

export function GradientCard({ children, className }: GradientCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg card-shine",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-apple-green/5 before:via-emerald-600/5 before:to-white before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className,
      )}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}


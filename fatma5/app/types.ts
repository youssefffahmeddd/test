import type React from "react"
import type { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

export interface GradientCardProps {
  children: ReactNode
  className?: string
}

export interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  variant?: "default" | "outline"
}


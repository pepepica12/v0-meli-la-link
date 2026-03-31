"use client"

import { cn } from "@/lib/utils"

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  colSpan?: 1 | 2
  rowSpan?: 1 | 2
}

export function BentoCard({ children, className, colSpan = 1, rowSpan = 1 }: BentoCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 transition-all duration-300",
        "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        colSpan === 2 && "md:col-span-2",
        rowSpan === 2 && "md:row-span-2",
        className
      )}
    >
      {children}
    </div>
  )
}

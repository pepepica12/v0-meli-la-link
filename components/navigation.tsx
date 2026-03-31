"use client"

import { cn } from "@/lib/utils"

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const navItems = [
  { id: "links", label: "Enlaces" },
  { id: "about", label: "Sobre mi" },
  { id: "wishlist", label: "Wishlist" },
]

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="flex flex-row gap-1 md:flex-col md:gap-2">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={cn(
            "rounded-md px-3 py-2 text-left text-sm transition-colors",
            activeSection === item.id
              ? "bg-secondary font-medium text-foreground"
              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
          )}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

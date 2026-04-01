"use client";

import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "links", label: "Enlaces" },
  { id: "about", label: "Sobre mí" },
  { id: "wishlist", label: "Lista de deseos" }, // usa siempre el mismo texto
];

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="flex flex-row gap-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={cn(
            "rounded-md px-3 py-2 text-sm transition-colors",
            activeSection === item.id
              ? "bg-secondary font-medium"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

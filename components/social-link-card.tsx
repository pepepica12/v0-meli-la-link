"use client"

import { cn } from "@/lib/utils"

interface SocialLinkCardProps {
  name: string
  username: string
  icon: React.ReactNode
  href: string
  color?: string
  followers?: string
}

export function SocialLinkCard({ name, username, icon, href, color, followers }: SocialLinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300",
        "hover:border-primary/50 hover:bg-secondary/50 hover:scale-[1.02]"
      )}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-lg text-white"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{username}</p>
      </div>
      {followers && (
        <div className="text-right">
          <p className="text-sm font-medium text-foreground">{followers}</p>
          <p className="text-xs text-muted-foreground">seguidores</p>
        </div>
      )}
      <svg
        className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  )
}

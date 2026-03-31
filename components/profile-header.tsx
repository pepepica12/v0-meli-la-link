"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileHeaderProps {
  name: string
  username: string
  bio: string
  avatarUrl?: string
  verified?: boolean
}

export function ProfileHeader({ name, username, bio, avatarUrl, verified = false }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <Avatar className="h-28 w-28 border-4 border-primary/20">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="bg-secondary text-2xl font-bold text-foreground">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        {verified && (
          <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <svg className="h-4 w-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      <h1 className="mt-4 text-2xl font-bold text-foreground">{name}</h1>
      <p className="text-muted-foreground">@{username}</p>
      <p className="mt-3 max-w-md text-balance text-muted-foreground leading-relaxed">{bio}</p>
    </div>
  )
}

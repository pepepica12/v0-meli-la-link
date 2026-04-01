import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Verified } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center gap-4 md:items-start">
      {/* Avatar with glow effect */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-primary/20 blur-md" />
        <Avatar className="relative h-24 w-24 border-2 border-primary/30 shadow-xl">
          <AvatarImage src="/avatar.jpg" alt="VALDOCER" />
          <AvatarFallback className="bg-primary/10 font-bold text-2xl text-primary">
            V
          </AvatarFallback>
        </Avatar>
      </div>
      
      {/* Name and badge */}
      <div className="text-center md:text-left">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-2xl text-foreground tracking-tight">
            VALDOCER
          </h1>
          <Verified className="h-5 w-5 fill-primary text-primary-foreground" />
        </div>
        <p className="text-muted-foreground">
          @valdocer
        </p>
        <Badge variant="secondary" className="mt-2">
          Content Creator
        </Badge>
      </div>
    </div>
  )
}
